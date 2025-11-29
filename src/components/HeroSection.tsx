import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onStartClick: () => void;
}

export function HeroSection({ onStartClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6 pt-[70px]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-white/60" />
          <span className="text-[12px] tracking-wide uppercase text-white/60 font-medium">
            AI-Powered Meme Creation
          </span>
        </div>

        <h1 className="text-[58px] leading-[1.1] font-bold text-white mb-6 tracking-tight">
          Create Viral Content<br />In Seconds
        </h1>

        <p className="text-[20px] text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Professional meme generation powered by advanced AI. No design skills required.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={onStartClick}
            className="px-10 py-4 bg-white text-[#0F172A] rounded-lg text-[18px] font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Start Creating
          </button>
          <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-lg text-[18px] font-medium hover:bg-white/10 transition-all duration-300">
            See Examples
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-white/50 text-[14px]">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>50,000+ memes created</span>
        </div>
      </div>
    </section>
  );
}
