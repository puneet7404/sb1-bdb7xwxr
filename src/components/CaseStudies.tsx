const caseStudies = [
  {
    category: 'BLA Submission Acceleration',
    challenge: 'Mid-stage biotech with delayed BLA timeline due to CMC documentation gaps and manufacturing alignment issues',
    solution: 'Implemented comprehensive gap analysis, established cross-functional governance model, coordinated DS/DP manufacturing readiness, and restructured submission strategy',
    outcome: 'Accelerated submission timeline by 8 months, achieved regulatory filing with no major deficiencies, established scalable quality systems for commercial launch'
  },
  {
    category: 'Gene Therapy Program Rescue',
    challenge: 'Clinical-stage gene therapy program at risk of regulatory hold due to analytical method failures and comparability concerns',
    solution: 'Conducted root cause analysis, redesigned analytical control strategy, led vendor remediation efforts, and developed comprehensive comparability protocol',
    outcome: 'Resolved regulatory concerns, lifted clinical hold within 6 months, established robust analytical framework for Phase 3 progression'
  },
  {
    category: 'Manufacturing Scale-Up & PPQ',
    challenge: 'Complex biologics program requiring manufacturing scale-up from clinical to commercial with limited internal CMC expertise',
    solution: 'Led end-to-end PPQ strategy, coordinated multi-site tech transfer, established process validation framework, and implemented risk-based quality oversight',
    outcome: 'Successful commercial-scale validation, zero batch failures during PPQ execution, established manufacturing readiness for approval and launch'
  },
  {
    category: 'Regulatory Remediation & Strategy',
    challenge: 'Post-approval regulatory commitments at risk with insufficient organizational capacity and unclear remediation pathway',
    solution: 'Developed prioritized remediation roadmap, established regulatory intelligence system, coordinated cross-functional execution teams, and implemented milestone-based tracking',
    outcome: 'Completed all regulatory commitments on schedule, improved regulatory relationship, established sustainable compliance framework'
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5">
        <img
          src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Pharmaceutical regulatory compliance"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Impact</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Representative program scenarios demonstrating measurable outcomes and strategic value delivery
          </p>
          <p className="text-sm text-slate-500 mt-4 italic">
            *Case examples anonymized to protect client confidentiality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                {study.category}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Challenge</h4>
                  <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Solution</h4>
                  <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Outcome</h4>
                  <p className="text-slate-900 leading-relaxed font-medium">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
