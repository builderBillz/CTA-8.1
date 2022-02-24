const { Link } = require("react-router-dom");

function NavBar(){
    return (
        <div className= "navBar">
            <button>
                <Link to="/">Home Page</Link>
            </button>
            <button>
                <Link to="/laptops">Laptops</Link>   
            </button>
            <button>
            <Link to="/laptops/new">Add a Laptop</Link>
            </button>
        </div>
    )
}

export default NavBar