import { MdAdd, MdDelete, MdRemove } from "react-icons/md";
import styles from "./style.module.scss";
import { useState } from "react";

export const CartItemCard = ({ product,  deleteItem }) => {
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
            </div>
            <button className={styles.buttondeleteCar} onClick={() => deleteItem(product.id)} aria-label="delete" title="Remover item">
               <MdDelete size={21} />
            </button>
      </li>
   );
};
