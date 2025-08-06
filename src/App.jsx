import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import MeetBrenda from './pages/Founder'
import ProductsComponent from './pages/Shop'
import About from './pages/About'
import CoachingPackages from './pages/Coaching'
import BlogPage from './pages/Blogs'

import ContactPage from './pages/Contact'
import QuizResults from './pages/Discovery'
import BlogDetail from './pages/BlogDetails'
import CheckoutPage from './pages/Cart'
import PersonalEmpowerment from './pages/services/Personal'
import CareerCoaching from './pages/services/CareerCoaching'
import EntrepreneurialCoaching from './pages/services/Enterperneural'
import OneOnOneCoaching from './pages/services/OneOnOne'
import GroupCoaching from './pages/services/GroupCaching'
import FAQPage from './pages/Faqs'
import PrivacyPolicy from './pages/Privacy-Policy'
import TermsAndConditions from './pages/Terms'
import WhatsAppFloat from './components/FloatingWA'
import PaymentSuccess from './pages/Successpage'





export default function Router() {
  return (
    <BrowserRouter>
    <WhatsAppFloat/>
    <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/founder" element={<MeetBrenda/>}/>
        <Route path="/shop" element={<ProductsComponent/>}/>
        <Route path="/coaching" element={<CoachingPackages/>}/>
        <Route path="/blogs" element={<BlogPage/>}/>
        <Route path="/blog/:id" element={<BlogDetail />} />
        
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/discovery" element={<QuizResults/>}/>
        <Route path="/cart" element={<CheckoutPage/>}/>
        <Route path="/personal" element={<PersonalEmpowerment/>}/>
        <Route path="/careercoaching" element={<CareerCoaching/>}/>
        <Route path="/enterpreneur" element={<EntrepreneurialCoaching/>}/>
        <Route path="/one-one" element={<OneOnOneCoaching/>}/>
        <Route path="/group-coaching" element={<GroupCoaching/>}/>
        <Route path="faqs" element={<FAQPage/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>
        <Route path="/payment-success" element={<PaymentSuccess/>}/>

        
        
      </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}
