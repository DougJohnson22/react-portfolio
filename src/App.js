import NavBar from "./components/NavBar/index"
import Index from "./pages//Landing/index"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Index />
      </div>
    </Router>
  );
}

export default App;
