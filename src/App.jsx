import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Subscribe from "./components/Home/main/Subscribe"
import CategoryProduct from "./pages/CategoryProduct"
import NotFound from "./pages/NotFound"
import Product from "./components/Home/main/Product"

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<CategoryProduct />} />
          <Route path="product/:name" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
