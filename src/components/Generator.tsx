import { useState } from 'react';
import { Zap, Plus, Layout, Clock, Settings as SettingsIcon, Download, RefreshCw, Edit, Share2 } from 'lucide-react';

interface GeneratorProps {
  onBack: () => void;
}

export function Generator({ onBack }: GeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('professional');
  const [format, setFormat] = useState('classic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMeme, setGeneratedMeme] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    setGeneratedMeme(true);
  };

  const recentMemes = [
    { id: 1, time: '2 min ago' },
    { id: 2, time: '5 min ago' },
    { id: 3, time: '10 min ago' },
    { id: 4, time: '15 min ago' },
    { id: 5, time: '20 min ago' }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] flex">
      <aside className="w-[280px] bg-[#0F172A] border-r border-white/10 flex-shrink-0 hidden lg:block">
        <div className="p-6">
          <button onClick={onBack} className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
            <span className="text-[22px] font-semibold text-white">MemeForge</span>
          </button>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white bg-white/5 rounded-lg border-l-2 border-[#3B82F6] transition-colors duration-200">
              <Plus className="w-5 h-5" />
              <span className="text-[15px]">New Meme</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200">
              <Layout className="w-5 h-5" />
              <span className="text-[15px]">Templates</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200">
              <Clock className="w-5 h-5" />
              <span className="text-[15px]">History</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200">
              <SettingsIcon className="w-5 h-5" />
              <span className="text-[15px]">Settings</span>
            </button>
          </nav>
        </div>
      </aside>

      <main className="flex-1 bg-[#1E293B] overflow-auto">
        <div className="border-b border-white/10 px-8 py-4 flex items-center justify-between bg-[#0F172A]/50">
          <h1 className="text-white text-[18px] font-medium">New Meme Project</h1>
          <div className="flex gap-3">
            <button className="px-5 py-2 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-lg text-[14px] transition-all duration-200">
              Save
            </button>
            <button className="px-5 py-2 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-lg text-[14px] transition-all duration-200">
              Share
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-[#0F172A] rounded-xl p-10 shadow-2xl">
                <label className="block text-white text-[18px] font-medium mb-4">
                  What's your meme about?
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Developer debugging at 3am, Coffee addiction, Deadline approaching"
                  className="w-full h-[120px] bg-[#1E293B] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 text-[16px] leading-relaxed resize-none focus:outline-none focus:border-[#3B82F6] transition-colors duration-200"
                />

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <label className="block text-white/70 text-[14px] font-medium mb-2">
                      Tone
                    </label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full bg-[#1E293B] border border-white/10 rounded-lg px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#3B82F6] transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="professional">Professional</option>
                      <option value="sarcastic">Sarcastic</option>
                      <option value="relatable">Relatable</option>
                      <option value="absurdist">Absurdist</option>
                      <option value="wholesome">Wholesome</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-[14px] font-medium mb-2">
                      Format
                    </label>
                    <select
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
                      className="w-full bg-[#1E293B] border border-white/10 rounded-lg px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#3B82F6] transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="classic">Classic</option>
                      <option value="modern">Modern</option>
                      <option value="twitter">Twitter Style</option>
                      <option value="multipanel">Multi-Panel</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full mt-6 px-8 py-[14px] bg-[#3B82F6] text-white rounded-lg text-[17px] font-medium hover:bg-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isGenerating ? 'Generating...' : 'Generate Meme'}
                </button>
              </div>

              {generatedMeme && (
                <div className="bg-[#0F172A] rounded-xl p-8 shadow-2xl mt-8">
                  <div className="w-full aspect-[9/7] bg-[#1E293B] rounded-lg flex items-center justify-center border-2 border-dashed border-white/20">
                    <div className="text-center">
                      <div className="text-white/40 text-[15px]">Generated Meme Preview</div>
                      <div className="text-white/60 text-[13px] mt-2">{prompt}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] text-white rounded-md text-[14px] font-medium hover:bg-[#2563EB] transition-colors duration-200">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white rounded-md text-[14px] hover:border-white/40 transition-colors duration-200">
                      <RefreshCw className="w-4 h-4" />
                      Regenerate
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white rounded-md text-[14px] hover:border-white/40 transition-colors duration-200">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white rounded-md text-[14px] hover:border-white/40 transition-colors duration-200">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <div className="bg-[#0F172A] rounded-xl p-6 shadow-xl">
                <h3 className="text-white text-[16px] font-semibold mb-4">Recent</h3>
                <div className="space-y-3">
                  {recentMemes.map((meme) => (
                    <div
                      key={meme.id}
                      className="aspect-video bg-[#1E293B] rounded-lg hover:border hover:border-white/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer flex items-center justify-center"
                    >
                      <span className="text-white/30 text-[12px]">Meme {meme.id}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-[12px] text-center mt-4">
                  Click any meme to view
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
