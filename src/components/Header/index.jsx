import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";




export const Header = ({setSearch, cartList, setIsOpen}) => {
   const [value, setValue] = useState("");
   const submit = (e) => {
      e.preventDefault();
         setSearch(value);
         setValue("");
   }
   

   return (
      <header className={styles.headerContainer}>
         <div className={styles.divContentHeader}>
               <div className={styles.divContentLogoButton}>
                  <div className={styles.divHeaderLogo}>
                     <img src={Logo} alt="Logo Kenzie Burguer" />
                  </div>
                  <div className={styles.divContent}>
                     <button className={styles.buttonCar} onClick={() => setIsOpen(true)}>
                        <MdShoppingCart size={21} />
                        <span className={styles.spans}>{cartList.length}</span>
                     </button>
                  </div>
               </div>
               <form className={styles.forms} onSubmit={submit}>
                  <div className={styles.divInput}>
                     <input
                        placeholder="Digitar pesquisa"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                     />
                        <button className={styles.search} type="submit">
                        <MdSearch size={21}  />
                        </button>
                  </div>
               </form>
         </div>
      </header>
   );
};
