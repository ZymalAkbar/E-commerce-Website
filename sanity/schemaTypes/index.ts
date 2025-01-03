import { type SchemaTypeDefinition } from 'sanity'
import product from '../ring'
import bracelet from '../bracelet'
import earring from '../earring'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,bracelet,earring]
}
