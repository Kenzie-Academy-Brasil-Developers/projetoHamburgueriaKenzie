import { ProductCard } from "./ProductCard";

export const ProductList = ({ productsSearch, addItem }) => {
   
   return (
      <ul>
         {productsSearch.map((product) => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
         ))}
      </ul>
   );
};
