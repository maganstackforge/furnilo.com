import { products } from './products'
import { buildTaxonomy } from '../utils/buildTaxonomy'

export const taxonomy = buildTaxonomy(products)

// 👇 DEBUG (sirf samajhne ke liye)
console.log('TAXONOMY OUTPUT 👉', taxonomy)
