
// Verified high-quality images for UK locations
// Primary Hubs - EXACT URLs provided by user
const specificImages = {
  // Major Cities & Hubs
  "london": "https://images.unsplash.com/photo-1692894551441-e4601a7646b1",
  "manchester": "https://images.unsplash.com/photo-1700257647770-2846c584a537",
  "birmingham": "https://images.unsplash.com/photo-1653242808690-aa9470ef87c5",
  "leeds": "https://images.unsplash.com/photo-1681166583632-f0eb4c0a30bd",
  "glasgow": "https://images.unsplash.com/photo-1703665436808-52c68d1005d8",
  "edinburgh": "https://images.unsplash.com/photo-1692801633815-405c27d601d5",
  "cardiff": "https://images.unsplash.com/photo-1672519324931-3deb80d20eaa",
  "belfast": "https://images.unsplash.com/photo-1686205707341-9d15ddf05ed2",
  "bristol": "https://images.unsplash.com/photo-1590599232897-bb5ac7aeba32",
  "liverpool": "https://images.unsplash.com/photo-1589671855419-f1d4f9094db8",
  "newcastle": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "nottingham": "https://images.unsplash.com/photo-1671360874325-1705d4686f35",
  "sheffield": "https://images.unsplash.com/photo-1679923119756-ea625bd90279",
  "southampton": "https://images.unsplash.com/photo-1671561038471-ff4a18e8f7d5",
  "portsmouth": "https://images.unsplash.com/photo-1569745675036-fa0c9efc5681",
  "oxford": "https://images.unsplash.com/photo-1622852060528-b94f83cfc6a7",
  "cambridge": "https://images.unsplash.com/photo-1607069349477-7204a37180b2",
  "bath": "https://images.unsplash.com/photo-1526411582826-c24efd89f1af",
  "york": "https://images.unsplash.com/photo-1685074673308-9c881d5897ed",
  "durham": "https://images.unsplash.com/photo-1685074673308-9c881d5897ed",
  "winchester": "https://images.unsplash.com/photo-1678525853063-575f1bc24f2b",
  "canterbury": "https://images.unsplash.com/photo-1678525853063-575f1bc24f2b",
  "coventry": "https://images.unsplash.com/photo-1692180255797-7480f481b3e9",
  "wolverhampton": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "stoke-on-trent": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "derby": "https://images.unsplash.com/photo-1697270922748-1a789cb8ee63",
  "leicester": "https://images.unsplash.com/photo-1692650687988-bde243cf7408",
  "peterborough": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "norwich": "https://images.unsplash.com/photo-1699021564754-88dba1b31aa0",
  "ipswich": "https://images.unsplash.com/photo-1701727072113-80f0ac5fbd0a",
  "swindon": "https://images.unsplash.com/photo-1683026782691-7346c2886778",
  "reading": "https://images.unsplash.com/photo-1702905394433-33aef7640473",
  "slough": "https://images.unsplash.com/photo-1683026782691-7346c2886778",
  "luton": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "milton-keynes": "https://images.unsplash.com/photo-1680419866936-6b2d915c1ff3",
  "northampton": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "cheltenham": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "gloucester": "https://images.unsplash.com/photo-1557227065-0e8556bb4128",
  "hereford": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "worcester": "https://images.unsplash.com/photo-1575886007625-4bacb9c40418",
  "shrewsbury": "https://images.unsplash.com/photo-1671457247694-c617a81bfe18",
  "chester": "https://images.unsplash.com/photo-1627476743208-a500b16efee0",
  "bangor": "https://images.unsplash.com/photo-1577974694161-f29d306d5330",
  "swansea": "https://images.unsplash.com/photo-1510222862688-09aa4692caf2",
  "aberystwyth": "https://images.unsplash.com/photo-1600838420173-94c2b3e3e826",
  "inverness": "https://images.unsplash.com/photo-1585399090050-aad1411f5e35",
  "aberdeen": "https://images.unsplash.com/photo-1702548589025-44a65c2b6d22",
  "dundee": "https://images.unsplash.com/photo-1555422528-7c9d0a656f44",
  "perth": "https://images.unsplash.com/photo-1590875617987-56a1d669083d",
  "stirling": "https://images.unsplash.com/photo-1685074673308-9c881d5897ed",
  
  // Specific assignments for other common locations
  "brighton": "https://images.unsplash.com/photo-1550503043-464972e2978d?auto=format&fit=crop&w=800&q=80",
  "exeter": "https://images.unsplash.com/photo-1526391485603-9d9018698246?auto=format&fit=crop&w=800&q=80",
  "plymouth": "https://images.unsplash.com/photo-1549480685-6101f3f4c664?auto=format&fit=crop&w=800&q=80",
  "torquay": "https://images.unsplash.com/photo-1563299796-b729d0af54a5?auto=format&fit=crop&w=800&q=80",
  "truro": "https://images.unsplash.com/photo-1596791656037-c8526a8362a2?auto=format&fit=crop&w=800&q=80",
  "lincoln": "https://images.unsplash.com/photo-1526411582826-c24efd89f1af?auto=format&fit=crop&w=800&q=80",
  "blackpool": "https://images.unsplash.com/photo-1569745675036-fa0c9efc5681?auto=format&fit=crop&w=800&q=80",
  "bournemouth": "https://images.unsplash.com/photo-1544669836-8cb0df4524c7?auto=format&fit=crop&w=800&q=80",
  "southend-on-sea": "https://images.unsplash.com/photo-1510222862688-09aa4692caf2?auto=format&fit=crop&w=800&q=80",
  "hull": "https://images.unsplash.com/photo-1574359874834-0bb47b593630?auto=format&fit=crop&w=800&q=80",
  "middlesbrough": "https://images.unsplash.com/photo-1582236894056-a36c84f48866?auto=format&fit=crop&w=800&q=80",
  "sunderland": "https://images.unsplash.com/photo-1596796929761-04953c82e6d6?auto=format&fit=crop&w=800&q=80",
  "bradford": "https://images.unsplash.com/photo-1549480685-6101f3f4c664?auto=format&fit=crop&w=800&q=80",
  "huddersfield": "https://images.unsplash.com/photo-1577907579979-d5867375470d?auto=format&fit=crop&w=800&q=80",
  "wakefield": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "preston": "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
  "blackburn": "https://images.unsplash.com/photo-1565514020126-724d2c70099b?auto=format&fit=crop&w=800&q=80",
  "bolton": "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?auto=format&fit=crop&w=800&q=80",
  "wigan": "https://images.unsplash.com/photo-1572906378411-a831eb040c17?auto=format&fit=crop&w=800&q=80"
};

// Generic categories to maintain variety and relevance
const genericImages = {
  modern: [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", // Business district
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80", // Urban cityscape
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80", // Skyline
    "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?auto=format&fit=crop&w=800&q=80", // Modern buildings
    "https://images.unsplash.com/photo-1444723121867-2291933a02f3?auto=format&fit=crop&w=800&q=80"  // City lights
  ],
  historic: [
    "https://images.unsplash.com/photo-1574359874834-0bb47b593630?auto=format&fit=crop&w=800&q=80", // Brick street
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", // Classic street
    "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=800&q=80", // Architecture
    "https://images.unsplash.com/photo-1549480685-6101f3f4c664?auto=format&fit=crop&w=800&q=80"  // Red brick
  ],
  industrial: [
    "https://images.unsplash.com/photo-1582236894056-a36c84f48866?auto=format&fit=crop&w=800&q=80", // Warehouse
    "https://images.unsplash.com/photo-1563299796-b729d0af54a5?auto=format&fit=crop&w=800&q=80", // Industrial interior
    "https://images.unsplash.com/photo-1596791656037-c8526a8362a2?auto=format&fit=crop&w=800&q=80"  // Suburban/Industrial
  ],
  coastal: [
    "https://images.unsplash.com/photo-1550503043-464972e2978d?auto=format&fit=crop&w=800&q=80", // Pier style
    "https://images.unsplash.com/photo-1510222862688-09aa4692caf2?auto=format&fit=crop&w=800&q=80", // Coastal town
    "https://images.unsplash.com/photo-1589671855419-f1d4f9094db8?auto=format&fit=crop&w=800&q=80"  // Docklands
  ]
};

// Helper to determine the best image
const getCityImage = (name, slug, sector) => {
  const lowerName = name.toLowerCase();
  const lowerSlug = slug.toLowerCase();
  const lowerSector = (sector || "").toLowerCase();

  // 1. Direct match
  if (specificImages[lowerSlug]) return specificImages[lowerSlug];
  if (specificImages[lowerName]) return specificImages[lowerName];

  // 2. Category match based on keywords
  let category = 'modern'; // Default
  
  if (lowerSector.includes('tourism') || lowerSector.includes('marine') || lowerSector.includes('port') || lowerSector.includes('shipping')) {
    category = 'coastal';
  } else if (lowerSector.includes('education') || lowerSector.includes('gov') || lowerName.includes('chester') || lowerName.includes('york')) {
    category = 'historic';
  } else if (lowerSector.includes('manufacturing') || lowerSector.includes('industrial') || lowerSector.includes('logistics') || lowerSector.includes('steel') || lowerSector.includes('automotive')) {
    category = 'industrial';
  }

  // 3. Deterministic selection from category
  const pool = genericImages[category];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % pool.length;
  return pool[index];
};

const rawCities = [
  // Top 10 Featured Cities
  {
    id: "birm-001",
    name: "Birmingham",
    slug: "birmingham",
    coordinates: { lat: 52.4862, lng: -1.8904 },
    population: "1,141,800",
    industrial_sector: "Manufacturing",
    nearest_hub: "Birmingham HQ",
    postcode_area: "B",
    featured: true
  },
  {
    id: "man-002",
    name: "Manchester",
    slug: "manchester",
    coordinates: { lat: 53.4808, lng: -2.2426 },
    population: "553,230",
    industrial_sector: "Textiles & Logistics",
    nearest_hub: "Manchester North",
    postcode_area: "M",
    featured: true
  },
  {
    id: "lon-003",
    name: "London",
    slug: "london",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    population: "8,982,000",
    industrial_sector: "Finance & Tech",
    nearest_hub: "London South",
    postcode_area: "E",
    featured: true
  },
  {
    id: "lds-004",
    name: "Leeds",
    slug: "leeds",
    coordinates: { lat: 53.8008, lng: -1.5491 },
    population: "792,525",
    industrial_sector: "Legal & Manuf.",
    nearest_hub: "Leeds Central",
    postcode_area: "LS",
    featured: true
  },
  {
    id: "gla-005",
    name: "Glasgow",
    slug: "glasgow",
    coordinates: { lat: 55.8642, lng: -4.2518 },
    population: "635,640",
    industrial_sector: "Engineering",
    nearest_hub: "Glasgow West",
    postcode_area: "G",
    featured: true
  },
  {
    id: "bri-006",
    name: "Bristol",
    slug: "bristol",
    coordinates: { lat: 51.4545, lng: -2.5879 },
    population: "467,099",
    industrial_sector: "Aerospace",
    nearest_hub: "Bristol South",
    postcode_area: "BS",
    featured: true
  },
  {
    id: "liv-007",
    name: "Liverpool",
    slug: "liverpool",
    coordinates: { lat: 53.4084, lng: -2.9916 },
    population: "496,784",
    industrial_sector: "Shipping",
    nearest_hub: "Liverpool Docks",
    postcode_area: "L",
    featured: true
  },
  {
    id: "she-008",
    name: "Sheffield",
    slug: "sheffield",
    coordinates: { lat: 53.3811, lng: -1.4701 },
    population: "584,853",
    industrial_sector: "Steel & Manuf.",
    nearest_hub: "Sheffield East",
    postcode_area: "S",
    featured: true
  },
  {
    id: "lei-009",
    name: "Leicester",
    slug: "leicester",
    coordinates: { lat: 52.6369, lng: -1.1398 },
    population: "368,600",
    industrial_sector: "Textiles",
    nearest_hub: "Leicester Central",
    postcode_area: "LE",
    featured: true
  },
  {
    id: "cov-010",
    name: "Coventry",
    slug: "coventry",
    coordinates: { lat: 52.4068, lng: -1.5197 },
    population: "366,785",
    industrial_sector: "Automotive",
    nearest_hub: "Coventry North",
    postcode_area: "CV",
    featured: true
  },
  
  // A
  { id: "abd-011", name: "Aberdeen", slug: "aberdeen", coordinates: { lat: 57.1497, lng: -2.0942 }, population: "228,990", industrial_sector: "Oil & Gas", nearest_hub: "Glasgow", postcode_area: "AB" },
  { id: "aberg-011", name: "Abergavenny", slug: "abergavenny", coordinates: { lat: 51.8217, lng: -3.0186 }, population: "12,500", industrial_sector: "Service", nearest_hub: "Cardiff", postcode_area: "NP" },
  { id: "aber-012", name: "Aberystwyth", slug: "aberystwyth", coordinates: { lat: 52.4151, lng: -4.0837 }, population: "13,040", industrial_sector: "Education", nearest_hub: "Cardiff", postcode_area: "SY" },
  { id: "ald-013", name: "Aldershot", slug: "aldershot", coordinates: { lat: 51.2484, lng: -0.7601 }, population: "37,131", industrial_sector: "Defense", nearest_hub: "London", postcode_area: "GU" },
  { id: "alt-014", name: "Altrincham", slug: "altrincham", coordinates: { lat: 53.3897, lng: -2.3551 }, population: "52,419", industrial_sector: "Service", nearest_hub: "Manchester", postcode_area: "WA" },
  { id: "and-015", name: "Andover", slug: "andover", coordinates: { lat: 51.2079, lng: -1.4795 }, population: "50,887", industrial_sector: "Logistics", nearest_hub: "Southampton", postcode_area: "SP" },
  { id: "ash-016", name: "Ashford", slug: "ashford", coordinates: { lat: 51.1465, lng: 0.8676 }, population: "74,204", industrial_sector: "Transport", nearest_hub: "London", postcode_area: "TN" },

  // B
  { id: "ban-017", name: "Banbury", slug: "banbury", coordinates: { lat: 52.0610, lng: -1.3362 }, population: "46,853", industrial_sector: "Food", nearest_hub: "Oxford", postcode_area: "OX" },
  { id: "bang-018", name: "Bangor", slug: "bangor", coordinates: { lat: 53.2280, lng: -4.1280 }, population: "18,322", industrial_sector: "Education", nearest_hub: "Liverpool", postcode_area: "LL" },
  { id: "barn-019", name: "Barnsley", slug: "barnsley", coordinates: { lat: 53.5526, lng: -1.4797 }, population: "91,297", industrial_sector: "Manufacturing", nearest_hub: "Sheffield", postcode_area: "S" },
  { id: "bas-020", name: "Basildon", slug: "basildon", coordinates: { lat: 51.5761, lng: 0.4887 }, population: "107,123", industrial_sector: "Engineering", nearest_hub: "London", postcode_area: "SS" },
  { id: "bath-012", name: "Bath", slug: "bath", coordinates: { lat: 51.3758, lng: -2.3599 }, population: "88,859", industrial_sector: "Tourism", nearest_hub: "Bristol", postcode_area: "BA" },
  { id: "bed-013", name: "Bedford", slug: "bedford", coordinates: { lat: 52.1359, lng: -0.4667 }, population: "173,292", industrial_sector: "Logistics", nearest_hub: "London", postcode_area: "MK" },
  { id: "blk-014", name: "Blackpool", slug: "blackpool", coordinates: { lat: 53.8175, lng: -3.0357 }, population: "139,305", industrial_sector: "Tourism", nearest_hub: "Manchester", postcode_area: "FY" },
  { id: "bol-021", name: "Bolton", slug: "bolton", coordinates: { lat: 53.5769, lng: -2.4282 }, population: "194,189", industrial_sector: "Textiles", nearest_hub: "Manchester", postcode_area: "BL" },
  { id: "bou-015", name: "Bournemouth", slug: "bournemouth", coordinates: { lat: 50.7192, lng: -1.8808 }, population: "183,491", industrial_sector: "Service", nearest_hub: "Southampton", postcode_area: "BH" },
  { id: "bra-016", name: "Bradford", slug: "bradford", coordinates: { lat: 53.7957, lng: -1.7593 }, population: "539,776", industrial_sector: "Manufacturing", nearest_hub: "Leeds", postcode_area: "BD" },
  { id: "bri-017", name: "Brighton", slug: "brighton", coordinates: { lat: 50.8225, lng: -0.1372 }, population: "290,885", industrial_sector: "Digital", nearest_hub: "London", postcode_area: "BN" },

  // C
  { id: "cam-018", name: "Cambridge", slug: "cambridge", coordinates: { lat: 52.2053, lng: 0.1218 }, population: "123,900", industrial_sector: "Technology", nearest_hub: "London", postcode_area: "CB" },
  { id: "can-022", name: "Canterbury", slug: "canterbury", coordinates: { lat: 51.2802, lng: 1.0789 }, population: "55,240", industrial_sector: "Education", nearest_hub: "London", postcode_area: "CT" },
  { id: "car-019", name: "Cardiff", slug: "cardiff", coordinates: { lat: 51.4816, lng: -3.1791 }, population: "362,756", industrial_sector: "Gov", nearest_hub: "Bristol", postcode_area: "CF" },
  { id: "car-023", name: "Carlisle", slug: "carlisle", coordinates: { lat: 54.8925, lng: -2.9329 }, population: "75,306", industrial_sector: "Logistics", nearest_hub: "Newcastle", postcode_area: "CA" },
  { id: "chelm-024", name: "Chelmsford", slug: "chelmsford", coordinates: { lat: 51.7343, lng: 0.4678 }, population: "111,511", industrial_sector: "Retail", nearest_hub: "London", postcode_area: "CM" },
  { id: "chelt-025", name: "Cheltenham", slug: "cheltenham", coordinates: { lat: 51.8994, lng: -2.0783 }, population: "116,447", industrial_sector: "Cyber", nearest_hub: "Bristol", postcode_area: "GL" },
  { id: "ches-020", name: "Chester", slug: "chester", coordinates: { lat: 53.1905, lng: -2.8918 }, population: "79,645", industrial_sector: "Service", nearest_hub: "Liverpool", postcode_area: "CH" },
  { id: "col-026", name: "Colchester", slug: "colchester", coordinates: { lat: 51.8959, lng: 0.8919 }, population: "121,859", industrial_sector: "Defense", nearest_hub: "London", postcode_area: "CO" },
  { id: "crawl-027", name: "Crawley", slug: "crawley", coordinates: { lat: 51.1091, lng: -0.1872 }, population: "110,500", industrial_sector: "Aviation", nearest_hub: "London", postcode_area: "RH" },
  { id: "crewe-028", name: "Crewe", slug: "crewe", coordinates: { lat: 53.0970, lng: -2.4410 }, population: "75,556", industrial_sector: "Rail", nearest_hub: "Stoke", postcode_area: "CW" },

  // D
  { id: "dar-029", name: "Darlington", slug: "darlington", coordinates: { lat: 54.5236, lng: -1.5595 }, population: "106,000", industrial_sector: "Engineering", nearest_hub: "Newcastle", postcode_area: "DL" },
  { id: "der-021", name: "Derby", slug: "derby", coordinates: { lat: 52.9225, lng: -1.4746 }, population: "258,000", industrial_sector: "Manufacturing", nearest_hub: "Nottingham", postcode_area: "DE" },
  { id: "don-022", name: "Doncaster", slug: "doncaster", coordinates: { lat: 53.5228, lng: -1.1311 }, population: "110,000", industrial_sector: "Logistics", nearest_hub: "Sheffield", postcode_area: "DN" },
  { id: "dor-030", name: "Dorchester", slug: "dorchester", coordinates: { lat: 50.7112, lng: -2.4412 }, population: "19,060", industrial_sector: "Agri", nearest_hub: "Bournemouth", postcode_area: "DT" },
  { id: "dov-031", name: "Dover", slug: "dover", coordinates: { lat: 51.1279, lng: 1.3134 }, population: "31,022", industrial_sector: "Port", nearest_hub: "London", postcode_area: "CT" },
  { id: "dud-032", name: "Dudley", slug: "dudley", coordinates: { lat: 52.5123, lng: -2.0811 }, population: "79,379", industrial_sector: "Retail", nearest_hub: "Birmingham", postcode_area: "DY" },
  { id: "dun-033", name: "Dundee", slug: "dundee", coordinates: { lat: 56.4620, lng: -2.9707 }, population: "148,270", industrial_sector: "Digital", nearest_hub: "Glasgow", postcode_area: "DD" },
  { id: "dur-023", name: "Durham", slug: "durham", coordinates: { lat: 54.7753, lng: -1.5849 }, population: "48,069", industrial_sector: "Education", nearest_hub: "Newcastle", postcode_area: "DH" },

  // E
  { id: "eas-034", name: "Eastbourne", slug: "eastbourne", coordinates: { lat: 50.7680, lng: 0.2905 }, population: "101,547", industrial_sector: "Tourism", nearest_hub: "Brighton", postcode_area: "BN" },
  { id: "edi-024", name: "Edinburgh", slug: "edinburgh", coordinates: { lat: 55.9533, lng: -3.1883 }, population: "527,620", industrial_sector: "Finance", nearest_hub: "Glasgow", postcode_area: "EH" },
  { id: "exe-025", name: "Exeter", slug: "exeter", coordinates: { lat: 50.7184, lng: -3.5339 }, population: "129,800", industrial_sector: "Service", nearest_hub: "Bristol", postcode_area: "EX" },

  // F, G
  { id: "fal-035", name: "Falmouth", slug: "falmouth", coordinates: { lat: 50.1526, lng: -5.0663 }, population: "22,686", industrial_sector: "Maritime", nearest_hub: "Plymouth", postcode_area: "TR" },
  { id: "gat-036", name: "Gateshead", slug: "gateshead", coordinates: { lat: 54.9621, lng: -1.6018 }, population: "120,046", industrial_sector: "Commercial", nearest_hub: "Newcastle", postcode_area: "NE" },
  { id: "glou-026", name: "Gloucester", slug: "gloucester", coordinates: { lat: 51.8642, lng: -2.2386 }, population: "129,285", industrial_sector: "Aerospace", nearest_hub: "Bristol", postcode_area: "GL" },
  { id: "gui-037", name: "Guildford", slug: "guildford", coordinates: { lat: 51.2362, lng: -0.5704 }, population: "77,057", industrial_sector: "Gaming", nearest_hub: "London", postcode_area: "GU" },

  // H
  { id: "har-038", name: "Harrogate", slug: "harrogate", coordinates: { lat: 53.9921, lng: -1.5418 }, population: "73,576", industrial_sector: "Conference", nearest_hub: "Leeds", postcode_area: "HG" },
  { id: "has-039", name: "Hastings", slug: "hastings", coordinates: { lat: 50.8542, lng: 0.5735 }, population: "92,855", industrial_sector: "Tourism", nearest_hub: "Brighton", postcode_area: "TN" },
  { id: "her-040", name: "Hereford", slug: "hereford", coordinates: { lat: 52.0564, lng: -2.7160 }, population: "60,415", industrial_sector: "Agri", nearest_hub: "Birmingham", postcode_area: "HR" },
  { id: "hud-041", name: "Huddersfield", slug: "huddersfield", coordinates: { lat: 53.6458, lng: -1.7850 }, population: "162,949", industrial_sector: "Manufacturing", nearest_hub: "Leeds", postcode_area: "HD" },
  { id: "hull-027", name: "Hull", slug: "hull", coordinates: { lat: 53.7457, lng: -0.3367 }, population: "260,200", industrial_sector: "Ports", nearest_hub: "Leeds", postcode_area: "HU" },

  // I, J, K
  { id: "inv-028", name: "Inverness", slug: "inverness", coordinates: { lat: 57.4778, lng: -4.2247 }, population: "46,870", industrial_sector: "Service", nearest_hub: "Aberdeen", postcode_area: "IV" },
  { id: "ips-029", name: "Ipswich", slug: "ipswich", coordinates: { lat: 52.0567, lng: 1.1482 }, population: "133,384", industrial_sector: "Insurance", nearest_hub: "London", postcode_area: "IP" },
  { id: "ket-042", name: "Kettering", slug: "kettering", coordinates: { lat: 52.3963, lng: -0.7302 }, population: "67,635", industrial_sector: "Logistics", nearest_hub: "Northampton", postcode_area: "NN" },
  { id: "kil-043", name: "Kilmarnock", slug: "kilmarnock", coordinates: { lat: 55.6111, lng: -4.4957 }, population: "46,159", industrial_sector: "Food", nearest_hub: "Glasgow", postcode_area: "KA" },

  // L
  { id: "lan-030", name: "Lancaster", slug: "lancaster", coordinates: { lat: 54.0470, lng: -2.8010 }, population: "52,234", industrial_sector: "Education", nearest_hub: "Manchester", postcode_area: "LA" },
  { id: "lin-031", name: "Lincoln", slug: "lincoln", coordinates: { lat: 53.2274, lng: -0.5400 }, population: "97,541", industrial_sector: "Engineering", nearest_hub: "Nottingham", postcode_area: "LN" },
  { id: "lut-032", name: "Luton", slug: "luton", coordinates: { lat: 51.8787, lng: -0.4200 }, population: "218,045", industrial_sector: "Aviation", nearest_hub: "London", postcode_area: "LU" },

  // M
  { id: "maid-044", name: "Maidstone", slug: "maidstone", coordinates: { lat: 51.2720, lng: 0.5290 }, population: "113,137", industrial_sector: "Service", nearest_hub: "London", postcode_area: "ME" },
  { id: "mid-033", name: "Middlesbrough", slug: "middlesbrough", coordinates: { lat: 54.5742, lng: -1.2349 }, population: "140,545", industrial_sector: "Chemicals", nearest_hub: "Newcastle", postcode_area: "TS" },
  { id: "mk-034", name: "Milton Keynes", slug: "milton-keynes", coordinates: { lat: 52.0406, lng: -0.7594 }, population: "269,500", industrial_sector: "Logistics", nearest_hub: "Northampton", postcode_area: "MK" },

  // N
  { id: "new-035", name: "Newcastle", slug: "newcastle", coordinates: { lat: 54.9783, lng: -1.6178 }, population: "300,196", industrial_sector: "Service", nearest_hub: "Newcastle", postcode_area: "NE" },
  { id: "newp-045", name: "Newport", slug: "newport", coordinates: { lat: 51.5842, lng: -2.9977 }, population: "145,700", industrial_sector: "Electronics", nearest_hub: "Cardiff", postcode_area: "NP" },
  { id: "nor-036", name: "Norwich", slug: "norwich", coordinates: { lat: 52.6309, lng: 1.2974 }, population: "142,177", industrial_sector: "Insurance", nearest_hub: "Ipswich", postcode_area: "NR" },
  { id: "not-037", name: "Nottingham", slug: "nottingham", coordinates: { lat: 52.9548, lng: -1.1581 }, population: "331,069", industrial_sector: "Science", nearest_hub: "Nottingham", postcode_area: "NG" },

  // O
  { id: "old-046", name: "Oldham", slug: "oldham", coordinates: { lat: 53.5409, lng: -2.1114 }, population: "96,555", industrial_sector: "Logistics", nearest_hub: "Manchester", postcode_area: "OL" },
  { id: "ox-038", name: "Oxford", slug: "oxford", coordinates: { lat: 51.7520, lng: -1.2577 }, population: "152,450", industrial_sector: "Education", nearest_hub: "London", postcode_area: "OX" },

  // P
  { id: "pais-047", name: "Paisley", slug: "paisley", coordinates: { lat: 55.8456, lng: -4.4237 }, population: "77,220", industrial_sector: "Aviation", nearest_hub: "Glasgow", postcode_area: "PA" },
  { id: "pet-039", name: "Peterborough", slug: "peterborough", coordinates: { lat: 52.5726, lng: -0.2427 }, population: "202,259", industrial_sector: "Logistics", nearest_hub: "Cambridge", postcode_area: "PE" },
  { id: "ply-040", name: "Plymouth", slug: "plymouth", coordinates: { lat: 50.3755, lng: -4.1427 }, population: "262,700", industrial_sector: "Marine", nearest_hub: "Exeter", postcode_area: "PL" },
  { id: "por-041", name: "Portsmouth", slug: "portsmouth", coordinates: { lat: 50.8198, lng: -1.0879 }, population: "238,137", industrial_sector: "Defense", nearest_hub: "Southampton", postcode_area: "PO" },
  { id: "pre-042", name: "Preston", slug: "preston", coordinates: { lat: 53.7632, lng: -2.7031 }, population: "141,800", industrial_sector: "Aerospace", nearest_hub: "Manchester", postcode_area: "PR" },

  // R
  { id: "rea-043", name: "Reading", slug: "reading", coordinates: { lat: 51.4543, lng: -0.9781 }, population: "163,203", industrial_sector: "Tech", nearest_hub: "London", postcode_area: "RG" },
  { id: "roch-048", name: "Rochdale", slug: "rochdale", coordinates: { lat: 53.6136, lng: -2.1610 }, population: "107,926", industrial_sector: "Manuf.", nearest_hub: "Manchester", postcode_area: "OL" },
  { id: "roth-049", name: "Rotherham", slug: "rotherham", coordinates: { lat: 53.4326, lng: -1.3635 }, population: "109,691", industrial_sector: "Manuf.", nearest_hub: "Sheffield", postcode_area: "S" },

  // S
  { id: "sal-050", name: "Salford", slug: "salford", coordinates: { lat: 53.4875, lng: -2.2901 }, population: "103,886", industrial_sector: "Media", nearest_hub: "Manchester", postcode_area: "M" },
  { id: "salis-051", name: "Salisbury", slug: "salisbury", coordinates: { lat: 51.0693, lng: -1.7957 }, population: "40,302", industrial_sector: "Tourism", nearest_hub: "Southampton", postcode_area: "SP" },
  { id: "scar-052", name: "Scarborough", slug: "scarborough", coordinates: { lat: 54.2793, lng: -0.4044 }, population: "61,749", industrial_sector: "Tourism", nearest_hub: "York", postcode_area: "YO" },
  { id: "scun-053", name: "Scunthorpe", slug: "scunthorpe", coordinates: { lat: 53.5809, lng: -0.6502 }, population: "82,334", industrial_sector: "Steel", nearest_hub: "Hull", postcode_area: "DN" },
  { id: "slou-054", name: "Slough", slug: "slough", coordinates: { lat: 51.5111, lng: -0.5940 }, population: "164,000", industrial_sector: "Data", nearest_hub: "London", postcode_area: "SL" },
  { id: "sou-055", name: "Southampton", slug: "southampton", coordinates: { lat: 50.9097, lng: -1.4044 }, population: "253,651", industrial_sector: "Port", nearest_hub: "Southampton", postcode_area: "SO" },
  { id: "sou-056", name: "Southend-on-Sea", slug: "southend", coordinates: { lat: 51.5378, lng: 0.7138 }, population: "183,125", industrial_sector: "Tourism", nearest_hub: "London", postcode_area: "SS" },
  { id: "st-al-057", name: "St Albans", slug: "st-albans", coordinates: { lat: 51.7527, lng: -0.3394 }, population: "82,146", industrial_sector: "Service", nearest_hub: "London", postcode_area: "AL" },
  { id: "st-he-058", name: "St Helens", slug: "st-helens", coordinates: { lat: 53.4541, lng: -2.7461 }, population: "102,885", industrial_sector: "Glass", nearest_hub: "Liverpool", postcode_area: "WA" },
  { id: "ste-059", name: "Stevenage", slug: "stevenage", coordinates: { lat: 51.9038, lng: -0.1966 }, population: "87,845", industrial_sector: "Pharma", nearest_hub: "London", postcode_area: "SG" },
  { id: "sto-044", name: "Stoke-on-Trent", slug: "stoke-on-trent", coordinates: { lat: 53.0027, lng: -2.1794 }, population: "256,375", industrial_sector: "Pottery", nearest_hub: "Birmingham", postcode_area: "ST" },
  { id: "sun-045", name: "Sunderland", slug: "sunderland", coordinates: { lat: 54.9069, lng: -1.3838 }, population: "277,417", industrial_sector: "Auto", nearest_hub: "Newcastle", postcode_area: "SR" },
  { id: "swa-046", name: "Swansea", slug: "swansea", coordinates: { lat: 51.6214, lng: -3.9436 }, population: "246,500", industrial_sector: "Service", nearest_hub: "Cardiff", postcode_area: "SA" },
  { id: "swin-047", name: "Swindon", slug: "swindon", coordinates: { lat: 51.5558, lng: -1.7797 }, population: "185,609", industrial_sector: "Auto", nearest_hub: "Bristol", postcode_area: "SN" },

  // T, U, V
  { id: "tau-060", name: "Taunton", slug: "taunton", coordinates: { lat: 51.0152, lng: -3.1030 }, population: "69,570", industrial_sector: "Retail", nearest_hub: "Exeter", postcode_area: "TA" },
  { id: "tel-061", name: "Telford", slug: "telford", coordinates: { lat: 52.6784, lng: -2.4438 }, population: "142,723", industrial_sector: "Tech", nearest_hub: "Birmingham", postcode_area: "TF" },
  { id: "tor-062", name: "Torquay", slug: "torquay", coordinates: { lat: 50.4619, lng: -3.5253 }, population: "65,245", industrial_sector: "Tourism", nearest_hub: "Exeter", postcode_area: "TQ" },
  { id: "tru-063", name: "Truro", slug: "truro", coordinates: { lat: 50.2632, lng: -5.0510 }, population: "18,766", industrial_sector: "Admin", nearest_hub: "Plymouth", postcode_area: "TR" },

  // W
  { id: "wak-064", name: "Wakefield", slug: "wakefield", coordinates: { lat: 53.6800, lng: -1.4900 }, population: "99,251", industrial_sector: "Service", nearest_hub: "Leeds", postcode_area: "WF" },
  { id: "wal-065", name: "Walsall", slug: "walsall", coordinates: { lat: 52.5869, lng: -1.9822 }, population: "67,594", industrial_sector: "Manuf.", nearest_hub: "Birmingham", postcode_area: "WS" },
  { id: "war-066", name: "Warrington", slug: "warrington", coordinates: { lat: 53.3900, lng: -2.5970 }, population: "210,014", industrial_sector: "Logistics", nearest_hub: "Liverpool", postcode_area: "WA" },
  { id: "wat-067", name: "Watford", slug: "watford", coordinates: { lat: 51.6565, lng: -0.3903 }, population: "90,301", industrial_sector: "Service", nearest_hub: "London", postcode_area: "WD" },
  { id: "wig-068", name: "Wigan", slug: "wigan", coordinates: { lat: 53.5451, lng: -2.6325 }, population: "103,608", industrial_sector: "Food", nearest_hub: "Manchester", postcode_area: "WN" },
  { id: "win-069", name: "Winchester", slug: "winchester", coordinates: { lat: 51.0632, lng: -1.3080 }, population: "45,184", industrial_sector: "Gov", nearest_hub: "Southampton", postcode_area: "SO" },
  { id: "wol-048", name: "Wolverhampton", slug: "wolverhampton", coordinates: { lat: 52.5869, lng: -2.1288 }, population: "263,700", industrial_sector: "Aerospace", nearest_hub: "Birmingham", postcode_area: "WV" },
  { id: "wor-070", name: "Worcester", slug: "worcester", coordinates: { lat: 52.1936, lng: -2.2216 }, population: "101,328", industrial_sector: "Manuf.", nearest_hub: "Birmingham", postcode_area: "WR" },

  // Y, Z
  { id: "york-049", name: "York", slug: "york", coordinates: { lat: 53.9599, lng: -1.0873 }, population: "210,618", industrial_sector: "Rail", nearest_hub: "Leeds", postcode_area: "YO" },
  { id: "zen-050", name: "Zennor", slug: "zennor", coordinates: { lat: 50.1915, lng: -5.5689 }, population: "200", industrial_sector: "Rural", nearest_hub: "Plymouth", postcode_area: "TR" }
];

// Enrich the raw data with deterministically assigned images
export const ukCities = rawCities.map(city => ({
  ...city,
  imageUrl: getCityImage(city.name, city.slug, city.industrial_sector)
}));
