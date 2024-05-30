import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from './store';
import Home from "./Components/Home"

function App() {
  return (
    <Provider store={store}>

        <Home/>

    </Provider>

  );
}

export default App;
