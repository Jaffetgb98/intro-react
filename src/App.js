import logo from './logo.svg';
import './App.css';
import Tarjeta from './Tarjeta';
import Tarjeta2 from './Tarjeta2';
import Tarjeta3 from './Tarjeta3';
function App() {
  return (
    <div className="App">
      <h1>Lol</h1>
      <Tarjeta descripcion={"Kennen"}/>
      <Tarjeta2 descripcion={"Brand"}/>
      <Tarjeta3 descripcion={"Fizz"}/>
    </div>

  );
}
export default App;
