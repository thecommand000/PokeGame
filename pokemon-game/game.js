// ===================== DATA =====================
const POKEMON_DATA = {
  1:  { name:"Bulbasaur",  type:"Planta",   emoji:"🌿", baseHP:45, baseAtk:49, baseDef:49, baseSpd:45, moves:[0,1,4,5] },
  4:  { name:"Charmander", type:"Fuego",    emoji:"🔥", baseHP:39, baseAtk:52, baseDef:43, baseSpd:65, moves:[0,2,6,7] },
  7:  { name:"Squirtle",   type:"Agua",     emoji:"💧", baseHP:44, baseAtk:48, baseDef:65, baseSpd:43, moves:[0,3,8,9] },
  25: { name:"Pikachu",    type:"Eléctrico",emoji:"⚡", baseHP:35, baseAtk:55, baseDef:40, baseSpd:90, moves:[0,10,11,12] },
  52: { name:"Meowth",     type:"Normal",   emoji:"🐱", baseHP:40, baseAtk:45, baseDef:35, baseSpd:90, moves:[0,13,14,15] },
  54: { name:"Psyduck",    type:"Agua",     emoji:"🦆", baseHP:50, baseAtk:52, baseDef:48, baseSpd:55, moves:[0,3,16,17] },
  63: { name:"Abra",       type:"Psíquico", emoji:"🔮", baseHP:25, baseAtk:20, baseDef:15, baseSpd:90, moves:[0,18,19,20] },
  74: { name:"Geodude",    type:"Roca",     emoji:"🪨", baseHP:40, baseAtk:80, baseDef:100,baseSpd:20, moves:[0,21,22,23] },
  92: { name:"Gastly",     type:"Fantasma", emoji:"👻", baseHP:30, baseAtk:35, baseDef:30, baseSpd:80, moves:[0,24,25,26] },
  129:{ name:"Magikarp",   type:"Agua",     emoji:"🐟", baseHP:20, baseAtk:10, baseDef:55, baseSpd:80, moves:[27] },
  133:{ name:"Eevee",      type:"Normal",   emoji:"🦊", baseHP:55, baseAtk:55, baseDef:50, baseSpd:55, moves:[0,13,28,29] },
  143:{ name:"Snorlax",    type:"Normal",   emoji:"😴", baseHP:160,baseAtk:110,baseDef:65, baseSpd:30, moves:[0,13,30,31] },
};

const MOVES_DATA = [
  { name:"Placaje",      type:"Normal",   power:40, pp:35, acc:100, cat:"físico",   effect:null },
  { name:"Látigo Cepa",  type:"Planta",   power:45, pp:25, acc:100, cat:"especial", effect:null },
  { name:"Ascuas",       type:"Fuego",    power:40, pp:25, acc:100, cat:"especial", effect:"burn10" },
  { name:"Pistola Agua", type:"Agua",     power:40, pp:25, acc:100, cat:"especial", effect:null },
  { name:"Hoja Afilada", type:"Planta",   power:55, pp:25, acc:95,  cat:"físico",   effect:null },
  { name:"Polvo Veneno", type:"Veneno",   power:0,  pp:35, acc:75,  cat:"estado",   effect:"poison" },
  { name:"Llamarada",    type:"Fuego",    power:90, pp:5,  acc:85,  cat:"especial", effect:"burn10" },
  { name:"Garra Dragón", type:"Dragón",   power:80, pp:15, acc:100, cat:"físico",   effect:null },
  { name:"Burbuja",      type:"Agua",     power:40, pp:30, acc:100, cat:"especial", effect:"spd-10" },
  { name:"Surf",         type:"Agua",     power:90, pp:15, acc:100, cat:"especial", effect:null },
  { name:"Impactrueno",  type:"Eléctrico",power:40, pp:30, acc:100, cat:"especial", effect:"par10" },
  { name:"Rayo",         type:"Eléctrico",power:90, pp:15, acc:100, cat:"especial", effect:"par10" },
  { name:"Trueno",       type:"Eléctrico",power:110,pp:10, acc:70,  cat:"especial", effect:"par30" },
  { name:"Arañazo",      type:"Normal",   power:40, pp:35, acc:100, cat:"físico",   effect:null },
  { name:"Mordisco",     type:"Siniestro",power:60, pp:25, acc:100, cat:"físico",   effect:"flinch30" },
  { name:"Golpe Bajo",   type:"Siniestro",power:0,  pp:20, acc:100, cat:"físico",   effect:"atk-1" },
  { name:"Confusión",    type:"Psíquico", power:50, pp:25, acc:100, cat:"especial", effect:"conf10" },
  { name:"Amnesia",      type:"Psíquico", power:0,  pp:20, acc:100, cat:"estado",   effect:"spatk+2" },
  { name:"Teletransporte",type:"Psíquico",power:0,  pp:20, acc:100, cat:"estado",   effect:"escape" },
  { name:"Psíquico",     type:"Psíquico", power:90, pp:10, acc:100, cat:"especial", effect:"spdef-10" },
  { name:"Premonición",  type:"Psíquico", power:120,pp:5,  acc:100, cat:"especial", effect:null },
  { name:"Avalancha",    type:"Roca",     power:75, pp:10, acc:90,  cat:"físico",   effect:null },
  { name:"Lanzarrocas",  type:"Roca",     power:50, pp:15, acc:90,  cat:"físico",   effect:null },
  { name:"Terremoto",    type:"Tierra",   power:100,pp:10, acc:100, cat:"físico",   effect:null },
  { name:"Maldición",    type:"Fantasma", power:0,  pp:10, acc:100, cat:"estado",   effect:"curse" },
  { name:"Bola Sombra",  type:"Fantasma", power:80, pp:15, acc:100, cat:"especial", effect:"spdef-20" },
  { name:"Lick",         type:"Fantasma", power:30, pp:30, acc:100, cat:"físico",   effect:"par30" },
  { name:"Salpicadura",  type:"Agua",     power:0,  pp:40, acc:100, cat:"estado",   effect:null },
  { name:"Ataque Rápido",type:"Normal",   power:40, pp:30, acc:100, cat:"físico",   effect:"priority" },
  { name:"Última Baza",  type:"Normal",   power:0,  pp:5,  acc:100, cat:"estado",   effect:"lastresort" },
  { name:"Cuerpo Gordo", type:"Normal",   power:85, pp:10, acc:100, cat:"físico",   effect:null },
  { name:"Descanso",     type:"Psíquico", power:0,  pp:10, acc:100, cat:"estado",   effect:"rest" },
];

const TYPE_CHART = {
  "Fuego":    { "Planta":2, "Hielo":2, "Acero":2, "Agua":0.5, "Roca":0.5, "Fuego":0.5 },
  "Agua":     { "Fuego":2, "Roca":2, "Tierra":2, "Planta":0.5, "Agua":0.5, "Dragón":0.5 },
  "Planta":   { "Agua":2, "Roca":2, "Tierra":2, "Fuego":0.5, "Planta":0.5, "Veneno":0.5, "Volador":0.5, "Bicho":0.5, "Dragón":0.5 },
  "Eléctrico":{ "Agua":2, "Volador":2, "Planta":0.5, "Eléctrico":0.5, "Dragón":0.5, "Tierra":0 },
  "Psíquico": { "Lucha":2, "Veneno":2, "Psíquico":0.5, "Siniestro":0, "Acero":0.5 },
  "Roca":     { "Fuego":2, "Hielo":2, "Volador":2, "Bicho":2, "Lucha":0.5, "Tierra":0.5, "Acero":0.5 },
  "Tierra":   { "Fuego":2, "Eléctrico":2, "Veneno":2, "Roca":2, "Acero":2, "Planta":0.5, "Bicho":0.5, "Volador":0 },
  "Fantasma": { "Fantasma":2, "Psíquico":2, "Normal":0, "Siniestro":0.5 },
  "Siniestro":{ "Psíquico":2, "Fantasma":2, "Siniestro":0.5, "Lucha":0.5, "Hada":0.5 },
  "Normal":   { "Roca":0.5, "Acero":0.5, "Fantasma":0 },
  "Dragón":   { "Dragón":2, "Acero":0.5, "Hada":0 },
  "Veneno":   { "Planta":2, "Hada":2, "Veneno":0.5, "Tierra":0.5, "Roca":0.5, "Fantasma":0.5, "Acero":0 },
};

const ITEMS = {
  "Poción":       { type:"heal", amount:20, price:300 },
  "Super Poción":  { type:"heal", amount:50, price:700 },
  "Hiper Poción":  { type:"heal", amount:200, price:1200 },
  "Antídoto":      { type:"cure", status:"poison", price:100 },
  "Despertar":     { type:"cure", status:"sleep", price:250 },
  "Cura Total":    { type:"cureall", price:600 },
  "Revivir":       { type:"revive", amount:0.5, price:1500 },
  "Agua Fresca":   { type:"heal", amount:50, price:200 },
  "Limonada":      { type:"heal", amount:80, price:350 },
  "Leche Moomoo":  { type:"heal", amount:100, price:500 },
  "Éter":          { type:"pp", amount:10, price:1200 },
  "Éter Máximo":   { type:"ppall", price:2000 },
  "Elixir":        { type:"ppall", price:3000 },
  "Piedra Fuego":  { type:"evostone", evo:"fire", price:2100 },
  "Piedra Agua":   { type:"evostone", evo:"water", price:2100 },
  "Piedra Trueno": { type:"evostone", evo:"thunder", price:2100 },
  "Piedra Hoja":   { type:"evostone", evo:"leaf", price:2100 },
};

const POKEBALLS = {
  "Poké Ball":   { catch:1,   price:200 },
  "Super Ball":  { catch:1.5, price:600 },
  "Ultra Ball":  { catch:2,   price:1200 },
  "Master Ball": { catch:255, price:0 },
  "Safari Ball": { catch:1.5, price:0 },
  "Net Ball":    { catch:3,   price:1000 },
  "Dive Ball":   { catch:3.5, price:1000 },
  "Repeat Ball": { catch:3,   price:1000 },
  "Timer Ball":  { catch:1,   price:1000 },
  "Luxury Ball": { catch:1,   price:1000 },
};

const TMS = [
  { id:"MT01", name:"Foco Energía", move:0 },
  { id:"MT06", name:"Tóxico",       move:5 },
  { id:"MT10", name:"Puño Oculto",  move:0 },
  { id:"MT13", name:"Rayo Hielo",   move:0 },
  { id:"MT17", name:"Protección",   move:0 },
  { id:"MT26", name:"Terremoto",    move:23 },
  { id:"MT28", name:"Excavar",      move:23 },
  { id:"MT45", name:"Atracción",    move:0 },
  { id:"MT50", name:"Sustituto",    move:0 },
  { id:"MO03", name:"Surf",         move:9 },
  { id:"MO04", name:"Fuerza",       move:0 },
];

// ===================== MAP =====================
// Tile types: 0=grass, 1=wall, 2=tall-grass, 3=water, 4=path, 5=door, 6=tree
const TILE_SIZE = 32;
const MAP_COLS = 500 / TILE_SIZE; // ~15
const MAP_ROWS = 500 / TILE_SIZE;

const MAPS = {
  "Pueblo Paleta": {
    wild: [1,4,7,25,52],
    rows: 15, cols: 15,
    tiles: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,5,4,4,4,4,4,4,4,4,4,5,4,1],
      [1,4,4,4,2,2,2,4,4,4,4,4,4,4,1],
      [1,4,4,4,2,2,2,4,4,4,4,4,4,4,1],
      [1,4,4,4,2,2,2,4,3,3,3,4,4,4,1],
      [1,4,4,4,4,4,4,4,3,3,3,4,4,4,1],
      [1,4,4,4,4,4,4,4,3,3,3,4,4,4,1],
      [1,4,4,6,6,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,6,6,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,2,2,2,4,4,4,4,4,1],
      [1,4,4,4,4,4,2,2,2,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    npcs: [
      { x:6, y:2, emoji:"👴", dialog:["¡Bienvenido a Pueblo Paleta!","El mundo Pokémon te espera.","Elige bien a tu compañero."] },
      { x:10, y:4, emoji:"👩", dialog:["He oído que el Prof. Oak","está buscando ayudantes.","¡Quizás tú seas el elegido!"] },
      { x:3, y:7, emoji:"🧒", dialog:["¡Quiero ser el mejor","entrenador Pokémon del mundo!","¡Algún día te venceré!"] },
    ],
    exits: [
      { x:2, y:2, to:"Casa Inicial", toX:3, toY:5 },
      { x:12, y:2, to:"Laboratorio Oak", toX:3, toY:5 },
    ]
  },
  "Ruta 1": {
    wild: [16,19,21,23,25,52,54],
    rows: 15, cols: 15,
    tiles: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,2,2,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,2,2,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,2,2,2,4,4,4,4,4,4,1],
      [1,4,4,4,4,2,2,2,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,2,2,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,2,2,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,2,2,2,4,4,4,4,4,4,4,4,1],
      [1,4,4,2,2,2,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    npcs: [
      { x:7, y:6, emoji:"🧑", dialog:["¡Alto ahí, entrenador!","¡Batalla Pokémon!"], trainer:true, party:[{id:52,level:5},{id:25,level:4}], reward:200 },
      { x:11, y:10, emoji:"👧", dialog:["¡Mis Pokémon son los más lindos!","¡Pero también los más fuertes!"], trainer:true, party:[{id:133,level:6}], reward:300 },
    ],
    exits: [
      { x:7, y:13, to:"Pueblo Paleta", toX:7, toY:2 },
      { x:7, y:1, to:"Ciudad Plateada", toX:7, toY:13 },
    ]
  },
  "Ciudad Plateada": {
    wild: [63,74,92,129,133],
    rows: 15, cols: 15,
    tiles: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,5,4,4,4,4,4,4,4,4,4,5,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,3,3,3,3,4,4,4,4,4,4,1],
      [1,4,4,4,3,3,3,3,4,4,4,4,4,4,1],
      [1,4,4,4,3,3,3,3,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    npcs: [
      { x:6, y:3, emoji:"🏪", dialog:["¡Bienvenido a la Tienda!","Tenemos todo lo que necesitas."], shop:true },
      { x:9, y:8, emoji:"🧙", dialog:["¡Batalla conmigo si te atreves!"], trainer:true, party:[{id:63,level:10},{id:92,level:8}], reward:500 },
    ],
    exits: [
      { x:7, y:13, to:"Ruta 1", toX:7, toY:2 },
      { x:2, y:2, to:"Centro Pokémon", toX:3, toY:5 },
      { x:12, y:2, to:"Gimnasio", toX:3, toY:5 },
    ]
  }
};

const SHOP_ITEMS = [
  { name:"Poción", price:300 },
  { name:"Super Poción", price:700 },
  { name:"Antídoto", price:100 },
  { name:"Poké Ball", price:200 },
  { name:"Super Ball", price:600 },
  { name:"Ultra Ball", price:1200 },
  { name:"Despertar", price:250 },
  { name:"Cura Total", price:600 },
];

const TILE_COLORS = {
  0: "#7ec850", // grass
  1: "#555",    // wall
  2: "#4a9e30", // tall grass
  3: "#4488cc", // water
  4: "#c8a870", // path
  5: "#e8c870", // door
  6: "#228822", // tree
};

const TILE_EMOJIS = {
  1: "🧱",
  2: "🌿",
  3: "🌊",
  5: "🚪",
  6: "🌲",
};

// ===================== GAME STATE =====================
const state = {
  player: {
    x: 7, y: 7,
    emoji: "🧑",
    name: "Ash",
    money: 3000,
    badges: [],
    steps: 0,
    party: [],
    bag: {
      items: { "Poción": 3, "Antídoto": 2, "Agua Fresca": 1 },
      balls: { "Poké Ball": 5, "Super Ball": 2 },
      tms: { "MT26": 1, "MO03": 1 },
    },
    pokedex: {}, // id: "seen" | "caught"
  },
  currentMap: "Pueblo Paleta",
  mode: "world", // world | battle | menu | dialog | bag | party | pokedex | shop
  battle: null,
  dialog: { lines: [], idx: 0, cb: null },
  npcInteracting: null,
  shopOpen: false,
  wildEncounterRate: 0.15,
};

// Give starter
function giveStarter(id) {
  const data = POKEMON_DATA[id];
  const poke = createPokemon(id, 5);
  state.player.party.push(poke);
  state.player.pokedex[id] = "caught";
  showDialog([`¡${data.name} se unió a tu equipo!`]);
}

function createPokemon(id, level) {
  const data = POKEMON_DATA[id];
  const hp = Math.floor(((data.baseHP * 2 * level) / 100) + level + 10);
  const atk = Math.floor(((data.baseAtk * 2 * level) / 100) + 5);
  const def = Math.floor(((data.baseDef * 2 * level) / 100) + 5);
  const spd = Math.floor(((data.baseSpd * 2 * level) / 100) + 5);
  const exp = Math.floor(Math.pow(level, 3));
  const expNext = Math.floor(Math.pow(level + 1, 3));
  return {
    id, level, name: data.name, type: data.type, emoji: data.emoji,
    maxHP: hp, currentHP: hp, atk, def, spd,
    moves: data.moves.slice(0, 4).map(mi => ({ ...MOVES_DATA[mi], currentPP: MOVES_DATA[mi].pp })),
    status: null, // null | "poison" | "burn" | "sleep" | "paralysis" | "freeze"
    statusTurns: 0,
    exp, expNext,
    friendship: 70,
    isShiny: Math.random() < 0.00390625,
  };
}

// ===================== CANVAS RENDERING =====================
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function drawMap() {
  const map = MAPS[state.currentMap];
  ctx.clearRect(0, 0, 500, 500);
  for (let r = 0; r < map.rows; r++) {
    for (let c = 0; c < map.cols; c++) {
      const tile = map.tiles[r][c];
      ctx.fillStyle = TILE_COLORS[tile] || "#7ec850";
      ctx.fillRect(c * TILE_SIZE, r * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      // Tile border
      ctx.strokeStyle = "rgba(0,0,0,0.08)";
      ctx.strokeRect(c * TILE_SIZE, r * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      // Emoji overlay
      if (TILE_EMOJIS[tile]) {
        ctx.font = "20px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(TILE_EMOJIS[tile], c * TILE_SIZE + 16, r * TILE_SIZE + 16);
      }
    }
  }
  // Draw NPCs
  if (map.npcs) {
    map.npcs.forEach(npc => {
      if (npc.defeated) return;
      ctx.font = "22px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(npc.emoji, npc.x * TILE_SIZE + 16, npc.y * TILE_SIZE + 16);
    });
  }
  // Draw exits
  if (map.exits) {
    map.exits.forEach(exit => {
      ctx.fillStyle = "rgba(255,220,50,0.4)";
      ctx.fillRect(exit.x * TILE_SIZE, exit.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    });
  }
  // Draw player
  ctx.font = "22px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(state.player.emoji, state.player.x * TILE_SIZE + 16, state.player.y * TILE_SIZE + 16);
  // Player shadow
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.beginPath();
  ctx.ellipse(state.player.x * TILE_SIZE + 16, state.player.y * TILE_SIZE + 28, 8, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}

function render() {
  if (state.mode === "world") drawMap();
}

// ===================== MOVEMENT =====================
function tryMove(dx, dy) {
  if (state.mode !== "world") return;
  const nx = state.player.x + dx;
  const ny = state.player.y + dy;
  const map = MAPS[state.currentMap];
  if (nx < 0 || ny < 0 || nx >= map.cols || ny >= map.rows) return;
  const tile = map.tiles[ny][nx];
  if (tile === 1 || tile === 6) return; // wall / tree

  // Check NPC collision
  if (map.npcs) {
    const npc = map.npcs.find(n => n.x === nx && n.y === ny && !n.defeated);
    if (npc) { interactNPC(npc); return; }
  }

  state.player.x = nx;
  state.player.y = ny;
  state.player.steps++;

  // Check exit
  if (map.exits) {
    const exit = map.exits.find(e => e.x === nx && e.y === ny);
    if (exit && MAPS[exit.to]) {
      state.currentMap = exit.to;
      state.player.x = exit.toX;
      state.player.y = exit.toY;
      document.getElementById("location-name").textContent = exit.to;
      render();
      return;
    }
  }

  // Wild encounter on tall grass
  if (tile === 2 && state.player.party.length > 0) {
    if (Math.random() < state.wildEncounterRate) {
      triggerWildBattle();
      return;
    }
  }
  render();
}

// ===================== DIALOG =====================
function showDialog(lines, cb) {
  state.mode = "dialog";
  state.dialog = { lines, idx: 0, cb: cb || null };
  const box = document.getElementById("dialog-box");
  box.classList.remove("hidden");
  document.getElementById("dialog-text").textContent = lines[0];
}

function advanceDialog() {
  state.dialog.idx++;
  if (state.dialog.idx >= state.dialog.lines.length) {
    document.getElementById("dialog-box").classList.add("hidden");
    state.mode = "world";
    if (state.dialog.cb) state.dialog.cb();
    state.dialog.cb = null;
  } else {
    document.getElementById("dialog-text").textContent = state.dialog.lines[state.dialog.idx];
  }
}

// ===================== NPC INTERACTION =====================
function interactNPC(npc) {
  state.npcInteracting = npc;
  if (npc.shop) {
    showDialog(npc.dialog, () => openShop());
    return;
  }
  if (npc.trainer && !npc.defeated) {
    showDialog(npc.dialog, () => startTrainerBattle(npc));
    return;
  }
  showDialog(npc.dialog);
}

function interactFront() {
  if (state.mode !== "world") return;
  const map = MAPS[state.currentMap];
  if (!map.npcs) return;
  // Check all 4 directions
  const dirs = [[0,-1],[0,1],[-1,0],[1,0]];
  for (const [dx,dy] of dirs) {
    const nx = state.player.x + dx;
    const ny = state.player.y + dy;
    const npc = map.npcs.find(n => n.x === nx && n.y === ny && !n.defeated);
    if (npc) { interactNPC(npc); return; }
  }
}

// ===================== BATTLE SYSTEM =====================
function triggerWildBattle() {
  const map = MAPS[state.currentMap];
  const wildPool = map.wild;
  const id = wildPool[Math.floor(Math.random() * wildPool.length)];
  const playerLead = state.player.party[0];
  const wildLevel = Math.max(2, playerLead.level + Math.floor(Math.random() * 5) - 2);
  const wild = createPokemon(id, wildLevel);
  // Mark as seen
  if (!state.player.pokedex[id]) state.player.pokedex[id] = "seen";
  startBattle(wild, false, null);
}

function startTrainerBattle(npc) {
  const first = npc.party[0];
  const enemy = createPokemon(first.id, first.level);
  npc._partyIdx = 0;
  startBattle(enemy, true, npc);
}

function startBattle(enemy, isTrainer, trainerNpc) {
  state.mode = "battle";
  state.battle = {
    enemy,
    isTrainer,
    trainerNpc,
    playerIdx: 0,
    turn: "player",
    turnCount: 0,
    fled: false,
    caught: false,
    log: [],
  };
  const playerPoke = state.player.party[state.battle.playerIdx];
  updateBattleUI();
  document.getElementById("battle-screen").classList.remove("hidden");
  document.getElementById("fight-menu").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
  setBattleLog(isTrainer
    ? `¡El entrenador envió a ${enemy.name}!`
    : `¡Un ${enemy.name} salvaje apareció!`);
}

function updateBattleUI() {
  const b = state.battle;
  const player = state.player.party[b.playerIdx];
  const enemy = b.enemy;
  document.getElementById("enemy-name").textContent = (enemy.isShiny ? "✨" : "") + enemy.name;
  document.getElementById("enemy-level").textContent = `Nv.${enemy.level}`;
  document.getElementById("enemy-sprite").textContent = enemy.emoji;
  const eHPPct = Math.max(0, (enemy.currentHP / enemy.maxHP) * 100);
  const eBar = document.getElementById("enemy-hp-bar");
  eBar.style.width = eHPPct + "%";
  eBar.style.background = eHPPct > 50 ? "#4caf50" : eHPPct > 20 ? "#ff9800" : "#f44336";

  document.getElementById("player-poke-name").textContent = (player.isShiny ? "✨" : "") + player.name;
  document.getElementById("player-poke-level").textContent = `Nv.${player.level}`;
  document.getElementById("player-sprite").textContent = player.emoji;
  const pHPPct = Math.max(0, (player.currentHP / player.maxHP) * 100);
  const pBar = document.getElementById("player-hp-bar");
  pBar.style.width = pHPPct + "%";
  pBar.style.background = pHPPct > 50 ? "#4caf50" : pHPPct > 20 ? "#ff9800" : "#f44336";
  document.getElementById("player-hp-text").textContent = `${player.currentHP}/${player.maxHP}`;

  // Status indicators
  if (player.status) {
    document.getElementById("player-poke-name").textContent += ` [${player.status.toUpperCase()}]`;
  }
}

function setBattleLog(msg) {
  document.getElementById("battle-log").textContent = msg;
}

function calcDamage(attacker, defender, move) {
  if (move.power === 0) return 0;
  const lvl = attacker.level;
  const atk = move.cat === "físico" ? attacker.atk : Math.floor(attacker.atk * 1.2);
  const def = move.cat === "físico" ? defender.def : Math.floor(defender.def * 1.1);
  let dmg = Math.floor((((2 * lvl / 5 + 2) * move.power * atk / def) / 50) + 2);
  // STAB
  if (attacker.type === move.type) dmg = Math.floor(dmg * 1.5);
  // Type effectiveness
  const chart = TYPE_CHART[move.type];
  if (chart && chart[defender.type] !== undefined) dmg = Math.floor(dmg * chart[defender.type]);
  // Random factor
  dmg = Math.floor(dmg * (0.85 + Math.random() * 0.15));
  // Critical hit (1/16 chance)
  if (Math.random() < 0.0625) { dmg = Math.floor(dmg * 1.5); }
  return Math.max(1, dmg);
}

function getEffectivenessText(move, defender) {
  const chart = TYPE_CHART[move.type];
  if (!chart || chart[defender.type] === undefined) return "";
  const mult = chart[defender.type];
  if (mult >= 2) return " ¡Es muy eficaz!";
  if (mult === 0) return " No afecta...";
  if (mult < 1) return " No es muy eficaz...";
  return "";
}

function applyEffect(effect, target, attacker) {
  if (!effect) return "";
  if (effect === "poison" && !target.status) { target.status = "poison"; return " ¡Envenenado!"; }
  if (effect === "burn10" && Math.random() < 0.1 && !target.status) { target.status = "burn"; return " ¡Quemado!"; }
  if (effect === "par10" && Math.random() < 0.1 && !target.status) { target.status = "paralysis"; return " ¡Paralizado!"; }
  if (effect === "par30" && Math.random() < 0.3 && !target.status) { target.status = "paralysis"; return " ¡Paralizado!"; }
  if (effect === "rest") { target.currentHP = target.maxHP; target.status = "sleep"; target.statusTurns = 2; return " ¡Descansó!"; }
  if (effect === "escape") return "escape";
  if (effect === "atk-1") { attacker.atk = Math.max(1, Math.floor(attacker.atk * 0.67)); return " ¡Ataque bajó!"; }
  if (effect === "spd-10" && Math.random() < 0.1) { target.spd = Math.max(1, Math.floor(target.spd * 0.67)); return " ¡Velocidad bajó!"; }
  if (effect === "spatk+2") { attacker.atk = Math.floor(attacker.atk * 2); return " ¡Ataque especial subió!"; }
  if (effect === "conf10" && Math.random() < 0.1) { target.confused = true; return " ¡Confundido!"; }
  if (effect === "spdef-10" && Math.random() < 0.1) { target.def = Math.max(1, Math.floor(target.def * 0.67)); return " ¡Def. especial bajó!"; }
  if (effect === "spdef-20" && Math.random() < 0.2) { target.def = Math.max(1, Math.floor(target.def * 0.67)); return " ¡Def. especial bajó!"; }
  if (effect === "flinch30") { return ""; }
  if (effect === "curse") { target.cursed = true; return " ¡Maldito!"; }
  return "";
}

function applyStatusDamage(poke) {
  let msg = "";
  if (poke.status === "poison") {
    const dmg = Math.max(1, Math.floor(poke.maxHP / 8));
    poke.currentHP = Math.max(0, poke.currentHP - dmg);
    msg = `${poke.name} sufrió daño por veneno.`;
  }
  if (poke.status === "burn") {
    const dmg = Math.max(1, Math.floor(poke.maxHP / 16));
    poke.currentHP = Math.max(0, poke.currentHP - dmg);
    msg = `${poke.name} sufrió daño por quemadura.`;
  }
  if (poke.cursed) {
    const dmg = Math.max(1, Math.floor(poke.maxHP / 4));
    poke.currentHP = Math.max(0, poke.currentHP - dmg);
    msg += ` ${poke.name} sufrió daño por maldición.`;
  }
  return msg;
}

function playerUseMove(moveIdx) {
  const b = state.battle;
  if (b.turn !== "player") return;
  const player = state.player.party[b.playerIdx];
  const move = player.moves[moveIdx];
  if (!move || move.currentPP <= 0) { setBattleLog("¡Sin PP!"); return; }

  // Paralysis check
  if (player.status === "paralysis" && Math.random() < 0.25) {
    setBattleLog(`${player.name} está paralizado y no puede moverse.`);
    setTimeout(() => enemyTurn(), 1000);
    return;
  }
  // Sleep check
  if (player.status === "sleep") {
    if (player.statusTurns > 0) {
      player.statusTurns--;
      setBattleLog(`${player.name} está dormido...`);
      setTimeout(() => enemyTurn(), 1000);
      return;
    } else {
      player.status = null;
      setBattleLog(`${player.name} se despertó.`);
    }
  }

  move.currentPP--;
  document.getElementById("fight-menu").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");

  // Escape effect
  if (move.effect === "escape") {
    setBattleLog(`${player.name} usó ${move.name}. ¡Huyó!`);
    setTimeout(() => endBattle("fled"), 1200);
    return;
  }

  let log = `${player.name} usó ${move.name}!`;
  let effText = "";

  if (move.power > 0) {
    const dmg = calcDamage(player, b.enemy, move);
    b.enemy.currentHP = Math.max(0, b.enemy.currentHP - dmg);
    effText = getEffectivenessText(move, b.enemy);
    log += ` (-${dmg} HP)${effText}`;
    const eff = applyEffect(move.effect, b.enemy, player);
    if (eff && eff !== "escape") log += eff;
  } else {
    const eff = applyEffect(move.effect, b.enemy, player);
    if (eff) log += eff;
  }

  setBattleLog(log);
  updateBattleUI();
  b.turnCount++;

  if (b.enemy.currentHP <= 0) {
    setTimeout(() => handleEnemyFaint(), 1000);
    return;
  }
  setTimeout(() => enemyTurn(), 1200);
}

function enemyTurn() {
  const b = state.battle;
  const player = state.player.party[b.playerIdx];
  const enemy = b.enemy;

  // Status damage on enemy
  const statusMsg = applyStatusDamage(enemy);
  if (statusMsg) {
    setBattleLog(statusMsg);
    updateBattleUI();
    if (enemy.currentHP <= 0) {
      setTimeout(() => handleEnemyFaint(), 1000);
      return;
    }
  }

  // Enemy paralysis
  if (enemy.status === "paralysis" && Math.random() < 0.25) {
    setBattleLog(`${enemy.name} está paralizado y no puede moverse.`);
    setTimeout(() => playerStatusDamage(), 1000);
    return;
  }
  // Enemy sleep
  if (enemy.status === "sleep") {
    if (enemy.statusTurns > 0) {
      enemy.statusTurns--;
      setBattleLog(`${enemy.name} está dormido...`);
      setTimeout(() => playerStatusDamage(), 1000);
      return;
    } else {
      enemy.status = null;
    }
  }

  // Pick random move
  const validMoves = enemy.moves.filter(m => m.currentPP > 0);
  if (validMoves.length === 0) {
    setBattleLog(`${enemy.name} no tiene más PP. Usó Forcejeo.`);
    const dmg = Math.max(1, Math.floor(player.maxHP / 4));
    player.currentHP = Math.max(0, player.currentHP - dmg);
    updateBattleUI();
    setTimeout(() => playerStatusDamage(), 1000);
    return;
  }
  const move = validMoves[Math.floor(Math.random() * validMoves.length)];
  move.currentPP--;

  let log = `${enemy.name} usó ${move.name}!`;
  if (move.power > 0) {
    const dmg = calcDamage(enemy, player, move);
    player.currentHP = Math.max(0, player.currentHP - dmg);
    const effText = getEffectivenessText(move, player);
    log += ` (-${dmg} HP)${effText}`;
    const eff = applyEffect(move.effect, player, enemy);
    if (eff && eff !== "escape") log += eff;
  } else {
    const eff = applyEffect(move.effect, player, enemy);
    if (eff) log += eff;
  }

  setBattleLog(log);
  updateBattleUI();

  if (player.currentHP <= 0) {
    setTimeout(() => handlePlayerFaint(), 1000);
    return;
  }
  setTimeout(() => playerStatusDamage(), 1000);
}

function playerStatusDamage() {
  const player = state.player.party[state.battle.playerIdx];
  const msg = applyStatusDamage(player);
  if (msg) {
    setBattleLog(msg);
    updateBattleUI();
    if (player.currentHP <= 0) {
      setTimeout(() => handlePlayerFaint(), 1000);
      return;
    }
  }
  state.battle.turn = "player";
}

function handleEnemyFaint() {
  const b = state.battle;
  const player = state.player.party[b.playerIdx];
  const enemy = b.enemy;
  const expGain = Math.floor((enemy.level * 50) / 7);
  player.exp += expGain;
  let log = `¡${enemy.name} se debilitó! +${expGain} EXP`;

  // Level up check
  while (player.exp >= player.expNext) {
    player.level++;
    player.exp -= player.expNext;
    player.expNext = Math.floor(Math.pow(player.level + 1, 3));
    // Recalculate stats
    const data = POKEMON_DATA[player.id];
    const newHP = Math.floor(((data.baseHP * 2 * player.level) / 100) + player.level + 10);
    player.currentHP += newHP - player.maxHP;
    player.maxHP = newHP;
    player.atk = Math.floor(((data.baseAtk * 2 * player.level) / 100) + 5);
    player.def = Math.floor(((data.baseDef * 2 * player.level) / 100) + 5);
    player.spd = Math.floor(((data.baseSpd * 2 * player.level) / 100) + 5);
    log += ` ¡${player.name} subió al nivel ${player.level}!`;
    // Friendship
    player.friendship = Math.min(255, player.friendship + 5);
  }

  // Trainer next pokemon
  if (b.isTrainer && b.trainerNpc) {
    const npc = b.trainerNpc;
    npc._partyIdx = (npc._partyIdx || 0) + 1;
    if (npc._partyIdx < npc.party.length) {
      const next = npc.party[npc._partyIdx];
      b.enemy = createPokemon(next.id, next.level);
      setBattleLog(log + ` ¡${npc.emoji} envió a ${b.enemy.name}!`);
      updateBattleUI();
      return;
    } else {
      npc.defeated = true;
      state.player.money += npc.reward || 0;
      log += ` ¡Ganaste $${npc.reward}!`;
    }
  }

  setBattleLog(log);
  updateBattleUI();
  setTimeout(() => endBattle("win"), 1500);
}

function handlePlayerFaint() {
  const b = state.battle;
  const player = state.player.party[b.playerIdx];
  player.currentHP = 0;
  // Try next pokemon
  const nextIdx = state.player.party.findIndex((p, i) => i > b.playerIdx && p.currentHP > 0);
  if (nextIdx !== -1) {
    b.playerIdx = nextIdx;
    setBattleLog(`${player.name} se debilitó. ¡Adelante, ${state.player.party[nextIdx].name}!`);
    updateBattleUI();
    return;
  }
  // All fainted
  setBattleLog("¡Todos tus Pokémon se debilitaron! Fuiste al Centro Pokémon...");
  setTimeout(() => {
    endBattle("lose");
    healAllPokemon();
    state.player.money = Math.max(0, state.player.money - 100);
  }, 1500);
}

function endBattle(result) {
  document.getElementById("battle-screen").classList.add("hidden");
  state.mode = "world";
  state.battle = null;
  render();
}

function tryRun() {
  const b = state.battle;
  if (b.isTrainer) { setBattleLog("¡No puedes huir de un combate de entrenador!"); return; }
  const player = state.player.party[b.playerIdx];
  const enemy = b.enemy;
  const escapeChance = Math.floor(((player.spd * 128) / enemy.spd) + 30);
  if (Math.random() * 256 < escapeChance) {
    setBattleLog("¡Huiste con éxito!");
    setTimeout(() => endBattle("fled"), 1000);
  } else {
    setBattleLog("¡No pudiste huir!");
    setTimeout(() => enemyTurn(), 1000);
  }
}

function tryCatch(ballName) {
  const b = state.battle;
  if (b.isTrainer) { setBattleLog("¡No puedes atrapar el Pokémon de un entrenador!"); return; }
  const balls = state.player.bag.balls;
  if (!balls[ballName] || balls[ballName] <= 0) { setBattleLog("¡No tienes esa Poké Ball!"); return; }
  balls[ballName]--;
  const enemy = b.enemy;
  const ball = POKEBALLS[ballName];
  const catchRate = 45; // base catch rate
  const hpFactor = (3 * enemy.maxHP - 2 * enemy.currentHP) / (3 * enemy.maxHP);
  const statusBonus = enemy.status ? 2 : 1;
  const chance = Math.floor((catchRate * hpFactor * ball.catch * statusBonus) / 255 * 100);
  setBattleLog(`Lanzaste una ${ballName}...`);
  setTimeout(() => {
    if (Math.random() * 100 < chance || ball.catch === 255) {
      enemy.currentHP = 0;
      state.player.party.push({ ...enemy, currentHP: enemy.maxHP });
      state.player.pokedex[enemy.id] = "caught";
      setBattleLog(`¡${enemy.name} fue capturado!`);
      setTimeout(() => endBattle("caught"), 1500);
    } else {
      setBattleLog(`¡${enemy.name} escapó de la ${ballName}!`);
      setTimeout(() => enemyTurn(), 1000);
    }
  }, 800);
}

// ===================== HEALING =====================
function healAllPokemon() {
  state.player.party.forEach(p => {
    p.currentHP = p.maxHP;
    p.status = null;
    p.statusTurns = 0;
    p.moves.forEach(m => { m.currentPP = m.pp; });
  });
}

function useItem(itemName, targetIdx) {
  const item = ITEMS[itemName];
  if (!item) return false;
  const poke = state.player.party[targetIdx];
  if (!poke) return false;

  if (item.type === "heal") {
    if (poke.currentHP === 0) { return false; }
    poke.currentHP = Math.min(poke.maxHP, poke.currentHP + item.amount);
    return true;
  }
  if (item.type === "cure") {
    if (poke.status === item.status) { poke.status = null; return true; }
    return false;
  }
  if (item.type === "cureall") {
    poke.status = null; poke.statusTurns = 0; return true;
  }
  if (item.type === "revive") {
    if (poke.currentHP > 0) return false;
    poke.currentHP = Math.floor(poke.maxHP * item.amount);
    return true;
  }
  if (item.type === "pp") {
    poke.moves.forEach(m => { m.currentPP = Math.min(m.pp, m.currentPP + item.amount); });
    return true;
  }
  if (item.type === "ppall") {
    poke.moves.forEach(m => { m.currentPP = m.pp; });
    return true;
  }
  return false;
}

// ===================== SHOP =====================
function openShop() {
  state.mode = "shop";
  const bagScreen = document.getElementById("bag-screen");
  bagScreen.classList.remove("hidden");
  const list = document.getElementById("bag-list");
  list.innerHTML = "<div style='color:#e94560;font-size:12px;margin-bottom:6px;'>🏪 TIENDA</div>";
  SHOP_ITEMS.forEach(si => {
    const div = document.createElement("div");
    div.className = "bag-item";
    div.innerHTML = `<span>${si.name}</span><span>$${si.price} <button style="font-size:11px;padding:2px 6px;cursor:pointer;" onclick="buyItem('${si.name}',${si.price})">Comprar</button></span>`;
    list.appendChild(div);
  });
  document.getElementById("bag-close").onclick = () => {
    bagScreen.classList.add("hidden");
    state.mode = "world";
    document.getElementById("bag-close").onclick = closeBag;
  };
}

function buyItem(name, price) {
  if (state.player.money < price) { alert("¡No tienes suficiente dinero!"); return; }
  state.player.money -= price;
  document.getElementById("money").textContent = `💰 ${state.player.money}`;
  const bag = state.player.bag;
  if (POKEBALLS[name]) {
    bag.balls[name] = (bag.balls[name] || 0) + 1;
  } else {
    bag.items[name] = (bag.items[name] || 0) + 1;
  }
  alert(`¡Compraste ${name}!`);
}

// ===================== MENUS =====================
function openStartMenu() {
  state.mode = "menu";
  document.getElementById("start-menu").classList.remove("hidden");
}

function closeStartMenu() {
  document.getElementById("start-menu").classList.add("hidden");
  state.mode = "world";
}

function openBag() {
  state.mode = "bag";
  document.getElementById("start-menu").classList.add("hidden");
  const screen = document.getElementById("bag-screen");
  screen.classList.remove("hidden");
  renderBagTab("items");
}

function closeBag() {
  document.getElementById("bag-screen").classList.add("hidden");
  state.mode = "world";
}

function renderBagTab(tab) {
  const list = document.getElementById("bag-list");
  list.innerHTML = "";
  const bag = state.player.bag;
  let items = {};
  if (tab === "items") items = bag.items;
  else if (tab === "balls") items = bag.balls;
  else if (tab === "tms") items = bag.tms;

  const entries = Object.entries(items).filter(([,v]) => v > 0);
  if (entries.length === 0) {
    list.innerHTML = "<div style='color:#aaa;font-size:12px;padding:4px;'>Vacío</div>";
    return;
  }
  entries.forEach(([name, qty]) => {
    const div = document.createElement("div");
    div.className = "bag-item";
    div.innerHTML = `<span>${name}</span><span>x${qty}</span>`;
    if (tab === "items" && state.mode === "bag") {
      div.style.cursor = "pointer";
      div.onclick = () => {
        if (state.player.party.length === 0) return;
        const used = useItem(name, 0);
        if (used) {
          bag.items[name]--;
          if (bag.items[name] <= 0) delete bag.items[name];
          renderBagTab("items");
        }
      };
    }
    list.appendChild(div);
  });
}

function openParty() {
  state.mode = "party";
  document.getElementById("start-menu").classList.add("hidden");
  const screen = document.getElementById("party-screen");
  screen.classList.remove("hidden");
  renderParty();
}

function renderParty() {
  const list = document.getElementById("party-list");
  list.innerHTML = "";
  state.player.party.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "party-card";
    const hpPct = Math.floor((p.currentHP / p.maxHP) * 100);
    const statusStr = p.status ? ` [${p.status.toUpperCase()}]` : "";
    div.innerHTML = `
      <span>${p.isShiny ? "✨" : ""}${p.emoji} ${p.name} Nv.${p.level}${statusStr}</span>
      <span class="poke-hp">HP: ${p.currentHP}/${p.maxHP} (${hpPct}%)</span>
      <span class="poke-hp">Tipo: ${p.type} | EXP: ${p.exp}/${p.expNext}</span>
      <span class="poke-hp">Movimientos: ${p.moves.map(m => `${m.name}(${m.currentPP}/${m.pp})`).join(", ")}</span>
    `;
    list.appendChild(div);
  });
}

function openPokedex() {
  state.mode = "pokedex";
  document.getElementById("start-menu").classList.add("hidden");
  const screen = document.getElementById("pokedex-screen");
  screen.classList.remove("hidden");
  renderPokedex();
}

function renderPokedex() {
  const list = document.getElementById("pokedex-list");
  list.innerHTML = "";
  Object.entries(POKEMON_DATA).forEach(([id, data]) => {
    const status = state.player.pokedex[id];
    const div = document.createElement("div");
    div.className = `pokedex-entry ${status || ""}`;
    if (!status) {
      div.innerHTML = `<span>#${id.padStart(3,"0")} ???</span><span>No visto</span>`;
    } else if (status === "seen") {
      div.innerHTML = `<span>#${id.padStart(3,"0")} ${data.name}</span><span>👁 Visto</span>`;
    } else {
      div.innerHTML = `<span>${data.emoji} #${id.padStart(3,"0")} ${data.name}</span><span>✅ Capturado</span>`;
    }
    list.appendChild(div);
  });
}

function saveGame() {
  localStorage.setItem("pokemonSave", JSON.stringify({
    player: state.player,
    currentMap: state.currentMap,
    mapNpcStates: Object.fromEntries(
      Object.entries(MAPS).map(([k, v]) => [k, (v.npcs || []).map(n => ({ defeated: n.defeated }))])
    )
  }));
  showDialog(["¡Partida guardada!"]);
}

function loadGame() {
  const save = localStorage.getItem("pokemonSave");
  if (!save) return false;
  const data = JSON.parse(save);
  Object.assign(state.player, data.player);
  state.currentMap = data.currentMap;
  // Restore NPC states
  if (data.mapNpcStates) {
    Object.entries(data.mapNpcStates).forEach(([mapName, npcStates]) => {
      if (MAPS[mapName] && MAPS[mapName].npcs) {
        MAPS[mapName].npcs.forEach((npc, i) => {
          if (npcStates[i]) npc.defeated = npcStates[i].defeated;
        });
      }
    });
  }
  document.getElementById("location-name").textContent = state.currentMap;
  document.getElementById("money").textContent = `💰 ${state.player.money}`;
  return true;
}

// ===================== BATTLE UI EVENTS =====================
document.getElementById("btn-fight").onclick = () => {
  const b = state.battle;
  if (!b || b.turn !== "player") return;
  const player = state.player.party[b.playerIdx];
  document.getElementById("main-menu").classList.add("hidden");
  const fightMenu = document.getElementById("fight-menu");
  fightMenu.classList.remove("hidden");
  document.querySelectorAll(".move-btn").forEach((btn, i) => {
    const move = player.moves[i];
    if (move) {
      btn.textContent = `${move.name}\n${move.type} ${move.currentPP}/${move.pp}`;
      btn.style.display = "block";
      btn.onclick = () => {
        fightMenu.classList.add("hidden");
        document.getElementById("main-menu").classList.remove("hidden");
        playerUseMove(i);
      };
    } else {
      btn.style.display = "none";
    }
  });
};

document.getElementById("btn-bag").onclick = () => {
  const b = state.battle;
  if (!b) return;
  // Quick use first item in battle
  const items = Object.entries(state.player.bag.items).filter(([,v]) => v > 0);
  const balls = Object.entries(state.player.bag.balls).filter(([,v]) => v > 0);
  if (balls.length > 0 && !b.isTrainer) {
    const [ballName] = balls[0];
    tryCatch(ballName);
    return;
  }
  if (items.length > 0) {
    const [itemName] = items[0];
    const used = useItem(itemName, b.playerIdx);
    if (used) {
      state.player.bag.items[itemName]--;
      if (state.player.bag.items[itemName] <= 0) delete state.player.bag.items[itemName];
      setBattleLog(`Usaste ${itemName}.`);
      updateBattleUI();
      setTimeout(() => enemyTurn(), 1000);
    } else {
      setBattleLog("No puedes usar ese objeto ahora.");
    }
    return;
  }
  setBattleLog("¡La mochila está vacía!");
};

document.getElementById("btn-pokemon").onclick = () => {
  const b = state.battle;
  if (!b) return;
  const next = state.player.party.find((p, i) => i !== b.playerIdx && p.currentHP > 0);
  if (next) {
    const old = state.player.party[b.playerIdx];
    b.playerIdx = state.player.party.indexOf(next);
    setBattleLog(`¡${old.name}, vuelve! ¡Adelante, ${next.name}!`);
    updateBattleUI();
    setTimeout(() => enemyTurn(), 1000);
  } else {
    setBattleLog("¡No hay más Pokémon disponibles!");
  }
};

document.getElementById("btn-run").onclick = () => tryRun();

// Bag tabs
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderBagTab(btn.dataset.tab);
  };
});

document.getElementById("bag-close").onclick = closeBag;
document.getElementById("party-close").onclick = () => {
  document.getElementById("party-screen").classList.add("hidden");
  state.mode = "world";
};
document.getElementById("pokedex-close").onclick = () => {
  document.getElementById("pokedex-screen").classList.add("hidden");
  state.mode = "world";
};

document.getElementById("menu-pokedex").onclick = openPokedex;
document.getElementById("menu-pokemon").onclick = openParty;
document.getElementById("menu-bag").onclick = openBag;
document.getElementById("menu-save").onclick = () => { closeStartMenu(); saveGame(); };
document.getElementById("menu-close").onclick = closeStartMenu;

// ===================== KEYBOARD INPUT =====================
document.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":    e.preventDefault(); tryMove(0, -1); break;
    case "ArrowDown":  e.preventDefault(); tryMove(0, 1);  break;
    case "ArrowLeft":  e.preventDefault(); tryMove(-1, 0); break;
    case "ArrowRight": e.preventDefault(); tryMove(1, 0);  break;
    case "Enter":
    case "z":
    case "Z":
      if (state.mode === "dialog") advanceDialog();
      else if (state.mode === "world") interactFront();
      break;
    case "x":
    case "X":
      if (state.mode === "world") openStartMenu();
      break;
    case "Escape":
      if (state.mode === "menu") closeStartMenu();
      else if (state.mode === "bag") closeBag();
      else if (state.mode === "party") {
        document.getElementById("party-screen").classList.add("hidden");
        state.mode = "world";
      }
      else if (state.mode === "pokedex") {
        document.getElementById("pokedex-screen").classList.add("hidden");
        state.mode = "world";
      }
      break;
  }
});

// ===================== INTRO / STARTER SELECTION =====================
function showStarterSelection() {
  const starters = [
    { id: 1,  name: "Bulbasaur",  type: "Planta/Veneno", emoji: "🌿" },
    { id: 4,  name: "Charmander", type: "Fuego",          emoji: "🔥" },
    { id: 7,  name: "Squirtle",   type: "Agua",           emoji: "💧" },
  ];
  state.mode = "dialog";
  const box = document.getElementById("dialog-box");
  box.classList.remove("hidden");
  box.innerHTML = `
    <div style="font-size:13px;margin-bottom:8px;">¡Bienvenido al mundo Pokémon! Elige tu Pokémon inicial:</div>
    <div style="display:flex;gap:8px;justify-content:center;">
      ${starters.map(s => `
        <button onclick="selectStarter(${s.id})" style="
          padding:8px 12px;font-size:13px;cursor:pointer;
          border:3px solid #333;border-radius:8px;background:#fff;
          font-family:'Courier New',monospace;
        ">${s.emoji}<br>${s.name}<br><small>${s.type}</small></button>
      `).join("")}
    </div>
  `;
}

function selectStarter(id) {
  const box = document.getElementById("dialog-box");
  box.innerHTML = `<div id="dialog-text"></div><span id="dialog-arrow">▼</span>`;
  box.classList.add("hidden");
  state.mode = "world";
  giveStarter(id);
  render();
}

// ===================== INIT =====================
function init() {
  const loaded = loadGame();
  if (!loaded) {
    // New game
    showStarterSelection();
  } else {
    showDialog([`¡Bienvenido de vuelta, ${state.player.name}!`]);
  }
  document.getElementById("money").textContent = `💰 ${state.player.money}`;
  document.getElementById("location-name").textContent = state.currentMap;
  render();
  // Game loop
  setInterval(() => {
    if (state.mode === "world") render();
  }, 100);
}

init();
