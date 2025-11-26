import { Microscope, FileText, Shield, Factory, FlaskConical, Users } from 'lucide-react';

const services = [
  {
    icon: Microscope,
    title: 'CMC Program Management & Launch Readiness',
    description: 'End-to-end oversight of chemistry, manufacturing, and controls activities from preclinical through commercial launch. Strategic planning, milestone tracking, and cross-functional alignment to ensure regulatory and operational readiness.'
  },
  {
    icon: FileText,
    title: 'Regulatory Submission Strategy (IND/BLA/MAA)',
    description: 'Expert guidance on investigational new drug applications, biologics license applications, and marketing authorization applications. Structured submission planning, gap analysis, and regulatory intelligence for complex biologics programs.'
  },
  {
    icon: Shield,
    title: 'Risk Governance & Decision Frameworks',
    description: 'Development and implementation of risk management systems tailored to high-stakes programs. Proactive identification of technical and regulatory risks with actionable mitigation strategies and escalation protocols.'
  },
  {
    icon: Factory,
    title: 'DS/DP Manufacturing Alignment & Vendor Oversight',
    description: 'Strategic coordination between drug substance and drug product operations. CMO selection, technology transfer oversight, supply chain optimization, and manufacturing readiness assessments for clinical and commercial scale.'
  },
  {
    icon: FlaskConical,
    title: 'QC & Validation Planning',
    description: 'Quality control strategy development, analytical method qualification, and validation lifecycle management. PPQ execution planning, comparability protocols, and regulatory compliance for quality systems.'
  },
  {
    icon: Users,
    title: 'Stakeholder & Cross-Functional Coordination',
    description: 'Executive-level facilitation across technical operations, quality, regulatory affairs, and commercial functions. Establishment of governance structures, communication protocols, and alignment mechanisms for complex matrix organizations.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img
          src="https://images.pexels.com/photos/3938026/pexels-photo-3938026.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Quality control laboratory testing"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive CMC and regulatory consulting services designed for biologics, gene therapy, and advanced therapeutic programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-slate-900 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-slate-200 hover:border-slate-900"
              >
                <div className="w-14 h-14 bg-blue-600 group-hover:bg-blue-500 rounded-lg flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
