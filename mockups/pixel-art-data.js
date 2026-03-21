const PIXEL_ART_MOCKUPS = {
    sofa: {
        v1: `<svg viewBox="0 0 52 52"> <!-- Disney: Beauty and the Beast -->
            <path d="M4 24 Q4 18 12 18 L40 18 Q48 18 48 24 L48 40 L4 40 Z" fill="#991b1b"/> <!-- Crimson Velvet -->
            <path d="M6 20 Q6 12 26 12 Q46 12 46 20 L46 30 L6 30 Z" fill="#b91c1c"/>
            <path d="M4 24 Q26 28 48 24" fill="none" stroke="#fbbf24" stroke-width="2"/> <!-- Gold Trim -->
            <circle cx="12" cy="22" r="1.5" fill="#fcd34d"/> <!-- Tufted buttons -->
            <circle cx="26" cy="22" r="1.5" fill="#fcd34d"/>
            <circle cx="40" cy="22" r="1.5" fill="#fcd34d"/>
            <path d="M10 40 Q8 48 6 48 M42 40 Q44 48 46 48" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round"/> <!-- Ornate legs -->
            <path d="M22 24 Q26 26 30 24" fill="none" stroke="white" stroke-width="1" opacity="0.2"/> <!-- Subtle smile -->
        </svg>`,
        v2: `<svg viewBox="0 0 52 52"> <!-- Super Mario -->
            <rect x="4" y="20" width="44" height="22" rx="4" fill="#ef4444" stroke="#000" stroke-width="3"/>
            <rect x="4" y="12" width="44" height="12" rx="6" fill="#f87171" stroke="#000" stroke-width="3"/>
            <rect x="2" y="24" width="10" height="14" rx="4" fill="#ef4444" stroke="#000" stroke-width="3"/>
            <rect x="40" y="24" width="10" height="14" rx="4" fill="#ef4444" stroke="#000" stroke-width="3"/>
            <rect x="10" y="16" width="10" height="4" rx="2" fill="white" opacity="0.4"/> <!-- Mario Sheen -->
            <circle cx="26" cy="30" r="4" fill="#fbbf24" stroke="#000" stroke-width="2"/> <!-- Question Mark button? -->
            <path d="M25 32 L25 28 Q25 27 27 27" fill="none" stroke="black" stroke-width="1.5"/>
        </svg>`,
        v3: `<svg viewBox="0 0 52 52"> <!-- Civilization -->
            <path d="M26 4 L46 14 L46 38 L26 48 L6 38 L6 14 Z" fill="#1e293b" stroke="#06b6d4" stroke-width="1"/> <!-- Hex Tile -->
            <path d="M26 6 L42 16 L42 36 L26 46 L10 36 L10 16 Z" fill="#0f172a" opacity="0.5"/>
            <g transform="translate(13, 18) scale(0.5)">
                <rect x="4" y="20" width="44" height="22" rx="2" fill="#94a3b8"/>
                <rect x="4" y="10" width="44" height="14" rx="4" fill="#cbd5e1"/>
                <rect x="2" y="22" width="8" height="16" fill="#64748b"/>
                <rect x="42" y="22" width="8" height="16" fill="#64748b"/>
            </g>
            <path d="M26 10 L40 18" stroke="#06b6d4" stroke-width="0.5" opacity="0.3"/>
        </svg>`
    },
    tv: {
        v1: `<svg viewBox="0 0 52 52"> <!-- Disney: Enchanted Window -->
            <rect x="6" y="6" width="40" height="34" rx="20" fill="#451a03" stroke="#fbbf24" stroke-width="3"/>
            <rect x="10" y="10" width="32" height="26" rx="15" fill="#1e1b4b"/>
            <path d="M10 10 Q26 15 42 10 L42 20 Q26 25 10 20 Z" fill="white" opacity="0.1"/>
            <path d="M26 6 L26 2 M20 8 L16 4 M32 8 L36 4" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
            <circle cx="26" cy="42" r="3" fill="#fbbf24"/>
        </svg>`,
        v2: `<svg viewBox="0 0 52 52"> <!-- Super Mario -->
            <rect x="4" y="8" width="44" height="34" rx="4" fill="#3b82f6" stroke="black" stroke-width="3"/>
            <rect x="8" y="12" width="30" height="26" rx="2" fill="#000" stroke="black" stroke-width="2"/>
            <path d="M8 12 L38 12 L38 20 L8 20 Z" fill="white" opacity="0.2"/>
            <circle cx="42" cy="18" r="3" fill="#22c55e" stroke="black" stroke-width="2"/> <!-- Green Shell green -->
            <circle cx="42" cy="28" r="3" fill="#ef4444" stroke="black" stroke-width="2"/>
            <path d="M20 8 L15 2 M32 8 L37 2" stroke="black" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        v3: `<svg viewBox="0 0 52 52"> <!-- Civilization: Mass Media -->
            <path d="M26 4 L46 14 L46 38 L26 48 L6 38 L6 14 Z" fill="#1e293b" stroke="#06b6d4" stroke-width="1"/>
            <rect x="14" y="16" width="24" height="18" fill="#94a3b8"/>
            <rect x="16" y="18" width="20" height="14" fill="#0ea5e9" opacity="0.8"/>
            <path d="M16 18 L36 18 L16 25 Z" fill="white" opacity="0.3"/>
            <path d="M26 34 L26 42 M18 42 L34 42" stroke="#64748b" stroke-width="2"/>
        </svg>`
    },
    globe: {
        v1: `<svg viewBox="0 0 52 52"> <!-- Disney: Maurice's Invention -->
            <circle cx="26" cy="20" r="18" fill="#1d4ed8"/>
            <path d="M15 15 Q20 18 22 25 T35 30" fill="#fbbf24" opacity="0.6"/> <!-- Golden Lands -->
            <path d="M26 2 A20 20 0 0 1 26 38" fill="none" stroke="#fbbf24" stroke-width="4"/>
            <path d="M26 2 A20 20 0 0 1 26 38" fill="none" stroke="#d97706" stroke-width="1.5"/>
            <rect x="24" y="38" width="4" height="10" fill="#92400e"/>
            <rect x="14" y="48" width="24" height="4" rx="2" fill="#451a03"/>
            <circle cx="20" cy="12" r="3" fill="white" opacity="0.2"/>
        </svg>`,
        v2: `<svg viewBox="0 0 52 52"> <!-- Super Mario: Galaxy style -->
            <circle cx="26" cy="22" r="18" fill="#22c55e" stroke="black" stroke-width="3"/>
            <circle cx="26" cy="22" r="14" fill="#4ade80"/>
            <rect x="18" y="14" width="6" height="6" rx="1" fill="white"/> <!-- Mario Block land -->
            <rect x="28" y="26" width="8" height="8" rx="1" fill="#fde68a"/> <!-- Desert land -->
            <path d="M26 4 A18 18 0 0 1 26 40" fill="none" stroke="black" stroke-width="2"/>
            <rect x="16" y="46" width="20" height="4" rx="2" fill="#ef4444" stroke="black" stroke-width="2"/>
        </svg>`,
        v3: `<svg viewBox="0 0 52 52"> <!-- Civilization: Discovery -->
            <path d="M26 4 L46 14 L46 38 L26 48 L6 38 L6 14 Z" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
            <circle cx="26" cy="24" r="12" fill="#3b82f6"/>
            <path d="M20 20 Q24 22 22 28 T32 32" fill="#22c55e"/>
            <path d="M26 12 A12 12 0 0 1 26 36" fill="none" stroke="#fbbf24" stroke-width="2"/>
            <circle cx="26" cy="24" r="12" fill="none" stroke="#fbbf24" stroke-width="0.5" opacity="0.5"/>
        </svg>`
    },
    bed: {
        v1: `<svg viewBox="0 0 52 52"> <!-- Disney: Royal Canopy -->
            <rect x="6" y="4" width="4" height="44" fill="#fbbf24"/> <!-- Gold Posts -->
            <rect x="42" y="4" width="4" height="44" fill="#fbbf24"/>
            <path d="M6 4 L46 4 L46 12 Q26 8 6 12 Z" fill="#991b1b"/> <!-- Velvet Canopy -->
            <rect x="8" y="28" width="36" height="16" rx="2" fill="#b91c1c"/>
            <rect x="10" y="30" width="12" height="8" rx="1" fill="white"/>
            <rect x="24" y="30" width="18" height="12" rx="1" fill="#fbbf24" opacity="0.3"/>
            <path d="M6 12 L6 30 M46 12 L46 30" stroke="#fca5a5" stroke-width="1" opacity="0.4"/> <!-- Silk curtains -->
        </svg>`,
        v2: `<svg viewBox="0 0 52 52"> <!-- Super Mario: Pipe Bed -->
            <rect x="6" y="24" width="40" height="20" rx="2" fill="#22c55e" stroke="black" stroke-width="3"/>
            <rect x="4" y="20" width="44" height="8" rx="2" fill="#16a34a" stroke="black" stroke-width="3"/>
            <rect x="10" y="14" width="32" height="10" rx="4" fill="white" stroke="black" stroke-width="2"/> <!-- Cloud pillow -->
            <rect x="8" y="22" width="10" height="4" fill="white" opacity="0.3"/> <!-- Pipe sheen -->
            <path d="M12 32 L40 32" stroke="black" stroke-width="2" stroke-dasharray="4,2"/>
        </svg>`,
        v3: `<svg viewBox="0 0 52 52"> <!-- Civilization: Housing -->
            <path d="M26 4 L46 14 L46 38 L26 48 L6 38 L6 14 Z" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
            <path d="M12 30 L40 30 L40 40 L12 40 Z" fill="#94a3b8"/>
            <path d="M12 20 L26 10 L40 20 L40 30 L12 30 Z" fill="#475569"/>
            <rect x="18" y="32" width="4" height="8" fill="#1e293b"/> <!-- Tiny door -->
            <rect x="28" y="22" width="6" height="4" fill="#0ea5e9" opacity="0.5"/> <!-- Tiny window -->
        </svg>`
    },
    mirror: {
        v1: `<svg viewBox="0 0 52 52"> <!-- Disney: Magic Mirror -->
            <rect x="10" y="2" width="32" height="44" rx="16" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
            <rect x="14" y="6" width="24" height="36" rx="12" fill="#1e1b4b"/> <!-- Dark mystical glass -->
            <path d="M14 6 Q25 6 38 22 L38 32 Q25 42 14 32 Z" fill="#818cf8" opacity="0.2"/>
            <path d="M20 12 L24 12 M20 16 L22 16" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/> <!-- Ornate etchings -->
            <rect x="22" y="46" width="8" height="4" fill="#92400e"/>
        </svg>`,
        v2: `<svg viewBox="0 0 52 52"> <!-- Super Mario: Star Mirror -->
            <path d="M26 2 L31 18 L48 18 L35 28 L40 44 L26 34 L12 44 L17 28 L4 18 L21 18 Z" fill="#fbbf24" stroke="black" stroke-width="3"/>
            <path d="M26 8 L29 20 L42 20 L32 28 L36 40 L26 32 L16 40 L20 28 L10 20 L23 20 Z" fill="#bfdbfe" stroke="black" stroke-width="1"/>
            <circle cx="22" cy="24" r="2" fill="black"/> <!-- Eyes -->
            <circle cx="30" cy="24" r="2" fill="black"/>
            <rect x="18" y="18" width="4" height="2" fill="white" opacity="0.5"/>
        </svg>`,
        v3: `<svg viewBox="0 0 52 52"> <!-- Civilization: Luxury Resource -->
            <path d="M26 4 L46 14 L46 38 L26 48 L6 38 L6 14 Z" fill="#1e293b" stroke="#9333ea" stroke-width="1"/>
            <path d="M26 12 L38 24 L26 36 L14 24 Z" fill="#bfdbfe"/> <!-- Diamond/Mirror icon -->
            <path d="M26 12 L26 36 M14 24 L38 24" stroke="white" stroke-width="1" opacity="0.5"/>
            <path d="M14 24 L26 12 L30 20 Z" fill="white" opacity="0.3"/>
            <circle cx="26" cy="44" r="2" fill="#9333ea" opacity="0.8"/>
        </svg>`
    }
};
