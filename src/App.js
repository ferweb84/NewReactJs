import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Productos from './components/Productos/Productos';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting = "Bienvenido a Buy & Hold"/>
        <Productos/>

    </div>
  );
}

export default App;
