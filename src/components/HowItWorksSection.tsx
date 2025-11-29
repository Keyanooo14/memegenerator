import { PenTool, Cpu, Download } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: PenTool,
      title: 'Input Your Concept',
      description: 'Describe what you want or choose from trending topics'
    },
    {
      number: 2,
      icon: Cpu,
      title: 'AI Generates Options',
      description: 'Our AI creates multiple variations optimized for engagement'
    },
    {
      number: 3,
      icon: Download,
      title: 'Download & Share',
      description: 'Get high-quality exports ready for any platform'
    }
  ];

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[40px] font-bold text-white text-center mb-20">
          How It Works
        </h2>

        <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-[2px] bg-white/20" style={{ marginTop: '2rem' }} />

          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-white bg-[#0F172A] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                  {step.number}
                </div>
                <step.icon className="w-10 h-10 text-white/70 mb-4" strokeWidth={1.5} />
                <h3 className="text-[20px] font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-white/65 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
