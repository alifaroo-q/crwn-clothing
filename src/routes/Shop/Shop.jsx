import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";

import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="overflow-hidden grid grid-cols-4 gap-x-5 gap-y-3 pt-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
