import { Link } from "react-router-dom"

function Laptop({laptop,id}) {

    if(laptop.featured){
        return(
            <div>
                <section>
                    <Link to={`/laptops/${laptop.id}`}>                    
                    <h5>{laptop.name}</h5>
                    <img src={laptop.image} alt={laptop.name} /> 
                    <p>Rating: {laptop.rating}/5</p>
                    <p>Price: ${laptop.price}</p>
                    <p>Top Seller: ⭐️⭐️⭐️⭐️⭐️⭐️⭐️</p>
                    </Link>
                </section>
            </div>
        )    
    }
    return(
        <div>
            <section>
                <Link to={`/laptops/${laptop.id}`}>                    
                <h5>{laptop.name}</h5>
                <img src={laptop.image} alt={laptop.name} /> 
                <p>Rating: {laptop.rating}/5</p>
                <p>Price: ${laptop.price}</p>
                </Link>
            </section>
        </div>
    )
}

export default Laptop