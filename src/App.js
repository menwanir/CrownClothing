import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navbar";
import Authentication from "./routes/authentication/Auth";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout.js/Checkout";

// const Shop = () => {
//   return(
//     <div>
//       <h1> Shp element</h1>
//     </div>
//   )
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
