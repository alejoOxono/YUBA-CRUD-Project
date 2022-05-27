import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Insert from "../Insert/Insert"
import Read from "../Read/Read"


function LandPage() {
  return (
        <React.Fragment>
            <Header />
            <Insert />
            <Read />
            <Footer />
        </React.Fragment>
    )
}

export default LandPage