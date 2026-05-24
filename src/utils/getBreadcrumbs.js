import { categoryConfig } from '@/data/categoryConfig'

export const getBreadcrumbs = (currentSlug) => {
  const crumbs = []
  let current = categoryConfig[currentSlug]

  // Case 1: Agar parentKey false hai, toh sirf Home dikhao
  // Hum ise isHome: false bhejenge taaki UI ise "Active Page" na maane aur link kaam kare
  if (!current || current.parentKey === false) {
    return [{ label: 'Home', slug: '/', isHome: true, forceLink: true }]
  }

  // Case 2: Hierarchy trace karo
  while (current) {
    // Current item ko add karo (e.g., Sofa)
    crumbs.unshift({
      label: current.label || current.slug,
      slug: current.slug,
      category: current.mainCategory,
      subCategory: current.subCategory,
    })

    // AGAR current item ki koi mainCategory hai (jaise 'furniture')
    // aur wo config mein exist karti hai, toh use manually add karo
    if (
      current.mainCategory &&
      categoryConfig[current.mainCategory] &&
      current.slug !== current.mainCategory
    ) {
      const mainCat = categoryConfig[current.mainCategory]
      crumbs.unshift({
        label: mainCat.label,
        slug: mainCat.slug,
      })
    }

    // Parent par jao
    current = categoryConfig[current.parentKey]

    // Agar beech mein kahin bhi parentKey false mil jaye toh ruk jao
    if (current && current.parentKey === false) break
  }

  // Duplicate slugs hatao (agar mainCategory aur parentKey same ho jayein)
  const uniqueCrumbs = Array.from(new Map(crumbs.map((item) => [item.slug, item])).values())

  return [{ label: 'Home', slug: '/', isHome: true }, ...uniqueCrumbs]
}
