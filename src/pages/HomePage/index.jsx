import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import styles from "./style.module.scss"



export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const LocalStorageCar = localStorage.getItem("@PRODUCTSCAR")
   const [cartList, setCartList] = useState(LocalStorageCar ? JSON.parse(LocalStorageCar) : []);
   const [search, setSearch] = useState("")

   useEffect(() => {
       localStorage.setItem("@PRODUCTSCAR",  JSON.stringify(cartList))
     }, [cartList])



   const addItem = (addProduct) => {
      if(!cartList.some(product => product.id === addProduct.id)){
         setCartList([...cartList, addProduct])
         toast.success("Produto adicionado no carrinho")
      } else {
         toast.error("Esse produto já foi adicionado")
      }
      
   }


   const deleteItem = (removeItem) => {
      const newProductsCard = cartList.filter(product => product.id !== removeItem)
      setCartList(newProductsCard)
      toast.warn("Produto excluído do carrinho")
   }

   const deleteAllItens = () => {
      setCartList([])

      toast.warn("Todos os produtos foram excluídos do carrinho")
   }

   const productsSearch = productList.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()) || (product.category.toLowerCase().includes(search.toLowerCase().trim())))

   const listSearch = search ? productsSearch : productList;

   

   useEffect(() => {
      const getProducts = async () => {
         const {data} = await api.get(`products`)
         setProductList(data)
      }
      getProducts()
   }, [])
   
  

   return (
      <>
         <Header cartList={cartList} setSearch={setSearch} />
         <main>
            <ProductList  addItem={addItem} productsSearch={listSearch} />
            <CartModal cartList={cartList} deleteItem={deleteItem} listSearch={listSearch} deleteAllItens={deleteAllItens} />
         </main>
      </>
   );
};

// useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva