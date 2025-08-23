import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/ProductAction";
// import sampleData from "@/db/sample-data";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newst Arrivals" limit={4} />
    </>
  );
};

export default Homepage;
