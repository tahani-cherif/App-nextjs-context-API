import {useItem} from "../component/main"
export default function Cart() {
  const {carts } = useItem()
  console.log(carts[1])
    return (
        <div style={{display: "grid",justifyContent: "space-between",alignContent: "center",
            gridTemplateColumns: "repeat(3, 1fr)",marginTop: "51px",marginLeft: "149px"}}>
         { 
             carts.map((e,i)=>(<div style={{width: "221px"}}>
                <img src='./produit.png'/>
                 <p key={i} style={{textAlign:"center"}}>Nom de produit :{e.prod}</p>
                <div style={{display: "flex",justifyContent: "space-around"}}>
                 <p >prix :{e.prix}</p>
                </div>
                 </div>
             ))
           }
              
      </div>
    )
  }  