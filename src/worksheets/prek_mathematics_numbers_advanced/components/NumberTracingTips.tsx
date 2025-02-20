import React from 'react';

const NumberTracingTips: React.FC = () => {
  const tips = [
    {
      title: "Mission Control Grip",
      description: "Hold your space pen (pencil) like an astronaut - with your thumb and first two fingers, maintaining control for precise tracing.",
      icon: "✏️"
    },
    {
      title: "Launch Point",
      description: "Every space mission has a starting point! Begin tracing from the glowing dot, just like a rocket launching from its pad.",
      icon: "🚀"
    },
    {
      title: "Navigation Arrows",
      description: "Follow the direction arrows like a spacecraft following its flight path. They guide you in forming each number correctly.",
      icon: "➡️"
    },
    {
      title: "Space Mission Pace",
      description: "Like exploring a new planet, take your time! Careful and accurate tracing is more important than speed.",
      icon: "⏱️"
    },
    {
      title: "Mission Training",
      description: "Just as astronauts train repeatedly, use the 'Try Again' button to practice until you're confident with each number.",
      icon: "🔄"
    },
    {
      title: "Mission Control Voice",
      description: "Listen to the voice guidance like astronauts following mission control instructions.",
      icon: "🎧"
    },
    {
      title: "Stay in Orbit",
      description: "Keep your tracing inside the light purple paths, like a satellite staying in its perfect orbit.",
      icon: "🛸"
    },
    {
      title: "Complete the Mission",
      description: "Some numbers have multiple stages, like a space mission. Complete each part before moving to the next number.",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 bg-[url('/space-bg.png')] bg-cover bg-center bg-blend-soft-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              ⭐
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-0 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Space Mission Training Guide
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:border-white/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{tip.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{tip.title}</h3>
                </div>
                <p className="text-blue-100">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTracingTips; 