import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditLaptop(){

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
    const {id} = useParams()

    useEffect(() => {
        axios
        .get(`${URL}/laptops/${id}`)
        .then((response) =>{
            setLaptop(response.data);
        })
        .catch((error) => console.log("catch", error))
    }, [URL, id]);

    const handleTextChange = (event) =>{
        setLaptop({...laptop, [event.target.id]: event.target.value})
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        axios
        .put(`${URL}/laptops/${id}`, laptop)
        .then(() =>
        {navigate(`/laptops/${id}`)})
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
                <label htmlFor="featured">Top Seller</label>
                <input
                id="featured"
                type="checkbox"
                value={laptop.featured}
                onClick={handleCheckbox}
                />
                <input className="button" type="submit" />
            </form>

        </div>
    )
}

export default EditLaptop;