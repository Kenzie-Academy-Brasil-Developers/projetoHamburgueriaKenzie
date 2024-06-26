import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import styles from "./style.module.scss";



export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const LocalStorageCar = localStorage.getItem("@PRODUCTSCAR");
   const [cartList, setCartList] = useState(LocalStorageCar ? JSON.parse(LocalStorageCar) : []);
   const [search, setSearch] = useState("");
   const [isOpen, setIsOpen] = useState(false);
   
  

   useEffect(() => {
       localStorage.setItem("@PRODUCTSCAR",  JSON.stringify(cartList))
     }, [cartList]);


   const addItem = (addProduct) => {
      if(!cartList.some(product => product.id === addProduct.id)){
         setCartList([...cartList, addProduct])
         toast.success("Produto adicionado no carrinho")
      } else {
         
         toast.warn("Esse produto já foi adicionado")
      }
      
   };


   const deleteItem = (removeItem) => {
      const newProductsCard = cartList.filter(product => product.id !== removeItem)
      setCartList(newProductsCard)
      toast.warn("Produto excluído do carrinho")
   };

   const deleteAllItens = () => {
      setCartList([]);
      toast.warn("Todos os produtos foram excluídos do carrinho")
   };

   const productsSearch = productList.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()) || (product.category.toLowerCase().includes(search.toLowerCase().trim())))

   const listSearch = search ? productsSearch : productList;

   

   useEffect(() => {
      const getProducts = async () => {
         const {data} = await api.get(`products`)
         setProductList(data)
      };
      getProducts();
   }, [])
   
  

   return (
      <>
         <Header setIsOpen={setIsOpen} cartList={cartList} setSearch={setSearch} />
         <main className={styles.main}>
            <ProductList  addItem={addItem} productsSearch={listSearch} />
            {isOpen ? <CartModal  cartList={cartList} deleteItem={deleteItem} listSearch={listSearch} deleteAllItens={deleteAllItens} setIsOpen={setIsOpen} /> : null}
         </main>
      </>
   );
};

