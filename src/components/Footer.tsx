const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tvasta Consulting Company LLC</h3>
            <p className="text-slate-400 leading-relaxed">
              Strategic CMC & Regulatory Consulting for High-Stakes Biotech Programs
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Core Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>CMC Program Management</li>
              <li>Regulatory Submission Strategy</li>
              <li>Risk Governance & Decision Frameworks</li>
              <li>Manufacturing Alignment</li>
              <li>Quality & Validation Planning</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Expertise Areas</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Biologics & Gene Therapy</li>
              <li>BLA/IND/MAA Submissions</li>
              <li>Program Rescue & Remediation</li>
              <li>Fractional Leadership</li>
              <li>Launch Readiness</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              &copy; {currentYear} Tvasta Consulting Company LLC. All rights reserved.
            </div>
            <div className="flex gap-6">
              <span>Professional Biotech Consulting Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
