export function ShowcaseSection() {
  const examples = [
    { height: 'h-64', topic: 'Developer Life', time: '2 hours ago' },
    { height: 'h-80', topic: 'Coffee Addiction', time: '3 hours ago' },
    { height: 'h-72', topic: 'Meeting Culture', time: '5 hours ago' },
    { height: 'h-96', topic: 'Tech Stack Choices', time: '6 hours ago' },
    { height: 'h-64', topic: 'Work From Home', time: '8 hours ago' },
    { height: 'h-80', topic: 'Debugging', time: '10 hours ago' }
  ];

  return (
    <section id="examples" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] font-bold text-white text-center mb-16">
          Recent Creations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className={`${example.height} bg-[#1E293B] rounded-lg border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group`}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-6">
                <div className="w-full h-full bg-[#0F172A] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white/30 text-sm text-center">{example.topic}</span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <p className="text-[13px] text-gray-400">{example.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
