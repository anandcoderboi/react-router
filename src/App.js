import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home'
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"



function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
