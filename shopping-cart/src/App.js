import "./App.css";
import Catalogue from "./components/Catalogue";
import ShoppingCart from "./components/ShoppingCart";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContextProvider";
import "./styles/Globals.css";

function App() {
  return (
    <div className="appContainer">
      <ShoppingCartContextProvider>
        <Catalogue />
        <ShoppingCart />
      </ShoppingCartContextProvider>
    </div>
  );
}

export default App;
