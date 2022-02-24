import axios from "axios";

const { useState } = require("react");
const { useNavigate } = require("react-router-dom");

function NewLaptop(){

    const URL = process.env.REACT_APP_API_URL
    const [laptop, setLaptop] = useState({
        name: "",
        description: "",
        price: 0,
        rating: 0,
        featured: true,
        image:""
    });
    const navigate = useNavigate()


    const handleTextChange = (event) =>{
        setLaptop({...laptop, [event.target.id]: event.target.value})
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        axios
        .post(`${URL}/laptops`, laptop)
        .then(() =>
        {navigate(`/laptops/`)})
    }

    const handleCheckbox = () => {
        setLaptop({ ...laptop, featured: !laptop.featured });
    };

    return (

        
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                value={laptop.name}
                onChange={handleTextChange}
                placeholder="Which laptop is this"
                required
                />
                <label htmlFor="image">Image URL:</label>
                <input
                id="image"
                type="text"
                value={laptop.image}
                onChange={handleTextChange}
                placeholder="if unavailable leave blank"
                />
                <label htmlFor="description">Specs:</label>
                <input
                id="description"
                type="text"
                value={laptop.description}
                onChange={handleTextChange}
                placeholder="describe the laptop"
                />
                <label htmlFor="description">Rating:</label>
                <input
                id="rating"
                type="number"
                value={laptop.rating}
                onChange={handleTextChange}
                placeholder="rating from 0-5"
                /> out of 5
                <label htmlFor="Price">Price: $</label>
                <input
                id="price"
                type="number"
                value={laptop.price}
                onChange={handleTextChange}
                placeholder="how much $$$$$"
                />
                <label htmlFor="featured">Top Seller</label>
                <input
                id="featured"
                type="checkbox"
                value={laptop.featured}
                onChange={handleCheckbox}
                />
                <input className="button" type="submit" />
            </form>

        </div>
    )
}

export default NewLaptop