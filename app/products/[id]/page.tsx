import { Metadata } from 'next'
import ProductDetail from './ProductDetail'

// 1. Type des paramètres
type Params = {
  id: string
}

// 2. Type des props (version compatible Next.js)
interface Props {
  params: Params
  searchParams?: Record<string, string | string[] | undefined>
}

// 3. Génération des routes statiques
export async function generateStaticParams(): Promise<Params[]> {
  return Array.from({ length: 6 }, (_, i) => ({ id: String(i + 1) }))
}

// 4. Métadonnées dynamiques (optionnel)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product ${params.id}`,
  }
}

// 5. Composant principal (version corrigée)
export default function Page({ params }: Props) {
  return <ProductDetail productId={params.id} />
}
