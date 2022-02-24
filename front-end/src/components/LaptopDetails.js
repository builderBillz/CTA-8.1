import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function LaptopDetails() {
    const URL = process.env.REACT_APP_API_URL
    const [laptop, setLaptop] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

   

    useEffect(() => {
        axios
        .get(`${URL}/laptops/${id}`)
        .then((response) =>{
            setLaptop(response.data);
        })
        .catch((error) => console.log("catch", error))
    }, [URL, id]);

    const handleDelete = () => {
        axios
        .delete(`${URL}/laptops/${id}`)
        .then(() => {
            navigate("/laptops")
        });
    };
    if(laptop.featured){
        
        return(
            <div className="details">
                <section>
                    <h5>{laptop.name}</h5>
                    <img src={laptop.image} alt={laptop.name} /> 
                    <p>Specs: {laptop.description}</p>
                    <p>Rating: {laptop.rating}/5</p>
                    <p>price:$ {laptop.price}</p>
                    <p>Top Seller: ⭐️⭐️⭐️⭐️⭐️⭐️⭐️</p>
                </section>
                <br />
                <div>
                    <Link to={'/laptops'}>
                    <button>Back to All</button>
                    </Link>
                </div>
                <br />
                <div>
                    <Link to={`/laptops/${id}/edit`}>
                    <button>Edit Details</button>
                    </Link>
                </div>
                <br />
                <div>
                    <button onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        )
    } else{
        
        return(
            <div className="details">
                <section>
                    <h5>{laptop.name}</h5>
                    <img src={laptop.image} alt={laptop.name} /> 
                    <p>Specs: {laptop.description}/5</p>
                    <p>Rating: {laptop.rating}/5</p>
                    <p>price:$ {laptop.price}</p>
                </section>
                <br />
                <div>
                    <Link to={'/laptops'}>
                    <button>Back to All</button>
                    </Link>
                </div>
                <br />
                <div>
                    <Link to={`/laptops/${id}/edit`}>
                    <button>Edit Details</button>
                    </Link>
                </div>
                <br />
                <div>
                    <button onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default LaptopDetails