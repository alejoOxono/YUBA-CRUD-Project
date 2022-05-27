import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Insert from "../Insert/Insert"
import Read from "../Read/Read"
import './landpage.css';


function LandPage() {
  return (
        <div className="all-container">

            <div className="header-container">
            <Header />
            </div>

            <div className="insert-container">
            <Insert />
            </div>

            <div className="read-container">
            <Read />
            </div>

            <div className="footer-coontainer">
            <Footer />
            </div>

        </div>
    )
}

export default LandPage