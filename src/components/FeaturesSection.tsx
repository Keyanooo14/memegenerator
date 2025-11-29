import { Layout, Zap, Sparkles } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Layout,
      title: '50+ Templates',
      description: 'Access trending meme formats updated weekly. From classic image macros to modern Twitter screenshots'
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'AI analyzes your topic and creates perfectly formatted memes in under 3 seconds'
    },
    {
      icon: Sparkles,
      title: 'Professional Quality',
      description: 'Production-ready memes with proper formatting, fonts, and composition'
    }
  ];

  return (
    <section id="features" className="relative z-10 py-24 px-6">
      <div className="absolute inset-0 bg-[rgba(15,23,42,0.6)] backdrop-blur-sm -z-10" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] font-bold text-white text-center mb-16">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[rgba(30,41,59,0.7)] border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-white/80 mb-6" strokeWidth={1.5} />
              <h3 className="text-[24px] font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-[15px] text-white/65 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
