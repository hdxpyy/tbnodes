import React from "react";

// Isometric 3D block helper: renders Top, Left, and Right faces with distinct shading and texture patterns
function IsoBlock({
  topColor,
  leftColor,
  rightColor,
  pattern,
  glowColor,
}: {
  topColor: string;
  leftColor: string;
  rightColor: string;
  pattern?: React.ReactNode;
  glowColor?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {glowColor && (
        <circle cx="24" cy="24" r="18" fill={glowColor} opacity="0.25" filter="blur(6px)" />
      )}
      {/* Top Face */}
      <polygon points="24,6 42,16 24,26 6,16" fill={topColor} stroke="#03050a" strokeWidth="0.75" />
      {/* Left Face */}
      <polygon points="6,16 24,26 24,42 6,32" fill={leftColor} stroke="#03050a" strokeWidth="0.75" />
      {/* Right Face */}
      <polygon points="24,26 42,16 42,32 24,42" fill={rightColor} stroke="#03050a" strokeWidth="0.75" />
      {/* Texture Details */}
      {pattern}
    </svg>
  );
}

// 8x8 Pixel Mob Face helper (authentic Minecraft mob head front view)
function MobFace({
  bg,
  pixels,
  glowColor,
  accentElements,
}: {
  bg: string;
  pixels: { x: number; y: number; w?: number; h?: number; c: string }[];
  glowColor?: string;
  accentElements?: React.ReactNode;
}) {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {glowColor && (
        <rect x="2" y="2" width="28" height="28" rx="4" fill={glowColor} opacity="0.3" filter="blur(4px)" />
      )}
      <rect x="4" y="4" width="24" height="24" rx="2" fill={bg} stroke="#08101e" strokeWidth="1" />
      {pixels.map((p, idx) => (
        <rect
          key={idx}
          x={4 + p.x * 3}
          y={4 + p.y * 3}
          width={(p.w ?? 1) * 3}
          height={(p.h ?? 1) * 3}
          fill={p.c}
        />
      ))}
      {accentElements}
    </svg>
  );
}

/* =========================================================================
   MINECRAFT BLOCK ICONS (Basic Tier)
   DIRT, STONE, COPPER, IRON, GOLD, EMERALD, DIAMOND, NETHERITE
   ========================================================================= */

export function DirtBlockIcon() {
  return (
    <IsoBlock
      topColor="#5b8731"
      leftColor="#735135"
      rightColor="#5c3e26"
      pattern={
        <>
          {/* Grass top rim over dirt */}
          <polygon points="6,16 24,26 24,30 18,27 12,25 6,21" fill="#4d7328" />
          <polygon points="24,26 42,16 42,21 36,25 30,27 24,30" fill="#3c5c1e" />
          {/* Dirt specks */}
          <rect x="12" y="32" width="2" height="2" fill="#4a311d" />
          <rect x="16" y="28" width="3" height="2" fill="#8c6543" />
          <rect x="28" y="30" width="3" height="2" fill="#8c6543" />
          <rect x="34" y="26" width="2" height="3" fill="#4a311d" />
        </>
      }
    />
  );
}

export function StoneBlockIcon() {
  return (
    <IsoBlock
      topColor="#9aa3af"
      leftColor="#7a838f"
      rightColor="#5f6670"
      pattern={
        <>
          {/* Stone cracks & fissures */}
          <polygon points="18,12 22,14 26,11" fill="#69717b" />
          <polygon points="10,23 15,26 14,29" fill="#4d535b" />
          <polygon points="30,22 34,25 32,29" fill="#434950" />
          <rect x="28" y="34" width="3" height="2" fill="#848e9c" />
          <rect x="12" y="30" width="4" height="2" fill="#848e9c" />
        </>
      }
    />
  );
}

export function CopperBlockIcon() {
  return (
    <IsoBlock
      topColor="#d97843"
      leftColor="#b85f2e"
      rightColor="#8f441b"
      glowColor="#00d9ff"
      pattern={
        <>
          {/* Copper beveled plate and cyan oxidation verdigris */}
          <polygon points="24,10 38,17 24,24 10,17" fill="#e68d59" opacity="0.6" />
          <rect x="12" y="24" width="4" height="3" fill="#3da89b" />
          <rect x="18" y="31" width="3" height="2" fill="#2d877c" />
          <rect x="30" y="26" width="4" height="3" fill="#3da89b" />
          <rect x="36" y="22" width="2" height="4" fill="#2d877c" />
        </>
      }
    />
  );
}

export function IronBlockIcon() {
  return (
    <IsoBlock
      topColor="#f1f5f9"
      leftColor="#cbd5e1"
      rightColor="#94a3b8"
      glowColor="#e2e8f0"
      pattern={
        <>
          {/* Beveled frame border */}
          <polygon points="24,9 39,16 24,23 9,16" stroke="#ffffff" strokeWidth="1" fill="#e2e8f0" />
          <polygon points="8,18 22,26 22,39 8,31" stroke="#cbd5e1" strokeWidth="0.8" fill="#94a3b8" />
          <polygon points="26,26 40,18 40,31 26,39" stroke="#64748b" strokeWidth="0.8" fill="#64748b" />
        </>
      }
    />
  );
}

export function GoldBlockIcon() {
  return (
    <IsoBlock
      topColor="#fde047"
      leftColor="#eab308"
      rightColor="#ca8a04"
      glowColor="#facc15"
      pattern={
        <>
          {/* Gold beveled inset with bright shine */}
          <polygon points="24,9 39,16 24,23 9,16" stroke="#fef08a" strokeWidth="1" fill="#facc15" />
          <polygon points="8,18 22,26 22,39 8,31" stroke="#fde047" strokeWidth="0.8" fill="#ca8a04" />
          <polygon points="26,26 40,18 40,31 26,39" stroke="#a16207" strokeWidth="0.8" fill="#a16207" />
          <line x1="16" y1="12" x2="24" y2="16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        </>
      }
    />
  );
}

export function EmeraldBlockIcon() {
  return (
    <IsoBlock
      topColor="#34d399"
      leftColor="#10b981"
      rightColor="#047857"
      glowColor="#10b981"
      pattern={
        <>
          {/* Emerald geometric gem facet lines */}
          <polygon points="24,9 39,16 24,23 9,16" stroke="#6ee7b7" strokeWidth="1" fill="#059669" />
          <line x1="24" y1="9" x2="24" y2="23" stroke="#a7f3d0" strokeWidth="0.8" />
          <line x1="9" y1="16" x2="39" y2="16" stroke="#a7f3d0" strokeWidth="0.8" />
          <polygon points="8,18 22,26 22,39 8,31" stroke="#34d399" strokeWidth="0.8" fill="#047857" />
          <polygon points="26,26 40,18 40,31 26,39" stroke="#065f46" strokeWidth="0.8" fill="#064e3b" />
        </>
      }
    />
  );
}

export function DiamondBlockIcon() {
  return (
    <IsoBlock
      topColor="#67e8f9"
      leftColor="#06b6d4"
      rightColor="#0891b2"
      glowColor="#00d9ff"
      pattern={
        <>
          {/* Diamond gem crystal border & inner facet */}
          <polygon points="24,9 39,16 24,23 9,16" stroke="#cffafe" strokeWidth="1" fill="#22d3ee" />
          <line x1="24" y1="9" x2="24" y2="23" stroke="#ffffff" strokeWidth="1" />
          <polygon points="8,18 22,26 22,39 8,31" stroke="#67e8f9" strokeWidth="0.8" fill="#0891b2" />
          <polygon points="26,26 40,18 40,31 26,39" stroke="#0e7490" strokeWidth="0.8" fill="#155e75" />
          <circle cx="20" cy="14" r="1.5" fill="#ffffff" />
        </>
      }
    />
  );
}

export function NetheriteBlockIcon() {
  return (
    <IsoBlock
      topColor="#47474d"
      leftColor="#333338"
      rightColor="#222226"
      glowColor="#8e97ab"
      pattern={
        <>
          {/* Heavy netherite reinforced plate borders */}
          <polygon points="24,9 39,16 24,23 9,16" stroke="#616169" strokeWidth="1" fill="#3a3a40" />
          <polygon points="8,18 22,26 22,39 8,31" stroke="#4b4b52" strokeWidth="0.8" fill="#29292e" />
          <polygon points="26,26 40,18 40,31 26,39" stroke="#1d1d21" strokeWidth="0.8" fill="#161619" />
          <line x1="14" y1="23" x2="18" y2="25" stroke="#71717a" strokeWidth="1" />
          <line x1="30" y1="24" x2="34" y2="22" stroke="#52525b" strokeWidth="1" />
        </>
      }
    />
  );
}

/* =========================================================================
   MINECRAFT MOB ICONS (Ultimate Tier)
   ZOMBIE, SKELETON, CREEPER, ENDERMAN, WITHER, WARDEN
   ========================================================================= */

export function ZombieMobIcon() {
  return (
    <MobFace
      bg="#568045"
      glowColor="#568045"
      pixels={[
        // Hair & forehead shadows
        { x: 1, y: 0, w: 6, h: 1, c: "#2e4823" },
        { x: 0, y: 1, w: 8, h: 1, c: "#3c6130" },
        // Deep eye sockets
        { x: 1, y: 3, w: 2, h: 1, c: "#1b2916" },
        { x: 5, y: 3, w: 2, h: 1, c: "#1b2916" },
        // Nose
        { x: 3, y: 4, w: 2, h: 1, c: "#345529" },
        // Mouth
        { x: 2, y: 6, w: 4, h: 1, c: "#20331b" },
      ]}
    />
  );
}

export function SkeletonMobIcon() {
  return (
    <MobFace
      bg="#c5c9d1"
      glowColor="#e2e8f0"
      pixels={[
        // Hollow eye sockets
        { x: 1, y: 2, w: 2, h: 2, c: "#2c313a" },
        { x: 5, y: 2, w: 2, h: 2, c: "#2c313a" },
        // Nasal cavity
        { x: 3, y: 4, w: 2, h: 1, c: "#484f5c" },
        // Mouth / teeth
        { x: 1, y: 6, w: 6, h: 1, c: "#484f5c" },
        { x: 2, y: 5, w: 1, h: 1, c: "#ffffff" },
        { x: 4, y: 5, w: 1, h: 1, c: "#ffffff" },
      ]}
    />
  );
}

export function CreeperMobIcon() {
  return (
    <MobFace
      bg="#0da743"
      glowColor="#22c55e"
      pixels={[
        // Eyes
        { x: 1, y: 2, w: 2, h: 2, c: "#06130b" },
        { x: 5, y: 2, w: 2, h: 2, c: "#06130b" },
        // Center mouth stem
        { x: 3, y: 3, w: 2, h: 2, c: "#06130b" },
        // Mouth sides
        { x: 2, y: 4, w: 4, h: 3, c: "#06130b" },
        { x: 1, y: 6, w: 1, h: 2, c: "#06130b" },
        { x: 6, y: 6, w: 1, h: 2, c: "#06130b" },
      ]}
    />
  );
}

export function EndermanMobIcon() {
  return (
    <MobFace
      bg="#101015"
      glowColor="#a855f7"
      pixels={[
        // Glowing purple Enderman eyes
        { x: 0, y: 4, w: 3, h: 1, c: "#e879f9" },
        { x: 1, y: 4, w: 1, h: 1, c: "#ffffff" },
        { x: 5, y: 4, w: 3, h: 1, c: "#e879f9" },
        { x: 6, y: 4, w: 1, h: 1, c: "#ffffff" },
        // Mouth line
        { x: 2, y: 6, w: 4, h: 1, c: "#050508" },
      ]}
    />
  );
}

export function WitherMobIcon() {
  return (
    <MobFace
      bg="#18181f"
      glowColor="#00d9ff"
      pixels={[
        // Glowing cyan/soul eyes
        { x: 1, y: 2, w: 2, h: 1, c: "#8feaff" },
        { x: 5, y: 2, w: 2, h: 1, c: "#8feaff" },
        // Mouth / skeletal ribs
        { x: 2, y: 4, w: 4, h: 1, c: "#3f3f4e" },
        { x: 1, y: 5, w: 6, h: 1, c: "#101015" },
        { x: 2, y: 6, w: 4, h: 1, c: "#3f3f4e" },
      ]}
      accentElements={
        // Side mini skulls
        <>
          <rect x="0" y="10" width="3" height="3" fill="#272730" />
          <rect x="29" y="10" width="3" height="3" fill="#272730" />
        </>
      }
    />
  );
}

export function WardenMobIcon() {
  return (
    <MobFace
      bg="#052833"
      glowColor="#00d9ff"
      pixels={[
        // Sculk heart glow in blank face
        { x: 3, y: 4, w: 2, h: 2, c: "#00d9ff" },
        // Ribcage tooth-like sculk jaws
        { x: 1, y: 6, w: 6, h: 1, c: "#03141a" },
        { x: 2, y: 7, w: 1, h: 1, c: "#087bff" },
        { x: 5, y: 7, w: 1, h: 1, c: "#087bff" },
      ]}
      accentElements={
        // Warden iconic acoustic sculk horns / antennae
        <g fill="#00d9ff">
          <path d="M2 4L0 0H4L3 4Z" opacity="0.85" />
          <path d="M30 4L32 0H28L29 4Z" opacity="0.85" />
        </g>
      }
    />
  );
}

/* =========================================================================
   INTEL PLATINUM VPS MOB ICONS
   Blaze, Spider, Pillager, Evoker, Ravager, Ender Dragon
   ========================================================================= */

export function BlazeMobIcon() {
  return (
    <MobFace
      bg="#b45309"
      glowColor="#f59e0b"
      pixels={[
        // Fiery eyes
        { x: 2, y: 3, w: 1, h: 1, c: "#fef08a" },
        { x: 5, y: 3, w: 1, h: 1, c: "#fef08a" },
        // Forehead rod highlights
        { x: 2, y: 1, w: 4, h: 1, c: "#f59e0b" },
        { x: 3, y: 5, w: 2, h: 2, c: "#78350f" },
      ]}
      accentElements={
        // Floating blaze smoke rods around head
        <g fill="#f59e0b">
          <rect x="0" y="8" width="2" height="12" rx="1" opacity="0.8" />
          <rect x="30" y="8" width="2" height="12" rx="1" opacity="0.8" />
        </g>
      }
    />
  );
}

export function SpiderMobIcon() {
  return (
    <MobFace
      bg="#1e1e24"
      glowColor="#ef4444"
      pixels={[
        // 8 Glowing Red Spider Eyes
        { x: 1, y: 4, w: 2, h: 1, c: "#ef4444" },
        { x: 5, y: 4, w: 2, h: 1, c: "#ef4444" },
        { x: 0, y: 5, w: 1, h: 1, c: "#b91c1c" },
        { x: 7, y: 5, w: 1, h: 1, c: "#b91c1c" },
        { x: 2, y: 6, w: 1, h: 1, c: "#991b1b" },
        { x: 5, y: 6, w: 1, h: 1, c: "#991b1b" },
      ]}
    />
  );
}

export function PillagerMobIcon() {
  return (
    <MobFace
      bg="#848994"
      glowColor="#64748b"
      pixels={[
        // Illager furrowed brow
        { x: 2, y: 2, w: 4, h: 1, c: "#475569" },
        // Green illager eyes
        { x: 2, y: 3, w: 1, h: 1, c: "#10b981" },
        { x: 5, y: 3, w: 1, h: 1, c: "#10b981" },
        // Long prominent illager nose
        { x: 3, y: 4, w: 2, h: 3, c: "#64748b" },
      ]}
    />
  );
}

export function EvokerMobIcon() {
  return (
    <MobFace
      bg="#71717a"
      glowColor="#facc15"
      pixels={[
        // Brow
        { x: 2, y: 2, w: 4, h: 1, c: "#3f3f46" },
        // Golden glowing spell-casting eyes
        { x: 2, y: 3, w: 1, h: 1, c: "#fde047" },
        { x: 5, y: 3, w: 1, h: 1, c: "#fde047" },
        // Nose
        { x: 3, y: 4, w: 2, h: 3, c: "#52525b" },
      ]}
      accentElements={
        // Evoker golden robe collar trim
        <polygon points="4,28 16,24 28,28 16,30" fill="#facc15" />
      }
    />
  );
}

export function RavagerMobIcon() {
  return (
    <MobFace
      bg="#52525b"
      glowColor="#94a3b8"
      pixels={[
        // Armored brow
        { x: 1, y: 1, w: 6, h: 1, c: "#27272a" },
        // Angry blue eyes
        { x: 1, y: 3, w: 1, h: 1, c: "#38bdf8" },
        { x: 6, y: 3, w: 1, h: 1, c: "#38bdf8" },
        // Snout
        { x: 2, y: 4, w: 4, h: 3, c: "#3f3f46" },
      ]}
      accentElements={
        // Heavy curved horns
        <g fill="#a1a1aa">
          <polygon points="4,4 1,0 6,1" />
          <polygon points="28,4 31,0 26,1" />
        </g>
      }
    />
  );
}

export function EnderDragonMobIcon() {
  return (
    <MobFace
      bg="#0c0d12"
      glowColor="#d946ef"
      pixels={[
        // Glowing purple dragon eyes
        { x: 1, y: 3, w: 2, h: 1, c: "#d946ef" },
        { x: 1, y: 3, w: 1, h: 1, c: "#ffffff" },
        { x: 5, y: 3, w: 2, h: 1, c: "#d946ef" },
        { x: 6, y: 3, w: 1, h: 1, c: "#ffffff" },
        // Dragon snout
        { x: 2, y: 5, w: 4, h: 2, c: "#18181b" },
        { x: 3, y: 6, w: 2, h: 1, c: "#27272a" },
      ]}
      accentElements={
        // Dragon crest spikes
        <g fill="#27272a">
          <polygon points="12,4 16,0 20,4" />
        </g>
      }
    />
  );
}

/* =========================================================================
   AMD RYZEN VPS MOB ICONS
   Shulker, Allay, Breeze, Strider, Vex, Magma Cube, Elder Guardian
   ========================================================================= */

export function ShulkerMobIcon() {
  return (
    <MobFace
      bg="#7e57c2"
      glowColor="#a855f7"
      pixels={[
        // Peeking yellow eyes inside shell slit
        { x: 0, y: 3, w: 8, h: 2, c: "#2e1065" },
        { x: 2, y: 3, w: 1, h: 1, c: "#fde047" },
        { x: 5, y: 3, w: 1, h: 1, c: "#fde047" },
      ]}
    />
  );
}

export function AllayMobIcon() {
  return (
    <MobFace
      bg="#38bdf8"
      glowColor="#38bdf8"
      pixels={[
        // Cute big fairy eyes
        { x: 2, y: 3, w: 1, h: 2, c: "#0369a1" },
        { x: 2, y: 3, w: 1, h: 1, c: "#ffffff" },
        { x: 5, y: 3, w: 1, h: 2, c: "#0369a1" },
        { x: 5, y: 3, w: 1, h: 1, c: "#ffffff" },
      ]}
      accentElements={
        // Translucent fairy wings
        <g fill="#bae6fd" opacity="0.75">
          <polygon points="4,10 0,6 2,16" />
          <polygon points="28,10 32,6 30,16" />
        </g>
      }
    />
  );
}

export function BreezeMobIcon() {
  return (
    <MobFace
      bg="#67e8f9"
      glowColor="#00d9ff"
      pixels={[
        // Purple glowing wind eyes
        { x: 1, y: 3, w: 2, h: 1, c: "#c084fc" },
        { x: 5, y: 3, w: 2, h: 1, c: "#c084fc" },
        // Wind swirl
        { x: 2, y: 5, w: 4, h: 1, c: "#a5f3fc" },
      ]}
      accentElements={
        // Swirling wind vortex lines
        <path d="M4 22 Q 16 26 28 22 Q 16 30 4 28" fill="#bae6fd" opacity="0.8" />
      }
    />
  );
}

export function StriderMobIcon() {
  return (
    <MobFace
      bg="#dc2626"
      glowColor="#ef4444"
      pixels={[
        // Depressed droopy eyes
        { x: 1, y: 3, w: 2, h: 1, c: "#ffffff" },
        { x: 2, y: 3, w: 1, h: 1, c: "#450a0a" },
        { x: 5, y: 3, w: 2, h: 1, c: "#ffffff" },
        { x: 5, y: 3, w: 1, h: 1, c: "#450a0a" },
        // Mouth
        { x: 2, y: 5, w: 4, h: 1, c: "#7f1d1d" },
      ]}
      accentElements={
        // Strider gray hair bristles
        <g stroke="#9ca3af" strokeWidth="1.5">
          <line x1="2" y1="8" x2="0" y2="14" />
          <line x1="30" y1="8" x2="32" y2="14" />
        </g>
      }
    />
  );
}

export function VexMobIcon() {
  return (
    <MobFace
      bg="#94a3b8"
      glowColor="#f43f5e"
      pixels={[
        // Angry glowing red eyes
        { x: 1, y: 3, w: 2, h: 1, c: "#f43f5e" },
        { x: 5, y: 3, w: 2, h: 1, c: "#f43f5e" },
        // Ghostly eyebrows
        { x: 1, y: 2, w: 2, h: 1, c: "#475569" },
        { x: 5, y: 2, w: 2, h: 1, c: "#475569" },
      ]}
      accentElements={
        // Ghost wings
        <polygon points="4,12 0,8 3,18" fill="#e2e8f0" opacity="0.65" />
      }
    />
  );
}

export function MagmaCubeMobIcon() {
  return (
    <MobFace
      bg="#2e1008"
      glowColor="#f97316"
      pixels={[
        // Glowing orange magma eyes
        { x: 1, y: 2, w: 2, h: 2, c: "#f97316" },
        { x: 2, y: 2, w: 1, h: 1, c: "#fef08a" },
        { x: 5, y: 2, w: 2, h: 2, c: "#f97316" },
        { x: 5, y: 2, w: 1, h: 1, c: "#fef08a" },
        // Molten lava core seams
        { x: 0, y: 5, w: 8, h: 1, c: "#ea580c" },
        { x: 1, y: 6, w: 6, h: 1, c: "#c2410c" },
      ]}
    />
  );
}

export function ElderGuardianMobIcon() {
  return (
    <MobFace
      bg="#d4d4d8"
      glowColor="#38bdf8"
      pixels={[
        // Giant single cyclops eye
        { x: 3, y: 2, w: 2, h: 3, c: "#0284c7" },
        { x: 3, y: 3, w: 2, h: 1, c: "#f43f5e" },
        { x: 3, y: 3, w: 1, h: 1, c: "#ffffff" },
        // Spikes on head
        { x: 1, y: 6, w: 6, h: 1, c: "#71717a" },
      ]}
      accentElements={
        // Sea temple spikes
        <g fill="#71717a">
          <polygon points="4,8 0,4 2,12" />
          <polygon points="28,8 32,4 30,12" />
          <polygon points="16,4 12,0 20,0" />
        </g>
      }
    />
  );
}

// Icon registry mapping plan keys to authentic Minecraft components
export const MINECRAFT_GAME_ICONS: Record<string, React.FC> = {
  // Basic Blocks
  dirt: DirtBlockIcon,
  stone: StoneBlockIcon,
  copper: CopperBlockIcon,
  iron: IronBlockIcon,
  gold: GoldBlockIcon,
  emerald: EmeraldBlockIcon,
  diamond: DiamondBlockIcon,
  netherite: NetheriteBlockIcon,
  // Ultimate Mobs
  zombie: ZombieMobIcon,
  skeleton: SkeletonMobIcon,
  creeper: CreeperMobIcon,
  enderman: EndermanMobIcon,
  wither: WitherMobIcon,
  warden: WardenMobIcon,
  // Intel VPS Mobs
  blaze: BlazeMobIcon,
  spider: SpiderMobIcon,
  pillager: PillagerMobIcon,
  evoker: EvokerMobIcon,
  ravager: RavagerMobIcon,
  enderdragon: EnderDragonMobIcon,
  // AMD Ryzen VPS Mobs
  shulker: ShulkerMobIcon,
  allay: AllayMobIcon,
  breeze: BreezeMobIcon,
  strider: StriderMobIcon,
  vex: VexMobIcon,
  magmacube: MagmaCubeMobIcon,
  elderguardian: ElderGuardianMobIcon,
};

export default function GameIcon({ name, className = "h-8 w-8" }: { name: string; className?: string }) {
  const IconComponent = MINECRAFT_GAME_ICONS[name.toLowerCase()] ?? DirtBlockIcon;
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <IconComponent />
    </div>
  );
}
