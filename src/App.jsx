import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Subscribe from "./components/Home/main/Subscribe"
import CategoryUser from "./components/Home/main/CategoryUser"

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:name" element={<CategoryProduct />} />
        </Routes>
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
