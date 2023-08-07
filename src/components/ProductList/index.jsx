import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"
export const ProductList = ({ productsSearch,addItem }) => {
   
   return (
      <section className={styles.sectionCards}>
         <div className={styles.divUlCard}>
            <ul className={styles.ulCard}>
               {productsSearch.map((product) => (
                  <ProductCard key={product.id} product={product}  addItem={addItem} />
               ))}
            </ul>
         </div>
      </section>
      
   );
};
