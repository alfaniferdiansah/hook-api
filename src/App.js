import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './hook-api/Navbar';
import Content from "./hook-api/Content";



function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
