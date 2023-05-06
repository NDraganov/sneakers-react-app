import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div>
        <Navigation />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
