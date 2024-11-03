import Link from 'next/link'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">cyber</div>
      <div className="search">
      <input type="text" placeholder="Search" />
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
      </nav>
      <div className="icons">
        <span><FaRegHeart /></span>
        <span><TiShoppingCart /></span>
        <span><FaRegUser /></span>
      </div>
    </header>
  )
}