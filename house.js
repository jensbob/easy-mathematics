// Flat-design SVG icons for all shop items (52×52 viewBox)
const ITEM_SVGS = {
    sofa: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="6" y="10" width="40" height="22" rx="6" fill="#6366f1"/>
        <rect x="6" y="22" width="40" height="14" rx="4" fill="#818cf8"/>
        <rect x="2" y="20" width="10" height="18" rx="4" fill="#6366f1"/>
        <rect x="40" y="20" width="10" height="18" rx="4" fill="#6366f1"/>
        <rect x="10" y="36" width="6" height="8" rx="2" fill="#4338ca"/>
        <rect x="36" y="36" width="6" height="8" rx="2" fill="#4338ca"/>
    </svg>`,

    tv: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="2" y="6" width="48" height="30" rx="4" fill="#1e293b"/>
        <rect x="5" y="9" width="42" height="24" rx="2" fill="#0ea5e9"/>
        <rect x="20" y="36" width="12" height="4" rx="2" fill="#64748b"/>
        <rect x="14" y="40" width="24" height="4" rx="2" fill="#94a3b8"/>
        <circle cx="38" cy="30" r="2" fill="#10b981"/>
    </svg>`,

    globe: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="23" y="44" width="6" height="6" rx="1" fill="#92400e"/>
        <rect x="18" y="48" width="16" height="3" rx="1.5" fill="#78350f"/>
        <rect x="24" y="38" width="4" height="8" rx="1" fill="#92400e"/>
        <circle cx="26" cy="22" r="18" fill="#3b82f6"/>
        <ellipse cx="26" cy="22" rx="8" ry="18" fill="none" stroke="#60a5fa" stroke-width="1.5"/>
        <ellipse cx="26" cy="22" rx="18" ry="6" fill="none" stroke="#60a5fa" stroke-width="1.5"/>
        <line x1="8" y1="22" x2="44" y2="22" stroke="#60a5fa" stroke-width="1.5"/>
        <line x1="26" y1="4" x2="26" y2="40" stroke="#60a5fa" stroke-width="1.5"/>
        <ellipse cx="20" cy="16" rx="5" ry="3" fill="#22c55e" transform="rotate(-20 20 16)"/>
        <ellipse cx="32" cy="26" rx="4" ry="2.5" fill="#22c55e" transform="rotate(10 32 26)"/>
        <ellipse cx="18" cy="28" rx="3" ry="2" fill="#22c55e"/>
    </svg>`,


    bed: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="4" y="28" width="44" height="16" rx="4" fill="#92400e"/>
        <rect x="6" y="24" width="40" height="18" rx="3" fill="#fef3c7"/>
        <rect x="8" y="26" width="14" height="10" rx="4" fill="white"/>
        <rect x="24" y="26" width="22" height="12" rx="3" fill="#818cf8"/>
        <rect x="4" y="16" width="44" height="14" rx="4" fill="#a16207"/>
        <rect x="8" y="44" width="6" height="6" rx="2" fill="#78350f"/>
        <rect x="38" y="44" width="6" height="6" rx="2" fill="#78350f"/>
    </svg>`,

    mirror: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="12" y="2" width="28" height="40" rx="14" fill="#d97706"/>
        <rect x="16" y="6" width="20" height="32" rx="10" fill="#bfdbfe"/>
        <rect x="19" y="10" width="4" height="12" rx="2" fill="rgba(255,255,255,0.6)"/>
        <rect x="22" y="42" width="8" height="6" rx="2" fill="#b45309"/>
        <rect x="16" y="46" width="20" height="4" rx="2" fill="#92400e"/>
    </svg>`,

    plushy: `<svg width="52" height="52" viewBox="0 0 52 52">
        <ellipse cx="26" cy="32" rx="16" ry="14" fill="#f9a8d4"/>
        <circle cx="26" cy="18" r="12" fill="#f9a8d4"/>
        <circle cx="14" cy="14" r="7" fill="#fbcfe8"/>
        <circle cx="38" cy="14" r="7" fill="#fbcfe8"/>
        <circle cx="20" cy="16" r="4" fill="#1e293b"/>
        <circle cx="32" cy="16" r="4" fill="#1e293b"/>
        <circle cx="21" cy="15" r="1.5" fill="white"/>
        <circle cx="33" cy="15" r="1.5" fill="white"/>
        <ellipse cx="26" cy="22" rx="4" ry="3" fill="#f472b6"/>
        <path d="M22 26 Q26 30 30 26" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="12" cy="34" rx="6" ry="8" fill="#fbcfe8"/>
        <ellipse cx="40" cy="34" rx="6" ry="8" fill="#fbcfe8"/>
        <ellipse cx="20" cy="46" rx="7" ry="5" fill="#fbcfe8"/>
        <ellipse cx="32" cy="46" rx="7" ry="5" fill="#fbcfe8"/>
    </svg>`,

    ball: `<svg width="52" height="52" viewBox="0 0 52 52">
        <path d="M26 26 L26 4 A22 22 0 0 1 45 15 Z" fill="#ef4444"/>
        <path d="M26 26 L45 15 A22 22 0 0 1 45 37 Z" fill="#fbbf24"/>
        <path d="M26 26 L45 37 A22 22 0 0 1 26 48 Z" fill="#22c55e"/>
        <path d="M26 26 L26 48 A22 22 0 0 1 7 37 Z" fill="#3b82f6"/>
        <path d="M26 26 L7 37 A22 22 0 0 1 7 15 Z" fill="#f97316"/>
        <path d="M26 26 L7 15 A22 22 0 0 1 26 4 Z" fill="#ec4899"/>
        <line x1="26" y1="4" x2="26" y2="48" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
        <line x1="7" y1="15" x2="45" y2="37" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
        <line x1="7" y1="37" x2="45" y2="15" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
        <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
        <ellipse cx="17" cy="15" rx="7" ry="5" fill="rgba(255,255,255,0.25)" transform="rotate(-30 17 15)"/>
    </svg>`,

    closet: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="4" y="3" width="44" height="47" rx="4" fill="#92400e"/>
        <rect x="6" y="5" width="19" height="43" rx="2" fill="#b45309"/>
        <rect x="27" y="5" width="19" height="43" rx="2" fill="#b45309"/>
        <line x1="26" y1="5" x2="26" y2="48" stroke="#78350f" stroke-width="2"/>
        <circle cx="22" cy="27" r="2.5" fill="#fbbf24"/>
        <circle cx="30" cy="27" r="2.5" fill="#fbbf24"/>
        <rect x="6" y="1" width="40" height="4" rx="2" fill="#78350f"/>
    </svg>`,

    fridge: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="10" y="2" width="32" height="48" rx="6" fill="#e2e8f0"/>
        <rect x="10" y="2" width="32" height="19" rx="6" fill="#cbd5e1"/>
        <rect x="10" y="18" width="32" height="3" fill="#94a3b8"/>
        <rect x="14" y="7" width="4" height="10" rx="2" fill="#94a3b8"/>
        <rect x="14" y="27" width="4" height="16" rx="2" fill="#94a3b8"/>
        <circle cx="38" cy="12" r="2.5" fill="#10b981"/>
        <rect x="18" y="30" width="16" height="4" rx="1" fill="#bfdbfe"/>
        <rect x="18" y="36" width="10" height="4" rx="1" fill="#a7f3d0"/>
    </svg>`,

    icecream: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="8" y="4" width="36" height="34" rx="5" fill="#f1f5f9"/>
        <rect x="8" y="4" width="36" height="10" rx="5" fill="#e2e8f0"/>
        <rect x="8" y="9" width="36" height="5" fill="#e2e8f0"/>
        <rect x="11" y="6" width="18" height="5" rx="2" fill="#7dd3fc"/>
        <circle cx="35" cy="8" r="2.5" fill="#4ade80"/>
        <circle cx="41" cy="8" r="2.5" fill="#fbbf24"/>
        <rect x="10" y="16" width="14" height="16" rx="3" fill="#fce7f3"/>
        <ellipse cx="17" cy="22" rx="5" ry="4" fill="#fda4af"/>
        <rect x="28" y="16" width="14" height="16" rx="3" fill="#dbeafe"/>
        <ellipse cx="35" cy="22" rx="5" ry="4" fill="#93c5fd"/>
        <rect x="11" y="30" width="12" height="5" rx="2.5" fill="#ec4899"/>
        <rect x="29" y="30" width="12" height="5" rx="2.5" fill="#3b82f6"/>
        <rect x="15" y="34" width="4" height="6" rx="1.5" fill="#94a3b8"/>
        <rect x="33" y="34" width="4" height="6" rx="1.5" fill="#94a3b8"/>
        <rect x="8" y="38" width="36" height="4" rx="2" fill="#94a3b8"/>
        <rect x="6" y="41" width="40" height="4" rx="2" fill="#64748b"/>
        <path d="M17 44 Q14 46 17 48 Q20 50 17 51" fill="none" stroke="#fda4af" stroke-width="4" stroke-linecap="round"/>
        <path d="M35 44 Q32 46 35 48 Q38 50 35 51" fill="none" stroke="#93c5fd" stroke-width="4" stroke-linecap="round"/>
    </svg>`,

    pizza: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="4" y="20" width="44" height="28" rx="6" fill="#b45309"/>
        <rect x="8" y="24" width="36" height="20" rx="4" fill="#1e293b"/>
        <rect x="12" y="28" width="28" height="12" rx="3" fill="#f97316"/>
        <circle cx="26" cy="34" r="8" fill="#fef3c7"/>
        <circle cx="26" cy="34" r="6" fill="#ef4444"/>
        <circle cx="23" cy="32" r="2" fill="#92400e"/>
        <circle cx="30" cy="33" r="2" fill="#22c55e"/>
        <circle cx="26" cy="37" r="1.5" fill="#fbbf24"/>
        <rect x="20" y="8" width="12" height="14" rx="3" fill="#92400e"/>
        <rect x="22" y="4" width="8" height="6" rx="2" fill="#78350f"/>
    </svg>`,

    lunchbox: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="6" y="22" width="40" height="26" rx="6" fill="#f97316"/>
        <rect x="6" y="22" width="40" height="5" rx="3" fill="#ea580c"/>
        <rect x="18" y="14" width="16" height="10" rx="4" fill="#ea580c"/>
        <rect x="22" y="12" width="8" height="4" rx="2" fill="#c2410c"/>
        <rect x="10" y="30" width="32" height="14" rx="3" fill="#fed7aa"/>
        <rect x="12" y="32" width="10" height="4" rx="2" fill="#fbbf24"/>
        <rect x="12" y="38" width="14" height="4" rx="2" fill="#86efac"/>
        <rect x="28" y="32" width="12" height="10" rx="2" fill="#fca5a5"/>
        <rect x="23" y="20" width="6" height="4" rx="2" fill="#fbbf24"/>
    </svg>`,

    candy: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="16" y="2" width="20" height="6" rx="3" fill="#b91c1c"/>
        <rect x="12" y="6" width="28" height="7" rx="3.5" fill="#dc2626"/>
        <rect x="10" y="11" width="32" height="37" rx="6" fill="#fef9c3" opacity="0.9"/>
        <rect x="12" y="13" width="7" height="28" rx="3.5" fill="rgba(255,255,255,0.25)"/>
        <circle cx="19" cy="24" r="6" fill="#ef4444"/>
        <circle cx="31" cy="22" r="6" fill="#3b82f6"/>
        <circle cx="23" cy="34" r="6" fill="#22c55e"/>
        <circle cx="35" cy="33" r="6" fill="#f97316"/>
        <circle cx="19" cy="41" r="5" fill="#a855f7"/>
        <circle cx="33" cy="43" r="5" fill="#ec4899"/>
        <circle cx="17" cy="22" r="2.5" fill="rgba(255,255,255,0.45)"/>
        <circle cx="29" cy="20" r="2.5" fill="rgba(255,255,255,0.45)"/>
        <circle cx="21" cy="32" r="2.5" fill="rgba(255,255,255,0.45)"/>
        <circle cx="33" cy="31" r="2.5" fill="rgba(255,255,255,0.45)"/>
        <rect x="10" y="11" width="32" height="37" rx="6" fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
    </svg>`,

    garden: `<svg width="52" height="52" viewBox="0 0 52 52">
        <ellipse cx="26" cy="49" rx="22" ry="3" fill="#86efac"/>
        <rect x="25" y="24" width="2" height="26" rx="1" fill="#16a34a"/>
        <rect x="15" y="30" width="2" height="20" rx="1" fill="#16a34a"/>
        <rect x="35" y="28" width="2" height="22" rx="1" fill="#16a34a"/>
        <ellipse cx="20" cy="36" rx="6" ry="3" fill="#22c55e" transform="rotate(-30 20 36)"/>
        <ellipse cx="32" cy="38" rx="6" ry="3" fill="#22c55e" transform="rotate(30 32 38)"/>
        <ellipse cx="26" cy="12" rx="3" ry="4.5" fill="#f9a8d4"/>
        <ellipse cx="26" cy="24" rx="3" ry="4.5" fill="#f9a8d4"/>
        <ellipse cx="19" cy="18" rx="4.5" ry="3" fill="#f9a8d4"/>
        <ellipse cx="33" cy="18" rx="4.5" ry="3" fill="#f9a8d4"/>
        <circle cx="26" cy="18" r="4" fill="#fbbf24"/>
        <ellipse cx="16" cy="20" rx="2.5" ry="3.5" fill="#c084fc"/>
        <ellipse cx="16" cy="28" rx="2.5" ry="3.5" fill="#c084fc"/>
        <ellipse cx="11" cy="24" rx="3.5" ry="2.5" fill="#c084fc"/>
        <ellipse cx="21" cy="24" rx="3.5" ry="2.5" fill="#c084fc"/>
        <circle cx="16" cy="24" r="2.5" fill="#fbbf24"/>
        <ellipse cx="36" cy="18" rx="2.5" ry="3.5" fill="#f87171"/>
        <ellipse cx="36" cy="26" rx="2.5" ry="3.5" fill="#f87171"/>
        <ellipse cx="31" cy="22" rx="3.5" ry="2.5" fill="#f87171"/>
        <ellipse cx="41" cy="22" rx="3.5" ry="2.5" fill="#f87171"/>
        <circle cx="36" cy="22" r="2.5" fill="#fbbf24"/>
    </svg>`,

    tree: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="22" y="36" width="8" height="14" rx="2" fill="#92400e"/>
        <ellipse cx="26" cy="28" rx="18" ry="18" fill="#22c55e"/>
        <ellipse cx="26" cy="20" rx="13" ry="13" fill="#4ade80"/>
        <ellipse cx="26" cy="14" rx="8" ry="8" fill="#86efac"/>
    </svg>`,

    sandbox: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="4" y="28" width="44" height="20" rx="4" fill="#92400e"/>
        <rect x="7" y="31" width="38" height="15" rx="2" fill="#fde68a"/>
        <ellipse cx="18" cy="32" rx="7" ry="2.5" fill="#fbbf24" opacity="0.6"/>
        <ellipse cx="36" cy="33" rx="6" ry="2" fill="#fbbf24" opacity="0.5"/>
        <rect x="20" y="18" width="12" height="14" rx="1" fill="#fbbf24"/>
        <rect x="19" y="14" width="3" height="6" rx="1" fill="#fbbf24"/>
        <rect x="23" y="14" width="3" height="6" rx="1" fill="#fbbf24"/>
        <rect x="27" y="14" width="3" height="6" rx="1" fill="#fbbf24"/>
        <rect x="31" y="14" width="2" height="6" rx="1" fill="#fbbf24"/>
        <rect x="23" y="25" width="6" height="7" rx="2" fill="#d97706"/>
        <circle cx="26" cy="12" r="2.5" fill="#f97316"/>
        <rect x="7" y="14" width="10" height="15" rx="1" fill="#ef4444"/>
        <rect x="6" y="12" width="12" height="4" rx="1.5" fill="#dc2626"/>
        <rect x="6" y="25" width="12" height="3" rx="1" fill="#fbbf24"/>
        <path d="M9 12 Q12 7 15 12" fill="none" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <rect x="36" y="8" width="4" height="22" rx="1.5" fill="#92400e"/>
        <path d="M34 8 Q38 3 42 8 L40 14 L36 14 Z" fill="#d97706"/>
    </svg>`,

    pool: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="4" y="20" width="44" height="26" rx="4" fill="#0ea5e9"/>
        <ellipse cx="26" cy="20" rx="22" ry="4" fill="#38bdf8"/>
        <path d="M4 30 Q13 26 22 30 Q31 34 40 30 Q44 28 48 30" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
        <rect x="6" y="10" width="4" height="12" rx="2" fill="#64748b"/>
        <rect x="42" y="10" width="4" height="12" rx="2" fill="#64748b"/>
        <rect x="2" y="8" width="48" height="4" rx="2" fill="#475569"/>
        <rect x="20" y="2" width="12" height="6" rx="2" fill="#fbbf24"/>
    </svg>`,

    console: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="6" y="8" width="40" height="28" rx="6" fill="#7c3aed"/>
        <rect x="14" y="36" width="24" height="8" rx="3" fill="#a78bfa"/>
        <rect x="8" y="44" width="36" height="6" rx="3" fill="#c4b5fd"/>
        <rect x="11" y="16" width="4" height="12" rx="2" fill="#ddd6fe"/>
        <rect x="9" y="20" width="8" height="4" rx="2" fill="#ddd6fe"/>
        <circle cx="35" cy="17" r="3" fill="#ef4444"/>
        <circle cx="42" cy="17" r="3" fill="#fbbf24"/>
        <circle cx="35" cy="24" r="3" fill="#22c55e"/>
        <circle cx="42" cy="24" r="3" fill="#0ea5e9"/>
        <circle cx="26" cy="20" r="4" fill="#6d28d9"/>
        <circle cx="26" cy="20" r="2" fill="#4c1d95"/>
    </svg>`,

    rocket: `<svg width="52" height="52" viewBox="0 0 52 52">
        <path d="M26 2 Q34 10 36 28 L26 34 L16 28 Q18 10 26 2 Z" fill="#e2e8f0"/>
        <path d="M26 2 Q30 10 31 28 L26 34 L26 2 Z" fill="#cbd5e1"/>
        <rect x="21" y="24" width="10" height="10" rx="2" fill="#6366f1"/>
        <circle cx="26" cy="18" r="5" fill="#bfdbfe"/>
        <circle cx="26" cy="18" r="3" fill="#7dd3fc"/>
        <path d="M16 28 L10 38 L16 36 Z" fill="#ef4444"/>
        <path d="M36 28 L42 38 L36 36 Z" fill="#ef4444"/>
        <path d="M20 34 Q18 42 22 48 L26 46 L30 48 Q34 42 32 34 L26 38 Z" fill="#f97316"/>
        <circle cx="22" cy="44" r="3" fill="#fbbf24" opacity="0.8"/>
        <circle cx="30" cy="44" r="3" fill="#fbbf24" opacity="0.8"/>
        <circle cx="26" cy="48" r="4" fill="#fbbf24" opacity="0.6"/>
    </svg>`,

    trampoline: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="8" y="30" width="4" height="18" rx="2" fill="#64748b"/>
        <rect x="40" y="30" width="4" height="18" rx="2" fill="#64748b"/>
        <rect x="5" y="44" width="14" height="5" rx="2" fill="#475569"/>
        <rect x="33" y="44" width="14" height="5" rx="2" fill="#475569"/>
        <ellipse cx="26" cy="30" rx="20" ry="6" fill="#475569"/>
        <ellipse cx="26" cy="28" rx="18" ry="5" fill="#22c55e"/>
        <line x1="8" y1="32" x2="14" y2="28" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="44" y1="32" x2="38" y2="28" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="18" y1="33" x2="20" y2="28" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="34" y1="33" x2="32" y2="28" stroke="#94a3b8" stroke-width="1.5"/>
        <circle cx="26" cy="14" r="5" fill="#fbbf24"/>
        <path d="M21 20 Q26 28 31 20" fill="#f97316"/>
        <line x1="21" y1="20" x2="18" y2="26" stroke="#f97316" stroke-width="2"/>
        <line x1="31" y1="20" x2="34" y2="26" stroke="#f97316" stroke-width="2"/>
    </svg>`,

    phone: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="14" y="2" width="24" height="48" rx="6" fill="#1e293b"/>
        <rect x="16" y="8" width="20" height="34" rx="2" fill="#0ea5e9"/>
        <circle cx="26" cy="47" r="2" fill="#475569"/>
        <rect x="22" y="4" width="8" height="2.5" rx="1.25" fill="#475569"/>
        <rect x="17" y="10" width="18" height="10" rx="1" fill="#7dd3fc"/>
        <rect x="17" y="23" width="8" height="8" rx="2" fill="#22c55e"/>
        <rect x="27" y="23" width="8" height="8" rx="2" fill="#f97316"/>
        <rect x="17" y="33" width="18" height="7" rx="2" fill="#818cf8"/>
    </svg>`,

    kite: `<svg width="52" height="52" viewBox="0 0 52 52">
        <polygon points="26,2 46,22 26,38 6,22" fill="#ef4444"/>
        <polygon points="26,2 46,22 26,20" fill="#fbbf24"/>
        <polygon points="6,22 26,20 26,38" fill="#f97316"/>
        <line x1="26" y1="2" x2="26" y2="38" stroke="white" stroke-width="1.5" opacity="0.6"/>
        <line x1="6" y1="22" x2="46" y2="22" stroke="white" stroke-width="1.5" opacity="0.6"/>
        <path d="M26 38 Q30 44 28 50" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        <circle cx="29" cy="43" r="2" fill="#a78bfa"/>
        <circle cx="27" cy="48" r="2" fill="#f9a8d4"/>
    </svg>`,

    car: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="2" y="28" width="48" height="14" rx="4" fill="#ef4444"/>
        <path d="M10 28 L16 16 L36 16 L42 28 Z" fill="#ef4444"/>
        <rect x="18" y="18" width="16" height="9" rx="2" fill="#bfdbfe"/>
        <circle cx="12" cy="43" r="7" fill="#1e293b"/>
        <circle cx="12" cy="43" r="3.5" fill="#64748b"/>
        <circle cx="40" cy="43" r="7" fill="#1e293b"/>
        <circle cx="40" cy="43" r="3.5" fill="#64748b"/>
        <rect x="36" y="30" width="10" height="4" rx="1" fill="#fbbf24"/>
        <rect x="6" y="30" width="8" height="4" rx="2" fill="#fca5a5"/>
    </svg>`,

    bicycle: `<svg width="52" height="52" viewBox="0 0 52 52">
        <circle cx="12" cy="38" r="10" fill="none" stroke="#6366f1" stroke-width="3"/>
        <circle cx="12" cy="38" r="2.5" fill="#6366f1"/>
        <line x1="12" y1="28" x2="12" y2="48" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="2" y1="38" x2="22" y2="38" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="5" y1="31" x2="19" y2="45" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="5" y1="45" x2="19" y2="31" stroke="#818cf8" stroke-width="1.5"/>
        <circle cx="40" cy="38" r="10" fill="none" stroke="#6366f1" stroke-width="3"/>
        <circle cx="40" cy="38" r="2.5" fill="#6366f1"/>
        <line x1="40" y1="28" x2="40" y2="48" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="30" y1="38" x2="50" y2="38" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="33" y1="31" x2="47" y2="45" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="33" y1="45" x2="47" y2="31" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="26" y1="36" x2="22" y2="20" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        <line x1="26" y1="36" x2="12" y2="38" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        <line x1="22" y1="20" x2="12" y2="38" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        <line x1="22" y1="20" x2="38" y2="20" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        <line x1="38" y1="20" x2="26" y2="36" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        <line x1="38" y1="20" x2="40" y2="38" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        <circle cx="26" cy="36" r="3.5" fill="#d97706"/>
        <line x1="22" y1="40" x2="30" y2="32" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        <rect x="19" y="39" width="6" height="2.5" rx="1.2" fill="#64748b"/>
        <rect x="27.5" y="31" width="6" height="2.5" rx="1.2" fill="#64748b"/>
        <rect x="20" y="9" width="3.5" height="13" rx="1.5" fill="#475569"/>
        <rect x="13" y="8" width="14" height="4" rx="2" fill="#1e293b"/>
        <rect x="36.5" y="9" width="3.5" height="13" rx="1.5" fill="#475569"/>
        <rect x="30" y="7" width="16" height="4" rx="2" fill="#1e293b"/>
        <rect x="29" y="7" width="4" height="8" rx="2" fill="#64748b"/>
        <rect x="43" y="7" width="4" height="8" rx="2" fill="#64748b"/>
    </svg>`,

    cat: `<svg width="52" height="52" viewBox="0 0 52 52">
        <ellipse cx="26" cy="38" rx="16" ry="12" fill="#fbbf24"/>
        <circle cx="26" cy="22" r="14" fill="#fbbf24"/>
        <polygon points="12,10 8,1 18,8" fill="#fbbf24"/>
        <polygon points="40,10 44,1 34,8" fill="#fbbf24"/>
        <polygon points="13,9 10,3 17,7" fill="#f9a8d4"/>
        <polygon points="39,9 42,3 35,7" fill="#f9a8d4"/>
        <ellipse cx="20" cy="21" rx="4" ry="5" fill="#22c55e"/>
        <ellipse cx="32" cy="21" rx="4" ry="5" fill="#22c55e"/>
        <ellipse cx="20" cy="21" rx="1.5" ry="4" fill="#1e293b"/>
        <ellipse cx="32" cy="21" rx="1.5" ry="4" fill="#1e293b"/>
        <polygon points="26,27 24,30 28,30" fill="#f9a8d4"/>
        <path d="M24 30 Q21 33 19 32" fill="none" stroke="#92400e" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M28 30 Q31 33 33 32" fill="none" stroke="#92400e" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="10" y1="27" x2="21" y2="28" stroke="#92400e" stroke-width="1"/>
        <line x1="10" y1="30" x2="21" y2="30" stroke="#92400e" stroke-width="1"/>
        <line x1="31" y1="28" x2="42" y2="27" stroke="#92400e" stroke-width="1"/>
        <line x1="31" y1="30" x2="42" y2="30" stroke="#92400e" stroke-width="1"/>
        <path d="M40 46 Q49 40 47 31 Q45 25 41 29" fill="none" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
    </svg>`,

    dog: `<svg width="52" height="52" viewBox="0 0 52 52">
        <ellipse cx="26" cy="38" rx="16" ry="12" fill="#d97706"/>
        <circle cx="26" cy="22" r="13" fill="#d97706"/>
        <ellipse cx="11" cy="20" rx="6" ry="10" fill="#b45309" transform="rotate(-10 11 20)"/>
        <ellipse cx="41" cy="20" rx="6" ry="10" fill="#b45309" transform="rotate(10 41 20)"/>
        <ellipse cx="26" cy="29" rx="8" ry="6" fill="#fbbf24"/>
        <ellipse cx="26" cy="25" rx="4" ry="3" fill="#1e293b"/>
        <ellipse cx="25" cy="24" rx="1.5" ry="1" fill="rgba(255,255,255,0.4)"/>
        <circle cx="19" cy="18" r="4" fill="#1e293b"/>
        <circle cx="33" cy="18" r="4" fill="#1e293b"/>
        <circle cx="20" cy="17" r="1.5" fill="white"/>
        <circle cx="34" cy="17" r="1.5" fill="white"/>
        <path d="M22 31 Q26 35 30 31" fill="none" stroke="#92400e" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="26" cy="34" rx="4" ry="3" fill="#f87171"/>
        <path d="M40 38 Q49 32 47 24" fill="none" stroke="#b45309" stroke-width="5" stroke-linecap="round"/>
        <circle cx="20" cy="38" r="4" fill="#b45309" opacity="0.4"/>
    </svg>`,

    hamster: `<svg width="52" height="52" viewBox="0 0 52 52">
        <ellipse cx="26" cy="36" rx="14" ry="10" fill="#fbbf24"/>
        <circle cx="26" cy="22" r="13" fill="#fbbf24"/>
        <ellipse cx="14" cy="18" rx="7" ry="6" fill="#fde68a"/>
        <ellipse cx="38" cy="18" rx="7" ry="6" fill="#fde68a"/>
        <ellipse cx="18" cy="26" rx="6" ry="4" fill="#fde68a"/>
        <ellipse cx="34" cy="26" rx="6" ry="4" fill="#fde68a"/>
        <circle cx="20" cy="19" r="3.5" fill="#1e293b"/>
        <circle cx="32" cy="19" r="3.5" fill="#1e293b"/>
        <circle cx="21" cy="18" r="1.5" fill="white"/>
        <circle cx="33" cy="18" r="1.5" fill="white"/>
        <ellipse cx="26" cy="25" rx="3" ry="2" fill="#f9a8d4"/>
        <path d="M23 27 Q26 30 29 27" fill="none" stroke="#d97706" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="14" y1="25" x2="22" y2="26" stroke="#d97706" stroke-width="1"/>
        <line x1="38" y1="25" x2="30" y2="26" stroke="#d97706" stroke-width="1"/>
        <ellipse cx="26" cy="42" rx="8" ry="4" fill="#fde68a"/>
    </svg>`,

    rabbit: `<svg width="52" height="52" viewBox="0 0 52 52">
        <ellipse cx="26" cy="38" rx="15" ry="11" fill="#e2e8f0"/>
        <circle cx="26" cy="24" r="13" fill="#e2e8f0"/>
        <ellipse cx="16" cy="8" rx="5" ry="12" fill="#e2e8f0"/>
        <ellipse cx="36" cy="8" rx="5" ry="12" fill="#e2e8f0"/>
        <ellipse cx="16" cy="8" rx="3" ry="9" fill="#f9a8d4"/>
        <ellipse cx="36" cy="8" rx="3" ry="9" fill="#f9a8d4"/>
        <circle cx="20" cy="21" r="4" fill="#1e293b"/>
        <circle cx="32" cy="21" r="4" fill="#1e293b"/>
        <circle cx="21" cy="20" r="1.5" fill="white"/>
        <circle cx="33" cy="20" r="1.5" fill="white"/>
        <ellipse cx="26" cy="27" rx="3" ry="2" fill="#f9a8d4"/>
        <path d="M23 29 Q26 32 29 29" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="14" y1="27" x2="22" y2="27" stroke="#94a3b8" stroke-width="1"/>
        <line x1="38" y1="27" x2="30" y2="27" stroke="#94a3b8" stroke-width="1"/>
        <ellipse cx="26" cy="44" rx="9" ry="5" fill="#cbd5e1"/>
        <ellipse cx="38" cy="40" rx="4" ry="3" fill="#cbd5e1"/>
    </svg>`,

    train: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="9" y="10" width="7" height="14" rx="2" fill="#7f1d1d"/>
        <rect x="7" y="8" width="11" height="4" rx="2" fill="#991b1b"/>
        <circle cx="13" cy="5" r="3.5" fill="#e2e8f0" opacity="0.9"/>
        <circle cx="19" cy="3" r="2.5" fill="#e2e8f0" opacity="0.65"/>
        <circle cx="24" cy="1" r="2" fill="#e2e8f0" opacity="0.4"/>
        <rect x="32" y="12" width="18" height="24" rx="3" fill="#b91c1c"/>
        <rect x="35" y="15" width="7" height="8" rx="2" fill="#bfdbfe"/>
        <rect x="44" y="15" width="4" height="8" rx="2" fill="#bfdbfe"/>
        <rect x="36" y="16" width="2" height="5" rx="1" fill="rgba(255,255,255,0.4)"/>
        <rect x="4" y="22" width="34" height="14" rx="7" fill="#dc2626"/>
        <ellipse cx="26" cy="22" rx="6" ry="4" fill="#991b1b"/>
        <line x1="18" y1="22" x2="18" y2="36" stroke="#b91c1c" stroke-width="1.5"/>
        <line x1="28" y1="22" x2="28" y2="36" stroke="#b91c1c" stroke-width="1.5"/>
        <rect x="2" y="34" width="48" height="4" rx="2" fill="#991b1b"/>
        <circle cx="11" cy="42" r="7" fill="#1e293b"/>
        <circle cx="11" cy="42" r="3.5" fill="#374151"/>
        <circle cx="11" cy="42" r="1.5" fill="#9ca3af"/>
        <circle cx="25" cy="42" r="7" fill="#1e293b"/>
        <circle cx="25" cy="42" r="3.5" fill="#374151"/>
        <circle cx="25" cy="42" r="1.5" fill="#9ca3af"/>
        <circle cx="41" cy="42" r="6" fill="#1e293b"/>
        <circle cx="41" cy="42" r="3" fill="#374151"/>
        <circle cx="41" cy="42" r="1.5" fill="#9ca3af"/>
        <line x1="11" y1="39" x2="25" y2="39" stroke="#6b7280" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="5" cy="27" r="3" fill="#fbbf24"/>
        <circle cx="5" cy="27" r="1.8" fill="#fef9c3"/>
    </svg>`,

    scooter: `<svg width="52" height="52" viewBox="0 0 52 52">
        <circle cx="11" cy="38" r="10" fill="none" stroke="#6366f1" stroke-width="3"/>
        <circle cx="11" cy="38" r="2.5" fill="#6366f1"/>
        <line x1="11" y1="28" x2="11" y2="48" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="1" y1="38" x2="21" y2="38" stroke="#818cf8" stroke-width="1.5"/>
        <circle cx="41" cy="38" r="10" fill="none" stroke="#6366f1" stroke-width="3"/>
        <circle cx="41" cy="38" r="2.5" fill="#6366f1"/>
        <line x1="41" y1="28" x2="41" y2="48" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="31" y1="38" x2="51" y2="38" stroke="#818cf8" stroke-width="1.5"/>
        <rect x="9" y="25" width="30" height="6" rx="3" fill="#22c55e"/>
        <rect x="7" y="21" width="5" height="8" rx="2" fill="#16a34a"/>
        <line x1="41" y1="28" x2="41" y2="25" stroke="#475569" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="41" y1="25" x2="33" y2="5" stroke="#475569" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="25" y="3" width="18" height="4" rx="2" fill="#374151"/>
        <rect x="23" y="2" width="5" height="8" rx="2.5" fill="#ef4444"/>
        <rect x="39" y="2" width="5" height="8" rx="2.5" fill="#ef4444"/>
    </svg>`,

    skateboard: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="3" y="20" width="46" height="9" rx="4" fill="#f97316"/>
        <rect x="6" y="21" width="40" height="7" rx="3" fill="#fb923c"/>
        <circle cx="26" cy="24" r="5" fill="#a855f7" opacity="0.8"/>
        <circle cx="26" cy="24" r="3" fill="#7c3aed"/>
        <path d="M3 20 Q1 20 1 16 L4 16 Q4 19 5 20 Z" fill="#ea580c"/>
        <path d="M49 20 Q51 20 51 17 L48 17 Q48 19 47 20 Z" fill="#ea580c"/>
        <rect x="7" y="29" width="14" height="4" rx="2" fill="#374151"/>
        <rect x="31" y="29" width="14" height="4" rx="2" fill="#374151"/>
        <circle cx="10" cy="37" r="1" fill="#9ca3af"/>
        <circle cx="19" cy="37" r="1" fill="#9ca3af"/>
        <circle cx="33" cy="37" r="1" fill="#9ca3af"/>
        <circle cx="42" cy="37" r="1" fill="#9ca3af"/>
        <circle cx="11" cy="38" r="6" fill="#1e293b"/>
        <circle cx="11" cy="38" r="3" fill="#374151"/>
        <circle cx="11" cy="38" r="1.2" fill="#6b7280"/>
        <circle cx="19" cy="38" r="6" fill="#1e293b"/>
        <circle cx="19" cy="38" r="3" fill="#374151"/>
        <circle cx="19" cy="38" r="1.2" fill="#6b7280"/>
        <circle cx="33" cy="38" r="6" fill="#1e293b"/>
        <circle cx="33" cy="38" r="3" fill="#374151"/>
        <circle cx="33" cy="38" r="1.2" fill="#6b7280"/>
        <circle cx="41" cy="38" r="6" fill="#1e293b"/>
        <circle cx="41" cy="38" r="3" fill="#374151"/>
        <circle cx="41" cy="38" r="1.2" fill="#6b7280"/>
    </svg>`,

    headphones: `<svg width="52" height="52" viewBox="0 0 52 52">
        <path d="M10 28 Q10 8 26 8 Q42 8 42 28" fill="none" stroke="#6366f1" stroke-width="4" stroke-linecap="round"/>
        <rect x="4" y="26" width="12" height="18" rx="6" fill="#6366f1"/>
        <rect x="36" y="26" width="12" height="18" rx="6" fill="#6366f1"/>
        <rect x="6" y="30" width="8" height="10" rx="4" fill="#818cf8"/>
        <rect x="38" y="30" width="8" height="10" rx="4" fill="#818cf8"/>
        <circle cx="10" cy="35" r="3" fill="#4f46e5"/>
        <circle cx="42" cy="35" r="3" fill="#4f46e5"/>
    </svg>`,

    laptop: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="8" y="8" width="36" height="26" rx="4" fill="#1e293b"/>
        <rect x="10" y="10" width="32" height="22" rx="2" fill="#0ea5e9"/>
        <rect x="12" y="12" width="28" height="18" rx="1" fill="#075985"/>
        <rect x="15" y="15" width="8" height="5" rx="1" fill="#38bdf8"/>
        <rect x="25" y="15" width="12" height="2" rx="1" fill="#7dd3fc"/>
        <rect x="25" y="19" width="8" height="2" rx="1" fill="#7dd3fc"/>
        <rect x="15" y="22" width="22" height="2" rx="1" fill="#0284c7" opacity="0.6"/>
        <rect x="2" y="34" width="48" height="6" rx="3" fill="#334155"/>
        <rect x="20" y="34" width="12" height="3" rx="1.5" fill="#475569"/>
    </svg>`,

    guitar: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="22" y="1" width="8" height="14" rx="3" fill="#92400e"/>
        <rect x="18" y="1" width="16" height="7" rx="3" fill="#78350f"/>
        <circle cx="18" cy="3" r="2" fill="#d97706"/>
        <circle cx="18" cy="8" r="2" fill="#d97706"/>
        <circle cx="34" cy="3" r="2" fill="#d97706"/>
        <circle cx="34" cy="8" r="2" fill="#d97706"/>
        <path d="M26 13 C34 13 37 17 37 22 C37 26 35 28 32 30 C30 32 40 33 40 38 C40 44 33 49 26 49 C19 49 12 44 12 38 C12 33 22 32 20 30 C17 28 15 26 15 22 C15 17 18 13 26 13 Z" fill="#b45309"/>
        <path d="M26 14 C33 14 36 17 36 22 C36 26 34 28 31 30 C29 32 38 33 38 38 C38 44 33 48 26 48 C19 48 14 44 14 38 C14 33 22 32 21 30 C18 28 16 26 16 22 C16 17 19 14 26 14 Z" fill="#d97706"/>
        <rect x="22" y="5" width="8" height="1.5" rx="0.75" fill="#c4b5fd"/>
        <rect x="22" y="8" width="8" height="1.5" rx="0.75" fill="#c4b5fd"/>
        <rect x="22" y="11" width="8" height="1.5" rx="0.75" fill="#c4b5fd"/>
        <rect x="22" y="13" width="8" height="2" rx="1" fill="#fbbf24"/>
        <circle cx="26" cy="34" r="7" fill="#7c2d12"/>
        <circle cx="26" cy="34" r="5.5" fill="#451a03"/>
        <line x1="23" y1="3" x2="23" y2="47" stroke="#d1d5db" stroke-width="0.9" opacity="0.8"/>
        <line x1="26" y1="3" x2="26" y2="47" stroke="#d1d5db" stroke-width="0.9" opacity="0.8"/>
        <line x1="29" y1="3" x2="29" y2="47" stroke="#d1d5db" stroke-width="0.9" opacity="0.8"/>
        <rect x="20" y="44" width="12" height="4" rx="2" fill="#92400e"/>
        <rect x="20" y="44" width="12" height="1.5" rx="0.75" fill="#fbbf24"/>
    </svg>`,

    telescope: `<svg width="52" height="52" viewBox="0 0 52 52">
        <rect x="24" y="36" width="4" height="14" rx="2" fill="#64748b"/>
        <rect x="18" y="46" width="16" height="4" rx="2" fill="#475569"/>
        <rect x="20" y="34" width="12" height="4" rx="2" fill="#94a3b8"/>
        <rect x="8" y="20" width="36" height="14" rx="6" fill="#6366f1" transform="rotate(-25 26 27)"/>
        <rect x="10" y="22" width="30" height="10" rx="4" fill="#818cf8" transform="rotate(-25 26 27)"/>
        <ellipse cx="14" cy="30" rx="5" ry="7" fill="#4338ca" transform="rotate(-25 14 30)"/>
        <ellipse cx="38" cy="16" rx="4" ry="6" fill="#a78bfa" transform="rotate(-25 38 16)"/>
        <circle cx="38" cy="14" r="4" fill="#c4b5fd" transform="rotate(-25 38 14)"/>
        <circle cx="12" cy="32" r="3" fill="#312e81"/>
        <circle cx="26" cy="4" r="3" fill="#fbbf24" opacity="0.8"/>
        <circle cx="34" cy="6" r="2" fill="#fbbf24" opacity="0.6"/>
        <circle cx="42" cy="10" r="1.5" fill="#fbbf24" opacity="0.5"/>
    </svg>`,
};

// House tiers
// Upgrades total: 40+100+200 = 340
const HOUSE_TIERS = [
    { level: 0, emoji: '🏚️', nameKey: 'tierShack',   cost: 0   },
    { level: 1, emoji: '🏠', nameKey: 'tierCozy',    cost: 40  },
    { level: 2, emoji: '🏡', nameKey: 'tierNice',    cost: 100 },
    { level: 3, emoji: '🏰', nameKey: 'tierMansion', cost: 200 },
];

// Shop items
// Items total: 420, Animals total: 115, Upgrades: 340 → grand total 875 (fits in 900)
const SHOP_ITEMS = [
    // Living Room
    { id: 'sofa',       zone: 'living',   nameKey: 'itemSofa',       cost: 25 },
    { id: 'tv',         zone: 'living',   nameKey: 'itemTv',         cost: 30 },
    { id: 'globe',      zone: 'living',   nameKey: 'itemGlobe',      cost: 15 },
    // Bedroom
    { id: 'bed',        zone: 'bedroom',  nameKey: 'itemBed',        cost: 25 },
    { id: 'mirror',     zone: 'bedroom',  nameKey: 'itemMirror',     cost: 15, grades: [3] },
    { id: 'plushy',     zone: 'bedroom',  nameKey: 'itemPlushy',     cost: 15, grades: [1] },
    { id: 'ball',       zone: 'bedroom',  nameKey: 'itemBall',       cost: 15, grades: [2] },
    { id: 'closet',     zone: 'bedroom',  nameKey: 'itemCloset',     cost: 25 },
    // Kitchen
    { id: 'fridge',     zone: 'kitchen',  nameKey: 'itemFridge',     cost: 25 },
    { id: 'icecream',   zone: 'kitchen',  nameKey: 'itemIcecream',   cost: 20 },
    { id: 'pizza',      zone: 'kitchen',  nameKey: 'itemPizza',      cost: 35, grades: [3] },
    { id: 'lunchbox',   zone: 'kitchen',  nameKey: 'itemLunchbox',   cost: 35, grades: [1] },
    { id: 'candy',      zone: 'kitchen',  nameKey: 'itemCandy',      cost: 35, grades: [2] },
    // Garden
    { id: 'garden',     zone: 'garden',   nameKey: 'itemGarden',     cost: 25 },
    { id: 'tree',       zone: 'garden',   nameKey: 'itemTree',       cost: 30, grades: [3] },
    { id: 'sandbox',    zone: 'garden',   nameKey: 'itemSandbox',    cost: 30, grades: [1] },
    { id: 'pool',       zone: 'garden',   nameKey: 'itemPool',       cost: 40 },
    // Special
    { id: 'console',    zone: 'special',  nameKey: 'itemConsole',    cost: 40, grades: [2] },
    { id: 'rocket',     zone: 'special',  nameKey: 'itemRocket',     cost: 40, grades: [1] },
    { id: 'trampoline', zone: 'special',  nameKey: 'itemTrampoline', cost: 30 },
    { id: 'phone',      zone: 'special',  nameKey: 'itemPhone',      cost: 40, grades: [3] },
    { id: 'kite',       zone: 'special',  nameKey: 'itemKite',       cost: 40, grades: [1] },
    { id: 'car',        zone: 'special',  nameKey: 'itemCar',        cost: 60, grades: [2] },
    { id: 'bicycle',    zone: 'special',  nameKey: 'itemBicycle',    cost: 60, grades: [1] },
    { id: 'train',      zone: 'special',  nameKey: 'itemTrain',      cost: 35, grades: [1] },
    { id: 'scooter',    zone: 'special',  nameKey: 'itemScooter',    cost: 35, grades: [2] },
    { id: 'skateboard', zone: 'special',  nameKey: 'itemSkateboard', cost: 30, grades: [2] },
    { id: 'headphones', zone: 'special',  nameKey: 'itemHeadphones', cost: 35, grades: [2] },
    { id: 'laptop',     zone: 'special',  nameKey: 'itemLaptop',     cost: 45, grades: [3] },
    { id: 'guitar',     zone: 'special',  nameKey: 'itemGuitar',     cost: 40, grades: [3] },
    { id: 'telescope',  zone: 'special',  nameKey: 'itemTelescope',  cost: 50, grades: [3] },
    // Animals
    { id: 'cat',        zone: 'animals',  nameKey: 'itemCat',        cost: 35 },
    { id: 'dog',        zone: 'animals',  nameKey: 'itemDog',        cost: 45, grades: [3] },
    { id: 'hamster',    zone: 'animals',  nameKey: 'itemHamster',    cost: 45, grades: [1] },
    { id: 'rabbit',     zone: 'animals',  nameKey: 'itemRabbit',     cost: 35, grades: [2] },
];

const ZONE_KEYS = [
    { id: 'living',  labelKey: 'zoneLiving'  },
    { id: 'bedroom', labelKey: 'zoneBedroom' },
    { id: 'kitchen', labelKey: 'zoneKitchen' },
    { id: 'garden',  labelKey: 'zoneGarden'  },
    { id: 'animals', labelKey: 'zoneAnimals' },
    { id: 'special', labelKey: 'zoneSpecial' },
];

// House state
let houseState = {
    houseLevel: 0,
    ownedItems: [],
};

function loadHouseState() {
    const key = `mathHouseState_g${currentGrade}`;
    const saved = localStorage.getItem(key);
    if (saved) {
        houseState = JSON.parse(saved);
    } else {
        houseState = { houseLevel: 0, ownedItems: [] };
    }
}

function saveHouseState() {
    localStorage.setItem(`mathHouseState_g${currentGrade}`, JSON.stringify(houseState));
}

// Entry point — called from game.js
function updateHouseCoins() {
    const el = document.getElementById('house-total-coins');
    if (el) el.textContent = gameState.totalCoins;
}

function openHouseScreen(view) {
    loadHouseState();
    pushNav({ g: currentGrade, house: 1 });
    showScreen('house-screen');
    updateHouseCoins();
    switchHouseTab(view || 'room');
}

function switchHouseTab(view) {
    document.getElementById('house-tab-room').classList.toggle('active', view === 'room');
    document.getElementById('house-tab-shop').classList.toggle('active', view === 'shop');
    document.getElementById('room-view').style.display = view === 'room' ? 'block' : 'none';
    document.getElementById('shop-view').style.display = view === 'shop' ? 'block' : 'none';

    if (view === 'room') {
        renderRoom();
    } else {
        renderShop();
    }
}

// Render the room view
function renderRoom() {
    const container = document.getElementById('room-view');
    const tier = HOUSE_TIERS[houseState.houseLevel];

    const zonesHtml = ZONE_KEYS.map(zone => {
        const items = SHOP_ITEMS.filter(it => it.zone === zone.id && (!it.grades || it.grades.includes(currentGrade)));
        const ownedInZone = items.filter(it => houseState.ownedItems.includes(it.id));
        const emptyCount = items.length - ownedInZone.length;

        const itemCards = ownedInZone.map(it => `
            <div class="house-item-card">
                <div class="house-item-svg">${ITEM_SVGS[it.id]}</div>
                <span class="house-item-label">${t(it.nameKey)}</span>
            </div>
        `).join('');

        const placeholders = Array(emptyCount).fill(
            '<div class="house-item-placeholder"></div>'
        ).join('');

        return `
            <div class="house-zone">
                <div class="house-zone-title">${t(zone.labelKey)}</div>
                <div class="house-zone-items">
                    ${itemCards}
                    ${placeholders}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="house-room house-level-${houseState.houseLevel}">
            <div class="house-room-header">
                <span class="house-tier-emoji">${tier.emoji}</span>
                <span class="house-tier-name">${t(tier.nameKey)}</span>
            </div>
            <div class="house-zones">
                ${zonesHtml}
            </div>
        </div>
    `;
}

// Render the shop view
function renderShop() {
    const container = document.getElementById('shop-view');
    const coins = gameState.totalCoins;

    // Upgrade section
    const nextTier = HOUSE_TIERS[houseState.houseLevel + 1];
    let upgradeHtml = '';
    if (nextTier) {
        const canAfford = coins >= nextTier.cost;
        upgradeHtml = `
            <div class="shop-section-title">${t('houseUpgrade')}</div>
            <div class="shop-upgrade-card ${canAfford ? '' : 'unaffordable'}">
                <span class="shop-upgrade-emoji">${nextTier.emoji}</span>
                <span class="shop-item-name">${t(nextTier.nameKey)}</span>
                <span class="shop-item-cost">🪙 ${nextTier.cost}</span>
                <button class="shop-buy-btn" onclick="upgradeHouse()" ${canAfford ? '' : 'disabled'}>
                    ${t('buy')}
                </button>
            </div>
        `;
    } else {
        upgradeHtml = `
            <div class="shop-section-title">${t('houseUpgrade')}</div>
            <div class="shop-upgrade-card owned">
                <span class="shop-upgrade-emoji">🏆</span>
                <span class="shop-item-name">${t('maxLevel')}</span>
            </div>
        `;
    }

    // Items by zone
    const itemsHtml = ZONE_KEYS.map(zone => {
        const items = SHOP_ITEMS.filter(it => it.zone === zone.id && (!it.grades || it.grades.includes(currentGrade)));
        const cardsHtml = items.map(it => {
            const owned = houseState.ownedItems.includes(it.id);
            const canAfford = coins >= it.cost;
            return `
                <div class="shop-item-card ${owned ? 'owned' : (canAfford ? '' : 'unaffordable')}">
                    <div class="shop-item-svg">${ITEM_SVGS[it.id]}</div>
                    <span class="shop-item-name">${t(it.nameKey)}</span>
                    <span class="shop-item-cost">${owned ? t('owned') : '🪙 ' + it.cost}</span>
                    ${owned ? '' : `<button class="shop-buy-btn" onclick="buyItem('${it.id}')" ${canAfford ? '' : 'disabled'}>${t('buy')}</button>`}
                </div>
            `;
        }).join('');
        return `
            <div class="shop-section-title">${t(zone.labelKey)}</div>
            <div class="shop-items-row">${cardsHtml}</div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="shop-container">
            ${upgradeHtml}
            ${itemsHtml}
        </div>
    `;
}

// Purchase handlers
function buyItem(itemId) {
    const item = SHOP_ITEMS.find(it => it.id === itemId);
    if (!item) return;
    if (houseState.ownedItems.includes(itemId)) return;
    if (gameState.totalCoins < item.cost) return;

    gameState.totalCoins -= item.cost;
    saveGameState();
    updateTotalStats();

    houseState.ownedItems.push(itemId);
    saveHouseState();

    updateHouseCoins();
    renderShop();
}

function upgradeHouse() {
    const nextTier = HOUSE_TIERS[houseState.houseLevel + 1];
    if (!nextTier) return;
    if (gameState.totalCoins < nextTier.cost) return;

    gameState.totalCoins -= nextTier.cost;
    saveGameState();
    updateTotalStats();

    houseState.houseLevel++;
    saveHouseState();

    updateHouseCoins();
    renderShop();
}
