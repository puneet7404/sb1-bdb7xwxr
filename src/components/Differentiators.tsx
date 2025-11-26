import { CheckCircle2 } from 'lucide-react';

const differentiators = [
  {
    title: 'Proven Track Record in Gene Therapy Submissions',
    description: 'Direct experience managing multiple BLA and MAA submissions for advanced biologics and gene therapy programs. Deep understanding of regulatory expectations, scientific rationale development, and submission strategy for novel modalities.'
  },
  {
    title: 'Program Rescue & Remediation Expertise',
    description: 'Specialized capability in diagnosing and resolving stalled or at-risk CMC programs. Rapid assessment, strategic replanning, and hands-on execution to bring delayed programs back on track for regulatory milestones.'
  },
  {
    title: 'Integrated Technical & Business Acumen',
    description: 'Unique combination of deep technical CMC expertise with strategic business understanding. Ability to translate complex scientific challenges into executive-level insights and actionable commercial decisions.'
  },
  {
    title: 'Hands-On Partnership Model',
    description: 'Not just advisory—embedded, tactical execution when needed. Serves as fractional CMC leader, interim program director, or strategic advisor based on organizational needs and program maturity.'
  }
];

const Differentiators = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Biotech innovation and expertise"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Tvasta?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Differentiated expertise and execution capability for complex biotech programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
