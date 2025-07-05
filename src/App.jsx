import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import MeetBrenda from './pages/Founder'
import ProductsComponent from './pages/Shop'
import About from './pages/About'
import CoachingPackages from './pages/Coaching'
import BlogPage from './pages/Blogs'
import CommunityPage from './pages/Community'
import ContactPage from './pages/Contact'



export default function Router() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/founder" element={<MeetBrenda/>}/>
        <Route path="/shop" element={<ProductsComponent/>}/>
        <Route path="/coaching" element={<CoachingPackages/>}/>
        <Route path="/blogs" element={<BlogPage/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
