import { BoxProd, Prod } from "./index.style";
import  {BsFillPlusSquareFill} from "react-icons/bs"
import {useItem} from "../component/main"
export default function Produit() {
  const { tab,addtocart} = useItem()

  return (
        <BoxProd>
          { 
            tab.map((e,i)=>(<Prod>
               <img src='./produit.png'/>
                <p key={i} style={{textAlign:"center"}}>Nom de produit :{e.produit}</p>
                <div style={{display: "flex",justifyContent: "space-around"}}>
                <p >prix :{e.prix}</p>
                <BsFillPlusSquareFill onClick={()=>{addtocart(e.produit,e.prix)}}  style={{textAlign:"center",marginTop:"20px" ,cursor: "url(hand.cur), pointer"}}/>
                </div>
                </Prod>
            ))
           }
        </BoxProd> 
  )
}