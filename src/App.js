import React from "react";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import ExplorePage from "./pages/explore_page";
import ProductPage from "./pages/product_page";

function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}> </Route>
        <Route path="/explore-page" element={<ExplorePage />} />
        <Route path="/productPage" element={<ProductPage/>} />
   
      </Routes>
      </BrowserRouter>
    </div>
   );
  }
  
  export default App;
