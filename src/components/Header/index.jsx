import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({setSearch, search}) => {
   // const [value, setValue] = useState("");
   const submit = (e) => {
      e.preventDefault()
         setSearch(value)
   }
   //    setValue("")
   // }

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button>
                <MdShoppingCart size={21} />
                <span>0</span>
            </button>
            <form onSubmit={submit}>
               <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
