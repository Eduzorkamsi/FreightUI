import "./App.css";
import Content from "./components/Content";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-grey App">
      <Navbar />
      <Dashboard />
      <Content />
    </div>
  );
}

export default App;
