import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
const API = process.env.REACT_APP_API_URL;

console.log(API);
function App() {
  
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route exact path ="/laptops" element={<Index />} />
        <Route exact path ="/laptops/:id" element={<Show />} />
        <Route exact path ="/laptops/:id/edit" element={<Edit />} />
        <Route exact path ="/laptops/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
