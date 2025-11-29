import { Zap } from 'lucide-react';

interface NavbarProps {
  onLaunchClick: () => void;
}

export function Navbar({ onLaunchClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] bg-[rgba(15,23,42,0.8)] backdrop-blur-[12px] z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
          <span className="text-[22px] font-semibold text-white">MemeForge</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[15px] text-white/70 hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#examples" className="text-[15px] text-white/70 hover:text-white transition-colors duration-200">
            Examples
          </a>
          <a href="#about" className="text-[15px] text-white/70 hover:text-white transition-colors duration-200">
            About
          </a>
          <button
            onClick={onLaunchClick}
            className="px-7 py-3 bg-white text-[#0F172A] rounded-md font-medium text-[15px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Launch Generator
          </button>
        </div>
      </div>
    </nav>
  );
}
