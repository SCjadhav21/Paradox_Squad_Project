
import Footer from "./Footer"
import Navbar from "./Navbar"
const Layouts = ({children}) => {
  return (
    <>
      <Navbar/>
      <main>
       { children}
      </main>
      <Footer/>
    </>
  )
}

export default Layouts
