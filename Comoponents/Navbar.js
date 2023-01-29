import Image from "next/image";
import styles from "../styles/nav.module.css";
import Link from "next/link";
import { Center, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
const Navbar = () => {
  // return(
  //   <nav className={styles.ulcss}> 
  //   <ul> <li><Link href=""><Image src="/logo.jpg" width={100} height={10} /></Link></li>
  //       <li><Link href="/">Home</Link></li>
  //       <li><Link href="/about">About</Link></li>
  //       <li><Link href="/category">Category</Link></li>
  //       <li><Link href="/signin">SignIn</Link></li>
  //       <li><Link href="/signup">SignUp</Link></li>
        
  //   </ul>
    
  
   
   
 
  // </nav>
  
  return(
    <nav className={styles.ulcss}>
      <ul>
        {" "}
        <li>
          <Link href="/">
            <Image src="/logo.jpg" width={100} height={10} />
          </Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          {" "}
          <Menu>
            <MenuButton
              display="block"
              color="white"
              textAlign="center"
              alignItems="center"
              padding="14px 16px"
              textDecoration="none"
            >
              Category
            </MenuButton>

            <MenuList bgColor="black">
              <MenuItem bgColor="black">
                <Link href="/ssc">SSC COURSE</Link>
              </MenuItem>
              <MenuItem bgColor="black">
                <Link href="/iit">IIT COURSE</Link>
              </MenuItem>
              <MenuItem bgColor="black">
                <Link href="/upsc">UPSC COURSE</Link>
              </MenuItem>
              <MenuItem bgColor="black">
                <Link href="/nda">NDA COURSE</Link>
              </MenuItem>
              <MenuItem bgColor="black">
                <Link href="/neet">NEET COURSE</Link>
              </MenuItem>
              <MenuItem bgColor="black">
                <Link href="/banking">BANKING COURSE</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
        <li><Link href="/signin">SignIn</Link></li>
        <li><Link href="/signup">SignUp</Link></li>
      </ul>
    </nav>
  )
  
};

export default Navbar;
