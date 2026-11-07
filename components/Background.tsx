import { BACKGROUND_URL } from "@/config/site";

// Global Website Background using the exact requested Wallhaven wallpaper
// Uses a fixed full-screen element with optimized mobile rendering
export default function Background() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-ink"
    >
      {/* Exact requested background image with fallback to downloaded local copy */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url("${BACKGROUND_URL}"), url("/bg.jpg")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Balanced deep black overlay to preserve text contrast while keeping art recognizable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,5,10,0.68) 0%, rgba(8,13,22,0.82) 50%, rgba(3,5,10,0.92) 100%)",
        }}
      />

      {/* Cinematic blue & cyan radial lighting illumination */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 75% 20%, rgba(8,123,255,0.22), transparent 70%), radial-gradient(45% 40% at 15% 75%, rgba(0,217,255,0.12), transparent 70%)",
        }}
      />

      {/* Subtle high-tech grid layer */}
      <div className="bg-grid absolute inset-0 opacity-40" />
    </div>
  );
}
