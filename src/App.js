//import logo from './logo.svg';
// import './App.css';
import Logo from "./Imagen/logo.png";
import "./index.css"
import Nav from "./Componentes/Nav";

function App() {
  return (
    <div className="App">
      <header>
        <div className="encabezado">
          <h1>TAKE AWAY</h1> 
          <img src={Logo} alt="" />
        </div>
      </header>
      <Nav />
    </div>
  );
}

export default App;
