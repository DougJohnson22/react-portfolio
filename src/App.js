import NavBar from "./components/NavBar/index"
import Landing from "./pages/Landing/index"
import History from "./pages/History/index"
import Contact from "./pages/Contact/index"
import Portfolio from "./pages/Portfolio/index"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component= {Landing} />
        <Route exact path="/history" component= {History} />
        <Route exact path="/contact" component= {Contact} />
        <Route exact path="/portfolio" component= {Portfolio} />
      </div>
    </Router>
  );
}

export default App;
