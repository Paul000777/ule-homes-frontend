// import "./App.css";
// import { Routes, Route } from 'react-router-dom';  // New import
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Partners from "./components/Partners";
// import RentCards from "./components/RentCards";
// import Testimonial from "./components/Testimonial";
// import CustomersFAQ from "./components/FAQ";
// import CTAFooter from "./components/CTAFooter";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Hero />
//             <Partners />
//             <RentCards />
//             <Testimonial />
//             <CustomersFAQ />
//             <CTAFooter />
//           </>
//         } />
//         <Route path="/about" element={
//           <div>
//             <h1>About Us</h1>
//             <p>This is the about page. Add your content here!</p>
//           </div>
//         } />
//       </Routes>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    
    </>
  );
}

export default App;