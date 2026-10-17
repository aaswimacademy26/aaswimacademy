// Runs inside the embed after Jackrabbit has supplied its live listing table.
export function enhanceSchedule() {
  const host = document.querySelector('.table-scroll');
  const normalize = (value) => value.toLowerCase().replace(/\s+/g, '');
  const dateLabel = (value) => {
    const match = value.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!match) return value;
    return new Date(Number(match[3]), Number(match[1]) - 1, Number(match[2]))
      .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  function render() {
    const source = [...host.querySelectorAll('table')].find((table) =>
      [...(table.rows[0]?.cells || [])].some((cell) => normalize(cell.textContent) === 'class'));
    if (!source) return false;
    const headers = [...source.rows[0].cells].map((cell) => normalize(cell.textContent));
    const index = (name) => headers.indexOf(name);
    const records = [...source.rows].slice(1).filter((row) => row.cells.length === headers.length).map((row) => {
      const value = (name) => row.cells[index(name)]?.textContent.trim() || '';
      const start = value('classstarts');
      const end = value('classends');
      const fee = value('tuition');
      const amount = Number(fee.replace(/[$,]/g, ''));
      const link = row.cells[index('register')]?.querySelector('a');
      return {
        name: value('class'), day: value('days'), time: value('times'), age: value('ages'),
        spots: value('openings'), date: start === end || !end ? dateLabel(start) : dateLabel(start) + ' – ' + dateLabel(end),
        fee: fee && Number.isFinite(amount) ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(amount) : fee,
        link,
      };
    }).filter((record) => record.name);
    if (!records.length) return false;
    const make = (tag, text, className) => {
      const element = document.createElement(tag);
      if (text !== undefined) element.textContent = text;
      if (className) element.className = className;
      return element;
    };
    const controls = document.querySelector('.schedule-filters');
    const classSelect = document.getElementById('class-filter');
    const daySelect = document.getElementById('day-filter');
    [...new Set(records.map((record) => record.name))].sort().forEach((name) => classSelect.add(new Option(name, name)));
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const recordDays = (record) => days.filter((day) => record.day.toLowerCase().includes(day.toLowerCase()));
    days.filter((day) => records.some((record) => recordDays(record).includes(day)))
      .forEach((day) => daySelect.add(new Option(day, day)));
    const table = make('table', undefined, 'class-table');
    const head = table.createTHead().insertRow();
    ['Class', 'Day', 'Time', 'Ages', 'Spots Available', 'Date', 'Fee', ''].forEach((label) => {
      const cell = make('th', label || 'Register');
      cell.scope = 'col';
      head.append(cell);
    });
    const body = table.createTBody();
    const cards = make('div', undefined, 'class-cards');
    const empty = make('p', 'No classes match these filters. Try another class or day.', 'empty-state');
    const register = (record) => {
      if (!record.link) return make('span', 'Unavailable');
      const link = record.link.cloneNode(true);
      link.textContent = record.link.textContent.trim() || 'Register';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', link.textContent + ' for ' + record.name + ', ' + record.day + ' ' + record.time + ', ' + record.date);
      return link;
    };
    function update() {
      const filtered = records.filter((record) => (!classSelect.value || record.name === classSelect.value)
        && (!daySelect.value || recordDays(record).includes(daySelect.value)));
      body.replaceChildren();
      cards.replaceChildren();
      filtered.forEach((record) => {
        const row = body.insertRow();
        [record.name, record.day, record.time, record.age, record.spots, record.date, record.fee].forEach((value) => { row.insertCell().textContent = value; });
        row.insertCell().append(register(record));
        const card = make('article', undefined, 'class-card');
        card.append(make('h3', record.name), make('p', record.day + ' · ' + record.time, 'card-time'));
        const details = make('dl');
        [['Date', record.date], ['Ages', record.age], ['Spots Available', record.spots], ['Fee', record.fee]].forEach(([label, value]) => {
          const pair = make('div');
          pair.append(make('dt', label), make('dd', value));
          details.append(pair);
        });
        card.append(details, register(record));
        cards.append(card);
      });
      table.hidden = cards.hidden = !filtered.length;
      empty.hidden = !!filtered.length;
      document.getElementById('class-count').textContent = filtered.length + (filtered.length === 1 ? ' class' : ' classes');
      host.scrollTop = 0;
    }
    host.replaceChildren(table, cards, empty);
    controls.hidden = false;
    classSelect.addEventListener('change', update);
    daySelect.addEventListener('change', update);
    document.getElementById('clear-filters').addEventListener('click', () => {
      classSelect.value = daySelect.value = '';
      update();
    });
    update();
    return true;
  }
  if (!render()) {
    const observer = new MutationObserver(() => { if (render()) observer.disconnect(); });
    observer.observe(host, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 30000);
  }
}
