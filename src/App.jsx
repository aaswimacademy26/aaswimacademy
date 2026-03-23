import React from "react";
import "./assets/main-Cd4GyK1f.css";

function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-teal-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-teal-500" viewBox="0 0 32 32" fill="none">
              <path d="M2 22 C6 18, 10 26, 14 22 C18 18, 22 26, 26 22 C28 20, 29 19, 30 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M2 16 C6 12, 10 20, 14 16 C18 12, 22 20, 26 16 C28 14, 29 13, 30 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              <circle cx="16" cy="8" r="3" fill="currentColor" opacity="0.8"></circle>
            </svg>
            <span className="font-bold text-lg text-teal-800 leading-tight">
              All Abilities<br className="hidden sm:block"/>
              <span className="text-teal-500"> Swim Academy</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
            <a href="#programs" className="hover:text-teal-600 transition-colors">Programs</a>
            <a href="#who-we-serve" className="hover:text-teal-600 transition-colors">Who We Serve</a>
            <a href="#contact" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">Get Started</a>
          </div>
          <a href="#contact" className="md:hidden bg-teal-500 text-white text-sm px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>🏊</span>
            <span>Adaptive Swim Instruction for All Ages &amp; Abilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-900 leading-tight mb-6">
            Every Child Deserves to<br/>
            <span className="text-teal-500">Feel Safe in the Water</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            All Abilities Swim Academy offers personalized, adaptive swim lessons in a warm, supportive environment — designed for children and adults with autism, ADHD, sensory disorders, developmental delays, and more.
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
                At All Abilities Swim Academy, we believe water safety and the joy of swimming should be accessible to everyone. Our instructors are trained to work with individuals across a broad spectrum of physical, developmental, and sensory needs.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We take the time to understand each student — their sensitivities, their goals, and their comfort level — to create a lesson plan that truly fits. Progress looks different for every swimmer, and we celebrate every milestone along the way.
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

            {/* Placeholder for image or illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-teal-400 mx-auto mb-4" viewBox="0 0 100 120" fill="none">
                    <path d="M50 10 C50 10, 15 55, 15 75 C15 95, 31 110, 50 110 C69 110, 85 95, 85 75 C85 55, 50 10, 50 10Z" fill="currentColor" opacity="0.2"></path>
                    <path d="M50 10 C50 10, 15 55, 15 75 C15 95, 31 110, 50 110 C69 110, 85 95, 85 75 C85 55, 50 10, 50 10Z" stroke="currentColor" strokeWidth="3" fill="none"></path>
                    <path d="M35 80 C35 68, 42 60, 50 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6"></path>
                  </svg>
                  <p className="text-teal-700 font-medium text-lg">&quot;Every swimmer is capable of progress in the right environment.&quot;</p>
                </div>
              </div>
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
          <div className="text-4xl mb-2">🐬</div>
          <h3 className="text-xl font-bold">Beginner Adaptive</h3>
          <p className="text-white/80 text-sm mt-1">Ages 3+ · All abilities</p>
        </div>
        <div className="p-6">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Introduction to water safety and basic swimming skills in a calm, highly personalized one-on-one setting.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>Water acclimation</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>Floating &amp; breathing</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>Safety fundamentals</li>
            <li className="flex items-center gap-2 text-sm text-slate-700"><span className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>Confidence building</li>
          </ul>
        </div>
      </div>

      {/* Intermediate Development */}
      <div className="bg-blue-50 rounded-3xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-blue-400 to-teal-400 p-6 text-white">
          <div className="text-4xl mb-2">🌊</div>
          <h3 className="text-xl font-bold">Intermediate Development</h3>
          <p className="text-white/80 text-sm mt-1">All ages · Building skills</p>
        </div>
        <div className="p-6">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Develop stroke mechanics, endurance, and water independence. Adapted to each swimmer's physical and cognitive needs.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-slate-700">✓ Stroke technique</li>
            <li className="flex items-center gap-2 text-sm text-slate-700">✓ Lap swimming</li>
            <li className="flex items-center gap-2 text-sm text-slate-700">✓ Turn &amp; kick drills</li>
            <li className="flex items-center gap-2 text-sm text-slate-700">✓ Endurance building</li>
          </ul>
        </div>
      </div>

      {/* Advanced & Teen/Adult */}
      <div className="bg-cyan-50 rounded-3xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-cyan-400 to-sky-400 p-6 text-white">
          <div className="text-4xl mb-2">🏅</div>
          <h3 className="text-xl font-bold">Advanced &amp; Teen/Adult</h3>
          <p className="text-white/80 text-sm mt-1">Teens &amp; Adults</p>
        </div>
        <div className="p-6">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            For older swimmers looking to build independence, exercise through swimming, or pursue recreational or competitive swimming goals with adaptive support.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-slate-700">✓ Advanced strokes</li>
            <li className="flex items-center gap-2 text-sm text-slate-700">✓ Fitness swimming</li>
            <li className="flex items-center gap-2 text-sm text-slate-700">✓ Goal-based training</li>
            <li className="flex items-center gap-2 text-sm text-slate-700">✓ Lifelong water safety</li>
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
        { q: "What age do you accept?", a: "We accept students starting at age 3, through adulthood. Our programs are tailored to the developmental stage and ability of each individual." },
        { q: "Do I need a diagnosis to enroll?", a: "No diagnosis is required. We welcome all students — with or without a formal diagnosis — who may benefit from a more patient, individualized approach to swim instruction." },
        { q: "What should I bring to the first lesson?", a: "Bring a swimsuit, towel, and any sensory items that help your child feel comfortable (favorite toy, noise-reducing headphones, etc.). We'll handle the rest." },
        { q: "How long are lessons?", a: "Most lessons are 30 to 45 minutes. Duration can be adjusted based on the student's attention, stamina, and therapeutic needs." },
        { q: "Is financial assistance available?", a: "We strive to make our program accessible. Please contact us to discuss options — we work with families to find solutions when possible." }
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
    <form className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Name <span className="text-teal-500">*</span></label>
          <input type="text" required placeholder="Jane Smith" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address <span className="text-teal-500">*</span></label>
          <input type="email" required placeholder="jane@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"/>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
          <input type="tel" placeholder="(555) 000-0000" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Student Age / Type</label>
          <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white text-slate-600">
            <option value="">Select an option...</option>
            <option>Child (3–12)</option>
            <option>Teen (13–17)</option>
            <option>Adult (18+)</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your swimmer's needs</label>
        <textarea rows="4" placeholder="Share any relevant background, special considerations, or questions..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white resize-none"></textarea>
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
          Adaptive swim instruction for children and adults of all abilities — in a positive, comfortable, and supportive environment.
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
      <span>Inclusive · Adaptive · Empowering</span>
    </div>
  </div>
</footer>
      {/* Repeat the same JSX conversion method for each section */}
    </div>
  );
}

export default App;
