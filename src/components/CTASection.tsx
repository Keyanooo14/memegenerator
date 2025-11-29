interface CTASectionProps {
  onGetStartedClick: () => void;
}

export function CTASection({ onGetStartedClick }: CTASectionProps) {
  return (
    <section className="relative z-10 py-20 px-6 bg-[#1E293B]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[44px] font-bold text-white mb-6">
          Ready to Create?
        </h2>
        <p className="text-[18px] text-white/70 mb-10">
          Join thousands of creators making viral content
        </p>
        <button
          onClick={onGetStartedClick}
          className="px-12 py-[18px] bg-white text-[#0F172A] rounded-lg text-[19px] font-medium shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
        >
          Get Started - It's Free
        </button>
        <p className="text-[14px] text-white/50 mt-6">
          No credit card required • Export unlimited memes
        </p>
      </div>
    </section>
  );
}
