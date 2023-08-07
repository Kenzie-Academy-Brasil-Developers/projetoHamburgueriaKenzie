import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList,addProduct, listSearch, deleteItem, deleteAllItens, setIsOpen}) => {
   

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);
   return (
      <div className={styles.modalOpen} role="dialog">
         <div className={styles.modalBox}>
               <div className={styles.headerCar}>
                  <h2 className="typography titleCar">Carrinho de compras</h2>
                  <button className={styles.buttonClose} onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                     <MdClose size={21} />
                  </button>
               </div>
            <div>
               <div className={styles.divUlProducts}>
                  <ul className={styles.ulCar}>
                     {cartList.map((product) => (
                        <CartItemCard key={product.id}   product={product} addProduct={addProduct} deleteItem={deleteItem} />
                     ))}
                  </ul>
               </div>
               <div className={styles.divCarButtonResult}>
                  <div className={styles.divResult}>
                     <span className="typography totalValueCar ">Total</span>
                     <span className="typography totalValue">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                  </div>
                  <div className={styles.divButton}>
                     <button className="buttons default" onClick={() => deleteAllItens()}>Remover todos</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
