import { enhanceSchedule } from './scheduleEnhancements.js';

// Load Jackrabbit's documented script in its own document so its table can be
// styled without affecting the rest of the site. Registration opens a new tab.
export const scheduleDocument = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base href="https://app.jackrabbitclass.com/" target="_blank">
  <style>
    * { box-sizing: border-box; }
    html { height: 100%; overflow: hidden; color-scheme: light; }
    body { margin: 0; padding: 20px; background: white; color: #334155;
      font: 15px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif; }
    table { width: 100% !important; border-collapse: separate; border-spacing: 0; border: 0 !important; }
    th, td { padding: 18px 14px !important; text-align: left;
      border: 0 !important; border-bottom: 1px solid #e2e8f0 !important;
      font: inherit !important; vertical-align: middle; }
    thead th, thead td, table:not(:has(thead)) > tbody:first-of-type > tr:first-child > td,
    table > tr:first-child > td {
      position: sticky; top: 0; z-index: 2;
      background: #f0fdfa !important; color: #115e59 !important;
      font-size: 13px !important; font-weight: 700 !important;
      box-shadow: 0 1px 0 #ccfbf1; }
    tr:nth-child(even) td { background: #f8fafc !important; }
    tr:not(:first-child):hover td { background: #f0fdfa !important; }
    td *, th * { font-family: inherit !important; font-size: inherit !important; }
    a { display: inline-block; padding: 8px 14px; border-radius: 999px;
      background: #0f766e; color: white !important; font-weight: 600;
      text-decoration: none; white-space: nowrap; }
    a:hover { background: #115e59; }
    a:focus-visible { outline: 3px solid #14b8a6; outline-offset: 3px; }
    .table-scroll { height: calc(100vh - 100px); overflow: auto;
      scrollbar-width: thin; scrollbar-color: #5eaaa3 #fff;
      scrollbar-gutter: stable; }
    .table-scroll::-webkit-scrollbar { width: 7px; height: 7px; }
    .table-scroll::-webkit-scrollbar-track { background: #fff; }
    .table-scroll::-webkit-scrollbar-thumb { background: #5eaaa3; border-radius: 999px;
      border: 1px solid #fff; }
    .table-scroll::-webkit-scrollbar-thumb:hover { background: #0f766e; }
    .table-scroll::-webkit-scrollbar-corner { background: #fff; }
    .table-scroll:focus-visible { outline: 2px solid #0f766e; outline-offset: 2px; }
    .help { color: #64748b; font-size: 13px; margin: 16px 0 0; }
    .help a { padding: 0; background: none; color: #0f766e !important; text-decoration: underline; }
    [hidden] { display: none !important; }
    .schedule-filters { display: flex; align-items: end; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; }
    .schedule-filters label { display: grid; gap: 4px; font-size: 12px; font-weight: 600; color: #115e59; }
    select, button { font: inherit; border: 1px solid #cbd5e1; border-radius: 8px; padding: 8px 12px; background: white; color: #334155; }
    button { cursor: pointer; }
    select:focus-visible, button:focus-visible { outline: 2px solid #0f766e; outline-offset: 2px; }
    #class-count { margin-left: auto; font-size: 13px; color: #64748b; align-self: center; }
    body:has(.schedule-filters:not([hidden])) .table-scroll { height: calc(100vh - 180px); }
    .class-table tbody td { font-weight: 400 !important; background: white !important; }
    .class-table tbody tr:nth-child(even) td { background: #f8fafc !important; }
    .class-table tbody td:first-child { font-weight: 600 !important; color: #115e59; }
    .class-table tbody tr:hover td { background: #f0fdfa !important; }
    .class-cards { display: none; }
    .empty-state { padding: 32px 16px; text-align: center; }
    @media (max-width: 700px) {
      body { padding: 12px; }
      table { min-width: 760px; }
      th, td { padding: 14px 10px !important; }
      .class-table { display: none; }
      .class-cards { display: grid; gap: 12px; }
      .class-card { padding: 20px; border: 1px solid #ccfbf1; border-radius: 12px; background: #fff; }
      .class-card h3 { font-size: 18px; color: #115e59; margin: 0 0 4px; }
      .card-time { margin: 0; font-weight: 600; }
      .class-card dl { display: grid; gap: 8px; margin: 16px 0; }
      .class-card dl > div { display: flex; justify-content: space-between; gap: 16px; }
      .class-card dt { color: #64748b; font-size: 13px; }
      .class-card dd { margin: 0; text-align: right; font-size: 13px; }
      .schedule-filters label { flex: 1; min-width: 110px; }
      select { width: 100%; min-width: 0; }
      #class-count { margin-left: 0; }
      body:has(.schedule-filters:not([hidden])) .table-scroll { height: calc(100vh - 215px); }
    }
  </style>
</head>
<body>
  <div class="schedule-filters" hidden>
    <label for="class-filter">Class<select id="class-filter"><option value="">All classes</option></select></label>
    <label for="day-filter">Day<select id="day-filter"><option value="">All days</option></select></label>
    <button id="clear-filters" type="button">Clear filters</button>
    <span id="class-count" role="status" aria-live="polite"></span>
  </div>
  <div class="table-scroll" tabindex="0" role="region" aria-label="Available swim classes, scroll for more">
    <script src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=557994&hidecols=Description,Gender,Session"></script>
  </div>
  <script>(${enhanceSchedule.toString()})();</script>
  <p class="help">Having trouble viewing classes? <a href="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgID=557994" rel="noopener noreferrer">Open the full schedule</a>.</p>
</body>
</html>`;
