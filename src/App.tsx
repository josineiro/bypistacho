import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Hero />
        <Contact />
      </main>
    </div>
  );
}

export default App;
