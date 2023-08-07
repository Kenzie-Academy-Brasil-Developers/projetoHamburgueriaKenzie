import { MdAdd, MdDelete, MdRemove } from "react-icons/md";
import styles from "./style.module.scss";
import { useState } from "react";

export const CartItemCard = ({ product,  deleteItem }) => {
   // const [count, setCount] = useState(0)
   

   // const add = () => {
   //    setCount(count + 1)
   // }

   // const remove = () => {
   //    if(count < 2){
   //       deleteItem(product.id)
   //    } else if (count > 0){
   //       setCount(count - 1)
   //    }
   // }
   

   return (
      <li className={styles.cardCar} key={product.id}>
            <div className={styles.cardsCar}>
               <div className={styles.divImgCar}>
               <img className={styles.imgCar} src={product.img} alt={product.name} />
               </div>
               <div className={styles.divContentInfo}>
                  <h3 className="typography nameProducts ">{product.name}</h3>
                  <p>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
               </div>
            {/* <button onClick={add}>
               <MdAdd size={21} />
            </button>
            <span>{count}</span>
            <button onClick={remove}>
               <MdRemove size={21} />
            </button> */}

            </div>
            <button onClick={() => deleteItem(product.id)} aria-label="delete" title="Remover item">
               <MdDelete size={21} />
            </button>
      </li>
   );
};
