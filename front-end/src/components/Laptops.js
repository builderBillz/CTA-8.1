import axios from "axios"
import { useEffect, useState } from "react"
import Laptop from "./Laptop"



function Laptops() {

    const URL = process.env.REACT_APP_API_URL
    const [laptops, setLaptops] = useState([])

    useEffect(() => {
        axios
        .get(`${URL}/laptops`)
        .then((response) =>{
            setLaptops(response.data);
        })
        .catch((error) => console.log("catch", error))
    },[URL])

    return(
        <div className="laptops">
            <section>
                {laptops.map((laptop) =>{
                    return <Laptop key={laptop.id} laptop={laptop} />
                })}
            </section>
        </div>
    )
}

export default Laptops