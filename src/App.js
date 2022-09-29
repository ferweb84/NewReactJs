import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Productos from './components/Productos/Productos';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting = "Bienvenido a Buy & Hold "/>
        <Productos/>
        <Footer/>
    </div>
  );
}

export default App;
