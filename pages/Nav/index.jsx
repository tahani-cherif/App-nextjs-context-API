import { BoxNav, BoxRight } from "./index.style"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {useItem} from "../component/main"
import Link from 'next/link';
export default function Nav() {
  const { item} = useItem()
 
  console.log(item)
  return (
    <BoxNav>
      <p>Home</p>
      <Link href="/cart">
    <BoxRight style={{cursor: "url(hand.cur), pointer"}}>
    <p>{item}</p>
    <AiOutlineShoppingCart style={{marginTop: "21px",marginLeft: "15px"}}/>
      </BoxRight>
      </Link>
    </BoxNav>
  )
}