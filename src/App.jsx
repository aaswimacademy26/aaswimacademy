import React from "react";
import "./assets/main-Cd4GyK1f.css";
import logo from "./assets/aasa_logo.png";
import logoWide from "./assets/aasa_logo_wide.png";

function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-teal-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src={logoWide}
              alt="All Abilities Swim Academy Logo"
              className="h-10 sm:h-12 object-contain"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
            <a href="#programs" className="hover:text-teal-600 transition-colors">Programs</a>
            <a href="#who-we-serve" className="hover:text-teal-600 transition-colors">Who We Serve</a>
            <a
              href="https://app.jackrabbitclass.com/jr4.0/parentportal/login?orgid=557994"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors"
            >
              Register
            </a>
          </div>
          <a
            href="https://app.jackrabbitclass.com/jr4.0/parentportal/login?orgid=557994"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-teal-500 text-white text-sm px-4 py-2 rounded-full hover:bg-teal-600 transition-colors"
          >
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>Swim Instruction for All Ages &amp; Abilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-900 leading-tight mb-6">
            Everyone Deserves to<br/>
            <span className="text-teal-500">Feel Safe in the Water</span>
          </h1>
          <p style={{ textWrap: 'balance' }} className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed text-center">
            We offer swim lessons for all abilities, with specialized instruction in survival swimming, adaptive lessons for special needs, and supportive training for adults.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-200">Schedule a Free Consultation</a>
            <a href="#programs" className="bg-white text-teal-700 border-2 border-teal-200 px-8 py-4 rounded-full text-lg font-semibold hover:border-teal-400 hover:bg-teal-50 transition-colors">Explore Programs</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-6">Building Confidence,<br/>One Stroke at a Time</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                At All Abilities Swim Academy we are committed to providing adaptive swim instruction for children and adults. Our approach is designed to create a positive, comfortable, and supportive learning environment that caters to each individual's unique needs.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our program is built on the foundation of individualized attention and adaptive teaching techniques to help you or your loved one feel confident and empowered in the water.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 text-lg">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">Disability-Informed</div>
                    <div className="text-sm text-slate-500">Patient, compassionate approach</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 text-lg">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">Evidence-Based</div>
                    <div className="text-sm text-slate-500">Certified adaptive techniques</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder for image or illustration */}
            <div className="relative flex items-center justify-center aspect-square">
              <img
                src={logo}
                alt="All Abilities Swim Academy Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs, Who We Serve, FAQ, Contact, Footer */}
      {/* Programs Section */}
<section id="programs" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Lessons for Every Stage</h2>
      <p className="text-slate-500 max-w-xl mx-auto">
        Whether your child is just getting comfortable with water or working toward competitive swimming, we have a program designed for their journey.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Beginner Adaptive */}
      <div className="bg-teal-50 rounded-3xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-teal-400 to-cyan-400 p-6 text-white">
          <h3 className="text-xl font-bold">Survival Swimming</h3>
          <p className="text-white/80 text-sm mt-1">Age 6 month+</p>
        </div>
        <div className="p-6">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            We teach water safety and emergency survival skills in a calm, highly personalized one-on-one setting.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>Monday-Thursday</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>4 sessions per week</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>$150 per week</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>4 weeks recommended</li>
          </ul>
        </div>
      </div>

      {/* Adaptive Development */}
      <div className="bg-blue-50 rounded-3xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-blue-400 to-teal-400 p-6 text-white">
          <h3 className="text-xl font-bold">Adaptive Lessons</h3>
          <p className="text-white/80 text-sm mt-1">Age 6 month+</p>
        </div>
        <div className="p-6">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            We are certified Swim Whisperers® to teach adaptive survival swim to children and adults with special needs.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>Monday-Thursday</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>4 sessions per week</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>$150 per week</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>4 weeks recommended</li>
          </ul>
        </div>
      </div>

      {/* Advanced & Teen/Adult */}
      <div className="bg-cyan-50 rounded-3xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-cyan-400 to-sky-400 p-6 text-white">
          <h3 className="text-xl font-bold">Teen/Adult Training</h3>
          <p className="text-white/80 text-sm mt-1">Ages 13+</p>
        </div>
        <div className="p-6">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            We offer supportive lessons for older swimmers with particular care for those with water anxiety or past water trauma.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>Weekdays or weekends</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>Flexible scheduling</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>$50 per session</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>30 minutes per session</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Who We Serve Section */}
<section id="who-we-serve" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-300 via-blue-300 to-cyan-300 opacity-40"></div>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Who We Serve</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Swim Lessons Tailored to Your Needs</h2>
      <p className="text-slate-500 max-w-xl mx-auto">
        Our adaptive program serves individuals with a wide range of conditions and abilities. No two students are the same, and neither are our lessons.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Each card (Autism, ADHD, etc.) */}
      {[
        { emoji: "🧩", title: "Autism Spectrum Disorder", desc: "Sensory-sensitive environment, predictable routines, visual supports" },
        { emoji: "⚡", title: "ADHD", desc: "Structured, engaging lessons with clear expectations and positive reinforcement" },
        { emoji: "🌊", title: "Sensory Processing Disorders", desc: "Gradual water introduction, tactile considerations, calming techniques" },
        { emoji: "🌱", title: "Developmental Delays", desc: "Milestone-based progression at each student's individual pace" },
        { emoji: "💙", title: "Anxiety & Aquaphobia", desc: "Compassionate, pressure-free approach to building water confidence" },
        { emoji: "🦾", title: "Limb Differences & Amputations", desc: "Adapted stroke techniques and equipment for all body types" },
        { emoji: "🏃", title: "Physical Disabilities", desc: "Modified techniques for a wide range of physical conditions" },
        { emoji: "👨‍👩‍👧", title: "Neurotypical Learners", desc: "All students are welcome — our methods benefit every swimmer" },
        { emoji: "🌟", title: "& Many More", desc: "Contact us to discuss your or your child's specific situation" },
      ].map((item, idx) => (
        <div key={idx} className="bg-white border border-teal-100 rounded-2xl p-6 hover:shadow-md hover:border-teal-300 transition-all group">
          <div className="text-3xl mb-3">{item.emoji}</div>
          <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">{item.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ Section */}
<section id="faq" className="py-20 bg-teal-50">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Common Questions</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Frequently Asked Questions</h2>
    </div>
    <div className="space-y-4">
      {[
        { q: "What ages do you accept?", a: "We accept students starting at 6 months of age, given they have hit milestones including sitting up and rolling from left to right unassisted, through adulthood." },
        { q: "How long are lessons?", a: "Lessons are 10 to 15 minutes for kids or 30 minutes for teens/adults. Duration can be adjusted based on the student's attention, stamina, and needs." },
        { q: "How long is the survival swim program?", a: "Most students are able to pass their skill test and graduate from the program in 4 weeks - for a total of 16 sessions in the pool. We also teach parents how to practice with their kids to maintain their survival skills!" },
        { q: "How do I pay?", a: "We utilize Jackrabbit for scheduling and electronic payments. All payments are processed electronically for convenience and efficiency. Cash payment upon request." },
        { q: "Is financial assistance available?", a: "We strive to make our program as accessible as possible. Please contact us to discuss options — we work with families to find solutions." }
      ].map((item, idx) => (
        <details key={idx} className="bg-white border border-teal-100 rounded-2xl group">
          <summary className="p-5 font-semibold text-slate-700 cursor-pointer list-none flex items-center justify-between hover:text-teal-700 transition-colors">
            {item.q}
            <span className="text-teal-400 ml-4 flex-shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
          </summary>
          <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-teal-50 pt-3">{item.a}</div>
        </details>
      ))}
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-white">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Get Started</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Ready to Make a Splash?</h2>
      <p className="text-slate-500 max-w-xl mx-auto">
        Reach out for a free consultation. We'll discuss your goals, answer any questions, and find the right program for your swimmer.
      </p>
    </div>
    <form
      action="https://formspree.io/f/xdawqerb" 
      method="POST"
      className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-5">
      <input type="hidden" name="_subject" value="New Swim Inquiry" />
      
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Name <span className="text-teal-500">*</span></label>
          <input
                type="text"
                name="name"
                required
                placeholder="Jane Smith"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"
              />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address <span className="text-teal-500">*</span></label>
          <input
                type="email"
                name="email"
                required
                placeholder="jane@example.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"
              />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
          <input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"
              />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Student Age</label>
          <select
                name="studentType"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white text-slate-600"
              >
            <option value="">Select an option...</option>
            <option>Child (0–17)</option>
            <option>Adult (18+)</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your swimmer's needs</label>
        <textarea
                name="message"
                rows="4"
                placeholder="Share any relevant background, special considerations, or questions..."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white resize-none"
              />
      </div>
      <button type="submit" className="w-full bg-teal-500 text-white font-semibold py-4 rounded-xl hover:bg-teal-600 transition-colors shadow-md shadow-teal-100 text-base">
        Send Message — We'll Be in Touch
      </button>
      <p className="text-xs text-center text-slate-400">We typically respond within one business day. Your information is never shared.</p>
    </form>
  </div>
</section>

{/* Footer Section */}
<footer className="bg-teal-900 text-teal-100 py-12">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-10 mb-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-bold text-white text-lg">All Abilities Swim Academy</span>
        </div>
        <p className="text-sm text-teal-300 leading-relaxed">
          Adaptive swim instruction for children and adults of all abilities.
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
          <li>📧 <a href="mailto:aaswimacademy26@gmail.com" className="hover:text-white transition-colors">aaswimacademy26@gmail.com</a></li>
          <li>📞 <a href="tel:+15172407145" className="hover:text-white transition-colors">(517) 240-7145</a></li>
          <li>📍 Jackson, MI</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-teal-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-teal-400">
      <span>© 2026 All Abilities Swim Academy. All rights reserved.</span>
      <span>Safe · Adaptive · Empowering</span>
    </div>
  </div>
</footer>
      {/* Repeat the same JSX conversion method for each section */}
    </div>
  );
}

export default App;
