import { Award, Briefcase, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Pharmaceutical industry leadership"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Leadership & Expertise</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Tvasta Consulting is led by an accomplished biotechnology program leader with over 15 years of experience directing high-stakes CMC and regulatory programs across multiple therapeutic modalities.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our founder has architected and executed governance frameworks for global biologics programs, managed multi-site manufacturing operations, and led cross-functional teams through successful BLA and MAA submissions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              This depth of operational experience, combined with strategic business acumen, enables Tvasta to deliver not just consulting advice, but actionable program leadership that drives measurable outcomes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">BLA/MAA Leadership</div>
                  <div className="text-sm text-slate-600">Multiple successful submissions</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">Global Programs</div>
                  <div className="text-sm text-slate-600">Multi-region coordination</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">Executive Partnership</div>
                  <div className="text-sm text-slate-600">C-suite trusted advisor</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">Program Rescue</div>
                  <div className="text-sm text-slate-600">Turnaround expertise</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
            <ul className="space-y-4">
              {[
                'CMC strategy and regulatory submission planning for biologics and gene therapy',
                'Risk governance frameworks and decision-making architectures',
                'DS/DP manufacturing alignment and vendor management',
                'Quality control strategy, validation planning, and PPQ execution',
                'Cross-functional stakeholder coordination and executive communication',
                'Program rescue, remediation, and turnaround leadership',
                'Commercial readiness planning and launch preparation',
                'Regulatory intelligence and agency interaction strategy'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
