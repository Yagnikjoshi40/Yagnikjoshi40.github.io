import { ProductDetailPage } from '@/components/ProductDetail/ProductDetailPage';

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage id={params.id} />;
}
