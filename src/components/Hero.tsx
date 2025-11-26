import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/8513552/pexels-photo-8513552.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Pharmaceutical manufacturing cleanroom"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-900/50 to-transparent z-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full">
          <p className="text-sm font-medium text-blue-300 tracking-wide">TVASTA CONSULTING COMPANY LLC</p>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Strategic CMC & Regulatory Consulting<br />
          <span className="text-blue-400">for High-Stakes Biotech Programs</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Driving BLA success, manufacturing readiness & risk resilience through expert program leadership
        </p>

        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
        >
          Book a Strategy Discussion
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-slate-400 text-sm tracking-wide">Years of Leadership</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">IND/BLA/MAA</div>
            <div className="text-slate-400 text-sm tracking-wide">Submission Expertise</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Advanced Therapeutics</div>
            <div className="text-slate-400 text-sm tracking-wide">Gene, Cell & Biologic Modalities</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
