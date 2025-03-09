import sampleData from "@/db/sample-data";
import ProductList from "@/components/product/product-list";

export default function Home() {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arivals"
        limit={4}
      />
    </>
  );
}
