import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/ProductList";
import ViewAllProductsButton from "@/components/view-all-products-button";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/ProductAction";
import Link from "next/link";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProduct = await getFeaturedProducts();
  return (
    <>
      {featuredProduct.length > 0 && <ProductCarousel data={featuredProduct} />}
      <ProductList data={latestProducts} title="Newst Arrivals" limit={4} />
      <ViewAllProductsButton />
    </>
  );
};

export default Homepage;
