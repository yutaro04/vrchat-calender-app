// Logo component (no external svgPaths or lucide icons needed here)

export function VRChatEventsLogo() {
  return (
    <div className="relative inline-block">
      <div className="flex flex-col gap-1 pt-6 px-4 sm:px-0">
        {/* Main logo */}
        <div className="relative w-full max-w-[480px] h-[40px] sm:h-[50px] mx-auto">
          {/* Decorative side lines */}
          <div className="absolute left-0 top-1/2 w-6 sm:w-12 h-px bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          <div className="absolute right-0 top-1/2 w-6 sm:w-12 h-px bg-gradient-to-l from-black/40 via-black/20 to-transparent" />

          {/* Minimal corner dots */}
          <div className="absolute left-0 top-0 w-1 h-1 bg-black opacity-30" />
          <div className="absolute right-0 top-0 w-1 h-1 bg-black opacity-30" />
          <div className="absolute left-0 bottom-0 w-1 h-1 bg-black opacity-30" />
          <div className="absolute right-0 bottom-0 w-1 h-1 bg-black opacity-30" />

          {/* Text - horizontal layout */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 sm:gap-5">
            <p className="font-['Inter'] font-bold text-[20px] sm:text-[32px] text-black whitespace-nowrap tracking-[0.12em] uppercase">
              Virtual
            </p>
            <div className="w-[1px] h-5 sm:h-7 bg-gradient-to-b from-transparent via-black/30 to-transparent" />
            <p className="font-['Inter'] font-extralight text-[20px] sm:text-[32px] text-black whitespace-nowrap tracking-[0.18em] uppercase">
              Events
            </p>
          </div>
        </div>

        {/* For VRChat label */}
        <p className="text-gray-400 text-[10px] sm:text-[11px] tracking-[0.15em] pl-0.5 uppercase text-center sm:text-left">
          for VRChat
        </p>

        {/* Subtitle */}
        <p className="text-gray-500 text-[12px] sm:text-[14px] tracking-[0.05em] pl-0.5 opacity-80 text-center sm:text-left">
          バーチャル世界で開催されるイベントを発見・共有しよう
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="mb-4">
          <VRChatEventsLogo />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
