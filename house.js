// house.js - OpenMoji Edition

const OPENMOJI_URL = "https://openmoji.org/data/color/svg/";

// Helper to get OpenMoji SVG HTML
function getOpenMoji(hex) {
    return `<img src="${OPENMOJI_URL}${hex}.svg" class="openmoji-icon" alt="emoji">`;
}

const UI_SVGS = {
    coin: getOpenMoji("1FA99"),
    star: getOpenMoji("2B50"),
    house: getOpenMoji("1F3E0"),
    flagEn: getOpenMoji("1F1EC-1F1E7"), // UK Flag
    flagHe: getOpenMoji("1F1EE-1F1F1"), // Israel Flag
    timer: getOpenMoji("23F1"),
    grade1: getOpenMoji("1F331"), // Seedling
    grade2: getOpenMoji("1F4D6"), // Books
    grade3: getOpenMoji("1F3C6"), // Trophy
};

// Function to inject icons into placeholders in the HTML
function injectUIIcons() {
    const mappings = {
        '.ui-icon-coin': UI_SVGS.coin,
        '.ui-icon-coin-inline': UI_SVGS.coin,
        '.ui-icon-star': UI_SVGS.star,
        '.ui-icon-house': UI_SVGS.house,
        '.ui-icon-timer': UI_SVGS.timer,
        '.ui-icon-grade1': UI_SVGS.grade1,
        '.ui-icon-grade2': UI_SVGS.grade2,
        '.ui-icon-grade3': UI_SVGS.grade3,
    };

    Object.entries(mappings).forEach(([selector, svg]) => {
        document.querySelectorAll(selector).forEach(el => {
            el.innerHTML = svg;
        });
    });
}

const EMOJI_MAP = {
    // Living Room
    sofa: "1F6CB",
    tv: "1F4FA",
    globe: "1F30D",
    // Bedroom
    bed: "1F6CF",
    mirror: "1FA9E",
    plushy: "1F9F8",
    ball: "26BD",
    bookshelf: "1F4DA",
    // Kitchen
    bubbleTea: "1F9CB",
    icecream: "1F366",
    pizza: "1F355",
    donut: "1F369",
    candy: "1F36C",
    // Garden
    garden: "1F338",
    tree: "1F333",
    slide: "1F6DD",
    pool: "1F3CA",
    // Special
    console: "1F3AE",
    rocket: "1F680",
    robot: "1F916",
    phone: "1F4F1",
    kite: "1FA81",
    car: "1F697",
    bicycle: "1F6B2",
    train: "1F682",
    scooter: "1F6F4",
    skateboard: "1F6F9",
    headphones: "1F3A7",
    laptop: "1F4BB",
    guitar: "1F3B8",
    telescope: "1F52D",
    // Animals
    cat: "1F431",
    dog: "1F436",
    hamster: "1F439",
    rabbit: "1F430"
};

const ITEM_SVGS = {};
Object.entries(EMOJI_MAP).forEach(([id, hex]) => {
    ITEM_SVGS[id] = getOpenMoji(hex);
});

// House tiers
const HOUSE_TIERS = [
    { level: 0, emoji: getOpenMoji("1F3DA"), nameKey: 'tierShack',   cost: 0   },
    { level: 1, emoji: getOpenMoji("1F3E0"), nameKey: 'tierCozy',    cost: 40  },
    { level: 2, emoji: getOpenMoji("1F3E1"), nameKey: 'tierNice',    cost: 100 },
    { level: 3, emoji: getOpenMoji("1F3F0"), nameKey: 'tierMansion', cost: 200 },
];

// Shop items
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
    { id: 'bookshelf',  zone: 'bedroom',  nameKey: 'itemBookshelf',  cost: 25 },
    // Kitchen
    { id: 'bubbleTea',  zone: 'kitchen',  nameKey: 'itemBubbleTea',  cost: 25 },
    { id: 'icecream',   zone: 'kitchen',  nameKey: 'itemIcecream',   cost: 20 },
    { id: 'pizza',      zone: 'kitchen',  nameKey: 'itemPizza',      cost: 35, grades: [3] },
    { id: 'donut',      zone: 'kitchen',  nameKey: 'itemDonut',      cost: 35, grades: [1] },
    { id: 'candy',      zone: 'kitchen',  nameKey: 'itemCandy',      cost: 35, grades: [2] },
    // Garden
    { id: 'garden',     zone: 'garden',   nameKey: 'itemGarden',     cost: 25 },
    { id: 'tree',       zone: 'garden',   nameKey: 'itemTree',       cost: 30, grades: [3] },
    { id: 'slide',      zone: 'garden',   nameKey: 'itemSlide',      cost: 30, grades: [1] },
    { id: 'pool',       zone: 'garden',   nameKey: 'itemPool',       cost: 40 },
    // Special
    { id: 'console',    zone: 'special',  nameKey: 'itemConsole',    cost: 40, grades: [2] },
    { id: 'rocket',     zone: 'special',  nameKey: 'itemRocket',     cost: 40, grades: [1] },
    { id: 'robot',      zone: 'special',  nameKey: 'itemRobot',      cost: 30 },
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
                <div class="house-tier-emoji">${tier.emoji}</div>
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
                <div class="shop-upgrade-emoji">${nextTier.emoji}</div>
                <div class="shop-upgrade-info">
                    <span class="shop-item-name">${t(nextTier.nameKey)}</span>
                    <span class="shop-item-cost">${UI_SVGS.coin} ${nextTier.cost}</span>
                </div>
                <button class="shop-buy-btn" onclick="upgradeHouse()" ${canAfford ? '' : 'disabled'}>
                    ${t('buy')}
                </button>
            </div>
        `;
    } else {
        upgradeHtml = `
            <div class="shop-section-title">${t('houseUpgrade')}</div>
            <div class="shop-upgrade-card owned">
                <div class="shop-upgrade-emoji">${getOpenMoji("1F3C6")}</div>
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
                    <span class="shop-item-cost">${owned ? t('owned') : UI_SVGS.coin + ' ' + it.cost}</span>
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
