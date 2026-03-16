var LootzyApp = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // lootzy-entry.jsx
  var import_react2 = __toESM(__require("react"));
  var import_client = __toESM(__require("react-dom/client"));

  // mnt/outputs/lootzy-v4.jsx
  var import_react = __require("react");
  var FONT_LINK = "https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap";
  var C = {
    coin: "#FFD700",
    coinD: "#E6A800",
    green: "#4CAF50",
    greenD: "#388E3C",
    red: "#F44336",
    orange: "#FF9800",
    cyan: "#00BCD4",
    yellow: "#FFE140",
    white: "#FFFFFF",
    black: "#1A1A1A",
    gray: "#9E9E9E",
    lgray: "#F5F5F5",
    sky: "#5BA8D4",
    skyD: "#3D88B8"
  };
  var F = { game: "'Nunito',system-ui,sans-serif" };
  var BUILD = "v1.0 \xB7 build 20260316-2010";
  var KEYFRAMES = `
  @keyframes pouBounce{0%,100%{transform:translateY(0) scaleX(1)}45%{transform:translateY(-9px) scaleX(0.95)}75%{transform:translateY(2px) scaleX(1.04)}}
  @keyframes pouBlink{0%,88%,100%{transform:scaleY(1)}92%{transform:scaleY(0.06)}}
  @keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
  @keyframes petBump{0%{transform:scale(1)}30%{transform:scale(1.12) rotate(-4deg)}60%{transform:scale(0.96) rotate(3deg)}100%{transform:scale(1) rotate(0deg)}}
  @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
  @keyframes floatUp{0%{opacity:1;transform:translateY(0) scale(1) rotate(0deg)}60%{opacity:0.9}100%{opacity:0;transform:translateY(-150px) scale(0.7) rotate(20deg)}}
  @keyframes floatUpL{0%{opacity:1;transform:translateY(0) scale(1) rotate(0deg)}100%{opacity:0;transform:translateY(-140px) translateX(-40px) scale(0.6) rotate(-25deg)}}
  @keyframes floatUpR{0%{opacity:1;transform:translateY(0) scale(1) rotate(0deg)}100%{opacity:0;transform:translateY(-130px) translateX(40px) scale(0.6) rotate(25deg)}}
  @keyframes petShake{0%,100%{transform:translateX(0) rotate(0)}15%{transform:translateX(-12px) rotate(-4deg)}30%{transform:translateX(12px) rotate(4deg)}45%{transform:translateX(-9px) rotate(-2deg)}60%{transform:translateX(9px) rotate(2deg)}75%{transform:translateX(-5px)}}
  @keyframes petPulse{0%,100%{transform:scale(1)}25%{transform:scale(1.18) rotate(-2deg)}50%{transform:scale(0.93)}75%{transform:scale(1.12) rotate(2deg)}}
  @keyframes petWiggle{0%,100%{transform:rotate(0) scale(1)}20%{transform:rotate(-10deg) scale(1.08) translateY(-8px)}40%{transform:rotate(10deg) scale(1.08) translateY(-8px)}60%{transform:rotate(-6deg) scale(1.05) translateY(-4px)}80%{transform:rotate(6deg) scale(1.05) translateY(-4px)}}
  @keyframes petEat{0%,100%{transform:translateY(0) scaleY(1)}20%{transform:translateY(-14px) scaleY(1.06)}40%{transform:translateY(3px) scaleY(0.94)}60%{transform:translateY(-8px) scaleY(1.04)}80%{transform:translateY(2px) scaleY(0.97)}}
  @keyframes petHunt{0%,100%{transform:translateY(0) rotate(0)}25%{transform:translateY(-22px) rotate(-8deg) scale(1.06)}50%{transform:translateY(0) rotate(0) scale(1)}75%{transform:translateY(-14px) rotate(6deg) scale(1.04)}}
  @keyframes boxShake{0%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-6deg) scale(1.04)}25%{transform:rotate(6deg) scale(1.06)}40%{transform:rotate(-5deg) scale(1.08)}55%{transform:rotate(5deg) scale(1.04)}70%{transform:rotate(-3deg)}85%{transform:rotate(3deg)}}
  @keyframes boxOpen{0%{transform:scale(1) rotate(0)}30%{transform:scale(0.85) rotate(-5deg)}60%{transform:scale(1.3) rotate(8deg)}80%{transform:scale(0.95) rotate(-2deg)}100%{transform:scale(1.1) rotate(0)}}
  @keyframes rewardIn{from{opacity:0;transform:scale(0.6) translateY(30px)}to{opacity:1;transform:scale(1) translateY(0)}}
  @keyframes sparkle{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.3;transform:scale(0.5)}}
  @keyframes pulseBtn{0%,100%{transform:scale(1);box-shadow:0 6px 24px rgba(0,0,0,0.28)}60%{transform:scale(1.05);box-shadow:0 10px 32px rgba(0,0,0,0.4)}}
  @keyframes float1{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
  @keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
  @keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
  @keyframes checkinPop{from{transform:scale(0.5)}to{transform:scale(1)}}
  @keyframes petSleep{0%,100%{transform:translateY(0) rotate(0) scaleX(1)}25%{transform:translateY(-6px) rotate(-3deg) scaleX(0.97)}50%{transform:translateY(3px) rotate(1.5deg) scaleX(1.02)}75%{transform:translateY(-4px) rotate(-1.5deg) scaleX(0.98)}}
  @keyframes floatZzz{0%{opacity:0;transform:translateY(0) scale(0.7)}30%{opacity:1}100%{opacity:0;transform:translateY(-60px) scale(1.2) rotate(12deg)}}
  @keyframes blockClear{0%{transform:scale(1);opacity:1}40%{transform:scale(1.2);opacity:0.9;background:#FFD700}100%{transform:scale(0);opacity:0}}
  @keyframes blockPlace{0%{transform:scale(0.6);opacity:0.5}100%{transform:scale(1);opacity:1}}
`;
  var ACTIONS = [
    {
      id: "eat",
      icon: "\u{1F356}",
      label: "Cho \u0102n",
      color: "#FF7043",
      lightBg: "#FFF3F0",
      particles: ["\u{1F357}", "\u{1F355}", "\u{1F34E}", "\u{1F32E}", "\u{1F363}", "\u{1F35C}", "\u{1F9C1}"],
      petAnim: "petEat 1.6s ease-in-out",
      mouthOverride: "big",
      applyEffect: (s) => ({
        hunger: Math.min(100, s.hunger + 32),
        happiness: Math.min(100, s.happiness + 6),
        xp: s.xp + 8,
        points: s.points
      })
    },
    {
      id: "bath",
      icon: "\u{1F6BF}",
      label: "T\u1EAFm",
      color: "#29B6F6",
      lightBg: "#F0FAFF",
      particles: ["\u{1F4A7}", "\u{1FAE7}", "\u2728", "\u{1F4A6}", "\u{1F30A}", "\u{1F9FC}"],
      petAnim: "petShake 1.5s ease-in-out",
      applyEffect: (s) => ({
        clean: Math.min(100, s.clean + 38),
        happiness: Math.min(100, s.happiness + 10),
        xp: s.xp + 6,
        points: s.points
      })
    },
    {
      id: "play",
      icon: "\u{1F3AE}",
      label: "Ch\u01A1i",
      color: "#AB47BC",
      lightBg: "#F9F0FF",
      particles: ["\u2B50", "\u{1F31F}", "\u2728", "\u{1F389}", "\u{1F38A}", "\u{1F4AB}", "\u{1F308}"],
      petAnim: "petWiggle 1.4s ease-in-out",
      applyEffect: (s) => ({
        happiness: Math.min(100, s.happiness + 28),
        energy: Math.max(0, s.energy - 10),
        xp: s.xp + 12,
        points: s.points + 10
      })
    },
    {
      id: "sleep",
      icon: "\u{1F634}",
      label: "Ng\u1EE7",
      color: "#7E57C2",
      lightBg: "#F3F0FF",
      particles: ["\u{1F4A4}", "\u{1F319}", "\u2B50", "\u2728", "\u{1F634}", "\u2601\uFE0F", "\u{1F4A4}"],
      petAnim: "petSleep 2.5s ease-in-out",
      applyEffect: (s) => ({
        energy: Math.min(100, s.energy + 42),
        happiness: Math.min(100, s.happiness + 8),
        hunger: Math.max(0, s.hunger - 6),
        xp: s.xp + 10,
        points: s.points
      })
    }
  ];
  var GIFT_BOX_PRIZES = [
    // Common — in-game currency rewards
    { id: "pts100", emoji: "\u{1FA99}", name: "+100 \u0111i\u1EC3m", pts: 100, xp: 0, type: "points", rarity: "common", color: "#66BB6A", label: "Th\u01B0\u1EDDng" },
    { id: "pts200", emoji: "\u{1F4B0}", name: "+200 \u0111i\u1EC3m", pts: 200, xp: 0, type: "points", rarity: "common", color: "#66BB6A", label: "Th\u01B0\u1EDDng" },
    { id: "xp50", emoji: "\u2B50", name: "+50 XP", pts: 0, xp: 50, type: "points", rarity: "common", color: "#66BB6A", label: "Th\u01B0\u1EDDng" },
    { id: "food3", emoji: "\u{1F34E}", name: "\u0110\u1ED3 \u0103n \xD73", pts: 0, xp: 10, type: "pet_item", rarity: "common", color: "#81C784", label: "Th\u01B0\u1EDDng" },
    { id: "drink2", emoji: "\u{1F9C3}", name: "Th\u1EE9c u\u1ED1ng", pts: 30, xp: 0, type: "pet_item", rarity: "common", color: "#81C784", label: "Th\u01B0\u1EDDng" },
    // Rare — small vouchers
    { id: "garena5", emoji: "\u{1F3AE}", name: "Garena 5K", pts: 0, xp: 0, type: "voucher", rarity: "rare", color: "#29B6F6", label: "Hi\u1EBFm", desc: "Th\u1EBB n\u1EA1p Garena 5.000\u0111" },
    { id: "garena10", emoji: "\u{1F0CF}", name: "Garena 10K", pts: 0, xp: 0, type: "voucher", rarity: "rare", color: "#29B6F6", label: "Hi\u1EBFm", desc: "Th\u1EBB n\u1EA1p Garena 10.000\u0111" },
    { id: "pts500", emoji: "\u{1F48E}", name: "+500 \u0111i\u1EC3m", pts: 500, xp: 0, type: "points", rarity: "rare", color: "#29B6F6", label: "Hi\u1EBFm" },
    // Epic — big prizes
    { id: "garena50", emoji: "\u{1F396}\uFE0F", name: "Garena 50K", pts: 0, xp: 0, type: "voucher", rarity: "epic", color: "#FF9800", label: "Huy\u1EC1n tho\u1EA1i", desc: "Th\u1EBB n\u1EA1p Garena 50.000\u0111" },
    { id: "garena100", emoji: "\u{1F4B3}", name: "Garena 100K", pts: 0, xp: 0, type: "voucher", rarity: "epic", color: "#FF9800", label: "Huy\u1EC1n tho\u1EA1i", desc: "Th\u1EBB n\u1EA1p Garena 100.000\u0111" },
    { id: "gift_real", emoji: "\u{1F381}", name: "Qu\xE0 th\u1EADt", pts: 0, xp: 0, type: "physical", rarity: "epic", color: "#E040FB", label: "Huy\u1EC1n tho\u1EA1i", desc: "Li\xEAn h\u1EC7 HEAVY \u0111\u1EC3 nh\u1EADn" }
  ];
  var rollGiftBox = (level = 1) => {
    const lv = Math.max(1, level);
    const epicChance = Math.min(0.45, 0.05 + (lv - 1) * 0.014);
    const rareChance = Math.min(0.48, 0.3 + (lv - 1) * 6e-3);
    const r = Math.random();
    const pool = r > 1 - epicChance ? GIFT_BOX_PRIZES.filter((i) => i.rarity === "epic") : r > 1 - epicChance - rareChance ? GIFT_BOX_PRIZES.filter((i) => i.rarity === "rare") : GIFT_BOX_PRIZES.filter((i) => i.rarity === "common");
    return pool[Math.floor(Math.random() * pool.length)];
  };
  var BLOCK_SHAPES = [
    [[1]],
    [[1, 1]],
    [[1], [1]],
    [[1, 1, 1]],
    [[1], [1], [1]],
    [[1, 1], [1, 1]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 0], [1, 0], [1, 1]],
    [[0, 1], [0, 1], [1, 1]],
    [[1, 1, 1], [0, 1, 0]],
    [[1, 1, 1, 1]],
    [[1, 1], [0, 1], [0, 1]],
    [[1, 1], [1, 0], [1, 0]],
    [[1, 0, 0], [1, 1, 1]],
    [[0, 0, 1], [1, 1, 1]],
    [[1, 0], [1, 1], [0, 1]],
    [[0, 1], [1, 1], [1, 0]]
  ];
  var BLAST_RARITY = [
    { name: "common", bg: "#66BB6A", border: "#388E3C", pts: [5, 8, 10], w: 65 },
    { name: "rare", bg: "#42A5F5", border: "#0277BD", pts: [12, 15, 18], w: 28 },
    { name: "epic", bg: "#CE93D8", border: "#7B1FA2", pts: [20, 25, 30], w: 7 }
  ];
  var WATER_TIERS = [
    { tier: 0, r: 14, pts: 2, color: "#00E5FF", dark: "#006080", name: "T\xED Hon" },
    // electric cyan
    { tier: 1, r: 20, pts: 5, color: "#00BFA5", dark: "#005248", name: "Nh\u1ECF Nh\u1ECF" },
    // teal
    { tier: 2, r: 27, pts: 10, color: "#69F0AE", dark: "#1B5E20", name: "V\u1EEBa V\u1EEBa" },
    // mint green
    { tier: 3, r: 35, pts: 18, color: "#B4FF00", dark: "#4A6000", name: "Tr\xF2n Tr\u1ECBa" },
    // neon lime (= game accent)
    { tier: 4, r: 44, pts: 30, color: "#FFD740", dark: "#C67C00", name: "To \u0110\xF9ng" },
    // gold (= coin)
    { tier: 5, r: 54, pts: 50, color: "#FF6D00", dark: "#7F2800", name: "Kh\u1ED5ng L\u1ED3" },
    // hot orange
    { tier: 6, r: 65, pts: 80, color: "#E040FB", dark: "#5E0070", name: "Si\xEAu C\u1EA5p" },
    // electric purple
    { tier: 7, r: 77, pts: 120, color: "#FF1744", dark: "#7F0014", name: "Huy\u1EC1n Tho\u1EA1i" },
    // red legendary
    { tier: 8, r: 90, pts: 180, color: "#FAFAFA", dark: "#B0BEC5", name: "T\u1ED1i Th\u01B0\u1EE3ng" }
    // white-gold ultimate
  ];
  var makeBlastPiece = () => {
    const r = Math.random() * 100;
    const rar = r < 7 ? BLAST_RARITY[2] : r < 35 ? BLAST_RARITY[1] : BLAST_RARITY[0];
    const shape = BLOCK_SHAPES[Math.floor(Math.random() * BLOCK_SHAPES.length)];
    const pts = [];
    for (let i = 0; i < shape.length; i++) for (let j = 0; j < shape[i].length; j++)
      if (shape[i][j]) pts.push(rar.pts[Math.floor(Math.random() * rar.pts.length)]);
    return { shape, rar, pts };
  };
  var blastCanPlace = (shape, r0, c0, grid) => {
    for (let r = 0; r < shape.length; r++) for (let c = 0; c < shape[r].length; c++) {
      if (!shape[r][c]) continue;
      const nr = r0 + r, nc = c0 + c;
      if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8 || grid[nr][nc] !== null) return false;
    }
    return true;
  };
  var CHECKIN_MILESTONES = [
    { days: 3, icon: "\u{1F331}", boxes: 1, pts: 0, label: "3 ng\xE0y" },
    { days: 7, icon: "\u{1F33F}", boxes: 2, pts: 100, label: "7 ng\xE0y" },
    { days: 14, icon: "\u{1F333}", boxes: 3, pts: 300, label: "14 ng\xE0y" },
    { days: 30, icon: "\u{1F3C6}", boxes: 5, pts: 500, label: "30 ng\xE0y" }
  ];
  var VALID_GIFTS = {
    "LOOTZY2026": { msg: "\u{1F38A} +500 \u0111i\u1EC3m + 2 h\u1ED9p qu\xE0!", pts: 500, boxes: 2 },
    "WELCOME100": { msg: "\u{1F389} +100 \u0111i\u1EC3m", pts: 100, boxes: 0 },
    "HEAVY2026": { msg: "\u2B50 +1000 \u0111i\u1EC3m + 3 h\u1ED9p qu\xE0!", pts: 1e3, boxes: 3 },
    "GARENA2026": { msg: "\u{1F3AE} +5 h\u1ED9p qu\xE0 Garena!", pts: 0, boxes: 5 }
  };
  var SHOP_ITEMS = [
    { id: "apple", icon: "\u{1F34E}", name: "T\xE1o T\u01B0\u01A1i", category: "food", desc: "\u{1F34E} +20 no", cost: 25, effect: { hunger: 20 } },
    { id: "meat", icon: "\u{1F356}", name: "Th\u1ECBt N\u01B0\u1EDBng", category: "food", desc: "\u{1F34E} +40 no", cost: 55, effect: { hunger: 40 } },
    { id: "cake", icon: "\u{1F382}", name: "B\xE1nh Kem", category: "food", desc: "\u{1F34E}+20 \u2764\uFE0F+15", cost: 70, effect: { hunger: 20, happiness: 15 } },
    { id: "milk", icon: "\u{1F95B}", name: "S\u1EEFa T\u01B0\u01A1i", category: "food", desc: "\u{1F34E}+15 \u26A1+20", cost: 65, effect: { hunger: 15, energy: 20 } },
    { id: "soap", icon: "\u{1F9FC}", name: "X\xE0 Ph\xF2ng", category: "clean", desc: "\u{1F9FC} +30", cost: 40, effect: { clean: 30 } },
    { id: "perfume", icon: "\u{1F338}", name: "N\u01B0\u1EDBc Hoa", category: "clean", desc: "\u{1F9FC} +50", cost: 85, effect: { clean: 50 } },
    { id: "toy", icon: "\u{1F3AE}", name: "\u0110\u1ED3 Ch\u01A1i", category: "fun", desc: "\u2764\uFE0F +25", cost: 50, effect: { happiness: 25 } },
    { id: "ball", icon: "\u26BD", name: "Qu\u1EA3 B\xF3ng", category: "fun", desc: "\u2764\uFE0F+30 XP+5", cost: 60, effect: { happiness: 30, xp: 5 } },
    { id: "drink", icon: "\u26A1", name: "N\u01B0\u1EDBc T\u0103ng L\u1EF1c", category: "boost", desc: "\u26A1 +40", cost: 80, effect: { energy: 40 } },
    { id: "potion", icon: "\u{1F9EA}", name: "Thu\u1ED1c \u0110\u1EB7c Bi\u1EC7t", category: "boost", desc: "+25 t\u1EA5t c\u1EA3", cost: 150, effect: { hunger: 25, happiness: 25, clean: 25, energy: 25 } },
    { id: "crown", icon: "\u{1F451}", name: "V\u01B0\u01A1ng Mi\u1EC7n", category: "boost", desc: "\u2764\uFE0F+50 XP+30", cost: 200, effect: { happiness: 50, xp: 30 } },
    { id: "star", icon: "\u2B50", name: "Ng\xF4i Sao May", category: "boost", desc: "XP +100", cost: 180, effect: { xp: 100 } }
  ];
  var RANKS = [
    { name: "\u0110\u1ED3ng", icon: "\u{1F949}", color: "#CD8B52", minPts: 0 },
    { name: "B\u1EA1c", icon: "\u{1F948}", color: "#B8C4CC", minPts: 500 },
    { name: "V\xE0ng", icon: "\u{1F947}", color: "#FFD700", minPts: 1500 },
    { name: "B\u1EA1ch Kim", icon: "\u{1F48E}", color: "#A78BFA", minPts: 3e3 },
    { name: "Kim C\u01B0\u01A1ng", icon: "\u{1F48D}", color: "#22D3EE", minPts: 5e3 }
  ];
  var getRank = (pts) => [...RANKS].reverse().find((r) => pts >= r.minPts) || RANKS[0];
  var LEADERBOARD = [
    {
      rank: 1,
      name: "MeoNhon_99",
      icon: "\u{1F431}",
      lv: 28,
      pts: 6720,
      petColor: "#E8A87C",
      hunger: 92,
      happiness: 98,
      clean: 78,
      energy: 88,
      tagline: "Nh\xE0 v\xF4 \u0111\u1ECBch kh\xF4ng ngai \u{1F451}",
      petName: "Miu Miu",
      badges: ["\u{1F947}", "\u{1F525}", "\u{1F48E}"],
      streak: 21
    },
    {
      rank: 2,
      name: "HoThuong",
      icon: "\u{1F42F}",
      lv: 25,
      pts: 5840,
      petColor: "#FF9800",
      hunger: 80,
      happiness: 85,
      clean: 94,
      energy: 70,
      tagline: "Chi\u1EBFn binh b\u1EA5t khu\u1EA5t \u{1F525}",
      petName: "H\u1ED5 Con",
      badges: ["\u{1F948}", "\u26A1", "\u{1F3CB}"],
      streak: 14
    },
    {
      rank: 3,
      name: "CunCon2006",
      icon: "\u{1F436}",
      lv: 22,
      pts: 4980,
      petColor: "#90EE90",
      hunger: 65,
      happiness: 95,
      clean: 60,
      energy: 82,
      tagline: "Vui v\u1EBB m\u1ED7i ng\xE0y \u{1F31F}",
      petName: "B\xF4ng",
      badges: ["\u{1F949}", "\u{1F31F}", "\u{1F3AE}"],
      streak: 9
    },
    {
      rank: 4,
      name: "SoiGia",
      icon: "\u{1F43A}",
      lv: 17,
      pts: 2750,
      petColor: "#7CB9E8",
      hunger: 50,
      happiness: 72,
      clean: 85,
      energy: 58,
      tagline: "\u0110ang leo rank nhanh \u26A1",
      petName: "Wolf Jr",
      badges: ["\u{1F680}", "\u{1F4AA}"],
      streak: 5
    },
    {
      rank: 5,
      name: "B\u1EA1n",
      icon: "\u{1F31F}",
      lv: 6,
      pts: 340,
      petColor: null,
      hunger: null,
      happiness: null,
      clean: null,
      energy: null,
      tagline: "\u0110\xF3 l\xE0 b\u1EA1n! \u{1F64B}",
      petName: null,
      badges: ["\u{1F331}"],
      streak: 3
    }
  ];
  var PET_COLORS = [
    "#C8956C",
    "#E8A87C",
    "#8B6347",
    "#D4A373",
    "#F4A261",
    "#E76F51",
    "#6AB4C8",
    "#7CB9E8",
    "#90EE90",
    "#FFB347",
    "#DDA0DD",
    "#FF69B4"
  ];
  var clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  function rdp(pts, eps = 4) {
    if (pts.length <= 2) return pts;
    const [a, b] = [pts[0], pts[pts.length - 1]];
    let maxD = 0, idx = 0;
    for (let i = 1; i < pts.length - 1; i++) {
      const dx = b.x - a.x, dy = b.y - a.y, len = Math.sqrt(dx * dx + dy * dy);
      const d = len === 0 ? Math.hypot(pts[i].x - a.x, pts[i].y - a.y) : Math.abs(dx * (a.y - pts[i].y) - (a.x - pts[i].x) * dy) / len;
      if (d > maxD) {
        maxD = d;
        idx = i;
      }
    }
    if (maxD > eps) return [...rdp(pts.slice(0, idx + 1), eps).slice(0, -1), ...rdp(pts.slice(idx), eps)];
    return [a, b];
  }
  function crPath(pts) {
    if (!pts || pts.length < 3) return "";
    const n = pts.length;
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      const cp1x = p1.x + (p2.x - p0.x) / 6, cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6, cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)},${cp2x.toFixed(1)} ${cp2y.toFixed(1)},${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }
    return d + " Z";
  }
  var DEFAULT_PATH = [
    { x: 0.5, y: 0.08 },
    { x: 0.63, y: 0.12 },
    { x: 0.76, y: 0.22 },
    { x: 0.85, y: 0.38 },
    { x: 0.88, y: 0.56 },
    { x: 0.82, y: 0.72 },
    { x: 0.68, y: 0.82 },
    { x: 0.52, y: 0.86 },
    { x: 0.36, y: 0.86 },
    { x: 0.22, y: 0.82 },
    { x: 0.12, y: 0.72 },
    { x: 0.1, y: 0.56 },
    { x: 0.13, y: 0.38 },
    { x: 0.22, y: 0.22 },
    { x: 0.35, y: 0.12 }
  ];
  var scalePath = (pts, w, h) => pts.map((p) => ({ x: p.x * w, y: p.y * h }));
  function PouPet({ petData = {}, size = 160, bounce = true, mood = 70, animStyle, eyeOffset = { x: 0, y: 0 }, cleanLevel = 100, isSleeping = false }) {
    const { drawnPath, color = "#C8956C", eyeLeft, eyeRight, mouth, mouthType = "smile" } = petData;
    const VW = 200, VH = 200;
    const bodyPts = scalePath(drawnPath || DEFAULT_PATH, VW, VH);
    const pathD = crPath(bodyPts);
    const EL = eyeLeft || { x: 0.36, y: 0.4 };
    const ER = eyeRight || { x: 0.64, y: 0.4 };
    const MO = mouth || { x: 0.5, y: 0.62 };
    const elX = EL.x * VW, elY = EL.y * VH, erX = ER.x * VW, erY = ER.y * VH, mX = MO.x * VW, mY = MO.y * VH;
    const eyeR = VW * 0.1, pupR = eyeR * 0.5;
    const ms = eyeR * 0.38;
    const px = eyeOffset.x * ms;
    const py = eyeOffset.y * ms;
    const dirtiness = Math.max(0, 100 - cleanLevel);
    const dirtOpacity = dirtiness / 100;
    const DIRT_SPOTS = [
      { cx: 0.58, cy: 0.55, r: 0.055 },
      { cx: 0.35, cy: 0.6, r: 0.04 },
      { cx: 0.72, cy: 0.4, r: 0.033 },
      { cx: 0.28, cy: 0.45, r: 0.03 },
      { cx: 0.5, cy: 0.7, r: 0.045 },
      { cx: 0.65, cy: 0.72, r: 0.028 },
      { cx: 0.4, cy: 0.75, r: 0.025 },
      { cx: 0.55, cy: 0.38, r: 0.022 }
    ];
    const renderMouth = () => {
      if (isSleeping) {
        return /* @__PURE__ */ React.createElement("path", { d: `M ${mX - VW * 0.06} ${mY} Q ${mX} ${mY + VW * 0.04} ${mX + VW * 0.06} ${mY}`, stroke: C.black, strokeWidth: "2", fill: "none", strokeLinecap: "round" });
      }
      const r = VW * 0.09;
      switch (mouthType) {
        case "big":
          return /* @__PURE__ */ React.createElement("path", { d: `M ${mX - r * 1.2} ${mY - r * 0.2} Q ${mX} ${mY + r * 1.5} ${mX + r * 1.2} ${mY - r * 0.2}`, fill: "#8B2020", stroke: C.black, strokeWidth: "2", strokeLinecap: "round" });
        case "flat":
          return /* @__PURE__ */ React.createElement("path", { d: `M ${mX - r} ${mY} L ${mX + r} ${mY}`, stroke: C.black, strokeWidth: "2.5", strokeLinecap: "round", fill: "none" });
        case "sad":
          return /* @__PURE__ */ React.createElement("path", { d: `M ${mX - r} ${mY + r * 0.4} Q ${mX} ${mY - r * 0.6} ${mX + r} ${mY + r * 0.4}`, stroke: C.black, strokeWidth: "2.5", fill: "none", strokeLinecap: "round" });
        default:
          return /* @__PURE__ */ React.createElement("path", { d: `M ${mX - r} ${mY} Q ${mX} ${mY + r * 1.2} ${mX + r} ${mY}`, stroke: C.black, strokeWidth: "2.5", fill: "none", strokeLinecap: "round" });
      }
    };
    const wrapStyle = {
      width: size,
      height: size,
      flexShrink: 0,
      animation: isSleeping ? "petSleep 2.5s ease-in-out infinite" : animStyle || (bounce ? "pouBounce 2s ease-in-out infinite" : "none")
    };
    return /* @__PURE__ */ React.createElement("div", { style: wrapStyle }, /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${VW} ${VH}`, width: size, height: size, style: { overflow: "visible" } }, /* @__PURE__ */ React.createElement("ellipse", { cx: VW * 0.5, cy: VH * 0.97, rx: VW * 0.28, ry: VH * 0.045, fill: "rgba(0,0,0,0.12)" }), /* @__PURE__ */ React.createElement("path", { d: pathD, fill: color, stroke: C.black, strokeWidth: "3.5", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { d: pathD, fill: "rgba(255,255,255,0.22)" }), dirtiness > 20 && DIRT_SPOTS.slice(0, Math.ceil(dirtiness / 12)).map((s, i) => /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        key: i,
        cx: s.cx * VW,
        cy: s.cy * VH,
        rx: s.r * VW * (0.7 + i * 0.05),
        ry: s.r * VH * 0.75,
        fill: `rgba(101,67,33,${Math.min(0.65, dirtOpacity * (0.4 + i * 0.06))})`,
        transform: `rotate(${i * 23},${s.cx * VW},${s.cy * VH})`
      }
    )), cleanLevel < 30 && /* @__PURE__ */ React.createElement("path", { d: pathD, fill: `rgba(80,50,20,${0.18 + (30 - cleanLevel) * 5e-3})` }), mood < 30 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: VW * 0.62, cy: VH * 0.52, r: 5, fill: "rgba(0,0,0,0.12)" }), /* @__PURE__ */ React.createElement("circle", { cx: VW * 0.44, cy: VH * 0.65, r: 4, fill: "rgba(0,0,0,0.10)" })), isSleeping ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", { x1: elX - eyeR * 0.8, y1: elY, x2: elX + eyeR * 0.8, y2: elY, stroke: C.black, strokeWidth: "3", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("line", { x1: erX - eyeR * 0.8, y1: erY, x2: erX + eyeR * 0.8, y2: erY, stroke: C.black, strokeWidth: "3", strokeLinecap: "round" })) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("g", { style: { animation: "pouBlink 3.5s infinite", transformOrigin: `${elX}px ${elY}px` } }, /* @__PURE__ */ React.createElement("circle", { cx: elX, cy: elY, r: eyeR, fill: "white", stroke: C.black, strokeWidth: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: elX + px, cy: elY + py, r: pupR, fill: C.black }), /* @__PURE__ */ React.createElement("circle", { cx: elX + px - pupR * 0.35, cy: elY + py - pupR * 0.4, r: pupR * 0.25, fill: "white" })), /* @__PURE__ */ React.createElement("g", { style: { animation: "pouBlink 3.5s 0.18s infinite", transformOrigin: `${erX}px ${erY}px` } }, /* @__PURE__ */ React.createElement("circle", { cx: erX, cy: erY, r: eyeR, fill: "white", stroke: C.black, strokeWidth: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: erX + px, cy: erY + py, r: pupR, fill: C.black }), /* @__PURE__ */ React.createElement("circle", { cx: erX + px - pupR * 0.35, cy: erY + py - pupR * 0.4, r: pupR * 0.25, fill: "white" }))), renderMouth(), isSleeping && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "text",
      {
        x: erX + eyeR * 2.5,
        y: elY - eyeR * 2,
        fontSize: VW * 0.1,
        fill: "#7E57C2",
        fontWeight: "900",
        opacity: "0.9",
        style: { animation: "floatZzz 2s 0s ease-in-out infinite" }
      },
      "z"
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: erX + eyeR * 3.5,
        y: elY - eyeR * 3.4,
        fontSize: VW * 0.07,
        fill: "#9575CD",
        fontWeight: "900",
        opacity: "0.7",
        style: { animation: "floatZzz 2s 0.7s ease-in-out infinite" }
      },
      "z"
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: erX + eyeR * 4.5,
        y: elY - eyeR * 4.6,
        fontSize: VW * 0.05,
        fill: "#B39DDB",
        fontWeight: "900",
        opacity: "0.5",
        style: { animation: "floatZzz 2s 1.4s ease-in-out infinite" }
      },
      "z"
    )), !isSleeping && mood > 55 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ellipse", { cx: elX - eyeR * 2.2, cy: elY + eyeR * 0.8, rx: eyeR * 1.4, ry: eyeR * 0.8, fill: "#FF9BB2", opacity: "0.32" }), /* @__PURE__ */ React.createElement("ellipse", { cx: erX + eyeR * 2.2, cy: erY + eyeR * 0.8, rx: eyeR * 1.4, ry: eyeR * 0.8, fill: "#FF9BB2", opacity: "0.32" }))));
  }
  function ParticleOverlay({ action }) {
    const particles = (0, import_react.useRef)(
      Array.from({ length: 14 }, (_, i) => {
        const anims = ["floatUp", "floatUpL", "floatUpR"];
        return {
          emoji: action.particles[i % action.particles.length],
          left: 8 + Math.random() * 84,
          size: 16 + Math.random() * 18,
          delay: i * 0.1,
          dur: 0.75 + Math.random() * 0.55,
          anim: anims[i % 3]
        };
      })
    ).current;
    return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 30, overflow: "hidden" } }, particles.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      position: "absolute",
      left: `${p.left}%`,
      bottom: "20%",
      fontSize: p.size,
      opacity: 0,
      animation: `${p.anim} ${p.dur}s ${p.delay}s ease-out forwards`
    } }, p.emoji)));
  }
  function InteractPanel({ onAction, onClose, onStartGame, onStartWaterGame, state }) {
    const row1 = ACTIONS.slice(0, 3);
    const sleepAction = ACTIONS[3];
    const inv = state.inventory || [];
    const foodCount = inv.filter((i) => i && i.category === "food").length;
    const cleanCount = inv.filter((i) => i && i.category === "clean").length;
    const tooDirty = state.clean <= 85;
    const toClean = state.clean > 85;
    const getHint = (id) => {
      if (id === "eat") {
        if (foodCount === 0) return { text: "\u274C Kh\xF4ng c\xF3 \u0111\u1ED3 \u0103n", warn: true };
        return { text: `\u{1F34E} \xD7${foodCount} trong t\xFAi`, warn: false };
      }
      if (id === "bath") {
        if (toClean) return { text: "\u2705 \u0110ang s\u1EA1ch r\u1ED3i!", warn: true };
        if (state.clean < 30) return { text: "\u{1F9FC} R\u1EA5t b\u1EA9n! T\u1EAFm ngay", warn: false };
        return { text: cleanCount > 0 ? `\u{1F9FC} \xD7${cleanCount} trong t\xFAi` : "\u{1F9FC} B\u1EA9n - c\u1EA7n t\u1EAFm", warn: false };
      }
      if (id === "play") return { text: "+12 XP \xB7 +10 \u0111i\u1EC3m", warn: false };
      return null;
    };
    const BtnItem = ({ a }) => {
      const hint = getHint(a.id);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onAction(a),
          style: {
            background: a.lightBg,
            border: `2.5px solid ${a.color}55`,
            borderRadius: 20,
            padding: "12px 6px 10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            transition: "transform 0.12s, box-shadow 0.12s",
            boxShadow: `0 3px 12px ${a.color}22`,
            flex: 1
          },
          onMouseDown: (e) => {
            e.currentTarget.style.transform = "scale(0.90)";
            e.currentTarget.style.boxShadow = "none";
          },
          onMouseUp: (e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = `0 3px 12px ${a.color}22`;
          }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 30, lineHeight: 1 } }, a.icon),
        /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 11, color: a.color, textAlign: "center" } }, a.label),
        hint && /* @__PURE__ */ React.createElement("span", { style: {
          fontFamily: F.game,
          fontSize: 8,
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.2,
          color: hint.warn ? "#E53935" : "#757575",
          background: hint.warn ? "#FFEBEE" : "#F5F5F5",
          borderRadius: 6,
          padding: "2px 5px",
          marginTop: 1
        } }, hint.text)
      );
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick: onClose,
        style: {
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            background: "white",
            borderRadius: "26px 26px 0 0",
            padding: "14px 16px 24px",
            animation: "slideUp 0.22s ease-out"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 5, borderRadius: 99, background: "#E0E0E0", margin: "0 auto 14px" } }),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 15, color: C.black } }, "\u26A1 Ch\u0103m s\xF3c pet"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5 } }, [
          { icon: "\u{1F34E}", v: state.hunger, c: "#4CAF50" },
          { icon: "\u2764\uFE0F", v: state.happiness, c: "#E53935" },
          { icon: "\u{1F9FC}", v: state.clean, c: "#29B6F6" },
          { icon: "\u26A1", v: state.energy, c: "#F9A825" }
        ].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.icon, style: {
          background: `${s.c}18`,
          borderRadius: 8,
          padding: "3px 5px",
          textAlign: "center",
          border: `1.5px solid ${s.v < 30 ? s.c + "88" : "transparent"}`
        } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12 } }, s.icon), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 8, fontWeight: 800, color: s.v < 30 ? s.c : "#BDBDBD", marginTop: 1 } }, s.v))))),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 10 } }, row1.map((a) => /* @__PURE__ */ React.createElement(BtnItem, { key: a.id, a }))),
        /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => onAction(sleepAction),
            disabled: state.isSleeping,
            style: {
              width: "100%",
              background: state.isSleeping ? "#EDE7F6" : "linear-gradient(135deg,#EDE7F6,#D1C4E9)",
              border: "2.5px solid #7E57C255",
              borderRadius: 20,
              padding: "14px 24px",
              cursor: state.isSleeping ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              transition: "transform 0.12s, box-shadow 0.12s",
              boxShadow: "0 3px 12px #7E57C222",
              opacity: state.isSleeping ? 0.65 : 1
            },
            onMouseDown: (e) => {
              if (!state.isSleeping) e.currentTarget.style.transform = "scale(0.97)";
            },
            onMouseUp: (e) => {
              e.currentTarget.style.transform = "scale(1)";
            }
          },
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 36, lineHeight: 1 } }, "\u{1F634}"),
          /* @__PURE__ */ React.createElement("div", { style: { textAlign: "left" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 14, color: "#5E35B1" } }, state.isSleeping ? "\u0110ang ng\u1EE7\u2026" : "Ng\u1EE7"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 11, color: "#9575CD", marginTop: 2 } }, state.isSleeping ? `\u23F3 Ch\u1EDD ${Math.max(0, Math.ceil(((state.sleepUntil || Date.now()) - Date.now()) / 1e3))}s n\u1EEFa th\u1EE9c` : `+45 \u26A1 \xB7 +8 \u2764\uFE0F \xB7 +15 XP \xB7 ng\u1EE7 ${state.SLEEP_SECS || 30}s`)),
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 20, marginLeft: "auto", opacity: 0.6 } }, "\u{1F4A4}")
        ),
        /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => {
              onClose();
              onStartGame && onStartGame();
            },
            style: {
              width: "100%",
              marginTop: 10,
              background: "linear-gradient(135deg,#1A1A2E,#16213E)",
              border: "2.5px solid #B4FF0055",
              borderRadius: 20,
              padding: "13px 24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              transition: "transform 0.12s, box-shadow 0.12s",
              boxShadow: "0 4px 16px rgba(180,255,0,0.18)"
            },
            onMouseDown: (e) => {
              e.currentTarget.style.transform = "scale(0.97)";
            },
            onMouseUp: (e) => {
              e.currentTarget.style.transform = "scale(1)";
            }
          },
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 34, lineHeight: 1 } }, "\u{1F3AE}"),
          /* @__PURE__ */ React.createElement("div", { style: { textAlign: "left" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 14, color: "#B4FF00" } }, "Ch\u01A1i Block Blast"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 11, color: "#78909C", marginTop: 2 } }, "Ki\u1EBFm \u{1FA99} \xB7 +\u2764\uFE0F h\u1EA1nh ph\xFAc \xB7 \u2212\u26A1 n\u0103ng l\u01B0\u1EE3ng")),
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, marginLeft: "auto", color: "#B4FF00", opacity: 0.8 } }, "\u25B6")
        ),
        /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => {
              onClose();
              onStartWaterGame && onStartWaterGame();
            },
            style: {
              width: "100%",
              marginTop: 8,
              background: "linear-gradient(135deg,#0D1B2A,#1B3A5C)",
              border: "2.5px solid rgba(41,182,246,0.45)",
              borderRadius: 20,
              padding: "13px 24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              transition: "transform 0.12s, box-shadow 0.12s",
              boxShadow: "0 4px 16px rgba(41,182,246,0.22)"
            },
            onMouseDown: (e) => {
              e.currentTarget.style.transform = "scale(0.97)";
            },
            onMouseUp: (e) => {
              e.currentTarget.style.transform = "scale(1)";
            }
          },
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 34, lineHeight: 1 } }, "\u{1F4A7}"),
          /* @__PURE__ */ React.createElement("div", { style: { textAlign: "left" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 14, color: "#29B6F6" } }, "Th\u1EA3 B\xF3ng N\u01B0\u1EDBc"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 11, color: "#78909C", marginTop: 2 } }, "Gh\xE9p b\xF3ng \u2192 b\xF3ng to \xB7 +\u2764\uFE0F h\u1EA1nh ph\xFAc \xB7 \u2212\u26A1 n\u0103ng l\u01B0\u1EE3ng")),
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, marginLeft: "auto", color: "#29B6F6", opacity: 0.8 } }, "\u25B6")
        )
      )
    );
  }
  function ShopPanel({ onClose, state, dispatch, showToast: showToast2 }) {
    const { points } = state;
    const [boughtId, setBoughtId] = (0, import_react.useState)(null);
    const buy = (item) => {
      if (points < item.cost) {
        showToast2("\u274C Kh\xF4ng \u0111\u1EE7 \u0111i\u1EC3m!");
        return;
      }
      dispatch({ type: "BUY_ITEM", id: item.id, icon: item.icon, name: item.name, category: item.category, cost: item.cost, effect: item.effect });
      setBoughtId(item.id);
      showToast2(`${item.icon} ${item.name} \u0111\xE3 mua! ${item.desc}`);
      setTimeout(() => setBoughtId(null), 1200);
      if (!state.doneMissions?.includes("d4")) {
        dispatch({ type: "COMPLETE_MISSION", id: "d4", xp: 20, pts: 30 });
      }
    };
    const CATS = [
      { key: "all", label: "T\u1EA5t c\u1EA3", icon: "\u{1F6CD}\uFE0F" },
      { key: "food", label: "Th\u1EE9c \u0103n", icon: "\u{1F34E}" },
      { key: "clean", label: "V\u1EC7 sinh", icon: "\u{1F9FC}" },
      { key: "fun", label: "Vui ch\u01A1i", icon: "\u{1F3AE}" },
      { key: "boost", label: "Boost", icon: "\u26A1" }
    ];
    const [cat, setCat] = (0, import_react.useState)("all");
    const ITEM_CATS = {
      food: ["apple", "meat", "cake", "milk"],
      clean: ["soap", "perfume"],
      fun: ["toy", "ball", "crown"],
      boost: ["drink", "potion", "star"]
    };
    const visible = cat === "all" ? SHOP_ITEMS : SHOP_ITEMS.filter((i) => (ITEM_CATS[cat] || []).includes(i.id));
    return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
      background: "#F9F9F9",
      borderRadius: "24px 24px 0 0",
      maxHeight: "78%",
      display: "flex",
      flexDirection: "column",
      animation: "slideUp 0.24s ease-out",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px 0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 5, borderRadius: 99, background: "#E0E0E0", margin: "0 auto 12px" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 16, color: C.black } }, "\u{1F6D2} Shop Pet"), /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(255,215,0,0.15)",
      borderRadius: 20,
      padding: "5px 12px",
      border: "1.5px solid rgba(255,215,0,0.4)",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 13,
      color: "#E6A800",
      display: "flex",
      alignItems: "center",
      gap: 5
    } }, "\u{1F4B0} ", points.toLocaleString())), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, overflowX: "auto", paddingBottom: 10 } }, CATS.map((c) => /* @__PURE__ */ React.createElement("button", { key: c.key, onClick: () => setCat(c.key), style: {
      background: cat === c.key ? "#1A1A1A" : "white",
      border: "1.5px solid" + (cat === c.key ? "#1A1A1A" : "#EEEEEE"),
      borderRadius: 99,
      padding: "5px 12px",
      cursor: "pointer",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontFamily: F.game,
      fontWeight: 800,
      fontSize: 11,
      color: cat === c.key ? "white" : "#999"
    } }, /* @__PURE__ */ React.createElement("span", null, c.icon), /* @__PURE__ */ React.createElement("span", null, c.label))))), /* @__PURE__ */ React.createElement("div", { style: { overflowY: "auto", padding: "0 12px 24px", flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 } }, visible.map((item) => {
      const canAfford = points >= item.cost;
      const justBought = boughtId === item.id;
      return /* @__PURE__ */ React.createElement("div", { key: item.id, style: {
        background: justBought ? "#E8F5E9" : canAfford ? "white" : "#FAFAFA",
        borderRadius: 18,
        padding: "14px 12px",
        border: `1.5px solid ${justBought ? "#66BB6A" : canAfford ? "#EEEEEE" : "#F0F0F0"}`,
        boxShadow: canAfford ? "0 3px 12px rgba(0,0,0,0.06)" : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        transition: "all 0.2s"
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 36, filter: canAfford ? "none" : "grayscale(0.7) opacity(0.55)" } }, item.icon), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 12, color: canAfford ? C.black : "#BDBDBD", textAlign: "center" } }, item.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 10, color: "#BDBDBD", textAlign: "center", lineHeight: 1.4 } }, item.desc), /* @__PURE__ */ React.createElement("button", { onClick: () => buy(item), style: {
        background: justBought ? "#4CAF50" : canAfford ? "#1A1A1A" : "#E0E0E0",
        border: "none",
        borderRadius: 12,
        padding: "8px 0",
        width: "100%",
        cursor: canAfford ? "pointer" : "not-allowed",
        fontFamily: F.game,
        fontWeight: 900,
        fontSize: 12,
        color: justBought ? "white" : canAfford ? "#FFD700" : "#BDBDBD",
        transition: "background 0.2s"
      } }, justBought ? "\u2713 \u0110\xE3 mua" : `\u{1F4B0} ${item.cost}`));
    })))));
  }
  function StatBtn({ icon, value, max = 100, color = C.green }) {
    const pct = Math.max(0, Math.min(100, value / max * 100));
    const isLow = pct < 30;
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      minWidth: 32,
      background: isLow ? `${color}22` : "rgba(255,255,255,0.07)",
      borderRadius: 8,
      padding: "4px 5px",
      border: isLow ? `1px solid ${color}66` : "1px solid transparent",
      transition: "background 0.3s"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, lineHeight: 1 } }, icon), /* @__PURE__ */ React.createElement("div", { style: {
      width: 28,
      height: 4,
      background: "rgba(255,255,255,0.15)",
      borderRadius: 99,
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${pct}%`, height: 4, background: color, borderRadius: 99, transition: "width 0.3s" } })), /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 9,
      color: isLow ? color : "rgba(255,255,255,0.75)"
    } }, value));
  }
  function SleepCountdown({ sleepUntil }) {
    const [secsLeft, setSecsLeft] = (0, import_react.useState)(Math.max(0, Math.ceil((sleepUntil - Date.now()) / 1e3)));
    (0, import_react.useEffect)(() => {
      const id = setInterval(() => {
        const s = Math.max(0, Math.ceil((sleepUntil - Date.now()) / 1e3));
        setSecsLeft(s);
        if (s <= 0) clearInterval(id);
      }, 500);
      return () => clearInterval(id);
    }, [sleepUntil]);
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(126,87,194,0.85)",
      borderRadius: 99,
      padding: "10px 28px",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 14,
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: 8,
      boxShadow: "0 6px 20px rgba(126,87,194,0.45)"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 20 } }, "\u{1F634}"), /* @__PURE__ */ React.createElement("span", null, "Pet \u0111ang ng\u1EE7..."), /* @__PURE__ */ React.createElement("span", { style: {
      background: "rgba(255,255,255,0.2)",
      borderRadius: 8,
      padding: "3px 10px",
      fontFamily: F.game,
      fontSize: 13,
      fontWeight: 900
    } }, secsLeft, "s")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 10, color: "rgba(255,255,255,0.7)" } }, "\u{1F4A4} \u0110\u1EEBng l\xE0m phi\u1EC1n pet nh\xE9!"));
  }
  var PET_SPEECH = {
    vhappy: ["Y\xEAu b\u1EA1n l\u1EAFm l\u1EAFm! \u{1F970}", "H\u1EA1nh ph\xFAc qu\xE1 \u0111iiiii! \u{1F31F}", "\xD4m m\xECnh \u0111i b\u1EA1n \u01A1i~ \u2764\uFE0F", "M\xECnh vui l\u1EAFm! Ch\u01A1i ti\u1EBFp nh\xE9! \u{1F389}", "B\u1EA1n l\xE0 ng\u01B0\u1EDDi b\u1EA1n t\u1ED1t nh\u1EA5t! \u2728"],
    happy: ["Hi b\u1EA1n! \u{1F60A}", "Ch\u01A1i v\u1EDBi m\xECnh nha~ \u{1F3AE}", "H\xF4m nay vui gh\xEA! \u{1F604}", "M\xECnh \u0111ang r\u1EA5t \u1ED5n! \u{1F44D}", "C\u1EA3m \u01A1n \u0111\xE3 ch\u0103m m\xECnh \u{1F64F}"],
    ok: ["\u1EEAm... b\xECnh th\u01B0\u1EDDng th\xF4i \u{1F610}", "B\u1EA1n c\xF3 kh\u1ECFe kh\xF4ng? \u{1F642}", "Ch\u01A1i th\xEAm \u0111i b\u1EA1n \u01A1i...", "H\u01A1i bu\u1ED3n ng\u1EE7... \u{1F62A}", "Ok ok... \u{1FAE4}"],
    sad: ["M\xECnh h\u01A1i bu\u1ED3n... \u{1F614}", "Ch\u0103m m\xECnh th\xEAm \u0111\u01B0\u1EE3c kh\xF4ng? \u{1F97A}", "L\xE2u l\u1EAFm kh\xF4ng \u0111\u01B0\u1EE3c vui r\u1ED3i \u{1F61E}", "\u0110\xF3i m\u1ED9t ch\xFAt r\u1ED3i \u0111\xF3... \u{1F34E}", "C\u1EA7n b\u1EA1n b\xEAn c\u1EA1nh \u{1FAC2}"],
    vsad: ["M\xECnh b\u1ECB b\u1ECF r\u01A1i r\u1ED3i \u{1F622}", "\u0110\xF3i v\xE0 b\u1EA9n qu\xE1 h\xE0! \u{1F624}", "Kh\xF4ng ai ch\u0103m m\xECnh h\u1EBFt \u{1F4A2}", "M\xECnh mu\u1ED1n \u0103n c\u01A1m \u{1F62D}", "L\xE2u l\u1EAFm r\u1ED3i... \u{1F5A4}"]
  };
  function HomeTab({ state, dispatch, showToast: showToast2, onStartGame, onStartWaterGame, onStartSurgery }) {
    const [showInteract, setShowInteract] = (0, import_react.useState)(false);
    const [currentAnim, setCurrentAnim] = (0, import_react.useState)(null);
    const [mouthOverride, setMouthOverride] = (0, import_react.useState)(null);
    const [eyeOffset, setEyeOffset] = (0, import_react.useState)({ x: 0, y: 0 });
    const [showShopPanel, setShowShopPanel] = (0, import_react.useState)(false);
    const [petSpeech, setPetSpeech] = (0, import_react.useState)(null);
    const [petBump, setPetBump] = (0, import_react.useState)(false);
    const petRef = (0, import_react.useRef)(null);
    const speechTimer = (0, import_react.useRef)(null);
    const { petData, happiness } = state;
    const rank = getRank(state.points);
    (0, import_react.useEffect)(() => {
      if (!state.isSleeping || !state.sleepUntil) return;
      const remaining = state.sleepUntil - Date.now();
      if (remaining <= 0) {
        dispatch({ type: "WAKE_UP" });
        showToast2("\u{1F305} Pet \u0111\xE3 th\u1EE9c d\u1EADy! +45 \u26A1 N\u0103ng l\u01B0\u1EE3ng!");
        return;
      }
      const t = setTimeout(() => {
        dispatch({ type: "WAKE_UP" });
        showToast2("\u{1F305} Pet \u0111\xE3 th\u1EE9c d\u1EADy! +45 \u26A1 N\u0103ng l\u01B0\u1EE3ng!");
      }, remaining);
      return () => clearTimeout(t);
    }, [state.isSleeping, state.sleepUntil]);
    (0, import_react.useEffect)(() => {
      const id = setInterval(() => {
        dispatch({ type: "DECREASE_CLEAN", amount: 1 });
      }, 12e3);
      return () => clearInterval(id);
    }, []);
    const triggerAction = (0, import_react.useCallback)((action) => {
      setShowInteract(false);
      if (action.id === "eat") {
        const foods = (state.inventory || []).filter((i) => i && typeof i === "object" && i.category === "food");
        if (foods.length === 0) {
          showToast2("\u{1F34E} Kh\xF4ng c\xF3 \u0111\u1ED3 \u0103n trong t\xFAi! Mua \u1EDF Shop \u{1F6D2}");
          return;
        }
        dispatch({ type: "USE_FOOD" });
        const pick = foods[Math.floor(Math.random() * foods.length)];
        showToast2(`${pick.icon} Cho \u0103n ${pick.name}! \u{1F34E} \u0110\xF3i +${pick.effect?.hunger || 20}`);
        if (!state.doneMissions?.includes("d1")) dispatch({ type: "COMPLETE_MISSION", id: "d1", xp: 30, pts: 50 });
      } else if (action.id === "bath") {
        if (state.clean > 85) {
          showToast2("\u{1F9FC} Pet ch\u01B0a b\u1EA9n! Ch\u1EDD th\xEAm r\u1ED3i t\u1EAFm nh\xE9 \u{1F43E}");
          return;
        }
        const soaps = (state.inventory || []).filter((i) => i && typeof i === "object" && i.category === "clean");
        dispatch({ type: "USE_CLEAN" });
        if (soaps.length > 0) {
          const pick = soaps[Math.floor(Math.random() * soaps.length)];
          showToast2(`${pick.icon} D\xF9ng ${pick.name}! \u{1F9FC} S\u1EA1ch +${pick.effect?.clean || 30}`);
        } else {
          showToast2("\u{1F6BF} T\u1EAFm xong! (Kh\xF4ng c\xF3 x\xE0 ph\xF2ng \u2192 +20 s\u1EA1ch)");
        }
        if (!state.doneMissions?.includes("d2")) dispatch({ type: "COMPLETE_MISSION", id: "d2", xp: 20, pts: 30 });
      } else if (action.id === "sleep") {
        if (state.isSleeping) {
          showToast2("\u{1F634} Pet \u0111ang ng\u1EE7 r\u1ED3i...");
          return;
        }
        const SLEEP_MS = (state.SLEEP_SECS || 30) * 1e3;
        dispatch({ type: "START_SLEEP", duration: SLEEP_MS });
        showToast2(`\u{1F634} Pet \u0111i ng\u1EE7... D\u1EADy sau ${state.SLEEP_SECS || 30}s`);
        if (!state.doneMissions?.includes("d3")) dispatch({ type: "COMPLETE_MISSION", id: "d3", xp: 25, pts: 40 });
      } else {
        const effects = action.applyEffect(state);
        dispatch({ type: "APPLY_EFFECTS", payload: effects });
        showToast2(`${action.icon} ${action.label} xong! +10 \u0111i\u1EC3m`);
      }
      setCurrentAnim(action);
      if (action.mouthOverride) setMouthOverride(action.mouthOverride);
      setTimeout(() => {
        setCurrentAnim(null);
        setMouthOverride(null);
      }, 1900);
    }, [state, dispatch, showToast2]);
    const handlePetTap = (0, import_react.useCallback)(() => {
      if (currentAnim) return;
      const h = state.happiness ?? 70;
      const pool = h >= 85 ? PET_SPEECH.vhappy : h >= 65 ? PET_SPEECH.happy : h >= 40 ? PET_SPEECH.ok : h >= 20 ? PET_SPEECH.sad : PET_SPEECH.vsad;
      const line = pool[Math.floor(Math.random() * pool.length)];
      setPetSpeech(line);
      setPetBump(true);
      setTimeout(() => setPetBump(false), 400);
      if (speechTimer.current) clearTimeout(speechTimer.current);
      speechTimer.current = setTimeout(() => setPetSpeech(null), 2600);
    }, [state.happiness, currentAnim]);
    (0, import_react.useEffect)(() => {
      const handleMove = (cx, cy) => {
        if (!petRef.current) return;
        const rect = petRef.current.getBoundingClientRect();
        const ox = rect.left + rect.width / 2;
        const oy = rect.top + rect.height / 2;
        const dx = cx - ox, dy = cy - oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1) return;
        const factor = Math.min(dist / 150, 1);
        const angle = Math.atan2(dy, dx);
        setEyeOffset({ x: Math.cos(angle) * factor, y: Math.sin(angle) * factor });
      };
      const onMouse = (e) => handleMove(e.clientX, e.clientY);
      const onTouch = (e) => {
        if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
      };
      window.addEventListener("mousemove", onMouse);
      window.addEventListener("touchmove", onTouch, { passive: true });
      return () => {
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("touchmove", onTouch);
      };
    }, []);
    const mouthType = mouthOverride || (happiness > 60 ? "smile" : happiness > 30 ? "flat" : "sad");
    const petAnimStyle = currentAnim ? currentAnim.petAnim : void 0;
    const xpPct = (state.xp || 0) / (state.level * 100) * 100;
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
      flex: 1,
      position: "relative",
      background: "linear-gradient(180deg,#5FC8F0 0%,#87CEEB 40%,#B8E4F7 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      minHeight: 0
    } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "8%", left: "6%", fontSize: "8vw", opacity: 0.5, animation: "float1 4s ease-in-out infinite", pointerEvents: "none" } }, "\u2601\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "16%", right: "5%", fontSize: "6vw", opacity: 0.4, animation: "float2 5s ease-in-out infinite", pointerEvents: "none" } }, "\u2601\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "4%", left: "38%", fontSize: "5vw", opacity: 0.3, animation: "float1 6.5s 1s ease-in-out infinite", pointerEvents: "none" } }, "\u2601\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "6%", right: "10%", fontSize: "7vw", opacity: 0.75, pointerEvents: "none" } }, "\u2600\uFE0F"), /* @__PURE__ */ React.createElement("div", { onClick: () => setShowShopPanel(true), style: {
      position: "absolute",
      top: "10%",
      left: 10,
      zIndex: 10,
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "linear-gradient(135deg,rgba(30,20,5,0.82),rgba(50,30,0,0.82))",
      borderRadius: 16,
      padding: "8px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
      border: "1.5px solid rgba(255,167,0,0.55)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,167,0,0.12)",
      backdropFilter: "blur(8px)",
      minWidth: 52
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 20 } }, "\u{1F6D2}"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 9, fontWeight: 900, color: "#FFB300" } }, "Shop"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 8, fontWeight: 800, color: "rgba(255,255,255,0.65)" } }, state.points.toLocaleString(), "\u0111"))), /* @__PURE__ */ React.createElement("div", { onClick: () => onStartSurgery && onStartSurgery(), style: {
      position: "absolute",
      top: "10%",
      right: 10,
      zIndex: 10,
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "linear-gradient(135deg,rgba(20,10,35,0.82),rgba(40,10,60,0.82))",
      borderRadius: 16,
      padding: "8px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
      border: "1.5px solid rgba(180,100,255,0.55)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.28), 0 0 0 1px rgba(180,100,255,0.12)",
      backdropFilter: "blur(8px)",
      minWidth: 52
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 20 } }, "\u{1F52C}"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 9, fontWeight: 900, color: "#CE93D8" } }, "S\u1EEDa"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 8, fontWeight: 800, color: "rgba(255,255,255,0.65)" } }, "Pet"))), /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: petRef,
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 5,
          cursor: "pointer",
          position: "relative"
        },
        onClick: handlePetTap,
        onTouchEnd: (e) => {
          e.preventDefault();
          handlePetTap();
        }
      },
      petSpeech && /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginBottom: 10,
        zIndex: 20,
        background: "white",
        color: "#222",
        borderRadius: 14,
        padding: "8px 14px",
        fontFamily: "'Nunito',sans-serif",
        fontWeight: 800,
        fontSize: 13,
        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        animation: "toastIn 0.25s ease-out"
      } }, petSpeech, /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        bottom: -8,
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        height: 0,
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent",
        borderTop: "8px solid white"
      } })),
      /* @__PURE__ */ React.createElement(
        PouPet,
        {
          petData: { ...petData || {}, mouthType },
          size: Math.min(190, window.innerWidth * 0.48),
          bounce: !currentAnim && !state.isSleeping,
          mood: happiness,
          animStyle: petBump ? { animation: "petBump 0.35s ease-out" } : petAnimStyle,
          eyeOffset,
          cleanLevel: state.clean,
          isSleeping: state.isSleeping
        }
      ),
      /* @__PURE__ */ React.createElement("div", { style: {
        background: "rgba(255,255,255,0.90)",
        borderRadius: 99,
        padding: "5px 18px",
        fontFamily: F.game,
        fontWeight: 900,
        fontSize: 13,
        color: C.black,
        boxShadow: "0 3px 14px rgba(0,0,0,0.13)",
        display: "flex",
        alignItems: "center",
        gap: 5
      } }, petData?.name || "Pou", state.clean < 25 && /* @__PURE__ */ React.createElement("span", { title: "R\u1EA5t b\u1EA9n!" }, "\u{1F4A9}"), state.clean >= 25 && state.clean < 50 && /* @__PURE__ */ React.createElement("span", { title: "Kh\xE1 b\u1EA9n" }, "\u{1F7E4}"), state.clean >= 50 && state.clean < 75 && /* @__PURE__ */ React.createElement("span", { title: "H\u01A1i b\u1EA9n" }, "\u{1F32B}\uFE0F"), state.isSleeping && /* @__PURE__ */ React.createElement("span", null, "\u{1F634}"))
    ), currentAnim && /* @__PURE__ */ React.createElement(ParticleOverlay, { action: currentAnim }), currentAnim && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: "8%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.78)",
      borderRadius: 22,
      padding: "8px 22px",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 14,
      color: "white",
      whiteSpace: "nowrap",
      zIndex: 35,
      animation: "toastIn 0.3s ease-out"
    } }, currentAnim.icon, " ", currentAnim.label, "!")), /* @__PURE__ */ React.createElement("div", { style: { height: 5, background: "rgba(0,0,0,0.12)", flexShrink: 0, zIndex: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${xpPct}%`, height: 5, background: "linear-gradient(90deg,#CCFF00,#96D300)", transition: "width 0.4s" } })), /* @__PURE__ */ React.createElement("div", { style: {
      height: 110,
      flexShrink: 0,
      background: "linear-gradient(180deg,#8BC34A 0%,#689F38 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      borderTop: "3px solid #558B2F"
    } }, [15, 35, 55, 75, 90].map((l, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      position: "absolute",
      bottom: "18%",
      left: `${l}%`,
      width: 6 + i % 3 * 2,
      height: 6 + i % 3 * 2,
      borderRadius: "50%",
      background: "rgba(0,0,0,0.08)"
    } })), state.isSleeping ? (
      /* ── Sleeping state — countdown display ── */
      /* @__PURE__ */ React.createElement(SleepCountdown, { sleepUntil: state.sleepUntil })
    ) : !showInteract && !currentAnim ? /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowInteract(true),
        style: {
          background: "#1A1A1A",
          border: "3px solid rgba(255,255,255,0.15)",
          borderRadius: 99,
          padding: "14px 40px",
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 15,
          color: "white",
          cursor: "pointer",
          boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          animation: "pulseBtn 2.5s ease-in-out infinite"
        }
      },
      "\u26A1 T\u01B0\u01A1ng T\xE1c"
    ) : currentAnim ? /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: "rgba(255,255,255,0.8)" } }, currentAnim.icon, " ", currentAnim.label, "...") : null), showInteract && /* @__PURE__ */ React.createElement(
      InteractPanel,
      {
        onAction: triggerAction,
        onClose: () => setShowInteract(false),
        onStartGame,
        onStartWaterGame,
        state
      }
    ), showShopPanel && /* @__PURE__ */ React.createElement(
      ShopPanel,
      {
        onClose: () => setShowShopPanel(false),
        state,
        dispatch,
        showToast: showToast2
      }
    ));
  }
  function LootTab({ state, dispatch, showToast: showToast2 }) {
    const [openState, setOpenState] = (0, import_react.useState)("idle");
    const [lastPrize, setLastPrize] = (0, import_react.useState)(null);
    const [giftCode, setGiftCode] = (0, import_react.useState)("");
    const [giftMsg, setGiftMsg] = (0, import_react.useState)(null);
    const openBox = () => {
      if (state.giftBoxes < 1 || openState !== "idle") return;
      setOpenState("opening");
      setTimeout(() => {
        const prize = rollGiftBox();
        dispatch({ type: "OPEN_GIFT_BOX" });
        setLastPrize(prize);
        setOpenState("revealed");
        if (prize.rarity === "epic") showToast2(`\u{1F38A} HUY\u1EC0N THO\u1EA0I! ${prize.emoji} ${prize.name}`);
        else if (prize.rarity === "rare") showToast2(`\u{1F48E} Hi\u1EBFm! ${prize.emoji} ${prize.name}`);
        else showToast2(`${prize.emoji} ${prize.name}`);
      }, 1100);
    };
    const redeemGift = () => {
      const code = giftCode.trim().toUpperCase();
      const found = VALID_GIFTS[code];
      if (found) {
        if (found.pts > 0) dispatch({ type: "ADD_POINTS", amount: found.pts });
        if (found.boxes > 0) dispatch({ type: "ADD_GIFT_BOXES", amount: found.boxes });
        setGiftMsg({ ok: true, msg: found.msg });
        setGiftCode("");
        showToast2(found.msg);
      } else {
        setGiftMsg({ ok: false, msg: "\u274C M\xE3 kh\xF4ng \u0111\xFAng" });
      }
      setTimeout(() => setGiftMsg(null), 2500);
    };
    const streak = state.streak || 3;
    const done = (id) => state.doneMissions?.includes(id);
    const RARITY_GRAD = {
      common: "linear-gradient(135deg,#E8F5E9,#C8E6C9)",
      rare: "linear-gradient(135deg,#E3F2FD,#BBDEFB)",
      epic: "linear-gradient(135deg,#FFF3E0,#FFE0B2)"
    };
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      padding: "10px 12px",
      gap: 8,
      boxSizing: "border-box"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "white",
      borderRadius: 16,
      padding: "10px 12px",
      flexShrink: 0,
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 11,
      color: C.black,
      marginBottom: 8,
      display: "flex",
      alignItems: "center",
      gap: 5
    } }, "\u{1F4CB} Nhi\u1EC7m V\u1EE5", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 8, fontWeight: 700, color: "#999", marginLeft: "auto" } }, "Ho\xE0n th\xE0nh \u0111\u1EC3 nh\u1EADn \u{1F4E6}")), (() => {
      const isDone = done("daily_checkin");
      return /* @__PURE__ */ React.createElement("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 6,
        background: isDone ? "#F0FBF0" : "#FAFAFA",
        borderRadius: 10,
        padding: "6px 10px",
        border: `1px solid ${isDone ? "#A5D6A9" : "#EEEEEE"}`
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, flexShrink: 0 } }, "\u{1F4C5}"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 800, fontSize: 11, color: C.black } }, "Checkin h\xF4m nay"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 9, color: "#999", marginTop: 1 } }, "M\u1ED7i ng\xE0y nh\u1EADn 1 h\u1ED9p qu\xE0")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 10, fontWeight: 900, color: "#FF9800" } }, "\u{1F4E6}\xD71"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
        if (isDone) return;
        dispatch({ type: "COMPLETE_MISSION", id: "daily_checkin", pts: 0, xp: 20, boxes: 1 });
        showToast2("\u{1F4C5} Checkin! +1 h\u1ED9p qu\xE0 \u{1F381}");
      }, style: {
        background: isDone ? "#E8F5E9" : "linear-gradient(135deg,#FFD700,#FF9800)",
        border: "none",
        borderRadius: 8,
        padding: "5px 12px",
        cursor: isDone ? "default" : "pointer",
        fontFamily: F.game,
        fontWeight: 900,
        fontSize: 10,
        color: isDone ? "#66BB6A" : "#1A1A1A"
      } }, isDone ? "\u2705 Xong" : "Nh\u1EADn")));
    })(), (() => {
      const isDone = done("invite_friends");
      return /* @__PURE__ */ React.createElement("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 6,
        background: isDone ? "#F0FBF0" : "#FAFAFA",
        borderRadius: 10,
        padding: "6px 10px",
        border: `1px solid ${isDone ? "#A5D6A9" : "#EEEEEE"}`
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, flexShrink: 0 } }, "\u{1F465}"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 800, fontSize: 11, color: C.black } }, "M\u1EDDi b\u1EA1n b\xE8"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 9, color: "#999", marginTop: 1 } }, "B\u1EA1n ch\u1EA5p nh\u1EADn \u2192 +3 h\u1ED9p qu\xE0")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 10, fontWeight: 900, color: "#039BE5" } }, "\u{1F4E6}\xD73"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
        if (isDone) {
          showToast2("\u{1F465} \u0110\xE3 m\u1EDDi r\u1ED3i!");
          return;
        }
        showToast2("\u{1F517} \u0110\xE3 copy link m\u1EDDi!");
        dispatch({ type: "COMPLETE_MISSION", id: "invite_friends", pts: 50, xp: 30, boxes: 3 });
      }, style: {
        background: isDone ? "#E8F5E9" : "#1A1A1A",
        border: "none",
        borderRadius: 8,
        padding: "5px 12px",
        cursor: "pointer",
        fontFamily: F.game,
        fontWeight: 900,
        fontSize: 10,
        color: isDone ? "#66BB6A" : "white"
      } }, isDone ? "\u2705 Xong" : "\u{1F517} M\u1EDDi")));
    })(), [
      { emoji: "\u{1F3AE}", name: "Nhi\u1EC7m v\u1EE5 Garena", sub: "Ch\u01A1i game theo h\u01B0\u1EDBng d\u1EABn", reward: "\u{1F4E6}\xD72", color: "#29B6F6", id: "partner_garena" },
      { emoji: "\u{1F3E6}", name: "K\u1EBFt n\u1ED1i V\xED \u0111i\u1EC7n t\u1EED", sub: "Li\xEAn k\u1EBFt t\xE0i kho\u1EA3n v\xED", reward: "\u{1F4E6}\xD71", color: "#66BB6A", id: "partner_wallet" },
      { emoji: "\u{1F4F1}", name: "T\u1EA3i app HEAVY", sub: "M\u1EDF app \xEDt nh\u1EA5t 1 l\u1EA7n", reward: "\u{1F4E6}\xD73", color: "#FF9800", id: "partner_heavy" }
    ].map((p, pi) => {
      const isDone = done(p.id);
      return /* @__PURE__ */ React.createElement("div", { key: p.id, style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: pi < 2 ? 6 : 0,
        background: isDone ? "#F0FBF0" : `${p.color}12`,
        borderRadius: 10,
        padding: "6px 10px",
        border: `1.5px solid ${isDone ? "#A5D6A9" : p.color + "55"}`
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, flexShrink: 0 } }, p.emoji), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 800, fontSize: 11, color: C.black } }, p.name), /* @__PURE__ */ React.createElement("span", { style: {
        fontFamily: F.game,
        fontSize: 7,
        fontWeight: 900,
        color: p.color,
        background: `${p.color}22`,
        borderRadius: 99,
        padding: "1px 5px",
        flexShrink: 0
      } }, "\u0110\u1ED0I T\xC1C")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 9, color: "#999", marginTop: 1 } }, p.sub)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 10, fontWeight: 900, color: p.color } }, p.reward), /* @__PURE__ */ React.createElement("button", { onClick: () => {
        if (isDone) return;
        showToast2(`${p.emoji} ${p.name}: S\u1EAFp ra m\u1EAFt!`);
      }, style: {
        background: isDone ? "#E8F5E9" : `linear-gradient(135deg,${p.color},${p.color}BB)`,
        border: "none",
        borderRadius: 8,
        padding: "5px 12px",
        cursor: isDone ? "default" : "pointer",
        fontFamily: F.game,
        fontWeight: 900,
        fontSize: 10,
        color: isDone ? "#66BB6A" : "white"
      } }, isDone ? "\u2705 Xong" : "L\xE0m")));
    })), /* @__PURE__ */ React.createElement("div", { style: {
      background: "linear-gradient(135deg,#1A1A2E,#16213E)",
      borderRadius: 16,
      padding: "10px 12px",
      flexShrink: 0,
      border: "1.5px solid rgba(255,255,255,0.08)",
      boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
      position: "relative",
      overflow: "hidden"
    } }, [{ top: 4, right: 8, d: 0 }, { top: 16, right: 30, d: 0.7 }, { bottom: 4, left: 8, d: 1.2 }].map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      position: "absolute",
      ...s.top !== void 0 ? { top: s.top } : { bottom: s.bottom },
      ...s.right !== void 0 ? { right: s.right } : { left: s.left },
      fontSize: 9,
      animation: `sparkle 1.8s ${s.d}s ease-in-out infinite`,
      pointerEvents: "none"
    } }, "\u2728")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14 } }, "\u{1F525}"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 11, color: "#FFD700" } }, "Chu\u1ED7i ", streak, " ng\xE0y")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 8, color: "rgba(255,255,255,0.4)" } }, "Nh\u1EADn th\u01B0\u1EDFng giai \u0111o\u1EA1n")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, CHECKIN_MILESTONES.map((m) => {
      const reached = streak >= m.days;
      const mId = `milestone_${m.days}`;
      const claimed = done(mId);
      const canClaim = reached && !claimed;
      return /* @__PURE__ */ React.createElement("button", { key: m.days, onClick: () => {
        if (!canClaim) return;
        dispatch({ type: "COMPLETE_MISSION", id: mId, pts: m.pts, xp: m.days * 5, boxes: m.boxes });
        showToast2(`${m.icon} ${m.label}: +${m.boxes} h\u1ED9p qu\xE0!`);
      }, style: {
        flex: 1,
        borderRadius: 9,
        padding: "5px 2px",
        cursor: canClaim ? "pointer" : "default",
        border: `1.5px solid ${claimed ? "#66BB6A" : reached ? "#FFB300" : "rgba(255,255,255,0.12)"}`,
        background: claimed ? "rgba(102,187,106,0.18)" : reached ? "rgba(255,179,0,0.18)" : "rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        transition: "transform 0.1s"
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14 } }, claimed ? "\u2705" : m.icon), /* @__PURE__ */ React.createElement("span", { style: {
        fontFamily: F.game,
        fontSize: 7,
        fontWeight: 900,
        color: claimed ? "#66BB6A" : reached ? "#FFB300" : "rgba(255,255,255,0.3)"
      } }, m.label), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 7, color: "#FF9800", fontWeight: 900 } }, "\u{1F4E6}\xD7", m.boxes, m.pts ? ` +${m.pts}\u0111` : ""));
    }))), /* @__PURE__ */ React.createElement("div", { style: { height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 10 } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, width: 50, textAlign: "center" } }, openState === "idle" && /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 38,
      animation: state.giftBoxes > 0 ? "float1 2s ease-in-out infinite" : "none",
      filter: state.giftBoxes > 0 ? "drop-shadow(0 4px 12px rgba(255,200,0,0.55))" : "grayscale(1) opacity(0.4)"
    } }, "\u{1F381}"), openState === "opening" && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 38, animation: "boxShake 1.1s ease-in-out" } }, "\u{1F381}"), openState === "revealed" && lastPrize && /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 38,
      animation: "rewardIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
      filter: `drop-shadow(0 3px 10px ${lastPrize.color}99)`
    } }, lastPrize.emoji)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, openState === "idle" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: "white", marginBottom: 2 } }, "H\u1ED9p Qu\xE0 Th\u1EF1c"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } }, ["\u{1F3AE} Garena", "\u{1F381} Qu\xE0 th\u1EADt", "\u{1FA99} \u0110i\u1EC3m"].map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: {
      fontFamily: F.game,
      fontSize: 8,
      color: "rgba(255,255,255,0.45)",
      background: "rgba(255,255,255,0.08)",
      borderRadius: 99,
      padding: "2px 6px"
    } }, t)))), openState === "opening" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: "white" } }, "\u0110ang m\u1EDF..."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, marginTop: 4 } }, [0, 0.15, 0.3].map((d, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#FFD700",
      animation: `sparkle 0.5s ${d}s ease-in-out infinite`
    } })))), openState === "revealed" && lastPrize && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: {
      display: "inline-block",
      background: `${lastPrize.color}22`,
      border: `1.5px solid ${lastPrize.color}`,
      borderRadius: 99,
      padding: "2px 8px",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 8,
      color: lastPrize.color,
      marginBottom: 3
    } }, lastPrize.label), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: "white" } }, lastPrize.name), lastPrize.desc && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 9, color: "rgba(255,255,255,0.5)", marginTop: 1 } }, lastPrize.desc))), /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 } }, openState === "idle" && /* @__PURE__ */ React.createElement("button", { onClick: openBox, disabled: state.giftBoxes < 1, style: {
      background: state.giftBoxes > 0 ? "linear-gradient(135deg,#FFD700,#FF9800)" : "rgba(255,255,255,0.08)",
      border: "none",
      borderRadius: 12,
      padding: "9px 14px",
      cursor: state.giftBoxes > 0 ? "pointer" : "not-allowed",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 12,
      color: state.giftBoxes > 0 ? "#1A1A1A" : "rgba(255,255,255,0.25)",
      boxShadow: state.giftBoxes > 0 ? "0 4px 14px rgba(255,215,0,0.4)" : "none"
    } }, "\u{1F381} M\u1EDF!"), openState === "revealed" && /* @__PURE__ */ React.createElement("button", { onClick: () => {
      setOpenState("idle");
      setLastPrize(null);
    }, style: {
      background: "rgba(255,255,255,0.12)",
      border: "1.5px solid rgba(255,255,255,0.2)",
      borderRadius: 12,
      padding: "9px 14px",
      cursor: "pointer",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 11,
      color: "white"
    } }, "OK \u2713"), /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "4px 8px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 16, fontWeight: 900, color: "#FFD700", lineHeight: 1 } }, state.giftBoxes), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 8, color: "rgba(255,255,255,0.5)" } }, "h\u1ED9p"))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
      flex: "0 0 auto",
      width: "42%",
      background: "linear-gradient(135deg,#FFFDE7,#FFF8E1)",
      borderRadius: 14,
      padding: "9px 10px",
      border: "1.5px solid rgba(255,193,7,0.3)",
      display: "flex",
      flexDirection: "column",
      gap: 3
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 9, fontWeight: 800, color: "#E65100" } }, "\u{1FA99} \u0110I\u1EC2M HI\u1EC6N T\u1EA0I"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 20, fontWeight: 900, color: "#E65100", lineHeight: 1 } }, state.points.toLocaleString()), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 8, color: "#B0BEC5", lineHeight: 1.4 } }, "D\xF9ng \u0111\u1EC3 nu\xF4i pet l\u1EDBn l\xEAn")), /* @__PURE__ */ React.createElement("div", { style: {
      flex: 1,
      background: "white",
      borderRadius: 14,
      padding: "9px 10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 10, color: C.black, marginBottom: 5 } }, "\u{1F381} Gift Code"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, marginBottom: 3 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: giftCode,
        onChange: (e) => {
          setGiftCode(e.target.value.toUpperCase());
          setGiftMsg(null);
        },
        onKeyDown: (e) => e.key === "Enter" && redeemGift(),
        placeholder: "HEAVY2026",
        style: {
          flex: 1,
          background: "#F9F9F9",
          border: "1.5px solid #EEEEEE",
          borderRadius: 8,
          padding: "7px 8px",
          fontFamily: F.game,
          fontSize: 10,
          fontWeight: 800,
          outline: "none",
          letterSpacing: "0.04em",
          boxSizing: "border-box",
          minWidth: 0
        }
      }
    ), /* @__PURE__ */ React.createElement("button", { onClick: redeemGift, style: {
      background: "#1A1A1A",
      border: "none",
      borderRadius: 8,
      padding: "7px 10px",
      cursor: "pointer",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 10,
      color: "white",
      flexShrink: 0
    } }, "\u2728")), giftMsg ? /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontSize: 8,
      fontWeight: 800,
      color: giftMsg.ok ? C.green : "#E53935",
      textAlign: "center"
    } }, giftMsg.msg) : /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 7, color: "#CCC", textAlign: "center" } }, "GARENA2026 \xB7 HEAVY2026"))));
  }
  function PlayerProfileModal({ player, myState, onClose }) {
    const isMe = player.name === "B\u1EA1n";
    const petData = isMe ? myState.petData || {} : { color: player.petColor };
    const pName = isMe ? myState.petData?.name || "Pet c\u1EE7a b\u1EA1n" : player.petName;
    const lvl = isMe ? myState.level : player.lv;
    const pts = isMe ? myState.points : player.pts;
    const hunger = isMe ? myState.hunger : player.hunger;
    const happy = isMe ? myState.happiness : player.happiness;
    const clean = isMe ? myState.clean : player.clean;
    const energy = isMe ? myState.energy : player.energy;
    const rank = getRank(pts);
    const nextRank = RANKS.find((r) => r.minPts > pts);
    const prog = nextRank ? Math.round((pts - rank.minPts) / (nextRank.minPts - rank.minPts) * 100) : 100;
    const mc = player.rank === 1 ? "#FFD700" : player.rank === 2 ? "#B8C4CC" : player.rank === 3 ? "#CD8B52" : null;
    const StatRow = ({ icon, label, value, color }) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, width: 22, textAlign: "center", flexShrink: 0 } }, icon), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 3 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 10, fontWeight: 800, color: "#888" } }, label), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 10, fontWeight: 900, color } }, value, "/100")), /* @__PURE__ */ React.createElement("div", { style: { height: 7, borderRadius: 99, background: "#F0F0F0", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: `${value}%`,
      height: 7,
      borderRadius: 99,
      background: `linear-gradient(90deg,${color}99,${color})`,
      transition: "width 0.4s"
    } }))));
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick: onClose,
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            background: "white",
            borderRadius: "28px 28px 0 0",
            animation: "slideUp 0.26s cubic-bezier(0.34,1.2,0.64,1)",
            overflow: "hidden",
            maxHeight: "88%",
            display: "flex",
            flexDirection: "column"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: {
          background: mc ? `linear-gradient(135deg,${mc}44,${mc}18)` : `linear-gradient(135deg,${rank.color}33,${rank.color}0A)`,
          padding: "14px 16px 20px",
          borderBottom: `2px solid ${mc || rank.color}33`,
          position: "relative"
        } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 5, borderRadius: 99, background: "rgba(0,0,0,0.15)", margin: "0 auto 14px" } }), mc && /* @__PURE__ */ React.createElement("div", { style: {
          position: "absolute",
          top: 14,
          right: 16,
          fontSize: 28,
          filter: `drop-shadow(0 3px 8px ${mc}88)`
        } }, player.rank === 1 ? "\u{1F947}" : player.rank === 2 ? "\u{1F948}" : "\u{1F949}"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: {
          background: "rgba(255,255,255,0.7)",
          borderRadius: 20,
          padding: 8,
          boxShadow: `0 6px 20px ${rank.color}28`,
          border: `2px solid ${rank.color}44`
        } }, /* @__PURE__ */ React.createElement(PouPet, { petData, size: 100, bounce: false, mood: happy || 70 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, paddingBottom: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 18, color: C.black, marginBottom: 2 } }, player.icon, " ", player.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 12, color: "#888", marginBottom: 6 } }, "\u{1F43E} ", pName), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("div", { style: {
          background: "#1A1A1A",
          borderRadius: 99,
          padding: "4px 10px",
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 11,
          color: "#B4FF00"
        } }, "Lv.", lvl), /* @__PURE__ */ React.createElement("div", { style: {
          background: `${rank.color}22`,
          borderRadius: 99,
          padding: "4px 10px",
          border: `1.5px solid ${rank.color}66`,
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 11,
          color: rank.color
        } }, rank.icon, " ", rank.name)), /* @__PURE__ */ React.createElement("div", { style: {
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 15,
          color: "#E6A800",
          display: "flex",
          alignItems: "center",
          gap: 4
        } }, "\u{1F4B0} ", pts.toLocaleString(), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "#BBB", fontWeight: 700 } }, "\u0111i\u1EC3m")))), /* @__PURE__ */ React.createElement("div", { style: {
          marginTop: 10,
          background: "rgba(255,255,255,0.65)",
          borderRadius: 12,
          padding: "7px 12px",
          fontFamily: F.game,
          fontSize: 12,
          fontWeight: 800,
          color: "#555",
          textAlign: "center",
          backdropFilter: "blur(4px)"
        } }, player.tagline)),
        /* @__PURE__ */ React.createElement("div", { style: { overflowY: "auto", flex: 1, padding: "16px 16px 28px" } }, nextRank && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 11, fontWeight: 800, color: "#888" } }, "Ti\u1EBFn \u0111\u1ED9 h\u1EA1ng"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontSize: 11, fontWeight: 900, color: rank.color } }, prog, "% \u2192 ", nextRank.icon, " ", nextRank.name)), /* @__PURE__ */ React.createElement("div", { style: { height: 8, borderRadius: 99, background: `${rank.color}22`, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
          width: `${prog}%`,
          height: 8,
          borderRadius: 99,
          background: `linear-gradient(90deg,${rank.color}99,${rank.color})`,
          transition: "width 0.5s"
        } }))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: C.black, marginBottom: 12 } }, "\u{1F4CA} Ch\u1EC9 s\u1ED1 Pet"), /* @__PURE__ */ React.createElement(StatRow, { icon: "\u{1F34E}", label: "\u0110\xF3i", value: hunger, color: "#4CAF50" }), /* @__PURE__ */ React.createElement(StatRow, { icon: "\u2764\uFE0F", label: "H\u1EA1nh ph\xFAc", value: happy, color: "#E53935" }), /* @__PURE__ */ React.createElement(StatRow, { icon: "\u{1F9FC}", label: "S\u1EA1ch s\u1EBD", value: clean, color: "#039BE5" }), /* @__PURE__ */ React.createElement(StatRow, { icon: "\u26A1", label: "N\u0103ng l\u01B0\u1EE3ng", value: energy, color: "#F9A825" }), /* @__PURE__ */ React.createElement("div", { style: {
          marginTop: 14,
          background: "#FAFAFA",
          borderRadius: 16,
          padding: "12px 14px",
          border: "1.5px solid #EEEEEE"
        } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 10, fontWeight: 800, color: "#BBB", marginBottom: 5 } }, "HUY HI\u1EC6U"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, (player.badges || []).map((b, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { fontSize: 22 } }, b)))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 10, fontWeight: 800, color: "#BBB", marginBottom: 4 } }, "STREAK"), /* @__PURE__ */ React.createElement("div", { style: {
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 22,
          color: "#FF9800",
          display: "flex",
          alignItems: "center",
          gap: 4
        } }, "\u{1F525} ", player.streak, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "#BBB", fontWeight: 700 } }, "ng\xE0y"))))), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: {
          width: "100%",
          marginTop: 14,
          background: "#1A1A1A",
          border: "none",
          borderRadius: 14,
          padding: "13px 0",
          cursor: "pointer",
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 14,
          color: "white",
          boxShadow: "0 4px 14px rgba(0,0,0,0.18)"
        } }, "\u0110\xF3ng \u2715"))
      )
    );
  }
  function RankScreen({ state }) {
    const { points, petData } = state;
    const rank = getRank(points);
    const nextRank = RANKS.find((r) => r.minPts > points);
    const prog = nextRank ? Math.round((points - rank.minPts) / (nextRank.minPts - rank.minPts) * 100) : 100;
    const [selectedPlayer, setSelectedPlayer] = (0, import_react.useState)(null);
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 14px 0", overflowY: "auto", height: "100%", boxSizing: "border-box" } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: `linear-gradient(145deg,${rank.color}25,white,${rank.color}0A)`,
      border: `2px solid ${rank.color}99`,
      borderRadius: 20,
      padding: "20px 18px 16px",
      textAlign: "center",
      marginBottom: 14,
      boxShadow: `0 8px 28px ${rank.color}28`
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "inline-block", marginBottom: 4 } }, /* @__PURE__ */ React.createElement(PouPet, { petData: petData || {}, size: 90, bounce: false, mood: 70 })), /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 22,
      color: rank.color,
      marginBottom: 4,
      textShadow: `0 2px 10px ${rank.color}55`
    } }, rank.icon, " H\u1EA1ng ", rank.name), /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 20,
      color: C.black,
      marginBottom: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6
    } }, "\u{1F4B0} ", points.toLocaleString(), /* @__PURE__ */ React.createElement("span", { style: { color: "#999", fontSize: 12, fontWeight: 700 } }, "\u0111i\u1EC3m")), nextRank && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { background: `${rank.color}20`, borderRadius: 99, height: 9, overflow: "hidden", marginBottom: 5 } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: `${prog}%`,
      height: 9,
      borderRadius: 99,
      background: `linear-gradient(90deg,${rank.color}CC,${rank.color})`,
      transition: "width 0.4s"
    } })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 11, color: "#999" } }, "C\xF2n ", (nextRank.minPts - points).toLocaleString(), " \u0111i\u1EC3m \u2192 ", nextRank.icon, " ", nextRank.name))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 5, marginBottom: 14 } }, RANKS.map((r) => {
      const ok = points >= r.minPts;
      return /* @__PURE__ */ React.createElement("div", { key: r.name, style: {
        background: ok ? `${r.color}1A` : "#F9F9F9",
        border: `1.5px solid ${ok ? r.color : "#EEEEEE"}`,
        borderRadius: 11,
        padding: "8px 3px",
        textAlign: "center",
        boxShadow: ok ? `0 2px 10px ${r.color}28` : "none",
        opacity: ok ? 1 : 0.5
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17 } }, r.icon), /* @__PURE__ */ React.createElement("div", { style: { color: ok ? r.color : "#BDBDBD", fontFamily: F.game, fontSize: 9, fontWeight: 800, marginTop: 2 } }, r.name));
    })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 14, color: C.black, marginBottom: 8 } }, "\u{1F3C6} X\u1EBFp H\u1EA1ng"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 7 } }, LEADERBOARD.map((p) => {
      const mc = p.rank === 1 ? "#FFD700" : p.rank === 2 ? "#B8C4CC" : p.rank === 3 ? "#CD8B52" : null;
      const me = p.name === "B\u1EA1n";
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: p.rank,
          onClick: () => setSelectedPlayer(p),
          style: {
            background: me ? "#E3F2FD" : mc ? `${mc}0E` : "white",
            borderRadius: 13,
            padding: "11px 13px",
            display: "flex",
            alignItems: "center",
            gap: 11,
            border: `1.5px solid ${me ? "#90CAF9" : mc ? mc + "66" : "#EEEEEE"}`,
            boxShadow: mc ? `0 3px 12px ${mc}1E` : "0 1px 5px rgba(0,0,0,0.05)",
            cursor: "pointer",
            transition: "transform 0.12s, box-shadow 0.12s",
            active: { transform: "scale(0.98)" }
          },
          onMouseDown: (e) => e.currentTarget.style.transform = "scale(0.97)",
          onMouseUp: (e) => e.currentTarget.style.transform = "scale(1)",
          onTouchStart: (e) => e.currentTarget.style.transform = "scale(0.97)",
          onTouchEnd: (e) => e.currentTarget.style.transform = "scale(1)"
        },
        /* @__PURE__ */ React.createElement("div", { style: {
          minWidth: 30,
          height: 30,
          borderRadius: "50%",
          background: mc ? `${mc}22` : "#F5F5F5",
          border: `1.5px solid ${mc || "#EEEEEE"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 12,
          color: mc || "#BDBDBD"
        } }, mc ? ["\u{1F947}", "\u{1F948}", "\u{1F949}"][p.rank - 1] : `#${p.rank}`),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 20 } }, p.icon),
        /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 800, fontSize: 13, color: me ? "#1565C0" : C.black } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 10, color: "#BDBDBD", display: "flex", gap: 5, marginTop: 1 } }, /* @__PURE__ */ React.createElement("span", null, "Lv.", p.lv), p.streak && /* @__PURE__ */ React.createElement("span", null, "\u{1F525}", p.streak, "ng"))),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: mc || (me ? "#1565C0" : "#999") } }, p.pts.toLocaleString()), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "#CCC" } }, "\u203A"))
      );
    })), /* @__PURE__ */ React.createElement("div", { style: { height: 20 } }), selectedPlayer && /* @__PURE__ */ React.createElement(
      PlayerProfileModal,
      {
        player: selectedPlayer,
        myState: state,
        onClose: () => setSelectedPlayer(null)
      }
    ));
  }
  var CW = 280;
  var CH = 300;
  function DrawCanvas({ color, onSave }) {
    const canvasRef = (0, import_react.useRef)(null);
    const ctxRef = (0, import_react.useRef)(null);
    const drawing = (0, import_react.useRef)(false);
    const rawPts = (0, import_react.useRef)([]);
    const [hasDraw, setHasDraw] = (0, import_react.useState)(false);
    const drawGuide = (ctx) => {
      ctx.save();
      ctx.setLineDash([6, 6]);
      ctx.strokeStyle = "rgba(0,0,0,0.15)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(CW / 2, CH / 2, Math.min(CW, CH) * 0.42, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };
    (0, import_react.useEffect)(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctxRef.current = ctx;
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = C.black;
      drawGuide(ctx);
    }, []);
    (0, import_react.useEffect)(() => {
      redrawFilled();
    }, [color]);
    const redrawFilled = () => {
      const ctx = ctxRef.current;
      if (!ctx || rawPts.current.length < 3) return;
      ctx.clearRect(0, 0, CW, CH);
      drawGuide(ctx);
      const simplified = rdp(rawPts.current, 4);
      const bodyPts = simplified;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(bodyPts[0].x, bodyPts[0].y);
      for (let i = 1; i < bodyPts.length; i++) ctx.lineTo(bodyPts[i].x, bodyPts[i].y);
      ctx.closePath();
      ctx.fillStyle = color + "CC";
      ctx.fill();
      ctx.strokeStyle = C.black;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    };
    const getPos = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const scaleX = CW / rect.width, scaleY = CH / rect.height;
      const src = e.touches ? e.touches[0] : e;
      return { x: (src.clientX - rect.left) * scaleX, y: (src.clientY - rect.top) * scaleY };
    };
    const onStart = (e) => {
      e.preventDefault();
      const ctx = ctxRef.current, pos = getPos(e);
      drawing.current = true;
      rawPts.current = [pos];
      ctx.clearRect(0, 0, CW, CH);
      drawGuide(ctx);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    };
    const onMove = (e) => {
      e.preventDefault();
      if (!drawing.current) return;
      const ctx = ctxRef.current, pos = getPos(e);
      rawPts.current.push(pos);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    };
    const onEnd = (e) => {
      e.preventDefault();
      if (!drawing.current) return;
      drawing.current = false;
      if (rawPts.current.length < 8) return;
      setHasDraw(true);
      redrawFilled();
    };
    const saveDrawing = () => {
      const simplified = rdp(rawPts.current, 4);
      const normalized = simplified.map((p) => ({ x: p.x / CW, y: p.y / CH }));
      onSave(normalized);
    };
    const reset = () => {
      rawPts.current = [];
      setHasDraw(false);
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, CW, CH);
      drawGuide(ctx);
    };
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(255,255,255,0.9)", borderRadius: 20, padding: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" } }, /* @__PURE__ */ React.createElement(
      "canvas",
      {
        ref: canvasRef,
        width: CW,
        height: CH,
        style: { display: "block", borderRadius: 16, touchAction: "none", cursor: "crosshair", maxWidth: "100%" },
        onMouseDown: onStart,
        onMouseMove: onMove,
        onMouseUp: onEnd,
        onTouchStart: onStart,
        onTouchMove: onMove,
        onTouchEnd: onEnd
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: reset, style: {
      background: "rgba(255,255,255,0.3)",
      border: "2px solid rgba(255,255,255,0.5)",
      borderRadius: 14,
      padding: "10px 18px",
      cursor: "pointer",
      color: "white",
      fontFamily: F.game,
      fontWeight: 800,
      fontSize: 13
    } }, "\u21BA X\xF3a"), hasDraw && /* @__PURE__ */ React.createElement("button", { onClick: saveDrawing, style: {
      background: "white",
      border: "none",
      borderRadius: 14,
      padding: "10px 24px",
      cursor: "pointer",
      color: C.black,
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 14,
      boxShadow: "0 4px 14px rgba(0,0,0,0.2)"
    } }, "Ti\u1EBFp theo \u2192")));
  }
  function FacePlacerStep({
    petData,
    eyeLeft,
    eyeRight,
    mouth,
    setEyeLeft,
    setEyeRight,
    setMouth,
    onBack,
    onNext,
    isDark = false
  }) {
    const [faceStep, setFaceStep] = (0, import_react.useState)(() => {
      if (!eyeLeft) return "eye1";
      if (!eyeRight) return "eye2";
      if (!mouth) return "mouth";
      return "done";
    });
    const [pendingPos, setPendingPos] = (0, import_react.useState)(null);
    const [dragPart, setDragPart] = (0, import_react.useState)(null);
    const svgWrapRef = (0, import_react.useRef)(null);
    const PSIZE = 200;
    const accent = isDark ? "#00E5FF" : "#C44DFF";
    const btnBase = {
      background: "rgba(255,255,255,0.14)",
      border: "1.5px solid rgba(255,255,255,0.28)",
      borderRadius: 12,
      padding: "9px 15px",
      cursor: "pointer",
      color: "white",
      fontFamily: F.game,
      fontWeight: 800,
      fontSize: 11
    };
    const getPos = (e) => {
      const el = svgWrapRef.current;
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      let cx, cy;
      if (e.changedTouches?.[0]) {
        cx = e.changedTouches[0].clientX;
        cy = e.changedTouches[0].clientY;
      } else if (e.touches?.[0]) {
        cx = e.touches[0].clientX;
        cy = e.touches[0].clientY;
      } else {
        cx = e.clientX;
        cy = e.clientY;
      }
      return {
        x: Math.max(0.05, Math.min(0.95, (cx - rect.left) / rect.width)),
        y: Math.max(0.05, Math.min(0.95, (cy - rect.top) / rect.height))
      };
    };
    const handleContainerTap = (e) => {
      if (faceStep === "done" || dragPart || pendingPos) return;
      const pos = getPos(e);
      if (!pos) return;
      setPendingPos(pos);
    };
    const confirmPending = () => {
      if (!pendingPos) return;
      if (faceStep === "eye1") {
        setEyeLeft(pendingPos);
        setFaceStep("eye2");
      } else if (faceStep === "eye2") {
        setEyeRight(pendingPos);
        setFaceStep("mouth");
      } else if (faceStep === "mouth") {
        setMouth(pendingPos);
        setFaceStep("done");
      }
      setPendingPos(null);
    };
    const resetAll = () => {
      setEyeLeft(null);
      setEyeRight(null);
      setMouth(null);
      setFaceStep("eye1");
      setPendingPos(null);
      setDragPart(null);
    };
    (0, import_react.useEffect)(() => {
      if (!dragPart) return;
      const onMove = (e) => {
        e.preventDefault();
        const el = svgWrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        let cx, cy;
        if (e.touches?.[0]) {
          cx = e.touches[0].clientX;
          cy = e.touches[0].clientY;
        } else {
          cx = e.clientX;
          cy = e.clientY;
        }
        const nx = Math.max(0.05, Math.min(0.95, (cx - rect.left) / rect.width));
        const ny = Math.max(0.05, Math.min(0.95, (cy - rect.top) / rect.height));
        if (dragPart === "eyeLeft") setEyeLeft({ x: nx, y: ny });
        else if (dragPart === "eyeRight") setEyeRight({ x: nx, y: ny });
        else if (dragPart === "mouth") setMouth({ x: nx, y: ny });
      };
      const onEnd = () => setDragPart(null);
      window.addEventListener("mousemove", onMove);
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("mouseup", onEnd);
      window.addEventListener("touchend", onEnd);
      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("mouseup", onEnd);
        window.removeEventListener("touchend", onEnd);
      };
    }, [dragPart]);
    const Handle = ({ part, pos, emoji }) => {
      if (!pos) return null;
      const active = dragPart === part;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          onMouseDown: (e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragPart(part);
          },
          onTouchStart: (e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragPart(part);
          },
          style: {
            position: "absolute",
            left: `${pos.x * 100}%`,
            top: `${pos.y * 100}%`,
            transform: `translate(-50%,-50%) scale(${active ? 1.25 : 1})`,
            width: 36,
            height: 36,
            background: active ? "#FFD700" : "rgba(255,255,255,0.92)",
            border: `2.5px solid ${active ? "#FF6D00" : accent}`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            cursor: "grab",
            zIndex: 20,
            boxShadow: "0 3px 10px rgba(0,0,0,0.35)",
            userSelect: "none",
            touchAction: "none",
            transition: active ? "none" : "transform 0.15s"
          }
        },
        emoji
      );
    };
    const label = faceStep === "eye1" && !pendingPos ? "\u{1F441}\uFE0F Tap \u0111\u1EB7t m\u1EAFt tr\xE1i" : faceStep === "eye1" && pendingPos ? "\u{1F441}\uFE0F X\xE1c nh\u1EADn m\u1EAFt tr\xE1i?" : faceStep === "eye2" && !pendingPos ? "\u{1F441}\uFE0F Tap \u0111\u1EB7t m\u1EAFt ph\u1EA3i" : faceStep === "eye2" && pendingPos ? "\u{1F441}\uFE0F X\xE1c nh\u1EADn m\u1EAFt ph\u1EA3i?" : faceStep === "mouth" && !pendingPos ? "\u{1F444} Tap \u0111\u1EB7t mi\u1EC7ng" : faceStep === "mouth" && pendingPos ? "\u{1F444} X\xE1c nh\u1EADn v\u1ECB tr\xED mi\u1EC7ng?" : "\u2705 K\xE9o t\u1EEBng b\u1ED9 ph\u1EADn \u0111\u1EC3 \u0111i\u1EC1u ch\u1EC9nh";
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 14,
      color: accent,
      textAlign: "center",
      lineHeight: 1.5
    } }, label, faceStep === "done" && /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontSize: 10,
      fontWeight: 700,
      color: "rgba(255,255,255,0.55)",
      marginTop: 4
    } }, "Gi\u1EEF & k\xE9o \u{1F441}\uFE0F \u{1F441}\uFE0F \u{1F444} \u0111\u1EC3 tinh ch\u1EC9nh v\u1ECB tr\xED")), /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick: handleContainerTap,
        onTouchEnd: handleContainerTap,
        style: {
          background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.18)",
          borderRadius: 20,
          padding: 10,
          boxShadow: `0 6px 24px ${isDark ? "rgba(0,229,255,0.18)" : "rgba(0,0,0,0.18)"}`,
          border: `3px solid ${accent}55`,
          cursor: faceStep !== "done" && !pendingPos ? "crosshair" : "default",
          userSelect: "none"
        }
      },
      /* @__PURE__ */ React.createElement("div", { ref: svgWrapRef, style: { position: "relative", lineHeight: 0 } }, /* @__PURE__ */ React.createElement(PouPet, { petData: { ...petData, eyeLeft, eyeRight, mouth }, size: PSIZE, bounce: false, mood: 80 }), pendingPos && /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        left: `${pendingPos.x * 100}%`,
        top: `${pendingPos.y * 100}%`,
        transform: "translate(-50%,-50%)",
        width: 34,
        height: 34,
        background: "rgba(255,220,0,0.88)",
        borderRadius: "50%",
        border: "2.5px dashed #FF6D00",
        zIndex: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        animation: "sparkle 0.65s ease-in-out infinite",
        pointerEvents: "none"
      } }, faceStep === "mouth" ? "\u{1F444}" : "\u{1F441}\uFE0F"), eyeLeft && faceStep !== "eye1" && /* @__PURE__ */ React.createElement(Handle, { part: "eyeLeft", pos: eyeLeft, emoji: "\u{1F441}" }), eyeRight && !["eye1", "eye2"].includes(faceStep) && /* @__PURE__ */ React.createElement(Handle, { part: "eyeRight", pos: eyeRight, emoji: "\u{1F441}" }), mouth && faceStep === "done" && /* @__PURE__ */ React.createElement(Handle, { part: "mouth", pos: mouth, emoji: "\u{1F444}" }))
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: btnBase }, "\u2190 V\u1EBD l\u1EA1i"), /* @__PURE__ */ React.createElement("button", { onClick: resetAll, style: btnBase }, "\u21BA \u0110\u1EB7t l\u1EA1i"), pendingPos && /* @__PURE__ */ React.createElement("button", { onClick: confirmPending, style: {
      background: "linear-gradient(135deg,#43A047,#1B5E20)",
      border: "none",
      borderRadius: 12,
      padding: "9px 20px",
      cursor: "pointer",
      color: "white",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 12,
      boxShadow: "0 4px 14px rgba(67,160,71,0.5)"
    } }, "\u2713 X\xE1c nh\u1EADn"), faceStep === "done" && !pendingPos && /* @__PURE__ */ React.createElement("button", { onClick: onNext, style: {
      background: isDark ? "#00E5FF" : "white",
      border: "none",
      borderRadius: 12,
      padding: "9px 22px",
      cursor: "pointer",
      color: isDark ? "#0D1B2A" : C.black,
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 13,
      boxShadow: `0 4px 14px ${isDark ? "rgba(0,229,255,0.4)" : "rgba(0,0,0,0.2)"}`
    } }, "Ti\u1EBFp theo \u2192")));
  }
  function PetCreatorScreen({ onComplete }) {
    const [step, setStep] = (0, import_react.useState)(0);
    const [drawnPath, setDrawnPath] = (0, import_react.useState)(null);
    const [color, setColor] = (0, import_react.useState)("#C8956C");
    const [eyeLeft, setEyeLeft] = (0, import_react.useState)(null);
    const [eyeRight, setEyeRight] = (0, import_react.useState)(null);
    const [mouth, setMouth] = (0, import_react.useState)(null);
    const [petName, setPetName] = (0, import_react.useState)("");
    const petData = { drawnPath, color, eyeLeft, eyeRight, mouth, mouthType: "smile" };
    const steps = ["1. V\u1EBD h\xECnh", "2. \u0110\u1EB7t m\u1EB7t", "3. M\xE0u & t\xEAn"];
    return /* @__PURE__ */ React.createElement("div", { style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg,#FF6B9D 0%,#C44DFF 50%,#4D79FF 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "28px 20px",
      gap: 16
    } }, /* @__PURE__ */ React.createElement("link", { rel: "stylesheet", href: FONT_LINK }), /* @__PURE__ */ React.createElement("style", null, KEYFRAMES), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      background: i === step ? "white" : "rgba(255,255,255,0.3)",
      borderRadius: 99,
      padding: "5px 14px",
      fontFamily: F.game,
      fontWeight: 800,
      fontSize: 11,
      color: i === step ? "#C44DFF" : "white",
      transition: "all 0.2s"
    } }, s))), step === 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 17, color: "white", textAlign: "center", lineHeight: 1.4 } }, "\u270F\uFE0F V\u1EBD h\xECnh d\u1EA1ng pet c\u1EE7a b\u1EA1n!", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, opacity: 0.8 } }, "V\u1EBD 1 v\xF2ng tr\xF2n k\xEDn")), /* @__PURE__ */ React.createElement(DrawCanvas, { color, onSave: (pts) => {
      setDrawnPath(pts);
      setStep(1);
    } })), step === 1 && /* @__PURE__ */ React.createElement(
      FacePlacerStep,
      {
        petData,
        eyeLeft,
        setEyeLeft,
        eyeRight,
        setEyeRight,
        mouth,
        setMouth,
        onBack: () => {
          setEyeLeft(null);
          setEyeRight(null);
          setMouth(null);
          setStep(0);
        },
        onNext: () => setStep(2),
        isDark: false
      }
    ), step === 2 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(PouPet, { petData, size: 150, bounce: true, mood: 80 }), /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(255,255,255,0.88)", borderRadius: 20, padding: "18px 16px", width: "100%", maxWidth: 320 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 800, fontSize: 14, color: C.black, marginBottom: 12 } }, "\u{1F3A8} M\xE0u s\u1EAFc"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 16 } }, PET_COLORS.map((pc) => /* @__PURE__ */ React.createElement("button", { key: pc, onClick: () => setColor(pc), style: {
      background: pc,
      borderRadius: 14,
      height: 52,
      border: `3px solid ${color === pc ? C.black : "transparent"}`,
      cursor: "pointer",
      transform: color === pc ? "scale(1.1)" : "scale(1)",
      transition: "all 0.2s",
      boxShadow: color === pc ? `0 4px 14px ${pc}88` : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, color === pc && /* @__PURE__ */ React.createElement("span", { style: { color: "white", fontSize: 18, filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" } }, "\u2713")))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 800, fontSize: 14, color: C.black, marginBottom: 8 } }, "\u{1F3F7} T\xEAn Pet"), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: petName,
        onChange: (e) => setPetName(e.target.value),
        maxLength: 14,
        placeholder: "VD: Mochi, Pou, Bean...",
        style: {
          width: "100%",
          background: "#F5F5F5",
          border: "2px solid #E0E0E0",
          borderRadius: 12,
          padding: "12px 14px",
          textAlign: "center",
          fontFamily: F.game,
          fontSize: 16,
          fontWeight: 800,
          outline: "none",
          color: C.black,
          boxSizing: "border-box"
        }
      }
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => petName.trim().length >= 2 && onComplete({ ...petData, name: petName.trim(), color }),
        style: {
          background: petName.trim().length >= 2 ? "white" : "rgba(255,255,255,0.4)",
          border: "none",
          borderRadius: 16,
          padding: "15px 40px",
          color: petName.trim().length >= 2 ? C.black : "rgba(255,255,255,0.5)",
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 16,
          cursor: petName.trim().length >= 2 ? "pointer" : "not-allowed",
          boxShadow: petName.trim().length >= 2 ? "0 6px 22px rgba(0,0,0,0.22)" : "none"
        }
      },
      "\u{1F680} B\u1EAFt \u0111\u1EA7u ch\u01A1i!"
    )));
  }
  function LoginScreen({ onLogin }) {
    const [mode, setMode] = (0, import_react.useState)("login");
    const [user, setUser] = (0, import_react.useState)("");
    const [pass, setPass] = (0, import_react.useState)("");
    const [err, setErr] = (0, import_react.useState)("");
    const submit = () => {
      if (!user.trim()) {
        setErr("Nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp!");
        return;
      }
      if (pass.length < 4) {
        setErr("M\u1EADt kh\u1EA9u \u2265 4 k\xFD t\u1EF1!");
        return;
      }
      onLogin(user.trim());
    };
    return /* @__PURE__ */ React.createElement("div", { style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg,#40C8E0 0%,#5BA8D4 50%,#3D88B8 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 20px"
    } }, /* @__PURE__ */ React.createElement("link", { rel: "stylesheet", href: FONT_LINK }), /* @__PURE__ */ React.createElement("style", null, KEYFRAMES), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 24 } }, /* @__PURE__ */ React.createElement(PouPet, { petData: { color: "#C8956C" }, size: 110, bounce: true, mood: 80 }), /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 36,
      color: "white",
      textShadow: "0 3px 12px rgba(0,0,0,0.2)",
      letterSpacing: "-0.01em"
    } }, "Lootzy"), /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(255,255,255,0.8)", fontFamily: F.game, fontSize: 13, marginTop: 2 } }, "Nu\xF4i pet \xB7 Loot qu\xE0 \xB7 X\u1EBFp h\u1EA1ng")), /* @__PURE__ */ React.createElement("div", { style: {
      background: "white",
      borderRadius: 24,
      padding: "24px 20px",
      boxShadow: "0 14px 44px rgba(0,0,0,0.20)",
      width: "100%",
      maxWidth: 340
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 4,
      background: "#F5F5F5",
      borderRadius: 14,
      padding: 4,
      marginBottom: 20
    } }, ["login", "register"].map((m) => /* @__PURE__ */ React.createElement("button", { key: m, onClick: () => {
      setMode(m);
      setErr("");
    }, style: {
      background: mode === m ? "#1A1A1A" : "transparent",
      border: "none",
      borderRadius: 11,
      padding: "10px 0",
      cursor: "pointer",
      color: mode === m ? "white" : "#9E9E9E",
      fontFamily: F.game,
      fontWeight: 800,
      fontSize: 13
    } }, m === "login" ? "\u0110\u0103ng Nh\u1EADp" : "T\u1EA1o T\xE0i Kho\u1EA3n"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 } }, [
      { val: user, set: setUser, ph: "T\xEAn \u0111\u0103ng nh\u1EADp", type: "text" },
      { val: pass, set: setPass, ph: "M\u1EADt kh\u1EA9u (\u22654 k\xFD t\u1EF1)", type: "password" }
    ].map((f) => /* @__PURE__ */ React.createElement(
      "input",
      {
        key: f.ph,
        type: f.type,
        value: f.val,
        onChange: (e) => {
          f.set(e.target.value);
          setErr("");
        },
        onKeyDown: (e) => e.key === "Enter" && submit(),
        placeholder: f.ph,
        style: {
          background: "#F5F5F5",
          border: "2px solid #EEEEEE",
          borderRadius: 12,
          padding: "12px 14px",
          fontFamily: F.game,
          fontSize: 14,
          fontWeight: 700,
          outline: "none",
          color: C.black
        }
      }
    ))), err && /* @__PURE__ */ React.createElement("div", { style: {
      background: "#FFEBEE",
      border: "1px solid #FFCDD2",
      borderRadius: 10,
      padding: "8px 12px",
      marginBottom: 10,
      color: "#C62828",
      fontFamily: F.game,
      fontSize: 12,
      textAlign: "center"
    } }, err), /* @__PURE__ */ React.createElement("button", { onClick: submit, style: {
      width: "100%",
      background: "#1A1A1A",
      border: "none",
      borderRadius: 14,
      padding: "14px 0",
      color: "white",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 15,
      cursor: "pointer",
      boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
      marginBottom: 14
    } }, mode === "login" ? "\u{1F680} \u0110\u0103ng Nh\u1EADp" : "\u2728 T\u1EA1o T\xE0i Kho\u1EA3n"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, [{ icon: "\u{1F310}", label: "Google" }, { icon: "\u{1F4D8}", label: "Facebook" }].map((s) => /* @__PURE__ */ React.createElement("button", { key: s.label, onClick: () => onLogin(s.label + "_User"), style: {
      flex: 1,
      background: "#F5F5F5",
      border: "1.5px solid #EEEEEE",
      borderRadius: 12,
      padding: "11px 0",
      cursor: "pointer",
      color: "#666",
      fontFamily: F.game,
      fontSize: 12,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 5
    } }, s.icon, " ", s.label)))), /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(255,255,255,0.55)", fontFamily: F.game, fontSize: 11, marginTop: 16, textAlign: "center", lineHeight: 1.6 } }, "Demo prototype \xB7 Lootzy Phase 1", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.7, fontSize: 10 } }, BUILD)));
  }
  function InventoryPanel({ onClose, state, asTab = false }) {
    const [tab, setTab] = (0, import_react.useState)("items");
    const petItems = (state.inventory || []).filter((i) => !i.type || i.type === "pet_item" || i.type === "points");
    const vouchers = (state.openedPrizes || []).filter((i) => i.type === "voucher" || i.type === "physical");
    const RARITY_COL = { common: "#9E9E9E", rare: "#039BE5", epic: "#E040FB" };
    const innerContent = /* @__PURE__ */ React.createElement("div", { style: asTab ? { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#F9F9F9" } : { background: "#F9F9F9", borderRadius: "24px 24px 0 0", maxHeight: "76%", display: "flex", flexDirection: "column", animation: "slideUp 0.24s ease-out", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
      padding: "14px 16px 0",
      background: "white",
      flexShrink: 0,
      borderBottom: "1.5px solid #F0F0F0"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 22 } }, "\u{1F392}"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 15, color: C.black } }, "Kho \u0110\u1ED3")), !asTab && /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: {
      background: "#F0F0F0",
      border: "none",
      borderRadius: "50%",
      width: 30,
      height: 30,
      cursor: "pointer",
      fontSize: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, "\xD7")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 0, marginBottom: 0 } }, [
      { id: "items", label: "\u{1F34E} V\u1EADt ph\u1EA9m cho Pet", count: petItems.length },
      { id: "voucher", label: "\u{1F3AE} Voucher", count: vouchers.length }
    ].map((t) => /* @__PURE__ */ React.createElement("button", { key: t.id, onClick: () => setTab(t.id), style: {
      flex: 1,
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 0 10px",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 11,
      color: tab === t.id ? C.black : "#BDBDBD",
      borderBottom: tab === t.id ? "2.5px solid #B4FF00" : "2.5px solid transparent",
      transition: "color 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 5
    } }, t.label, t.count > 0 && /* @__PURE__ */ React.createElement("span", { style: {
      background: tab === t.id ? "#1A1A1A" : "#E0E0E0",
      color: tab === t.id ? "white" : "#999",
      borderRadius: 99,
      padding: "1px 7px",
      fontFamily: F.game,
      fontSize: 9,
      fontWeight: 900
    } }, t.count))))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "14px 16px 24px" } }, tab === "items" && (petItems.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 20px",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 44, opacity: 0.2 } }, "\u{1F34E}"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: "#BDBDBD", textAlign: "center" } }, "Ch\u01B0a c\xF3 v\u1EADt ph\u1EA9m n\xE0o"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 10, color: "#CCCCCC", textAlign: "center", lineHeight: 1.5 } }, "Mua \u0111\u1ED3 \u1EDF Shop ho\u1EB7c m\u1EDF Loot Box", /* @__PURE__ */ React.createElement("br", null), "\u0111\u1EC3 c\xF3 v\u1EADt ph\u1EA9m cho pet \u{1F6D2}"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, marginTop: 6, width: "100%" } }, Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      aspectRatio: "1",
      background: "#F5F5F5",
      borderRadius: 12,
      border: "1.5px dashed #E0E0E0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      opacity: 0.25
    } }, "?")))) : /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 } }, petItems.map((item, i) => {
      const isObj = typeof item === "object" && item !== null;
      const icon = isObj ? item.emoji || "\u{1F4E6}" : "\u{1F4E6}";
      const name = isObj ? item.name || String(item) : String(item);
      const rarity = isObj ? item.rarity || "common" : "common";
      const col = RARITY_COL[rarity] || "#9E9E9E";
      return /* @__PURE__ */ React.createElement("div", { key: i, style: {
        background: "white",
        borderRadius: 12,
        padding: "10px 6px 8px",
        border: `1.5px solid ${col}44`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 26, filter: `drop-shadow(0 2px 5px ${col}77)` } }, icon), /* @__PURE__ */ React.createElement("div", { style: {
        fontFamily: F.game,
        fontSize: 8,
        fontWeight: 800,
        color: C.black,
        textAlign: "center",
        lineHeight: 1.2
      } }, name.length > 10 ? name.slice(0, 9) + "\u2026" : name), /* @__PURE__ */ React.createElement("div", { style: {
        fontFamily: F.game,
        fontSize: 7,
        fontWeight: 900,
        color: col,
        background: `${col}18`,
        borderRadius: 99,
        padding: "1px 6px"
      } }, rarity));
    }))), tab === "voucher" && (vouchers.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 20px",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 44, opacity: 0.2 } }, "\u{1F3AE}"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: "#BDBDBD", textAlign: "center" } }, "Ch\u01B0a c\xF3 voucher n\xE0o"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 10, color: "#CCCCCC", textAlign: "center", lineHeight: 1.5 } }, "M\u1EDF h\u1ED9p qu\xE0 \u0111\u1EC3 nh\u1EADn th\u1EBB Garena", /* @__PURE__ */ React.createElement("br", null), "v\xE0 qu\xE0 th\u1EADt ngo\xE0i \u0111\u1EDDi \u{1F381}")) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, vouchers.map((v, i) => {
      const col = RARITY_COL[v.rarity] || "#9E9E9E";
      return /* @__PURE__ */ React.createElement("div", { key: i, style: {
        background: "white",
        borderRadius: 14,
        padding: "12px 14px",
        border: `1.5px solid ${col}55`,
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 30, filter: `drop-shadow(0 2px 8px ${col}88)` } }, v.emoji), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: C.black } }, v.name), v.desc && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 10, color: "#999", marginTop: 2 } }, v.desc), /* @__PURE__ */ React.createElement("div", { style: {
        display: "inline-block",
        marginTop: 4,
        background: `${col}18`,
        border: `1px solid ${col}`,
        borderRadius: 99,
        padding: "2px 8px",
        fontFamily: F.game,
        fontSize: 8,
        fontWeight: 900,
        color: col
      } }, v.label)), /* @__PURE__ */ React.createElement("button", { onClick: () => showToast && showToast(`${v.emoji} Li\xEAn h\u1EC7 HEAVY \u0111\u1EC3 nh\u1EADn!`), style: {
        background: "#1A1A1A",
        border: "none",
        borderRadius: 10,
        padding: "8px 12px",
        cursor: "pointer",
        fontFamily: F.game,
        fontWeight: 900,
        fontSize: 10,
        color: "white"
      } }, "Nh\u1EADn \u2192"));
    })))));
    if (asTab) return innerContent;
    return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      zIndex: 80,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { flex: "none" } }, innerContent));
  }
  function SurgeryPanel({ currentPetData, onSave, onCancel }) {
    const initColor = currentPetData?.color || "#C8956C";
    const initName = currentPetData?.name || "";
    const [step, setStep] = (0, import_react.useState)(0);
    const [drawnPath, setDrawnPath] = (0, import_react.useState)(null);
    const [color, setColor] = (0, import_react.useState)(initColor);
    const [eyeLeft, setEyeLeft] = (0, import_react.useState)(null);
    const [eyeRight, setEyeRight] = (0, import_react.useState)(null);
    const [mouth, setMouth] = (0, import_react.useState)(null);
    const [petName, setPetName] = (0, import_react.useState)(initName);
    const petData = { drawnPath, color, eyeLeft, eyeRight, mouth, mouthType: "smile" };
    const steps = ["1. V\u1EBD h\xECnh", "2. \u0110\u1EB7t m\u1EB7t", "3. M\xE0u & t\xEAn"];
    const SURGERY_COLORS = [
      "#C8956C",
      "#F4A460",
      "#DEB887",
      "#BC8F8F",
      "#708090",
      "#5F9EA0",
      "#8FBC8F",
      "#E8A0BF",
      "#9B59B6",
      "#3498DB",
      "#2ECC71",
      "#E74C3C",
      "#F39C12",
      "#1ABC9C",
      "#34495E",
      "#E0E0E0"
    ];
    return /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      background: "linear-gradient(160deg,#0D1B2A 0%,#1B2838 50%,#0F3460 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "32px 16px 24px",
      gap: 14,
      overflowY: "auto"
    } }, /* @__PURE__ */ React.createElement("link", { rel: "stylesheet", href: FONT_LINK }), /* @__PURE__ */ React.createElement("div", { style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 22 } }, "\u{1F52C}"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 16, color: "white" } }, "Ph\u1EABu Thu\u1EADt Pet")), /* @__PURE__ */ React.createElement("button", { onClick: onCancel, style: {
      background: "rgba(255,255,255,0.12)",
      border: "1.5px solid rgba(255,255,255,0.25)",
      borderRadius: 10,
      padding: "6px 14px",
      cursor: "pointer",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 12,
      color: "rgba(255,255,255,0.8)"
    } }, "\u2715 Hu\u1EF7")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      background: i === step ? "#00E5FF" : "rgba(255,255,255,0.12)",
      borderRadius: 99,
      padding: "5px 13px",
      fontFamily: F.game,
      fontWeight: 800,
      fontSize: 10,
      color: i === step ? "#0D1B2A" : "rgba(255,255,255,0.5)",
      transition: "all 0.2s"
    } }, s))), step === 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 15, color: "#00E5FF", textAlign: "center", lineHeight: 1.4 } }, "\u270F\uFE0F V\u1EBD h\xECnh d\u1EA1ng m\u1EDBi cho pet!", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)" } }, "V\u1EBD 1 v\xF2ng k\xEDn \u2192 t\u1EF1 \u0111\u1ED9ng l\u01B0u")), /* @__PURE__ */ React.createElement(DrawCanvas, { color, onSave: (pts) => {
      setDrawnPath(pts);
      setStep(1);
    } })), step === 1 && /* @__PURE__ */ React.createElement(
      FacePlacerStep,
      {
        petData,
        eyeLeft,
        setEyeLeft,
        eyeRight,
        setEyeRight,
        mouth,
        setMouth,
        onBack: () => {
          setEyeLeft(null);
          setEyeRight(null);
          setMouth(null);
          setStep(0);
        },
        onNext: () => setStep(2),
        isDark: true
      }
    ), step === 2 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: "100%" } }, /* @__PURE__ */ React.createElement(PouPet, { petData, size: 140, bounce: true, mood: 80 }), /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(255,255,255,0.06)",
      borderRadius: 20,
      padding: "16px 14px",
      width: "100%",
      maxWidth: 320,
      border: "1.5px solid rgba(255,255,255,0.12)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 800, fontSize: 13, color: "#00E5FF", marginBottom: 10 } }, "\u{1F3A8} M\xE0u s\u1EAFc"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, marginBottom: 14 } }, SURGERY_COLORS.map((pc) => /* @__PURE__ */ React.createElement("button", { key: pc, onClick: () => setColor(pc), style: {
      background: pc,
      borderRadius: 12,
      height: 46,
      border: `3px solid ${color === pc ? "#00E5FF" : "transparent"}`,
      cursor: "pointer",
      transform: color === pc ? "scale(1.1)" : "scale(1)",
      transition: "all 0.15s",
      boxShadow: color === pc ? `0 4px 14px ${pc}88` : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, color === pc && /* @__PURE__ */ React.createElement("span", { style: { color: "white", fontSize: 16, filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.5))" } }, "\u2713")))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 800, fontSize: 13, color: "#00E5FF", marginBottom: 8 } }, "\u{1F3F7} T\xEAn Pet"), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: petName,
        onChange: (e) => setPetName(e.target.value),
        maxLength: 14,
        placeholder: "T\xEAn m\u1EDBi cho pet...",
        style: {
          width: "100%",
          background: "rgba(255,255,255,0.08)",
          border: "1.5px solid rgba(0,229,255,0.4)",
          borderRadius: 12,
          padding: "11px 14px",
          textAlign: "center",
          fontFamily: F.game,
          fontSize: 15,
          fontWeight: 800,
          outline: "none",
          color: "white",
          boxSizing: "border-box"
        }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setStep(1), style: {
      background: "rgba(255,255,255,0.12)",
      border: "1.5px solid rgba(255,255,255,0.25)",
      borderRadius: 14,
      padding: "11px 18px",
      cursor: "pointer",
      color: "white",
      fontFamily: F.game,
      fontWeight: 800,
      fontSize: 12
    } }, "\u2190 Quay l\u1EA1i"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          if (petName.trim().length < 1) return;
          onSave({ ...petData, name: petName.trim(), color });
        },
        disabled: petName.trim().length < 1,
        style: {
          background: petName.trim().length >= 1 ? "linear-gradient(135deg,#00E5FF,#1976D2)" : "rgba(255,255,255,0.2)",
          border: "none",
          borderRadius: 14,
          padding: "12px 28px",
          color: petName.trim().length >= 1 ? "white" : "rgba(255,255,255,0.4)",
          fontFamily: F.game,
          fontWeight: 900,
          fontSize: 14,
          cursor: petName.trim().length >= 1 ? "pointer" : "not-allowed",
          boxShadow: petName.trim().length >= 1 ? "0 6px 22px rgba(0,229,255,0.4)" : "none"
        }
      },
      "\u{1F489} L\u01B0u ph\u1EABu thu\u1EADt!"
    ))));
  }
  function TabBtn({ icon, label, active, onClick, badge }) {
    return /* @__PURE__ */ React.createElement("button", { onClick, style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      padding: "4px 0",
      flex: 1,
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 22, filter: active ? "none" : "grayscale(0.5) opacity(0.6)" } }, icon), /* @__PURE__ */ React.createElement("span", { style: {
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 10,
      color: active ? C.black : "#BDBDBD"
    } }, label), active && /* @__PURE__ */ React.createElement("div", { style: { width: 20, height: 3, borderRadius: 99, background: "linear-gradient(90deg,#B4FF00,#00E5FF)", marginTop: 1 } }), badge ? /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: 2,
      right: "18%",
      background: "#FF5252",
      borderRadius: "50%",
      width: 15,
      height: 15,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: F.game,
      fontSize: 8,
      fontWeight: 900,
      color: "white",
      boxShadow: "0 2px 6px rgba(255,82,82,0.5)"
    } }, badge > 9 ? "9+" : badge) : null);
  }
  function MiniGameTab({ state, dispatch, showToast: showToast2, onExit }) {
    const GRID = 8;
    const vw = Math.min(typeof window !== "undefined" ? window.innerWidth : 390, 420);
    const vh = typeof window !== "undefined" ? window.innerHeight : 667;
    const cellFromW = Math.floor((vw - 28) / GRID);
    const cellFromH = Math.floor((vh * 0.72 - 200) / GRID);
    const CELL = Math.max(24, Math.min(38, cellFromW, cellFromH));
    const makeGrid = () => Array(GRID).fill(null).map(() => Array(GRID).fill(null));
    const freshPieces = () => [makeBlastPiece(), makeBlastPiece(), makeBlastPiece()];
    const [grid, setGrid] = (0, import_react.useState)(makeGrid);
    const [pieces, setPieces] = (0, import_react.useState)(freshPieces);
    const [sel, setSel] = (0, import_react.useState)(null);
    const [score, setScore] = (0, import_react.useState)(0);
    const [gameOver, setGameOver] = (0, import_react.useState)(false);
    const [flash, setFlash] = (0, import_react.useState)(/* @__PURE__ */ new Set());
    const [ghostPos, setGhostPos] = (0, import_react.useState)(null);
    const [effects, setEffects] = (0, import_react.useState)({ e: 0, cl: 0, h: 0 });
    const [isDragging, setIsDragging] = (0, import_react.useState)(false);
    const [dragIdx, setDragIdx] = (0, import_react.useState)(null);
    const [dragPos, setDragPos] = (0, import_react.useState)({ x: 0, y: 0 });
    const gridRef = (0, import_react.useRef)(null);
    const LIFT = 90;
    const validCells = (0, import_react.useMemo)(() => {
      if (sel === null || !pieces[sel]) return /* @__PURE__ */ new Set();
      const p = pieces[sel];
      const s = /* @__PURE__ */ new Set();
      for (let r = 0; r < GRID; r++) for (let c = 0; c < GRID; c++)
        if (blastCanPlace(p.shape, r, c, grid)) s.add(`${r},${c}`);
      return s;
    }, [sel, pieces, grid]);
    const ghostCells = (0, import_react.useMemo)(() => {
      if (!ghostPos || sel === null || !pieces[sel]) return /* @__PURE__ */ new Set();
      const p = pieces[sel];
      if (!blastCanPlace(p.shape, ghostPos.r, ghostPos.c, grid)) return /* @__PURE__ */ new Set();
      const s = /* @__PURE__ */ new Set();
      for (let r = 0; r < p.shape.length; r++) for (let c = 0; c < p.shape[r].length; c++)
        if (p.shape[r][c]) s.add(`${ghostPos.r + r},${ghostPos.c + c}`);
      return s;
    }, [ghostPos, sel, pieces, grid]);
    const screenToCell = (x, y) => {
      if (!gridRef.current) return null;
      const rect = gridRef.current.getBoundingClientRect();
      const step = CELL + 2;
      const c = Math.floor((x - rect.left - 4) / step);
      const r = Math.floor((y - rect.top - 4) / step);
      if (r < 0 || r >= GRID || c < 0 || c >= GRID) return null;
      return { r, c };
    };
    (0, import_react.useEffect)(() => {
      if (!isDragging || dragIdx === null) return;
      const onMove = (e) => {
        e.preventDefault();
        const t = e.touches[0];
        if (!t) return;
        setDragPos({ x: t.clientX, y: t.clientY });
        setGhostPos(screenToCell(t.clientX, t.clientY - LIFT));
      };
      const onEnd = (e) => {
        const t = e.changedTouches[0];
        if (t) {
          const cell = screenToCell(t.clientX, t.clientY - LIFT);
          if (cell) handleCellTap(cell.r, cell.c);
        }
        setIsDragging(false);
        setDragIdx(null);
        setGhostPos(null);
      };
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("touchend", onEnd, { passive: false });
      return () => {
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onEnd);
      };
    }, [isDragging, dragIdx]);
    const handleCellTap = (r0, c0) => {
      if (gameOver || sel === null) return;
      const piece = pieces[sel];
      if (!piece || !blastCanPlace(piece.shape, r0, c0, grid)) return;
      const newGrid = grid.map((row) => [...row]);
      let ptsIdx = 0, cellCount = 0;
      for (let r = 0; r < piece.shape.length; r++) for (let c = 0; c < piece.shape[r].length; c++) {
        if (!piece.shape[r][c]) continue;
        newGrid[r0 + r][c0 + c] = { pts: piece.pts[ptsIdx++] || 5, bg: piece.rar.bg, border: piece.rar.border };
        cellCount++;
      }
      const fullRows = [], fullCols = [];
      for (let r = 0; r < GRID; r++) if (newGrid[r].every((c) => c !== null)) fullRows.push(r);
      for (let c = 0; c < GRID; c++) if (newGrid.every((row) => row[c] !== null)) fullCols.push(c);
      const lines = fullRows.length + fullCols.length;
      let earned = 0;
      const flashSet = /* @__PURE__ */ new Set();
      if (lines > 0) {
        fullRows.forEach((r) => {
          for (let c = 0; c < GRID; c++) {
            earned += newGrid[r][c]?.pts || 0;
            flashSet.add(`${r},${c}`);
          }
          for (let c = 0; c < GRID; c++) newGrid[r][c] = null;
        });
        fullCols.forEach((col) => {
          for (let r = 0; r < GRID; r++) {
            if (newGrid[r][col] !== null) {
              earned += newGrid[r][col]?.pts || 0;
              flashSet.add(`${r},${col}`);
            }
            newGrid[r][col] = null;
          }
        });
        earned *= Math.max(1, lines);
        setFlash(flashSet);
        setTimeout(() => setFlash(/* @__PURE__ */ new Set()), 400);
        showToast2(`\u2728 ${lines > 1 ? `COMBO \xD7${lines}! ` : ""}+${earned}\u{1FA99}`);
      }
      setScore((s) => s + earned);
      setGrid(newGrid);
      setGhostPos(null);
      setEffects((prev) => ({
        e: prev.e + cellCount * 1.5,
        cl: prev.cl + cellCount * 0.8,
        h: prev.h + cellCount * 2 + lines * 5
      }));
      const newPieces = pieces.map((p, i) => i === sel ? null : p);
      const anyLeft = newPieces.some((p) => p !== null);
      const finalPieces = anyLeft ? newPieces : freshPieces();
      setPieces(finalPieces);
      setSel(null);
      const hasMove = finalPieces.some((p) => {
        if (!p) return false;
        for (let r = 0; r < GRID; r++) for (let c = 0; c < GRID; c++)
          if (blastCanPlace(p.shape, r, c, newGrid)) return true;
        return false;
      });
      if (!hasMove) setGameOver(true);
    };
    const doExit = () => {
      const e = Math.max(0, Math.round(effects.e));
      const cl = Math.max(0, Math.round(effects.cl));
      const h = Math.max(0, Math.round(effects.h));
      dispatch({ type: "APPLY_GAME_RESULT", energyCost: e, cleanCost: cl, happinessGain: h, gameScore: score });
      if (score > 0 || h > 0) {
        showToast2(`\u{1F3AE} +${score}\u{1FA99} +${h}\u2764\uFE0F \u2212${e}\u26A1 \u2212${cl}\u{1F9FC}`);
      }
      onExit();
    };
    const selPiece = sel !== null ? pieces[sel] : null;
    const compact = CELL < 32;
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#1A1A2E",
      height: "100%",
      overflow: "hidden",
      padding: compact ? "4px 8px 6px" : "6px 8px 10px",
      gap: compact ? 4 : 6
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(255,255,255,0.06)",
      borderRadius: 14,
      padding: compact ? "5px 12px" : "7px 14px",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: compact ? 8 : 9, color: "#888", fontWeight: 700 } }, "\u0110I\u1EC2M"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: compact ? 15 : 20, color: "#FFD700", fontWeight: 900, lineHeight: 1 } }, score.toLocaleString())), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 9, color: "#888", fontWeight: 700, marginBottom: 3 } }, "HI\u1EC6U \u1EE8NG PET"), effects.h > 0 || effects.e > 0 || effects.cl > 0 ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, [{ icon: "\u2764\uFE0F", v: effects.h, sign: "+" }, { icon: "\u26A1", v: effects.e, sign: "\u2212" }, { icon: "\u{1F9FC}", v: effects.cl, sign: "\u2212" }].map(({ icon, v, sign }) => /* @__PURE__ */ React.createElement("div", { key: icon, style: { fontFamily: F.game, fontSize: 10, color: "rgba(255,255,255,0.7)", fontWeight: 800 } }, sign, Math.round(v), icon))) : /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 9, color: "rgba(255,255,255,0.3)", fontWeight: 700 } }, "\u0110\u1EB7t kh\u1ED1i \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u")), /* @__PURE__ */ React.createElement("button", { onClick: doExit, style: {
      background: "rgba(255,255,255,0.10)",
      border: "1.5px solid rgba(255,255,255,0.2)",
      borderRadius: 10,
      padding: "6px 12px",
      cursor: "pointer",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 11,
      color: "white"
    } }, "Tho\xE1t")), /* @__PURE__ */ React.createElement("div", { ref: gridRef, style: {
      background: "rgba(0,0,0,0.35)",
      borderRadius: 14,
      padding: 4,
      flexShrink: 0,
      display: "grid",
      gridTemplateColumns: `repeat(${GRID},${CELL}px)`,
      gridTemplateRows: `repeat(${GRID},${CELL}px)`,
      gap: 2
    } }, Array.from({ length: GRID * GRID }, (_, idx) => {
      const r = Math.floor(idx / GRID), c = idx % GRID;
      const key = `${r},${c}`;
      const cell = grid[r][c];
      const isFlash = flash.has(key);
      const isGhost = !cell && ghostCells.has(key);
      const isValid = !cell && sel !== null && validCells.has(key);
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key,
          onClick: () => handleCellTap(r, c),
          onMouseEnter: () => {
            if (sel !== null) setGhostPos({ r, c });
          },
          onMouseLeave: () => setGhostPos(null),
          style: {
            width: CELL,
            height: CELL,
            borderRadius: 5,
            cursor: sel !== null ? "pointer" : "default",
            background: isFlash ? "#FFD700" : cell ? `linear-gradient(135deg,${cell.bg},rgba(120,210,255,0.45) 55%,${cell.bg}99)` : isGhost ? (selPiece?.rar.bg || "#fff") + "66" : isValid ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.03)",
            border: cell ? `1.5px solid rgba(180,235,255,0.85)` : isGhost ? `1.5px solid ${selPiece?.rar.bg || "#fff"}` : isValid ? "1px dashed rgba(255,255,255,0.22)" : "1px solid rgba(255,255,255,0.05)",
            boxShadow: cell ? `inset 0 0 ${CELL * 0.3}px rgba(80,180,255,0.35), 0 2px 6px rgba(0,0,0,0.3)` : "none",
            position: "relative",
            animation: isFlash ? "blockClear 0.35s ease-out forwards" : cell ? "blockPlace 0.18s ease-out" : "none",
            transition: "background 0.08s",
            overflow: "hidden"
          }
        },
        cell && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: CELL * 0.18
        } }, /* @__PURE__ */ React.createElement(
          PouPet,
          {
            petData: state.petData,
            size: Math.round(CELL * 0.8),
            bounce: false,
            mood: 55,
            cleanLevel: 100,
            isSleeping: false,
            eyeOffset: { x: 0, y: 0 }
          }
        )), /* @__PURE__ */ React.createElement("svg", { style: { position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.28 }, viewBox: "0 0 38 38" }, /* @__PURE__ */ React.createElement("line", { x1: "4", y1: "3", x2: "11", y2: "13", stroke: "white", strokeWidth: "0.9" }), /* @__PURE__ */ React.createElement("line", { x1: "11", y1: "13", x2: "7", y2: "21", stroke: "white", strokeWidth: "0.65" }), /* @__PURE__ */ React.createElement("line", { x1: "11", y1: "13", x2: "17", y2: "17", stroke: "white", strokeWidth: "0.65" }), /* @__PURE__ */ React.createElement("line", { x1: "31", y1: "29", x2: "25", y2: "21", stroke: "white", strokeWidth: "0.8" }), /* @__PURE__ */ React.createElement("line", { x1: "25", y1: "21", x2: "29", y2: "15", stroke: "white", strokeWidth: "0.55" }), /* @__PURE__ */ React.createElement("line", { x1: "25", y1: "21", x2: "20", y2: "26", stroke: "white", strokeWidth: "0.55" })), /* @__PURE__ */ React.createElement("div", { style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg,rgba(180,235,255,0.30) 0%,rgba(80,170,255,0.12) 45%,transparent 70%)",
          pointerEvents: "none"
        } }), /* @__PURE__ */ React.createElement("span", { style: {
          position: "absolute",
          bottom: 2,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: F.game,
          fontSize: Math.max(7, CELL * 0.21),
          fontWeight: 900,
          color: "white",
          lineHeight: 1,
          textShadow: "0 1px 4px rgba(0,80,180,0.9),0 0 6px rgba(0,160,255,0.7)"
        } }, cell.pts)),
        isGhost && /* @__PURE__ */ React.createElement("div", { style: { opacity: 0.55, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" } }, /* @__PURE__ */ React.createElement(
          PouPet,
          {
            petData: state.petData,
            size: Math.round(CELL * 0.72),
            bounce: false,
            mood: 55,
            cleanLevel: 100,
            isSleeping: false,
            eyeOffset: { x: 0, y: 0 }
          }
        ))
      );
    })), /* @__PURE__ */ React.createElement("div", { style: { width: "100%", display: "flex", gap: 8, justifyContent: "center", flexShrink: 0 } }, pieces.map((piece, i) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: i,
        onClick: () => {
          if (piece && !isDragging) setSel(i === sel ? null : i);
        },
        onTouchStart: (e) => {
          if (!piece || gameOver) return;
          e.preventDefault();
          const t = e.touches[0];
          setSel(i);
          setDragIdx(i);
          setDragPos({ x: t.clientX, y: t.clientY });
          setIsDragging(true);
        },
        style: {
          flex: 1,
          minHeight: compact ? 52 : 68,
          maxWidth: 115,
          background: piece ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.25)",
          borderRadius: 14,
          border: `2px solid ${i === sel && piece ? "#B4FF00" : "rgba(255,255,255,0.13)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: piece ? "pointer" : "default",
          transform: i === sel && piece ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.12s,border 0.12s,box-shadow 0.12s,opacity 0.12s",
          boxShadow: i === sel && piece ? "0 0 18px #B4FF0044" : "none",
          opacity: isDragging && dragIdx === i ? 0.3 : 1,
          touchAction: "none",
          padding: 6,
          position: "relative"
        }
      },
      piece ? /* @__PURE__ */ React.createElement("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${piece.shape[0].length},16px)`,
        gridTemplateRows: `repeat(${piece.shape.length},16px)`,
        gap: 2
      } }, piece.shape.flatMap((row, r) => row.map((on, c) => /* @__PURE__ */ React.createElement("div", { key: `${r},${c}`, style: {
        width: 16,
        height: 16,
        borderRadius: 4,
        background: on ? `linear-gradient(135deg,${piece.rar.bg},rgba(140,215,255,0.5) 60%,${piece.rar.bg}88)` : "transparent",
        border: on ? `1px solid rgba(180,235,255,0.8)` : "none",
        boxShadow: on ? `inset 0 0 5px rgba(80,180,255,0.4)` : "none",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      } }, on && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        PouPet,
        {
          petData: state.petData,
          size: 13,
          bounce: false,
          mood: 55,
          cleanLevel: 100,
          isSleeping: false,
          eyeOffset: { x: 0, y: 0 }
        }
      ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "rgba(100,200,255,0.22)", pointerEvents: "none" } })))))) : /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, opacity: 0.25 } }, "\u2713"),
      piece && /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: 4,
        right: 5,
        fontFamily: F.game,
        fontSize: 7,
        fontWeight: 900,
        color: piece.rar.bg,
        textShadow: `0 0 6px ${piece.rar.bg}`
      } }, piece.rar.name === "epic" ? "EPIC" : piece.rar.name === "rare" ? "RARE" : "")
    ))), /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: F.game,
      fontSize: 10,
      color: "rgba(255,255,255,0.35)",
      textAlign: "center",
      flexShrink: 0
    } }, gameOver ? "" : sel === null ? "\u270B Gi\u1EEF & k\xE9o kh\u1ED1i l\xEAn b\u1EA3ng" : isDragging ? "\u2B06\uFE0F Th\u1EA3 \u0111\u1EC3 \u0111\u1EB7t kh\u1ED1i" : "\u{1F446} K\xE9o ho\u1EB7c ch\u1EA1m \xF4 \u0111\u1EC3 \u0111\u1EB7t"), isDragging && dragIdx !== null && pieces[dragIdx] && (() => {
      const p = pieces[dragIdx];
      const cols = p.shape[0].length;
      const rows = p.shape.length;
      const CS = CELL;
      return /* @__PURE__ */ React.createElement("div", { style: {
        position: "fixed",
        left: dragPos.x,
        top: dragPos.y - LIFT,
        transform: "translate(-50%,-50%) scale(1.22)",
        pointerEvents: "none",
        zIndex: 1e3,
        filter: `drop-shadow(0 6px 18px ${p.rar.bg}88)`
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${cols},${CS}px)`,
        gridTemplateRows: `repeat(${rows},${CS}px)`,
        gap: 2,
        background: "rgba(0,0,0,0.45)",
        borderRadius: 10,
        padding: 4
      } }, p.shape.flatMap((row, r) => row.map((on, c) => /* @__PURE__ */ React.createElement("div", { key: `${r},${c}`, style: {
        width: CS,
        height: CS,
        borderRadius: 5,
        background: on ? `linear-gradient(135deg,${p.rar.bg},rgba(140,215,255,0.5) 60%,${p.rar.bg}88)` : "transparent",
        border: on ? "1.5px solid rgba(180,235,255,0.85)" : "none",
        boxShadow: on ? `inset 0 0 ${CS * 0.3}px rgba(80,180,255,0.35)` : "none",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      } }, on && /* @__PURE__ */ React.createElement(
        PouPet,
        {
          petData: state.petData,
          size: Math.round(CS * 0.8),
          bounce: false,
          mood: 55,
          cleanLevel: 100,
          isSleeping: false,
          eyeOffset: { x: 0, y: 0 }
        }
      ))))));
    })(), gameOver && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.82)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      gap: 14,
      padding: 24
    } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 56, lineHeight: 1 } }, "\u{1F635}"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 24, color: "white", marginTop: 8 } }, "Game Over!"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontSize: 15, color: "#FFD700", marginTop: 4 } }, score.toLocaleString(), " \u0111i\u1EC3m \u{1FA99}")), /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(255,255,255,0.09)",
      borderRadius: 18,
      padding: "14px 28px",
      textAlign: "center",
      width: "100%",
      maxWidth: 280
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 11, color: "#888", marginBottom: 10 } }, "Hi\u1EC7u \u1EE9ng cho pet"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 0, justifyContent: "space-around" } }, [
      { icon: "\u2764\uFE0F", v: `+${Math.max(0, Math.round(effects.h))}`, col: "#EF9A9A" },
      { icon: "\u26A1", v: `\u2212${Math.max(0, Math.round(effects.e))}`, col: "#FFF176" },
      { icon: "\u{1F9FC}", v: `\u2212${Math.max(0, Math.round(effects.cl))}`, col: "#80D8FF" },
      { icon: "\u{1FA99}", v: `+${score}`, col: "#FFD700" }
    ].map(({ icon, v, col }) => /* @__PURE__ */ React.createElement("div", { key: icon, style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22 } }, icon), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: col } }, v))))), /* @__PURE__ */ React.createElement("button", { onClick: doExit, style: {
      background: "linear-gradient(135deg,#B4FF00,#00E676)",
      border: "none",
      borderRadius: 22,
      padding: "14px 44px",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 16,
      color: "#1A1A1A",
      cursor: "pointer",
      boxShadow: "0 6px 28px rgba(0,200,83,0.45)",
      animation: "pulseBtn 1.8s ease-in-out infinite"
    } }, "\u{1F389} Nh\u1EADn th\u01B0\u1EDFng!")));
  }
  function WaterBallGame({ state, dispatch, showToast: showToast2, onExit }) {
    const canvasRef = (0, import_react.useRef)(null);
    const ballsRef = (0, import_react.useRef)([]);
    const nextIdRef = (0, import_react.useRef)(0);
    const scoreRef = (0, import_react.useRef)(0);
    const gameOverRef = (0, import_react.useRef)(false);
    const dropXRef = (0, import_react.useRef)(180);
    const nextTierRef = (0, import_react.useRef)(0);
    const rafRef = (0, import_react.useRef)(null);
    const canDropRef = (0, import_react.useRef)(true);
    const dropTimerRef = (0, import_react.useRef)(null);
    const mergeSetRef = (0, import_react.useRef)(/* @__PURE__ */ new Set());
    const effectsRef = (0, import_react.useRef)({ h: 0, e: 0, cl: 0 });
    const frameRef = (0, import_react.useRef)(0);
    const stripePatRef = (0, import_react.useRef)(null);
    const queueRef = (0, import_react.useRef)([]);
    const [score, setScore] = (0, import_react.useState)(0);
    const [gameOver, setGameOver] = (0, import_react.useState)(false);
    const [canDrop, setCanDrop] = (0, import_react.useState)(true);
    const [nextTier, setNextTier] = (0, import_react.useState)(0);
    const W = 360, H = 490;
    const CONT_TOP_Y = 82;
    const CONT_BOT_Y = 458;
    const CONT_TLL = 22;
    const CONT_TRL = 338;
    const CONT_BLL = 90;
    const CONT_BRL = 270;
    const FLOOR = CONT_BOT_Y;
    const WALL_L = CONT_TLL;
    const WALL_R = CONT_TRL;
    const DANGER_Y = CONT_TOP_Y;
    const WALL_W = 18;
    const LWALL_DX = CONT_BLL - CONT_TLL;
    const LWALL_DY = CONT_BOT_Y - CONT_TOP_Y;
    const LWALL_LEN = Math.sqrt(LWALL_DX * LWALL_DX + LWALL_DY * LWALL_DY);
    const LWALL_NX = LWALL_DY / LWALL_LEN;
    const LWALL_NY = -LWALL_DX / LWALL_LEN;
    const GRAVITY = 0.3;
    const FRICTION = 0.982;
    const DAMPING = 0.72;
    const wlighten = (hex, amt) => {
      const n = parseInt((hex || "#888888").replace("#", ""), 16);
      const r = Math.min(255, (n >> 16 & 255) + Math.round(255 * amt));
      const g = Math.min(255, (n >> 8 & 255) + Math.round(255 * amt));
      const b = Math.min(255, (n & 255) + Math.round(255 * amt));
      return `rgb(${r},${g},${b})`;
    };
    const randNextTier = () => Math.floor(Math.random() * 4);
    const makeBall = (x, y, tier, vx = 0, vy = 0, flash = 0) => ({
      id: nextIdRef.current++,
      x,
      y,
      vx,
      vy,
      r: WATER_TIERS[tier].r,
      tier,
      flash,
      wobble: 0,
      wobbleV: 0,
      ripple: 0,
      contacts: [],
      // visual contact deformation list (computed end of step)
      /* pet floats freely inside the bag */
      petX: (Math.random() - 0.5) * 4,
      petY: (Math.random() - 0.5) * 4,
      petVX: (Math.random() - 0.5) * 0.4,
      petVY: (Math.random() - 0.5) * 0.4,
      /* anger: rises on hard fall / being squeezed, decays over time */
      anger: 0,
      /* spin: tumbles when angry/thrown */
      petAngle: 0,
      petAngleV: 0,
      /* idle phase — unique per ball for natural variety */
      petIdleT: Math.random() * Math.PI * 2,
      /* escape: countdown to next dash toward the ball wall */
      escapeTimer: Math.floor(Math.random() * 100 + 60)
    });
    const addBall = (x, tier) => {
      ballsRef.current.push(makeBall(x, DANGER_Y + WATER_TIERS[tier].r + 4, tier));
    };
    const blobPath = (ctx, r, contacts, wobble) => {
      const N = 20;
      const pts = [];
      for (let i = 0; i < N; i++) {
        const angle = i / N * Math.PI * 2;
        let px = Math.cos(angle) * r;
        let py = Math.sin(angle) * r;
        for (const c of contacts) {
          const dot = px / r * c.nx + py / r * c.ny;
          if (dot < 0) {
            const sq = -dot * c.str * r * 0.38;
            px += c.nx * sq;
            py += c.ny * sq;
          } else if (dot > 0) {
            const bl = dot * c.str * 0.2;
            px *= 1 + bl;
            py *= 1 + bl;
          }
        }
        if (Math.abs(wobble) > 5e-3) {
          const w = Math.max(-0.52, Math.min(0.6, wobble));
          px *= 1 + w * Math.cos(angle) * Math.cos(angle);
          py *= 1 - w * Math.sin(angle) * Math.sin(angle) * 0.65;
        }
        py += py / r * r * 0.055;
        pts.push({ x: px, y: py });
      }
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 0; i < N; i++) {
        const p0 = pts[(i - 1 + N) % N], p1 = pts[i], p2 = pts[(i + 1) % N], p3 = pts[(i + 2) % N];
        ctx.bezierCurveTo(
          p1.x + (p2.x - p0.x) / 6,
          p1.y + (p2.y - p0.y) / 6,
          p2.x - (p3.x - p1.x) / 6,
          p2.y - (p3.y - p1.y) / 6,
          p2.x,
          p2.y
        );
      }
      ctx.closePath();
    };
    const drawPetInBall = (ctx, petData, ball) => {
      const {
        r,
        petX = 0,
        petY = 0,
        anger = 0,
        petAngle = 0,
        petIdleT = 0,
        contacts = [],
        vy = 0,
        petVX = 0,
        petVY = 0,
        flash = 0,
        petAngleV = 0
      } = ball;
      const { drawnPath, color = "#C8956C", eyeLeft, eyeRight, mouth, mouthType = "smile" } = petData || {};
      const pts = drawnPath || DEFAULT_PATH;
      const petSize = r * 1.18;
      const gravityY = r * 0.1;
      let expr = "normal";
      if (flash > 0.2) expr = "happy";
      else if (Math.abs(petAngleV) > 0.13) expr = "dizzy";
      else if (anger > 0.3) expr = "angry";
      else if (vy > 4.5 && anger < 0.3) expr = "scared";
      else if (contacts.length >= 3 && anger < 0.3) expr = "squished";
      const blinkPhase = Math.sin(petIdleT * 0.38);
      const isBlinking = blinkPhase > 0.92 && expr === "normal";
      const breathScale = 1 + Math.sin(petIdleT * 0.22) * 0.025;
      ctx.save();
      ctx.translate(petX, gravityY + petY);
      ctx.rotate(petAngle);
      ctx.scale(breathScale, breathScale);
      const tx = (nx) => (nx - 0.5) * petSize;
      const ty = (ny) => (ny - 0.5) * petSize;
      const n = pts.length;
      if (n >= 3) {
        ctx.beginPath();
        ctx.moveTo(tx(pts[0].x), ty(pts[0].y));
        for (let i = 0; i < n; i++) {
          const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
          ctx.bezierCurveTo(
            tx(p1.x) + (tx(p2.x) - tx(p0.x)) / 6,
            ty(p1.y) + (ty(p2.y) - ty(p0.y)) / 6,
            tx(p2.x) - (tx(p3.x) - tx(p1.x)) / 6,
            ty(p2.y) - (ty(p3.y) - ty(p1.y)) / 6,
            tx(p2.x),
            ty(p2.y)
          );
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.16)";
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.48)";
        ctx.lineWidth = Math.max(0.8, r * 0.022);
        ctx.lineJoin = "round";
        ctx.stroke();
      }
      const EL = eyeLeft || { x: 0.36, y: 0.4 };
      const ER = eyeRight || { x: 0.64, y: 0.4 };
      const MO = mouth || { x: 0.5, y: 0.62 };
      const eyeR = Math.max(petSize * 0.1, 1.8);
      const pupR = eyeR * 0.5;
      const eSW = Math.max(1, eyeR * 0.13);
      const mSW = Math.max(1, petSize * 0.013);
      const pfx = expr === "normal" ? Math.max(-pupR * 0.5, Math.min(pupR * 0.5, petVX * 0.9)) : 0;
      const pfy = expr === "normal" ? Math.max(-pupR * 0.5, Math.min(pupR * 0.5, petVY * 0.9)) : 0;
      const ea = (enx, eny) => ({ ex: tx(enx), ey: ty(eny), bs: enx > 0.5 ? 1 : -1 });
      const drawBlush = (ex, ey, bs) => {
        ctx.beginPath();
        ctx.ellipse(ex + bs * eyeR * 2.2, ey + eyeR * 0.8, eyeR * 1.4, eyeR * 0.8, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,155,178,0.32)";
        ctx.fill();
      };
      const drawBaseEye = (ex, ey, eScale = 1, pupScale = 1, pox = 0, poy = 0) => {
        ctx.beginPath();
        ctx.arc(ex, ey, eyeR * eScale, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.82)";
        ctx.lineWidth = eSW;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ex + pfx + pox, ey + pfy + poy, pupR * pupScale, 0, Math.PI * 2);
        ctx.fillStyle = "#1A1A2E";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ex + pfx + pox - pupR * 0.35, ey + pfy + poy - pupR * 0.4, pupR * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      };
      const eyeNormal = (enx, eny) => {
        const { ex, ey, bs } = ea(enx, eny);
        drawBlush(ex, ey, bs);
        if (isBlinking) {
          ctx.beginPath();
          ctx.moveTo(ex - eyeR * 0.8, ey);
          ctx.lineTo(ex + eyeR * 0.8, ey);
          ctx.strokeStyle = "rgba(0,0,0,0.82)";
          ctx.lineWidth = Math.max(1.5, eyeR * 0.18);
          ctx.lineCap = "round";
          ctx.stroke();
        } else {
          drawBaseEye(ex, ey);
        }
      };
      const eyeAngry = (enx, eny) => {
        const { ex, ey } = ea(enx, eny);
        ctx.beginPath();
        ctx.ellipse(ex, ey, eyeR, eyeR * 0.48, 0, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.82)";
        ctx.lineWidth = eSW;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ex, ey, pupR * 0.68, 0, Math.PI * 2);
        ctx.fillStyle = "#1A1A2E";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ex - pupR * 0.35, ey - pupR * 0.4, pupR * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      };
      const eyeScared = (enx, eny) => {
        const { ex, ey, bs } = ea(enx, eny);
        drawBlush(ex, ey, bs);
        const tr = Math.sin(petIdleT * 2.8) * eyeR * 0.06;
        drawBaseEye(ex + tr, ey, 1.28, 0.45, 0, 0);
      };
      const eyeHappy = (enx, eny) => {
        const { ex, ey } = ea(enx, eny);
        ctx.fillStyle = "#FFD700";
        ctx.strokeStyle = "rgba(0,0,0,0.50)";
        ctx.lineWidth = eSW;
        ctx.beginPath();
        for (let k = 0; k < 5; k++) {
          const a1 = k / 5 * Math.PI * 2 - Math.PI / 2, a2 = (k + 0.5) / 5 * Math.PI * 2 - Math.PI / 2;
          k === 0 ? ctx.moveTo(ex + Math.cos(a1) * eyeR * 1.05, ey + Math.sin(a1) * eyeR * 1.05) : ctx.lineTo(ex + Math.cos(a1) * eyeR * 1.05, ey + Math.sin(a1) * eyeR * 1.05);
          ctx.lineTo(ex + Math.cos(a2) * eyeR * 0.4, ey + Math.sin(a2) * eyeR * 0.4);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      };
      const eyeDizzy = (enx, eny) => {
        const { ex, ey } = ea(enx, eny);
        ctx.strokeStyle = "rgba(0,0,0,0.82)";
        ctx.lineWidth = Math.max(1.5, eyeR * 0.36);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(ex - eyeR * 0.75, ey - eyeR * 0.75);
        ctx.lineTo(ex + eyeR * 0.75, ey + eyeR * 0.75);
        ctx.moveTo(ex + eyeR * 0.75, ey - eyeR * 0.75);
        ctx.lineTo(ex - eyeR * 0.75, ey + eyeR * 0.75);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ex, ey, eyeR * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.60)";
        ctx.fill();
      };
      const eyeSquished = (enx, eny) => {
        const { ex, ey } = ea(enx, eny);
        ctx.beginPath();
        ctx.moveTo(ex - eyeR * 0.8, ey);
        ctx.lineTo(ex + eyeR * 0.8, ey);
        ctx.strokeStyle = "rgba(0,0,0,0.82)";
        ctx.lineWidth = Math.max(1.5, eyeR * 0.18);
        ctx.lineCap = "round";
        ctx.stroke();
      };
      const drawEye = expr === "angry" ? eyeAngry : expr === "scared" ? eyeScared : expr === "happy" ? eyeHappy : expr === "dizzy" ? eyeDizzy : expr === "squished" ? eyeSquished : eyeNormal;
      drawEye(EL.x, EL.y);
      drawEye(ER.x, ER.y);
      const mx = tx(MO.x), my = ty(MO.y), mR = petSize * 0.09;
      ctx.strokeStyle = "rgba(0,0,0,0.82)";
      ctx.lineWidth = mSW;
      ctx.lineCap = "round";
      if (mouthType === "big") {
        ctx.beginPath();
        ctx.moveTo(mx - mR * 1.2, my - mR * 0.2);
        ctx.quadraticCurveTo(mx, my + mR * 1.5, mx + mR * 1.2, my - mR * 0.2);
        ctx.fillStyle = "#8B2020";
        ctx.fill();
        ctx.stroke();
      } else if (mouthType === "flat") {
        ctx.beginPath();
        ctx.moveTo(mx - mR, my);
        ctx.lineTo(mx + mR, my);
        ctx.stroke();
      } else if (mouthType === "sad") {
        ctx.beginPath();
        ctx.moveTo(mx - mR, my + mR * 0.4);
        ctx.quadraticCurveTo(mx, my - mR * 0.6, mx + mR, my + mR * 0.4);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(mx - mR, my);
        ctx.quadraticCurveTo(mx, my + mR * 1.2, mx + mR, my);
        ctx.stroke();
      }
      ctx.restore();
    };
    const drawBall = (ctx, b, petData, alpha = 1) => {
      const t = WATER_TIERS[b.tier];
      const { x, y, r, wobble, contacts } = b;
      const spd = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
      let velSX = 1, velSY = 1;
      if (spd > 1.2) {
        const st = Math.min(spd * 0.013, 0.26);
        const vf = Math.abs(b.vy) / spd;
        velSY = 1 + st * vf;
        velSX = 1 / velSY;
      }
      ctx.save();
      if (alpha < 1) ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.scale(velSX, velSY);
      ctx.save();
      ctx.translate(3, 4);
      blobPath(ctx, r, contacts, wobble);
      ctx.fillStyle = "rgba(0,0,0,0.22)";
      ctx.fill();
      ctx.restore();
      blobPath(ctx, r, contacts, wobble);
      ctx.fillStyle = t.color;
      ctx.fill();
      ctx.save();
      blobPath(ctx, r, contacts, wobble);
      ctx.clip();
      const flat = ctx.createLinearGradient(0, -r, 0, r);
      flat.addColorStop(0, "rgba(255,255,255,0.08)");
      flat.addColorStop(0.5, "rgba(0,0,0,0)");
      flat.addColorStop(1, "rgba(0,0,0,0.22)");
      ctx.fillStyle = flat;
      ctx.fillRect(-r, -r, r * 2, r * 2);
      const sloshX = Math.max(-r * 0.28, Math.min(r * 0.28, b.vx * 0.9));
      ctx.beginPath();
      ctx.moveTo(-r * 0.88, r * 0.28 + sloshX * 0.12);
      for (let px = -r * 0.88; px <= r * 0.88; px += 4) {
        ctx.lineTo(px, r * 0.28 + Math.sin(px * 0.1) * 2.2 + sloshX * 0.14);
      }
      ctx.strokeStyle = "rgba(255,255,255,0.18)";
      ctx.lineWidth = 1.8;
      ctx.stroke();
      drawPetInBall(ctx, petData, b);
      ctx.restore();
      blobPath(ctx, r, contacts, wobble);
      ctx.strokeStyle = "rgba(0,0,0,0.55)";
      ctx.lineWidth = Math.max(1.8, r * 0.055);
      ctx.lineJoin = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(-r * 0.22, -r * 0.44, r * 0.22, r * 0.1, -0.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.62)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-r * 0.08, -r * 0.64, r * 0.07, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.38)";
      ctx.fill();
      ctx.restore();
      if (b.flash > 0) {
        const fRad = r * Math.max(velSX, velSY) + 9 * (1 - b.flash);
        ctx.beginPath();
        ctx.arc(x, y, fRad, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,180,${b.flash * 0.82})`;
        ctx.lineWidth = 7 * b.flash;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, fRad * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${b.flash * 0.16})`;
        ctx.fill();
      }
      if (b.ripple > 0) {
        ctx.beginPath();
        ctx.ellipse(x, CONT_BOT_Y - 2, r * velSX * (1.28 + (1 - b.ripple) * 0.45), 6 * b.ripple, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(120,200,255,${b.ripple * 0.48})`;
        ctx.lineWidth = 2.5 * b.ripple;
        ctx.stroke();
      }
    };
    const step = (0, import_react.useCallback)(() => {
      const balls = ballsRef.current;
      for (const b of balls) {
        b.wobbleV += -0.18 * b.wobble;
        b.wobble += b.wobbleV;
        b.wobbleV *= 0.88;
        if (b.ripple > 0) b.ripple = Math.max(0, b.ripple - 0.036);
        const INNER_R = b.r * 0.36;
        b.petVX += b.vx * 0.018 + (Math.random() - 0.5) * 0.04;
        b.petVY += 0.045 + b.vy * 0.018;
        b.petVX *= 0.94;
        b.petVY *= 0.94;
        b.petX += b.petVX;
        b.petY += b.petVY;
        const pd = Math.sqrt(b.petX * b.petX + b.petY * b.petY);
        if (pd > INNER_R) {
          const pnx = b.petX / pd, pny = b.petY / pd;
          b.petX = pnx * INNER_R;
          b.petY = pny * INNER_R;
          const bounce = b.petVX * pnx + b.petVY * pny;
          b.petVX -= pnx * bounce * 1.55;
          b.petVY -= pny * bounce * 1.55;
        }
        b.escapeTimer = (b.escapeTimer || 80) - 1;
        if (b.escapeTimer <= 0) {
          const eA = Math.random() * Math.PI * 2;
          const eStr = b.r * 0.2;
          b.petVX += Math.cos(eA) * eStr;
          b.petVY += Math.sin(eA) * eStr * 0.75 - eStr * 0.25;
          b.escapeTimer = Math.floor(Math.random() * 110 + 70);
        }
        const fallStress = Math.max(0, b.vy - 3.5) * 0.06;
        const squishStress = b.contacts.length * 0.035;
        b.anger = Math.min(1, b.anger + fallStress + squishStress);
        b.anger *= 0.965;
        b.petAngleV += (Math.random() - 0.5) * b.anger * 0.12;
        b.petAngleV *= 0.88;
        b.petAngle += b.petAngleV;
        b.petIdleT = (b.petIdleT || 0) + 0.045;
        b.vy += GRAVITY;
        b.vx *= FRICTION;
        b.vy *= FRICTION;
        b.x += b.vx;
        b.y += b.vy;
        if (b.y + b.r > FLOOR) {
          b.y = FLOOR - b.r;
          const imp = Math.abs(b.vy);
          b.vy *= -DAMPING;
          b.vx *= 0.88;
          if (imp > 1.8) {
            b.wobble = Math.min(0.46, imp * 0.03);
            b.wobbleV = -0.055;
            b.ripple = Math.min(1, imp * 0.1);
            b.anger = Math.min(1, b.anger + imp * 0.08);
            b.petAngleV += (Math.random() > 0.5 ? 1 : -1) * imp * 0.06;
          }
        }
        if (b.y > CONT_TOP_Y - b.r && b.y < CONT_BOT_Y + b.r) {
          const t = Math.max(0, Math.min(1, (b.y - CONT_TOP_Y) / (CONT_BOT_Y - CONT_TOP_Y)));
          const lx = CONT_TLL + LWALL_DX * t;
          const rx = CONT_TRL - LWALL_DX * t;
          if (b.x - b.r < lx) {
            b.x = lx + b.r;
            const vn = b.vx * LWALL_NX + b.vy * LWALL_NY;
            if (vn < 0) {
              const imp = Math.abs(vn);
              b.vx -= (1 + DAMPING) * vn * LWALL_NX;
              b.vy -= (1 + DAMPING) * vn * LWALL_NY;
              b.vx *= 0.9;
              if (imp > 1.5) {
                b.wobble = Math.min(0.3, imp * 0.022);
                b.wobbleV = -0.04;
                b.anger = Math.min(1, b.anger + imp * 0.06);
                b.petAngleV += imp * 0.05;
              }
            }
          }
          if (b.x + b.r > rx) {
            b.x = rx - b.r;
            const vn = b.vx * -LWALL_NX + b.vy * LWALL_NY;
            if (vn < 0) {
              const imp = Math.abs(vn);
              b.vx -= (1 + DAMPING) * vn * -LWALL_NX;
              b.vy -= (1 + DAMPING) * vn * LWALL_NY;
              b.vx *= 0.9;
              if (imp > 1.5) {
                b.wobble = Math.min(0.3, imp * 0.022);
                b.wobbleV = -0.04;
                b.anger = Math.min(1, b.anger + imp * 0.06);
                b.petAngleV -= imp * 0.05;
              }
            }
          }
        }
        if (b.flash > 0) b.flash = Math.max(0, b.flash - 0.04);
      }
      const toMerge = [];
      const merged = mergeSetRef.current;
      merged.clear();
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i], bB = balls[j];
          if (merged.has(a.id) || merged.has(bB.id)) continue;
          const dx = bB.x - a.x, dy = bB.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minD = a.r + bB.r;
          if (dist < minD) {
            if (a.tier === bB.tier && a.tier < WATER_TIERS.length - 1) {
              toMerge.push([i, j]);
              merged.add(a.id);
              merged.add(bB.id);
            } else {
              const ov = minD - dist + 0.5;
              const nx = dist > 0 ? dx / dist : 1, ny = dist > 0 ? dy / dist : 0;
              a.x -= nx * ov * 0.5;
              a.y -= ny * ov * 0.5;
              bB.x += nx * ov * 0.5;
              bB.y += ny * ov * 0.5;
              const relV = (bB.vx - a.vx) * nx + (bB.vy - a.vy) * ny;
              if (relV < 0) {
                const imp = relV * 0.65;
                a.vx += imp * nx;
                a.vy += imp * ny;
                bB.vx -= imp * nx;
                bB.vy -= imp * ny;
                const cI = Math.abs(relV);
                if (cI > 1) {
                  a.wobble += cI * 0.016;
                  bB.wobble += cI * 0.016;
                  a.anger = Math.min(1, a.anger + cI * 0.05);
                  bB.anger = Math.min(1, bB.anger + cI * 0.05);
                  a.petAngleV += (Math.random() > 0.5 ? 1 : -1) * cI * 0.04;
                  bB.petAngleV += (Math.random() > 0.5 ? 1 : -1) * cI * 0.04;
                }
              }
            }
          }
        }
      }
      toMerge.sort((a, b) => b[0] - a[0]);
      let gain = 0;
      for (const [i, j] of toMerge) {
        const a = ballsRef.current[i], bB = ballsRef.current[j];
        const nt = a.tier + 1;
        const nx = (a.x + bB.x) / 2, ny2 = (a.y + bB.y) / 2;
        ballsRef.current.splice(Math.max(i, j), 1);
        ballsRef.current.splice(Math.min(i, j), 1);
        const nb = makeBall(nx, ny2, nt, (a.vx + bB.vx) * 0.38, (a.vy + bB.vy) * 0.38 - 1.8, 1);
        nb.wobble = 0.44;
        nb.wobbleV = -0.07;
        nb.ripple = 0.9;
        ballsRef.current.push(nb);
        gain += WATER_TIERS[nt].pts;
        effectsRef.current.h += 3;
        effectsRef.current.e += 1.5;
        effectsRef.current.cl += 1;
      }
      if (gain > 0) {
        scoreRef.current += gain;
        setScore(scoreRef.current);
      }
      if (!gameOverRef.current) {
        const danger = ballsRef.current.filter((b) => b.y - b.r < DANGER_Y);
        if (danger.length > 0 && danger.every((b) => Math.abs(b.vy) < 0.85 && Math.abs(b.vx) < 0.85)) {
          gameOverRef.current = true;
          setGameOver(true);
        }
      }
      for (const b of balls) b.contacts = [];
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i], bB = balls[j];
          const dx = bB.x - a.x, dy = bB.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minD = a.r + bB.r;
          if (dist < minD * 1.05) {
            const nx = dist > 0 ? dx / dist : 0, ny = dist > 0 ? dy / dist : 1;
            const str = Math.min(0.82, Math.max(0.18, (minD * 1.02 - dist) / (minD * 0.1)));
            a.contacts.push({ nx: -nx, ny: -ny, str });
            bB.contacts.push({ nx, ny, str });
          }
        }
      }
      for (const b of balls) {
        const dFloor = FLOOR - (b.y + b.r);
        if (dFloor < b.r * 0.18) {
          const str = Math.min(0.75, Math.max(0.2, (b.r * 0.12 - Math.max(0, dFloor)) / (b.r * 0.12)));
          b.contacts.push({ nx: 0, ny: -1, str });
        }
      }
      for (const b of balls) {
        const pd2 = Math.sqrt(b.petX * b.petX + b.petY * b.petY);
        if (pd2 > b.r * 0.26 && pd2 > 0) {
          const pnx = b.petX / pd2, pny = b.petY / pd2;
          const pushStr = Math.min(0.28, (pd2 - b.r * 0.26) / (b.r * 0.1));
          if (pushStr > 0.03) b.contacts.push({ nx: pnx, ny: pny, str: pushStr });
        }
      }
    }, []);
    const render = (0, import_react.useCallback)(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const T = ++frameRef.current;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#1A1A2E";
      ctx.fillRect(0, 0, W, H);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(CONT_TLL, CONT_TOP_Y);
      ctx.lineTo(CONT_BLL, CONT_BOT_Y);
      ctx.lineTo(0, CONT_BOT_Y + 14);
      ctx.closePath();
      ctx.fillStyle = "#16213E";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(W, 0);
      ctx.lineTo(CONT_TRL, CONT_TOP_Y);
      ctx.lineTo(CONT_BRL, CONT_BOT_Y);
      ctx.lineTo(W, CONT_BOT_Y + 14);
      ctx.closePath();
      ctx.fillStyle = "#16213E";
      ctx.fill();
      ctx.fillStyle = "#16213E";
      ctx.fillRect(0, CONT_BOT_Y, W, H - CONT_BOT_Y);
      ctx.beginPath();
      ctx.moveTo(CONT_TLL, CONT_TOP_Y);
      ctx.lineTo(CONT_TRL, CONT_TOP_Y);
      ctx.lineTo(CONT_BRL, CONT_BOT_Y);
      ctx.lineTo(CONT_BLL, CONT_BOT_Y);
      ctx.closePath();
      ctx.fillStyle = "#0D1B2A";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(CONT_TLL, CONT_TOP_Y);
      ctx.lineTo(CONT_BLL, CONT_BOT_Y);
      ctx.moveTo(CONT_TRL, CONT_TOP_Y);
      ctx.lineTo(CONT_BRL, CONT_BOT_Y);
      ctx.moveTo(CONT_BLL, CONT_BOT_Y);
      ctx.lineTo(CONT_BRL, CONT_BOT_Y);
      ctx.strokeStyle = "#B4FF0055";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(CONT_TLL, DANGER_Y);
      ctx.lineTo(CONT_TRL, DANGER_Y);
      ctx.strokeStyle = "#FF4444";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.font = "bold 8px 'Nunito',sans-serif";
      ctx.fillStyle = "#FF5555";
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillText("\u26A0 Nguy hi\u1EC3m", CONT_TRL - 4, DANGER_Y - 2);
      const petData = state.petData;
      for (const b of ballsRef.current) drawBall(ctx, b, petData);
      if (!gameOverRef.current) {
        const nt = WATER_TIERS[nextTierRef.current];
        const px = (CONT_TLL + CONT_TRL) / 2;
        const py = CONT_TOP_Y - nt.r - 10;
        const aF = canDropRef.current ? 0.8 + Math.sin(T * 0.07) * 0.08 : 0.28;
        ctx.save();
        ctx.setLineDash([4, 6]);
        ctx.strokeStyle = "rgba(255,255,255,0.22)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, py + nt.r);
        ctx.lineTo(px, DANGER_Y + 10);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
        drawBall(ctx, { x: px, y: py, r: nt.r, tier: nextTierRef.current, flash: 0, wobble: 0, wobbleV: 0, ripple: 0, contacts: [], vx: 0, vy: 0, petX: 0, petY: 0, petVX: 0, petVY: 0, anger: 0, petAngle: 0, petAngleV: 0, petIdleT: 0 }, petData, aF);
        if (canDropRef.current) {
          ctx.fillStyle = "rgba(255,255,255,0.30)";
          ctx.font = "bold 9px 'Nunito',sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillText("ch\u1EA1m \u0111\u1EC3 th\u1EA3", px, py + nt.r + 4);
        }
      }
      if (!gameOverRef.current) {
        step();
        rafRef.current = requestAnimationFrame(render);
      }
    }, [step, state.petData]);
    (0, import_react.useEffect)(() => {
      nextTierRef.current = randNextTier();
      setNextTier(nextTierRef.current);
      queueRef.current = Array.from({ length: 5 }, () => randNextTier());
      rafRef.current = requestAnimationFrame(render);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (dropTimerRef.current) clearTimeout(dropTimerRef.current);
      };
    }, [render]);
    const handleTap = (0, import_react.useCallback)((clientX) => {
      if (!canDropRef.current || gameOverRef.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const rawX = (clientX - rect.left) * (W / rect.width);
      dropXRef.current = Math.max(CONT_TLL + 18, Math.min(CONT_TRL - 18, rawX));
      canDropRef.current = false;
      setCanDrop(false);
      addBall(dropXRef.current, nextTierRef.current);
      const nt = queueRef.current.length > 0 ? queueRef.current.shift() : randNextTier();
      queueRef.current.push(randNextTier());
      nextTierRef.current = nt;
      setNextTier(nt);
      dropTimerRef.current = setTimeout(() => {
        canDropRef.current = true;
        setCanDrop(true);
      }, 650);
    }, []);
    const handleFinish = (0, import_react.useCallback)(() => {
      const ef = effectsRef.current;
      dispatch({
        type: "APPLY_GAME_RESULT",
        gameScore: scoreRef.current,
        happinessGain: Math.round(ef.h),
        energyCost: Math.round(ef.e),
        cleanCost: Math.round(ef.cl)
      });
      showToast2(`\u{1F4A7} \u0110i\u1EC3m: ${scoreRef.current} \u2022 +${Math.round(ef.h)}\u2764\uFE0F`);
      onExit();
    }, [dispatch, showToast2, onExit]);
    const nextT = WATER_TIERS[nextTier];
    return /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      background: "#1A1A2E",
      display: "flex",
      flexDirection: "column",
      fontFamily: F.game
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "linear-gradient(135deg,#1A1A2E,#16213E)",
      paddingTop: "max(28px,env(safe-area-inset-top,28px))",
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexShrink: 0,
      boxShadow: "0 4px 20px rgba(0,0,0,0.35)"
    } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          handleFinish();
        },
        style: {
          background: "rgba(255,255,255,0.10)",
          border: "1.5px solid rgba(255,255,255,0.20)",
          borderRadius: 20,
          padding: "6px 14px",
          color: "white",
          fontFamily: F.game,
          fontWeight: 700,
          fontSize: 13,
          cursor: "pointer"
        }
      },
      "\u2190 Tho\xE1t"
    ), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: {
      color: "#00E5FF",
      fontWeight: 900,
      fontSize: 14,
      letterSpacing: 0.5,
      textShadow: "0 0 10px rgba(0,229,255,0.6)"
    } }, "\u{1F4A7} Th\u1EA3 B\xF3ng N\u01B0\u1EDBc"), /* @__PURE__ */ React.createElement("div", { style: { color: "#FFD700", fontWeight: 900, fontSize: 18, marginTop: 2, fontFamily: F.game } }, score.toLocaleString())), /* @__PURE__ */ React.createElement("div", { style: {
      background: `${nextT?.color}18`,
      border: `2px solid ${nextT?.color}55`,
      borderRadius: 14,
      padding: "5px 9px",
      textAlign: "center",
      minWidth: 58
    } }, /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(255,255,255,0.45)", fontSize: 8, fontWeight: 700, letterSpacing: 1.2 } }, "TI\u1EBEP"), /* @__PURE__ */ React.createElement("div", { style: {
      width: 26,
      height: 26,
      borderRadius: "50%",
      background: nextT?.color,
      border: `2px solid ${nextT?.color}99`,
      margin: "3px auto 2px",
      boxShadow: `0 0 10px ${nextT?.color}`
    } }), /* @__PURE__ */ React.createElement("div", { style: { color: nextT?.color, fontSize: 9, fontWeight: 900 } }, nextT?.name))), /* @__PURE__ */ React.createElement("div", { style: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2px 0",
      background: "#1A1A2E",
      overflow: "hidden",
      minHeight: 0
    } }, /* @__PURE__ */ React.createElement(
      "canvas",
      {
        ref: canvasRef,
        width: W,
        height: H,
        style: {
          height: "100%",
          width: "auto",
          maxWidth: "100%",
          maxHeight: H,
          borderRadius: 12,
          border: "2px solid #B4FF0033",
          boxShadow: "4px 4px 0px #0D1B2A",
          touchAction: "none",
          cursor: canDrop ? "crosshair" : "default"
        },
        onMouseDown: (e) => handleTap(e.clientX),
        onTouchEnd: (e) => {
          e.preventDefault();
          if (e.changedTouches[0]) handleTap(e.changedTouches[0].clientX);
        }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: {
      background: "linear-gradient(135deg,#1A1A2E,#16213E)",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "4px 10px max(8px,env(safe-area-inset-bottom,8px))",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      color: "rgba(255,255,255,0.28)",
      fontSize: 8,
      fontWeight: 700,
      letterSpacing: 1.2,
      textAlign: "center",
      marginBottom: 5
    } }, "\u2190 GH\xC9P B\xD3NG \u0110\u1EC2 L\xCAN C\u1EA4P \u2192"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between" } }, WATER_TIERS.map((t, i) => {
      const isNext = i === nextTier;
      const unlocked = i <= nextTier;
      return /* @__PURE__ */ React.createElement("div", { key: i, style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        opacity: unlocked ? 1 : 0.28
      } }, /* @__PURE__ */ React.createElement("div", { style: { height: 8, display: "flex", alignItems: "center", justifyContent: "center" } }, isNext && /* @__PURE__ */ React.createElement("div", { style: {
        width: 0,
        height: 0,
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderTop: `5px solid ${t.color}`,
        filter: `drop-shadow(0 0 4px ${t.color})`
      } })), /* @__PURE__ */ React.createElement("div", { style: {
        width: 8 + i * 2,
        height: 8 + i * 2,
        borderRadius: "50%",
        background: t.color,
        border: `1.5px solid ${t.color}${unlocked ? "cc" : "44"}`,
        flexShrink: 0,
        boxShadow: isNext ? `0 0 8px ${t.color}` : "none"
      } }), /* @__PURE__ */ React.createElement("span", { style: {
        fontSize: 6,
        fontWeight: 900,
        lineHeight: 1,
        color: unlocked ? t.color + "dd" : "rgba(255,255,255,0.20)"
      } }, t.pts, "p"));
    }))), gameOver && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 70
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "linear-gradient(160deg,#1A1A2E,#16213E)",
      borderRadius: 28,
      padding: "30px 36px",
      border: "2px solid rgba(0,229,255,0.22)",
      boxShadow: "0 8px 40px rgba(0,229,255,0.12), 0 2px 0 rgba(255,255,255,0.06) inset",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      minWidth: 260
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 44 } }, "\u{1F4A7}"), /* @__PURE__ */ React.createElement("div", { style: { color: "white", fontWeight: 900, fontSize: 20 } }, "K\u1EBFt th\xFAc!"), /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(255,215,0,0.12)",
      borderRadius: 20,
      padding: "8px 18px 8px 12px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      border: "1.5px solid rgba(255,215,0,0.28)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "radial-gradient(circle at 35% 30%,#FFE566,#E6A800)",
      border: "2px solid #D4A017",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      fontWeight: 900,
      color: "#7A5000"
    } }, "P"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 26, color: "#FFD700" } }, "+", score.toLocaleString())), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, [
      ["\u2764\uFE0F", "#EF5350", `+${Math.round(effectsRef.current.h)}`],
      ["\u26A1", "#FF9800", `\u2212${Math.round(effectsRef.current.e)}`],
      ["\u{1F9FC}", "#29B6F6", `\u2212${Math.round(effectsRef.current.cl)}`]
    ].map(([icon, clr, val]) => /* @__PURE__ */ React.createElement("div", { key: icon, style: {
      background: `${clr}18`,
      borderRadius: 12,
      padding: "5px 10px",
      border: `1px solid ${clr}44`,
      color: clr,
      fontWeight: 700,
      fontSize: 13
    } }, val, icon))), /* @__PURE__ */ React.createElement("button", { onClick: handleFinish, style: {
      background: "linear-gradient(135deg,#00E5FF,#0077AA)",
      border: "none",
      borderRadius: 24,
      padding: "13px 32px",
      color: "white",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 15,
      cursor: "pointer",
      boxShadow: "0 4px 20px rgba(0,229,255,0.45)",
      animation: "pulseBtn 2s infinite",
      marginTop: 4
    } }, "L\u1EA5y th\u01B0\u1EDFng \u{1F381}"))));
  }
  function GameScreen({ state, dispatch, onNavigate }) {
    const [activeTab, setActiveTab] = (0, import_react.useState)("pet");
    const [showGame, setShowGame] = (0, import_react.useState)(false);
    const [showSurgery, setShowSurgery] = (0, import_react.useState)(false);
    const [showWaterGame, setShowWaterGame] = (0, import_react.useState)(false);
    const [toast, setToast] = (0, import_react.useState)(null);
    const showToast2 = (0, import_react.useCallback)((msg) => {
      setToast(msg);
      setTimeout(() => setToast(null), 2e3);
    }, []);
    const { petData, level, xp, hunger, happiness, clean, energy, points } = state;
    const xpMax = level * 100;
    return /* @__PURE__ */ React.createElement("div", { style: {
      height: "100dvh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      background: "#F5F5F5"
    } }, /* @__PURE__ */ React.createElement("link", { rel: "stylesheet", href: FONT_LINK }), /* @__PURE__ */ React.createElement("style", null, KEYFRAMES), /* @__PURE__ */ React.createElement("style", null, `
        html,body{height:100%;height:100dvh;margin:0;padding:0;overflow:hidden;background:#1A1A2E;}
        @supports not (height:100dvh){html,body{height:100vh;}}
      `), /* @__PURE__ */ React.createElement("div", { style: {
      background: "linear-gradient(135deg,#1A1A2E,#16213E)",
      paddingTop: "env(safe-area-inset-top, 36px)",
      padding: "max(36px, env(safe-area-inset-top, 36px)) 12px 10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexShrink: 0,
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(255,215,0,0.15)",
      borderRadius: 20,
      padding: "6px 12px 6px 8px",
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "1.5px solid rgba(255,215,0,0.35)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "radial-gradient(circle at 35% 30%,#FFE566,#E6A800)",
      border: "2px solid #D4A017",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      fontWeight: 900,
      color: "#7A5000",
      fontFamily: F.game
    } }, "P"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 14, color: "#FFD700" } }, points.toLocaleString())), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5 } }, /* @__PURE__ */ React.createElement(StatBtn, { icon: "\u{1F34E}", value: hunger, max: 100, color: "#4CAF50" }), /* @__PURE__ */ React.createElement(StatBtn, { icon: "\u2764\uFE0F", value: happiness, max: 100, color: "#E53935" }), /* @__PURE__ */ React.createElement(StatBtn, { icon: "\u{1F9FC}", value: clean, max: 100, color: "#039BE5" }), /* @__PURE__ */ React.createElement(StatBtn, { icon: "\u26A1", value: energy, max: 100, color: "#F9A825" })), /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(255,255,255,0.12)",
      borderRadius: 20,
      padding: "6px 12px 6px 8px",
      display: "flex",
      alignItems: "center",
      gap: 5,
      border: "1.5px solid rgba(255,255,255,0.2)"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 22 } }, "\u{1F95A}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: F.game, fontWeight: 900, fontSize: 13, color: "white" } }, "Lv.", level), /* @__PURE__ */ React.createElement("div", { style: { width: 36, background: "rgba(255,255,255,0.2)", borderRadius: 99, height: 3 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${xp / xpMax * 100}%`, height: 3, borderRadius: 99, background: "#B4FF00", transition: "width 0.3s" } }))))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { display: activeTab === "pet" ? "flex" : "none", flexDirection: "column", flex: 1, overflow: "hidden", position: "relative" } }, /* @__PURE__ */ React.createElement(
      HomeTab,
      {
        state,
        dispatch,
        showToast: showToast2,
        onStartGame: () => setShowGame(true),
        onStartWaterGame: () => setShowWaterGame(true),
        onStartSurgery: () => setShowSurgery(true)
      }
    ), showGame && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, zIndex: 50, display: "flex", flexDirection: "column", background: "#1A1A2E" } }, /* @__PURE__ */ React.createElement(MiniGameTab, { state, dispatch, showToast: showToast2, onExit: () => {
      setShowGame(false);
    } })), showSurgery && /* @__PURE__ */ React.createElement(
      SurgeryPanel,
      {
        currentPetData: state.petData,
        onSave: (newPetData) => {
          dispatch({ type: "SET_PET", petData: newPetData });
          setShowSurgery(false);
          showToast2("\u{1F52C} Ph\u1EABu thu\u1EADt th\xE0nh c\xF4ng! Pet m\u1EDBi toanh \u2728");
        },
        onCancel: () => setShowSurgery(false)
      }
    ), showWaterGame && /* @__PURE__ */ React.createElement(
      WaterBallGame,
      {
        state,
        dispatch,
        showToast: showToast2,
        onExit: () => setShowWaterGame(false)
      }
    )), activeTab === "loot" && /* @__PURE__ */ React.createElement("div", { style: { flex: 1, background: "#F2F4F8", overflowY: "auto", WebkitOverflowScrolling: "touch", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 16px 10px", background: "white", borderBottom: "1.5px solid #F0F0F0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Press Start 2P', monospace", fontWeight: 900, fontSize: 17, color: "#1A1A1A" } }, "\u{1F381} Loot & Qu\xE0"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "#999", marginTop: 4 } }, "Ho\xE0n th\xE0nh nhi\u1EC7m v\u1EE5 \xB7 Nh\u1EADn h\u1ED9p qu\xE0")), /* @__PURE__ */ React.createElement(LootTab, { state, dispatch, showToast: showToast2 })), activeTab === "rank" && /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 16px 10px", background: "white", borderBottom: "1.5px solid #F0F0F0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Press Start 2P', monospace", fontWeight: 900, fontSize: 17, color: "#1A1A1A" } }, "\u{1F3C6} B\u1EA3ng X\u1EBFp H\u1EA1ng"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "#999", marginTop: 4 } }, "Top ng\u01B0\u1EDDi ch\u01A1i tu\u1EA7n n\xE0y")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(RankScreen, { state }))), activeTab === "bag" && /* @__PURE__ */ React.createElement(InventoryPanel, { asTab: true, state, onClose: () => setActiveTab("pet") })), /* @__PURE__ */ React.createElement("div", { style: {
      background: "white",
      paddingTop: 6,
      paddingBottom: "max(8px, env(safe-area-inset-bottom, 8px))",
      borderTop: "1.5px solid #EEEEEE",
      flexShrink: 0,
      boxShadow: "0 -4px 20px rgba(0,0,0,0.07)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      paddingLeft: 4,
      paddingRight: 4
    } }, /* @__PURE__ */ React.createElement(TabBtn, { icon: "\u{1F423}", label: "Pet", active: activeTab === "pet", onClick: () => {
      setActiveTab("pet");
      setShowGame(false);
      setShowWaterGame(false);
    } }), /* @__PURE__ */ React.createElement(TabBtn, { icon: "\u{1F381}", label: "Loot", active: activeTab === "loot", onClick: () => setActiveTab("loot"), badge: state.giftBoxes > 0 ? state.giftBoxes : null }), /* @__PURE__ */ React.createElement(TabBtn, { icon: "\u{1F3C6}", label: "Rank", active: activeTab === "rank", onClick: () => setActiveTab("rank") }), /* @__PURE__ */ React.createElement(TabBtn, { icon: "\u{1F392}", label: "Kho \u0110\u1ED3", active: activeTab === "bag", onClick: () => setActiveTab("bag"), badge: (state.inventory || []).length || null })), toast && /* @__PURE__ */ React.createElement("div", { style: {
      position: "fixed",
      top: 90,
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.82)",
      borderRadius: 22,
      padding: "11px 22px",
      fontFamily: F.game,
      fontWeight: 900,
      fontSize: 13,
      color: "white",
      whiteSpace: "nowrap",
      zIndex: 999,
      animation: "toastIn 0.3s ease-out",
      pointerEvents: "none",
      boxShadow: "0 6px 24px rgba(0,0,0,0.25)"
    } }, toast));
  }
  var initState = {
    level: 1,
    xp: 0,
    happiness: 70,
    hunger: 80,
    clean: 75,
    energy: 60,
    points: 340,
    streak: 3,
    giftBoxes: 2,
    openedPrizes: [],
    // Sleep system
    isSleeping: false,
    sleepUntil: null,
    // timestamp (ms) when pet wakes up
    SLEEP_SECS: 30,
    // demo: 30s; real game can bump to 120s+
    // Inventory — food/clean items from Shop live here
    inventory: [],
    doneMissions: []
  };
  function reducer(s, action) {
    switch (action.type) {
      case "APPLY_EFFECTS": {
        const e = action.payload;
        const newXp = e.xp !== void 0 ? e.xp : s.xp;
        const thresh = s.level * 100;
        const lvlUp = newXp >= thresh;
        return {
          ...s,
          hunger: e.hunger !== void 0 ? e.hunger : s.hunger,
          happiness: e.happiness !== void 0 ? e.happiness : s.happiness,
          clean: e.clean !== void 0 ? e.clean : s.clean,
          energy: e.energy !== void 0 ? e.energy : s.energy,
          points: e.points !== void 0 ? e.points : s.points,
          xp: lvlUp ? newXp - thresh : newXp,
          level: lvlUp ? s.level + 1 : s.level
        };
      }
      // ── Sleep system ─────────────────────────────────────────────────────────
      case "START_SLEEP":
        return { ...s, isSleeping: true, sleepUntil: Date.now() + (action.duration || 3e4) };
      case "WAKE_UP": {
        const newXp = s.xp + 15, thresh = s.level * 100;
        return {
          ...s,
          isSleeping: false,
          sleepUntil: null,
          energy: clamp(s.energy + 45, 0, 100),
          happiness: clamp(s.happiness + 8, 0, 100),
          hunger: clamp(s.hunger - 8, 0, 100),
          xp: newXp >= thresh ? newXp - thresh : newXp,
          level: newXp >= thresh ? s.level + 1 : s.level
        };
      }
      // ── Dirt system ───────────────────────────────────────────────────────────
      case "DECREASE_CLEAN":
        return { ...s, clean: Math.max(0, s.clean - (action.amount || 1)) };
      // ── Eat from inventory ────────────────────────────────────────────────────
      case "USE_FOOD": {
        const foods = (s.inventory || []).filter((i) => i && typeof i === "object" && i.category === "food");
        if (foods.length === 0) return s;
        const pick = foods[Math.floor(Math.random() * foods.length)];
        const inv = [...s.inventory];
        inv.splice(inv.findIndex((i) => i && i.id === pick.id && i.category === "food"), 1);
        const eff = pick.effect || {};
        const newXp = s.xp + 8, thresh = s.level * 100;
        return {
          ...s,
          inventory: inv,
          hunger: clamp(s.hunger + (eff.hunger || 20), 0, 100),
          happiness: clamp(s.happiness + (eff.happiness || 5), 0, 100),
          xp: newXp >= thresh ? newXp - thresh : newXp,
          level: newXp >= thresh ? s.level + 1 : s.level,
          _lastFood: pick
        };
      }
      // ── Bath from inventory ───────────────────────────────────────────────────
      case "USE_CLEAN": {
        const cleans = (s.inventory || []).filter((i) => i && typeof i === "object" && i.category === "clean");
        if (cleans.length === 0) {
          return { ...s, clean: clamp(s.clean + 20, 0, 100), happiness: clamp(s.happiness + 5, 0, 100), xp: s.xp + 4 };
        }
        const pick = cleans[Math.floor(Math.random() * cleans.length)];
        const inv = [...s.inventory];
        inv.splice(inv.findIndex((i) => i && i.id === pick.id && i.category === "clean"), 1);
        const eff = pick.effect || {};
        const newXp = s.xp + 6, thresh = s.level * 100;
        return {
          ...s,
          inventory: inv,
          clean: clamp(s.clean + (eff.clean || 30), 0, 100),
          happiness: clamp(s.happiness + 10, 0, 100),
          xp: newXp >= thresh ? newXp - thresh : newXp,
          level: newXp >= thresh ? s.level + 1 : s.level,
          _lastClean: pick
        };
      }
      case "PLAY":
        return { ...s, happiness: clamp(s.happiness + 15, 0, 100), energy: clamp(s.energy - 8, 0, 100), points: s.points + 10, xp: s.xp + 8 };
      // ── Shop: food/clean → inventory; others → instant effect ────────────────
      case "BUY_ITEM": {
        const isConsumable = action.category === "food" || action.category === "clean";
        if (isConsumable) {
          return {
            ...s,
            points: s.points - (action.cost || 0),
            inventory: [...s.inventory, {
              id: action.id,
              icon: action.icon || "\u{1F4E6}",
              name: action.name || "Item",
              category: action.category,
              type: "pet_item",
              effect: action.effect || {},
              rarity: "common",
              color: "#81C784",
              label: "Th\u01B0\u1EDDng"
            }]
          };
        }
        const e = action.effect || {};
        const newXp = s.xp + (e.xp || 0), thresh = s.level * 100;
        return {
          ...s,
          points: s.points - (action.cost || 0),
          hunger: e.hunger ? clamp(s.hunger + e.hunger, 0, 100) : s.hunger,
          happiness: e.happiness ? clamp(s.happiness + e.happiness, 0, 100) : s.happiness,
          clean: e.clean ? clamp(s.clean + e.clean, 0, 100) : s.clean,
          energy: e.energy ? clamp(s.energy + e.energy, 0, 100) : s.energy,
          xp: newXp >= thresh ? newXp - thresh : newXp,
          level: newXp >= thresh ? s.level + 1 : s.level
        };
      }
      case "ADD_GIFT_BOXES":
        return { ...s, giftBoxes: s.giftBoxes + (action.amount || 0) };
      case "OPEN_GIFT_BOX": {
        if (s.giftBoxes <= 0) return s;
        const prize = rollGiftBox(s.level);
        const newXp = s.xp + (prize.xp || 0), thresh = s.level * 100;
        const isVoucher = prize.type === "voucher" || prize.type === "physical";
        return {
          ...s,
          giftBoxes: s.giftBoxes - 1,
          points: s.points + (prize.pts || 0),
          xp: newXp >= thresh ? newXp - thresh : newXp,
          level: newXp >= thresh ? s.level + 1 : s.level,
          openedPrizes: isVoucher ? [...s.openedPrizes, prize] : s.openedPrizes,
          inventory: !isVoucher && prize.type === "pet_item" ? [...s.inventory, prize] : s.inventory,
          _lastPrize: prize
        };
      }
      case "ADD_POINTS":
        return { ...s, points: s.points + (action.amount || 0) };
      case "ADD_XP": {
        const newXp = s.xp + (action.amount || 0), thresh = s.level * 100;
        return { ...s, xp: newXp >= thresh ? newXp - thresh : newXp, level: newXp >= thresh ? s.level + 1 : s.level };
      }
      case "COMPLETE_MISSION": {
        if (s.doneMissions.includes(action.id)) return s;
        const newXp = s.xp + (action.xp || 0), thresh = s.level * 100;
        return {
          ...s,
          doneMissions: [...s.doneMissions, action.id],
          points: s.points + (action.pts || 0),
          giftBoxes: s.giftBoxes + (action.boxes || 0),
          xp: newXp >= thresh ? newXp - thresh : newXp,
          level: newXp >= thresh ? s.level + 1 : s.level
        };
      }
      case "APPLY_GAME_RESULT": {
        const newE = clamp(s.energy - (action.energyCost || 0), 0, 100);
        const newCl = clamp(s.clean - (action.cleanCost || 0), 0, 100);
        const newH = clamp(s.happiness + (action.happinessGain || 0), 0, 100);
        const newPts = s.points + (action.gameScore || 0);
        const gainXp = Math.floor((action.gameScore || 0) / 8);
        const newXp = s.xp + gainXp, thresh = s.level * 100;
        return {
          ...s,
          energy: newE,
          clean: newCl,
          happiness: newH,
          points: newPts,
          xp: newXp >= thresh ? newXp - thresh : newXp,
          level: newXp >= thresh ? s.level + 1 : s.level
        };
      }
      case "SET_PET":
        return { ...s, petData: action.petData };
      case "SET_MOOD":
        return { ...s, happiness: clamp(s.happiness + (action.delta || 0), 0, 100) };
      default:
        return s;
    }
  }
  function App() {
    const [screen, setScreen] = (0, import_react.useState)("login");
    const [username, setUsername] = (0, import_react.useState)("");
    const [state, dispatch] = (0, import_react.useReducer)(reducer, initState);
    const navigate = (0, import_react.useCallback)((dest) => {
      if (dest === "login") setScreen("login");
      else if (dest === "create") setScreen("create");
      else setScreen("main");
    }, []);
    const handleLogin = (0, import_react.useCallback)((uname) => {
      setUsername(uname);
      setScreen("create");
    }, []);
    const handlePetCreated = (0, import_react.useCallback)((petData) => {
      dispatch({ type: "SET_PET", petData });
      setScreen("main");
    }, []);
    return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 420, margin: "0 auto", height: "100dvh", overflow: "hidden", position: "relative", background: "#000" } }, /* @__PURE__ */ React.createElement("style", null, `
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;user-select:none;}
        html,body{margin:0;padding:0;height:100%;height:100dvh;overflow:hidden;background:#1A1A2E;}
        @supports not (height:100dvh){html,body{height:100vh;}}
      `), screen === "login" && /* @__PURE__ */ React.createElement(LoginScreen, { onLogin: handleLogin }), screen === "create" && /* @__PURE__ */ React.createElement(PetCreatorScreen, { onComplete: handlePetCreated }), screen === "main" && /* @__PURE__ */ React.createElement(GameScreen, { state, dispatch, onNavigate: navigate }));
  }

  // lootzy-entry.jsx
  var loadingEl = document.getElementById("loading");
  if (loadingEl) loadingEl.style.display = "none";
  import_client.default.createRoot(document.getElementById("root")).render(
    import_react2.default.createElement(App)
  );
})();
