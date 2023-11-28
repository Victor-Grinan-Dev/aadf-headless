import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Content from "./components/Content";

function App() {
  console.log(process.env.REACT_APP_DISCOURSE_API_KEY); //not working!

  // return (
  //   <div className="App">
  //     <Navbar />
  //     <Banner />
  //     <Content />
  //     <Footer />
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* all routes */}
          <Route index element={<Content />} />
        </Route>
        ;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
