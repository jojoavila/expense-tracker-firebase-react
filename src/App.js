import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { Recetario } from "./pages/recipes/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/recetario" element={<Recetario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
