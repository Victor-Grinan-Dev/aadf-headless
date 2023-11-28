import Navbar from "./components/layout/Navbar";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/layout/Footer";

function App() {
  console.log(process.env.REACT_APP_DISCOURSE_API_KEY); //not working!

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
