import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"
export const CartModal = ({ cartList, listSearch, deleteItem, deleteAllItens, setIsOpen}) => {
   

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);
   return (
      <div className={styles.modalOpen} role="dialog">
         <div className={styles.modalBox}>
            <div>
               <h2 className="typography titleCar">Carrinho de compras</h2>
               <button onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} deleteItem={deleteItem} />
                  ))}
               </ul>
            </div>
            <div>
               <div>
                  <span className="typography totalValueCar ">Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={() => deleteAllItens()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
