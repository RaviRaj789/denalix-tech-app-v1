import DotField from "@/components/effects/DotField";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#08090c]"
    >
      <div className="absolute inset-0">
        <DotField
          dotRadius={2}
          dotSpacing={20}
          cursorRadius={500}
          bulgeStrength={80}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(255, 255, 255, 0.55)"
          gradientTo="rgba(255, 255, 255, 0.55)"
          glowColor="#ffffff"
        />
      </div>

      <div className="animate-drift-a absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-purple-500/12 blur-[110px]" />
      <div className="animate-drift-b absolute right-[-10rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/10 blur-[110px]" />
      <div className="animate-drift-c absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-300/8 blur-[120px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,9,12,0.7)_100%)]" />
    </div>
  );
}
