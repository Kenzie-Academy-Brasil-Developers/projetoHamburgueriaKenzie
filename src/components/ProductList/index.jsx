import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"
export const ProductList = ({ productsSearch,addItem }) => {
   console.log(productsSearch)
   return (
      <section className={styles.sectionCards}>
         <div className={styles.divSection}>
            {productsSearch.length === 0 ? (
               <div className={styles.divMessageSearch}>
                  <h2 className="typography messageSearch">Desculpe, não encontramos nenhum produto correspondente à sua pesquisa.</h2>
               </div>
            ) : (
               <ul className={styles.ulCard}>
                  {productsSearch.map((product) => (
                        <ProductCard key={product.id} product={product}  addItem={addItem} />
                     ))}
               </ul>
            )}
               
            </div>
         
      </section>
      
   );
};
