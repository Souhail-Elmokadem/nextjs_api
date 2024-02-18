import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export default function layout({children}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}
