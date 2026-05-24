WoodenStreet ka core category philosophy

WoodenStreet 3-layer taxonomy follow karta hai:

ROOM → CATEGORY → PRODUCT TYPE

UI chahe kuch bhi bole, data hamesha isi structure par filter hota hai.

✅ 1️⃣ ROOM (sabse powerful filter)

Rooms user intent dikhata hai

room: [
'living-room',
'bedroom',
'dining-room',
'study',
'office',
'kids-room',
'outdoor'
]

👉 Ek product multiple rooms me ho sakta hai
👉 Filtering 1 line me ho jati hai

products.filter(p => p.taxonomy.room.includes('study'))

✅ 2️⃣ CATEGORY (Top menu level)

WoodenStreet ke main menus (data-wise):

category: [
'furniture',
'decor',
'lighting',
'storage',
'mattresses',
'furnishings'
]

UI me lighting alag dikhe ya decor ke andar ho — data me ye alag rakha jata hai

✅ 3️⃣ SUB CATEGORY (menu ke andar grouping)

Example:

Furniture
subCategory: [
'sofas',
'beds',
'chairs',
'tables',
'wardrobes',
'tv-units',
'study-tables'
]

Decor
subCategory: [
'wall-decor',
'mirrors',
'vases',
'clocks',
'floor-lamps',
'table-lamps',
'artificial-plants'
]

✅ 4️⃣ PRODUCT TYPE (backend + logic king)

Ye sabse important key hai filtering ke liye

productType: [
'seating',
'sleeping',
'storage',
'lighting',
'wall-decor',
'accent',
'utility'
]

Example:

Chair → seating

Bed → sleeping

Lamp → lighting

Mirror → wall-decor

✅ 5️⃣ MATERIAL (secondary but powerful)
material: [
'solid-wood',
'engineered-wood',
'metal',
'glass',
'fabric',
'leather'
]

Used for:

Filter chips

SEO pages

Comparison

✅ 6️⃣ PRICE RANGE (dynamic, no hardcode)
pricing.sellingPrice

Frontend pe:

0–5000
5000–15000
15000+

✅ 7️⃣ STYLE (conversion driven)
style: [
'modern',
'contemporary',
'traditional',
'minimal',
'industrial',
'bohemian'
]

✅ 8️⃣ SIZE / DIMENSION (optional but future-proof)
size: 'compact' | 'standard' | 'large'

🎯 FINAL RECOMMENDED TAXONOMY (copy-paste safe)
taxonomy: {
room: ['bedroom', 'study'],
category: 'decor',
subCategory: 'floor-lamps',
productType: 'lighting',
style: 'modern',
material: ['metal'],
}

🔥 WHY THIS MAKES FILTERING DEAD SIMPLE
Example queries:
All study items:
room.includes('study')

All lighting products:
productType === 'lighting'

All decor for bedroom:
category === 'decor' && room.includes('bedroom')

All modern items:
style === 'modern'

❌ Common mistake (tumne avoid kar li)

❌ decorLightingFloorLampData.js

❌ chairStudyBedroomData.js

❌ UI ke naam pe data todna

<!-- datafile structure -->

Goal clear hai 👇
➡️ Alag-alag data files
➡️ baad me spread operator se ek products.js me merge
➡️ filtering simple rahe

🧠 CORE RULE (yaad rakhna)

👉 Data files UI ke hisaab se nahi, PRODUCT NATURE ke hisaab se banti hain

WoodenStreet / Furnilo / Pepperfry sab isi rule par kaam karte hain.

✅ RECOMMENDED DATA FILE STRUCTURE
📁 src/data/products/
products/
│
├── bedsData.js
├── sofasData.js
├── chairsData.js
├── tablesData.js
├── storageData.js // wardrobe, cabinets
│
├── decorData.js // wall decor, mirrors, vases
├── lightingData.js // lamps, lights (decor ka UI part ho sakta hai)
│
├── studyData.js // study tables, chairs (optional – niche bataya)
│
├── mattressesData.js
│
└── index.js // centralized products file

✅ KAUN-KAUNSI FILE ZAROORI HAI (MINIMUM)
1️⃣ Furniture (core revenue)
bedsData.js
sofasData.js
chairsData.js
tablesData.js
storageData.js

2️⃣ Decor & Lighting (upsell products)
decorData.js
lightingData.js

💡 Important
UI me "Decor" ek hi menu ho
lekin data me lighting alag file me rakho

3️⃣ Optional (future proof)
studyData.js // sirf tab jab bahut zyada study items ho jaye
officeData.js
kidsData.js

Aaj ke stage me ❌ mandatory nahi

❓ Tumhara specific case (IMPORTANT)
❓ “Decor + Study dono me ja sakta hai”

✔️ Correct
❌ Par alagh datafile banana galat hoga

✅ Solution:

taxonomy: {
room: ['study', 'bedroom'],
category: 'decor',
subCategory: 'floor-lamps',
productType: 'lighting'
}

👉 Room decides placement
👉 File decides data grouping

❌ YE FILES MAT BANAO (common galti)
❌ studyDecorData.js
❌ bedroomChairsData.js
❌ decorLightingData.js
❌ woodenFurnitureData.js

Ye future me nightmare ban jati hain 😅

✅ CENTRALIZED products.js (FINAL STEP)
📄 src/data/products/index.js
import { bedsData } from './bedsData'
import { sofasData } from './sofasData'
import { chairsData } from './chairsData'
import { tablesData } from './tablesData'
import { storageData } from './storageData'
import { decorData } from './decorData'
import { lightingData } from './lightingData'

export const products = [
...bedsData,
...sofasData,
...chairsData,
...tablesData,
...storageData,
...decorData,
...lightingData,
]

🔥 IS APPROACH KE FAAYDE

✅ Clean separation
✅ Easy maintenance
✅ Tree-shaking friendly
✅ Filtering super fast
✅ Redux / Context / API ready

🧪 REAL FILTER EXAMPLES
All decor items:
products.filter(p => p.taxonomy.category === 'decor')

Study room items:
products.filter(p => p.taxonomy.room.includes('study'))

Lighting anywhere:
products.filter(p => p.taxonomy.productType === 'lighting')

🏁 FINAL ADVICE (straightforward)

Files kam rakho, taxonomy strong rakho

Tumhara current structure over-engineered bilkul nahi hai
Ye exactly industry-standard mid-scale ecommerce pattern hai.
