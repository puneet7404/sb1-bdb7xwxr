import { Zap, Compass, Target } from 'lucide-react';

const engagementTypes = [
  {
    icon: Zap,
    title: 'Fractional Leadership',
    description: 'Embedded executive presence as fractional VP or Head of CMC. Ongoing strategic oversight, team leadership, and operational execution for organizations requiring senior CMC expertise without full-time commitment.',
    ideal: 'Growing biotech companies, pre-commercial programs, interim leadership needs'
  },
  {
    icon: Compass,
    title: 'Strategic Advisement',
    description: 'Executive-level consulting for critical decision points, regulatory strategy development, and organizational capability building. Targeted guidance for CEOs, technical operations leaders, and board-level strategic planning.',
    ideal: 'Strategic inflection points, regulatory milestone planning, capability assessment'
  },
  {
    icon: Target,
    title: 'Project-Based Delivery',
    description: 'Defined-scope engagements for specific program needs—submission preparation, gap remediation, vendor qualification, or process validation planning. Clear deliverables, timelines, and success criteria.',
    ideal: 'BLA/IND preparation, CMC gap resolution, PPQ planning, regulatory remediation'
  }
];

const EngagementModel = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Engagement Model</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Flexible partnership structures designed to meet your organization's unique needs and program stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {engagementTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                <p className="text-slate-700 leading-relaxed mb-6">{type.description}</p>
                <div className="pt-6 border-t border-slate-200">
                  <div className="text-sm font-semibold text-slate-900 mb-2">IDEAL FOR:</div>
                  <div className="text-sm text-slate-600">{type.ideal}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Align Your Program for Approval</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need strategic guidance, interim leadership, or hands-on program execution, Tvasta delivers expertise that accelerates your path to regulatory success.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
