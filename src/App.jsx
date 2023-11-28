import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  console.log(process.env.REACT_APP_DISCOURSE_API_KEY); //not working!

  const headers = {
    "Content-Type": "application/json",
    "Api-Key":
      "71f97d255bcdfbac20e6cd85d037131e4757ff097f8cc5bf793ae94fc605edae",
  };
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
