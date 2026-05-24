Note :- Furnilo CORE / BASE categories
🔑 ROOT CATEGORIES (LOCKED)
category: [
"furniture",
"decor",
"lighting",
"mattresses",
"furnishings"
]

UI nav bar
Sofas | Living | Bedroom | Mattress | Dining | Storage | Study & Office | Outdoor | Decor & Furnishing | Modular Kitchen

Inme:

Living / Bedroom / Dining = ROOMS

Sofas / Mattress / Storage = PRODUCT TYPES

Decor & Furnishing = CATEGORY MIX

1️⃣ FURNITURE
{
id: "furniture",
title: "Furniture",
subCategories: [
{
id: "sofa",
title: "Sofa Sets",
parentCategory: "furniture"
},
{
id: "bed",
title: "Beds",
parentCategory: "furniture"
},
{
id: "dining",
title: "Dining Tables",
parentCategory: "furniture"
},
{
id: "wardrobe",
title: "Wardrobes",
parentCategory: "furniture"
},
{
id: "tv-unit",
title: "TV Units",
parentCategory: "furniture"
},
{
id: "study-table",
title: "Study Tables",
parentCategory: "furniture"
},
{
id: "storage",
title: "Storage Furniture",
parentCategory: "furniture"
}
]
}

2️⃣ DECOR

{
id: "decor",
title: "Decor",
subCategories: [
{
id: "wall-decor",
title: "Wall Decor",
parentCategory: "decor"
},
{
id: "mirrors",
title: "Mirrors",
parentCategory: "decor"
},
{
id: "rugs",
title: "Rugs & Carpets",
parentCategory: "decor"
},
{
id: "showpieces",
title: "Showpieces",
parentCategory: "decor"
},
{
id: "clocks",
title: "Clocks",
parentCategory: "decor"
}
]
}

3️⃣ LIGHTING
{
id: "lighting",
title: "Lighting",
subCategories: [
{
id: "ceiling-lights",
title: "Ceiling Lights",
parentCategory: "lighting"
},
{
id: "table-lamps",
title: "Table Lamps",
parentCategory: "lighting"
},
{
id: "wall-lights",
title: "Wall Lights",
parentCategory: "lighting"
},
{
id: "floor-lamps",
title: "Floor Lamps",
parentCategory: "lighting"
}
]
}

4️⃣ MATTRESSES
{
id: "mattresses",
title: "Mattresses",
subCategories: [
{
id: "single-mattress",
title: "Single Mattress",
parentCategory: "mattresses"
},
{
id: "double-mattress",
title: "Double Mattress",
parentCategory: "mattresses"
},
{
id: "queen-mattress",
title: "Queen Mattress",
parentCategory: "mattresses"
},
{
id: "king-mattress",
title: "King Mattress",
parentCategory: "mattresses"
}
]
}

5️⃣ FURNISHINGS

{
id: "furnishings",
title: "Furnishings",
subCategories: [
{
id: "bedsheets",
title: "Bedsheets",
parentCategory: "furnishings"
},
{
id: "curtains",
title: "Curtains",
parentCategory: "furnishings"
},
{
id: "cushions",
title: "Cushions",
parentCategory: "furnishings"
},
{
id: "blankets",
title: "Blankets & Quilts",
parentCategory: "furnishings"
}
]
}

Rooms ka matlab:

Product ghar ke kis room me use hota hai

Typical WoodenStreet rooms:

rooms: [
"living-room",
"bedroom",
"dining-room",
"study-room",
"office",
"outdoor"
]

Rooms ko define kaha karte hain?
✅ Recommended: roomsConfig.js

export const roomsConfig = [
{
id: "living-room",
title: "Living Room",
allowedCategories: ["furniture", "decor", "lighting"]
},
{
id: "bedroom",
title: "Bedroom",
allowedCategories: ["furniture", "mattresses", "furnishings", "lighting"]
},
{
id: "dining-room",
title: "Dining Room",
allowedCategories: ["furniture", "decor", "lighting"]
},
{
id: "study-room",
title: "Study Room",
allowedCategories: ["furniture", "lighting"]
},
{
id: "office",
title: "Office",
allowedCategories: ["furniture", "lighting"]
}
]

🏆 FINAL FLOW (MEMORIZE THIS)
Product
↓
Category (furniture / decor / etc)
↓
SubCategory (sofa / bed / etc)
↓
Rooms (living / bedroom / etc)

🔍 Category vs ProductType (confusion clear)

| Term            | Matlab                                             |
| --------------- | -------------------------------------------------- |
| Category        | Business grouping (Furniture, Decor)               |
| ParentCategory  | Menu grouping (Sofas, Beds)                        |
| SubCategory     | Listing page (3-seater sofas)                      |
| **ProductType** | **Functional nature** (Seating, Storage, Sleeping) |
| Room            | Usage location                                     |

🧠 Example se samjho

Sofa
category: 'furniture'
parentCategory: 'sofas'
subCategory: '3-seater-sofas'
productType: 'seating'

Chair
category: 'furniture'
parentCategory: 'chairs'
subCategory: 'office-chairs'
productType: 'seating'

👉 Sofa + Chair alag category ho sakte hain
👉 par productType same hai = seating

❓ To productType ki need kyu?
1️⃣ Cross-Category Filtering (VERY IMPORTANT)

User chahta hai:

“Mujhe sirf seating products dikhao”

Without productType → mushkil
With productType → easy

products.filter(p => p.taxonomy.productType === 'seating')

2️⃣ Smart Recommendation Engine
User dekh raha hai: Sofa (seating)
System suggest karega:
→ Chairs
→ Ottomans
→ Benches

👉 Ye category se possible nahi hota

3️⃣ Analytics & Business Insights

Company dekhti hai:

Seating vs Storage ka sales

Sleeping products ka conversion

GROUP BY productType

WoodenStreet exactly ye karta hai internally.

4️⃣ UI Blocks / Home Page Sections
"Shop by Type"

- Seating
- Storage
- Sleeping

Ye menu nahi hota, ye collection hota hai.

5️⃣ Future Safety (bahut important)

Aaj:

Sofa → Furniture

Kal:

Outdoor Sofa → Outdoor category

👉 ProductType tab bhi seating hi rahega
👉 System nahi tootega

🧱 Typical productType list (WoodenStreet style)
export const PRODUCT_TYPES = [
'seating', // sofas, chairs, stools
'sleeping', // beds, mattresses
'storage', // wardrobes, cabinets
'tables', // dining, coffee, side tables
'decor', // wall art, mirrors
'lighting', // lamps, chandeliers
'utility' // shoe racks, study desks
]

❌ Common Mistake (avoid)

❌ productType: 'sofa'
❌ productType: 'bed'

👉 Ye kaam subCategory ka hai
👉 productType generic & reusable hota hai

🧠 Ek line me yaad rakh

Category batata hai “business me kaha fit hota hai”
ProductType batata hai “ye product karta kya hai”

🔥 Final Verdict

productType = Invisible backbone of large ecommerce systems

Tumne isko include kiya — matlab tum real WoodenStreet-style backend bana rahe ho, demo project nahi.
