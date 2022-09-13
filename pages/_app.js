import '../styles/globals.css'
import Context from "./component/main"
import {useState,useEffect} from "react";
import Nav from './Nav'
function MyApp({ Component, pageProps ,children}) {
  const tab=[{produit:"p1",prix:"10dt"},
  {produit:"p1",prix:"10dt"},
  {produit:"p2",prix:"20dt"},
  {produit:"p3",prix:"60dt"},
  {produit:"p4",prix:"10dt"},
  {produit:"p5",prix:"80dt"},
  {produit:"p6",prix:"150dt"},
  {produit:"p7",prix:"50dt"},
       ]
  const [cart ,setCart]=useState([])
  const [carts ,setCarts]=useState([])
  const [item,setItem]=useState(0);
  const [test,setTest]=useState(false)
  const addtocart=(prod,prix)=>{
    setCart((e)=>[...e,{prod,prix}]);
    localStorage.setItem("item",cart.length+1)
    setItem(cart.length+1)
   localStorage.setItem("cart",JSON.stringify(cart))
  }
  useEffect(() => {
   console.error('useEffect');
   setCarts(JSON.parse(localStorage.getItem('cart')))
    //localStorage.clear()
  }, [])
  console.log(carts)
  return  <Context.Provider value={{item,setItem,tab,addtocart,carts}}>
           {children}
           <Nav/>
           <Component {...pageProps} />
           </Context.Provider>
}

export default MyApp
