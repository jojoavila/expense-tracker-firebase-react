import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { expenseTracker } from "./pages/expenseTracker/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expenseTracker" element={<expenseTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
