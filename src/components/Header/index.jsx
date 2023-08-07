import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"




export const Header = ({setSearch, cartList, setIsOpen}) => {
   const [value, setValue] = useState("");
   const submit = (e) => {
      e.preventDefault()
         setSearch(value)
         setValue("")
   }
   // }

   return (
      <header className={styles.headerContainer}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className={styles.buttonCar} onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span className={styles.spans}>{cartList.length}</span>
            </button>
            <form onSubmit={submit}>
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
            </form>
         </div>
      </header>
   );
};
