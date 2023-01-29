
import Image from "next/image";
import styles from "../styles/nav.module.css"
import Link from "next/link";
const Navbar = () => {
  return(
    <nav className={styles.ulcss}> 
    <ul> <li><Link href=""><Image src="/logo.jpg" width={100} height={10} /></Link></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/category">Category</Link></li>
        <li><Link href="/signin">SignIn</Link></li>
        <li><Link href="/signup">SignUp</Link></li>
        
    </ul>
    
  
   
   
 
  </nav>


  )
};

export default Navbar;
