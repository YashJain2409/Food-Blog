import "./App.css";
import About from "./Sections/About";
import Articles from "./Sections/Articles";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
