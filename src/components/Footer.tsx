import { Zap, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#0A0F1A] border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
              <span className="text-[20px] font-semibold text-white">MemeForge</span>
            </div>
            <p className="text-[14px] text-gray-400 leading-relaxed">
              AI-powered meme generation for creators
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200">
                Features
              </a>
              <a href="#examples" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200">
                Examples
              </a>
              <a href="#pricing" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200">
                Pricing
              </a>
              <a href="#about" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#twitter"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#github"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-[13px] text-gray-500 text-center">
            © 2025 MemeForge. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
