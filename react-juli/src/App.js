import logo from './logo.svg';
import './App.css';
import BotonCustomizable from './components/BotonRojo/BotonRojo'

function App() {

  const nombre = () => {
    return "Joaco"
  }

  return (
    <div className="App">
      <BotonCustomizable texto={nombre()} fondo="white"></BotonCustomizable>
      <BotonCustomizable fondo="green" texto="asdsad" medida="2" />
      <BotonCustomizable fondo="black" texto="Marta" medida="2"/>
      <BotonCustomizable fondo="blue" texto="Carlos"/>
      <BotonCustomizable texto="Juli" fondo="red" />
      <BotonCustomizable texto="Juan" fondo="black" />
    </div>
  );
}

export default App;
