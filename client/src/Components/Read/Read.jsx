import React, { useEffect, useState } from "react"
import readRecords from "../../Modules/readRecords"
import Table from "../Table/Table"

function Read() {

    const [data, setData] = useState()

    useEffect(() => {
        readRecords(setData)
    }, [])
    

    return (
        <React.Fragment>
            <Table data={data} />
        </React.Fragment>
    )
}

export default Read