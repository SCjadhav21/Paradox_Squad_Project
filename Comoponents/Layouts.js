
import Navbar from "./Navbar"
const Layouts = ({children}) => {
  return (
    <>
      <Navbar/>
      <main>
       { children}
      </main>
    </>
  )
}

export default Layouts
