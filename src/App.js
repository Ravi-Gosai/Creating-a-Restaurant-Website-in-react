import Header from "./Components/Layout/Header";
import './App.css'
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
   <>
   <Cart></Cart>
   <Header></Header>
   <main>
    <Meals></Meals>
   </main>
   </>
  );
}

export default App;
