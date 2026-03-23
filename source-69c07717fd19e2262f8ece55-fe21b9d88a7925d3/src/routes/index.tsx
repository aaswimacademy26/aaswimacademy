import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-teal-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <WaveIcon className="w-8 h-8 text-teal-500" />
            <span className="font-bold text-lg text-teal-800 leading-tight">
              All Abilities<br className="hidden sm:block" />
              <span className="text-teal-500"> Swim Academy</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
            <a href="#programs" className="hover:text-teal-600 transition-colors">Programs</a>
            <a href="#who-we-serve" className="hover:text-teal-600 transition-colors">Who We Serve</a>
            <a href="#contact" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">
              Get Started
            </a>
          </div>
          {/* Mobile menu button placeholder */}
          <a href="#contact" className="md:hidden bg-teal-500 text-white text-sm px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>🏊</span>
            <span>Adaptive Swim Instruction for All Ages & Abilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-900 leading-tight mb-6">
            Every Child Deserves to<br />
            <span className="text-teal-500">Feel Safe in the Water</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            All Abilities Swim Academy offers personalized, adaptive swim lessons
            in a warm, supportive environment — designed for children and adults
            with autism, ADHD, sensory disorders, developmental delays, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-200"
            >
              Schedule a Free Consultation
            </a>
            <a
              href="#programs"
              className="bg-white text-teal-700 border-2 border-teal-200 px-8 py-4 rounded-full text-lg font-semibold hover:border-teal-400 hover:bg-teal-50 transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </div>
        {/* Wave bottom */}
        <div className="relative h-16 -mb-1">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V32Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'Adaptive', label: 'Instruction Methods' },
              { value: '1-on-1', label: 'Personalized Lessons' },
              { value: 'All Ages', label: 'Children & Adults' },
              { value: 'Safe', label: 'Supportive Environment' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-teal-600 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-6">
                Building Confidence,<br />One Stroke at a Time
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                At All Abilities Swim Academy, we believe water safety and the joy of swimming
                should be accessible to everyone. Our instructors are trained to work with
                individuals across a broad spectrum of physical, developmental, and sensory needs.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We take the time to understand each student — their sensitivities, their goals,
                and their comfort level — to create a lesson plan that truly fits. Progress looks
                different for every swimmer, and we celebrate every milestone along the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 text-lg">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">Trauma-Informed</div>
                    <div className="text-sm text-slate-500">Patient, compassionate approach</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 text-lg">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">Evidence-Based</div>
                    <div className="text-sm text-slate-500">Proven adaptive techniques</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <WaterDropIcon className="w-24 h-24 text-teal-400 mx-auto mb-4" />
                  <p className="text-teal-700 font-medium text-lg">
                    "Every swimmer is capable of progress in the right environment."
                  </p>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-100 rounded-full opacity-60 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-50 rounded-full opacity-80 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background wave */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-300 via-blue-300 to-cyan-300 opacity-40" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Who We Serve</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">
              Swim Lessons Tailored to Your Needs
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our adaptive program serves individuals with a wide range of conditions and abilities.
              No two students are the same, and neither are our lessons.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🧩', label: 'Autism Spectrum Disorder', desc: 'Sensory-sensitive environment, predictable routines, visual supports' },
              { icon: '⚡', label: 'ADHD', desc: 'Structured, engaging lessons with clear expectations and positive reinforcement' },
              { icon: '🌊', label: 'Sensory Processing Disorders', desc: 'Gradual water introduction, tactile considerations, calming techniques' },
              { icon: '🌱', label: 'Developmental Delays', desc: 'Milestone-based progression at each student\'s individual pace' },
              { icon: '💙', label: 'Anxiety & Aquaphobia', desc: 'Compassionate, pressure-free approach to building water confidence' },
              { icon: '🦾', label: 'Limb Differences & Amputations', desc: 'Adapted stroke techniques and equipment for all body types' },
              { icon: '🏃', label: 'Physical Disabilities', desc: 'Modified techniques for a wide range of physical conditions' },
              { icon: '👨‍👩‍👧', label: 'Neurotypical Learners', desc: 'All students are welcome — our methods benefit every swimmer' },
              { icon: '🌟', label: '& Many More', desc: 'Contact us to discuss your or your child\'s specific situation' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-teal-100 rounded-2xl p-6 hover:shadow-md hover:border-teal-300 transition-all group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                  {item.label}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">
              Lessons for Every Stage
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Whether your child is just getting comfortable with water or working toward
              competitive swimming, we have a program designed for their journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                color: 'from-teal-400 to-cyan-400',
                light: 'bg-teal-50',
                icon: '🐬',
                title: 'Beginner Adaptive',
                audience: 'Ages 3+ · All abilities',
                desc: 'Introduction to water safety and basic swimming skills in a calm, highly personalized one-on-one setting. Perfect for first-time swimmers or those with water anxiety.',
                features: ['Water acclimation', 'Floating & breathing', 'Safety fundamentals', 'Confidence building'],
              },
              {
                color: 'from-blue-400 to-teal-400',
                light: 'bg-blue-50',
                icon: '🌊',
                title: 'Intermediate Development',
                audience: 'All ages · Building skills',
                desc: 'Develop stroke mechanics, endurance, and water independence. Adapted to each swimmer\'s physical and cognitive needs with ongoing progress assessments.',
                features: ['Stroke technique', 'Lap swimming', 'Turn & kick drills', 'Endurance building'],
              },
              {
                color: 'from-cyan-400 to-sky-400',
                light: 'bg-cyan-50',
                icon: '🏅',
                title: 'Advanced & Teen/Adult',
                audience: 'Teens & Adults',
                desc: 'For older swimmers looking to build independence, exercise through swimming, or pursue recreational or competitive swimming goals with adaptive support.',
                features: ['Advanced strokes', 'Fitness swimming', 'Goal-based training', 'Lifelong water safety'],
              },
            ].map((prog) => (
              <div key={prog.title} className={`${prog.light} rounded-3xl overflow-hidden border border-slate-100`}>
                <div className={`bg-gradient-to-r ${prog.color} p-6 text-white`}>
                  <div className="text-4xl mb-2">{prog.icon}</div>
                  <h3 className="text-xl font-bold">{prog.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{prog.audience}</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{prog.desc}</p>
                  <ul className="space-y-2">
                    {prog.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Families Choose Us
            </h2>
            <p className="text-teal-100 max-w-xl mx-auto">
              We go beyond traditional swim instruction to provide a truly supportive,
              individualized experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '👩‍🏫',
                title: 'Specialized Instructors',
                desc: 'Our instructors receive ongoing training in adaptive techniques and special needs awareness.',
              },
              {
                icon: '📋',
                title: 'Individualized Plans',
                desc: 'Every student gets a customized lesson plan reviewed and updated regularly with family input.',
              },
              {
                icon: '🏊',
                title: 'Safe Environment',
                desc: 'Clean, accessible facilities with low-stimulation options and sensory-considerate setup.',
              },
              {
                icon: '🤝',
                title: 'Family Partnership',
                desc: 'We communicate openly with families, caregivers, and therapists to support whole-child progress.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-teal-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Families Say</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">
              Real Progress, Real Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Our son has autism and used to scream at the sight of water. After just a few months, he\'s swimming independently and asking to go to the pool. We are so grateful.',
                name: 'Sarah M.',
                detail: 'Parent of 7-year-old',
              },
              {
                quote: 'The instructors here truly understand sensory needs. They never pushed my daughter past her comfort zone, and now she loves the water. It\'s been life-changing.',
                name: 'David R.',
                detail: 'Parent of 10-year-old',
              },
              {
                quote: 'As an adult with an above-knee amputation, I\'d given up on swimming. This academy helped me find a modified technique that works for me. I swim three times a week now.',
                name: 'Maria L.',
                detail: 'Adult student',
              },
            ].map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-teal-400 text-3xl font-serif mb-3">"</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                  {t.quote}
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What age do you accept?',
                a: 'We accept students starting at age 3, through adulthood. Our programs are tailored to the developmental stage and ability of each individual.',
              },
              {
                q: 'Do I need a diagnosis to enroll?',
                a: 'No diagnosis is required. We welcome all students — with or without a formal diagnosis — who may benefit from a more patient, individualized approach to swim instruction.',
              },
              {
                q: 'What should I bring to the first lesson?',
                a: 'Bring a swimsuit, towel, and any sensory items that help your child feel comfortable (favorite toy, noise-reducing headphones, etc.). We\'ll handle the rest.',
              },
              {
                q: 'How long are lessons?',
                a: 'Most lessons are 30 to 45 minutes. Duration can be adjusted based on the student\'s attention, stamina, and therapeutic needs.',
              },
              {
                q: 'Is financial assistance available?',
                a: 'We strive to make our program accessible. Please contact us to discuss options — we work with families to find solutions when possible.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-teal-100 rounded-2xl group"
              >
                <summary className="p-5 font-semibold text-slate-700 cursor-pointer list-none flex items-center justify-between hover:text-teal-700 transition-colors">
                  {faq.q}
                  <span className="text-teal-400 ml-4 flex-shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-teal-50 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">
              Ready to Make a Splash?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Reach out for a free consultation. We'll discuss your goals, answer any questions,
              and find the right program for your swimmer.
            </p>
          </div>
          <form
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Your Name <span className="text-teal-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address <span className="text-teal-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Student Age / Type
                </label>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white text-slate-600">
                  <option value="">Select an option...</option>
                  <option>Child (3–12)</option>
                  <option>Teen (13–17)</option>
                  <option>Adult (18+)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Tell us about your swimmer's needs
              </label>
              <textarea
                rows={4}
                placeholder="Share any relevant background, special considerations, or questions you have..."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-4 rounded-xl hover:bg-teal-600 transition-colors shadow-md shadow-teal-100 text-base"
            >
              Send Message — We'll Be in Touch
            </button>
            <p className="text-xs text-center text-slate-400">
              We typically respond within one business day. Your information is never shared.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-teal-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <WaveIcon className="w-7 h-7 text-teal-400" />
                <span className="font-bold text-white text-lg">All Abilities Swim Academy</span>
              </div>
              <p className="text-sm text-teal-300 leading-relaxed">
                Adaptive swim instruction for children and adults of all abilities —
                in a positive, comfortable, and supportive environment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-teal-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#who-we-serve" className="hover:text-white transition-colors">Who We Serve</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-teal-300">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:info@allabilitiesswim.com" className="hover:text-white transition-colors">
                    info@allabilitiesswim.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+15550000000" className="hover:text-white transition-colors">
                    (555) 000-0000
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Contact us for location details</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-teal-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-teal-400">
            <span>© {new Date().getFullYear()} All Abilities Swim Academy. All rights reserved.</span>
            <span>Inclusive · Adaptive · Empowering</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Wave logo icon
function WaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M2 22 C6 18, 10 26, 14 22 C18 18, 22 26, 26 22 C28 20, 29 19, 30 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 16 C6 12, 10 20, 14 16 C18 12, 22 20, 26 16 C28 14, 29 13, 30 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="16" cy="8" r="3" fill="currentColor" opacity="0.8" />
    </svg>
  )
}

function WaterDropIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M50 10 C50 10, 15 55, 15 75 C15 95, 31 110, 50 110 C69 110, 85 95, 85 75 C85 55, 50 10, 50 10Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M50 10 C50 10, 15 55, 15 75 C15 95, 31 110, 50 110 C69 110, 85 95, 85 75 C85 55, 50 10, 50 10Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M35 80 C35 68, 42 60, 50 58"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}
