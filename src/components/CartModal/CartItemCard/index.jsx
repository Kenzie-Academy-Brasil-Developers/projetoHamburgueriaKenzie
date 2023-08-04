import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ product, deleteItem }) => {
   return (
      <li >
         <div className={styles.cardsCar}>
            <img className={styles.imgCar} src={product.img} alt={product.name} />
            <h3 className="typography nameProducts ">{product.name}</h3>
         </div>
         <button onClick={() => deleteItem(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
