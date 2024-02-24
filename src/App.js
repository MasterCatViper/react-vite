import "./App.css";
import Navbar from "./components/e-commerce/navbar/Navbar";
import ProductList from "./components/e-commerce/productList/ProductList.js";
//import Child2 from "./components/Child2";
//import Child1 from "./components/Child1";
// import CreateNote from "./components/notes/CreateNote";
// import ListNotes from "./components/notes/ListNotes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
