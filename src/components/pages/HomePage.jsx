// // import "../../App.css";
// // import RentCards from "../../components/RentCards";
// // import Hero from "../../components/Hero";
// // import Testimonial from "../../components/Testimonial";
// // import FAQ from "../../components/FAQ";
// // import CTAFooter from "../../components/CTAFooter";


// // function HomePage() {
// //   return (
// //     <div>
// //       <Hero />
// //       <RentCards />
// //       <Testimonial />
// //       <FAQ />
// //       <CTAFooter/>
// //     </div>
// //   );
// // }

// // export default HomePage;
// import "../../App.css";
// import RentCards from "../../components/RentCards";
// import Hero from "../../components/Hero";
// import CustomersLove from "../../components/CustomersLove";
// import FAQ from "../../components/FAQ";
// import CTAFooter from "../../components/CTAFooter";

// function HomePage() {
//   return (
//     <div>
//       <Hero />
//       <RentCards />
//       <CustomersLove />
//       <FAQ />
//       <CTAFooter/>
//     </div>
//   );
// }

// export default HomePage;

import "../../App.css";
import RentCards from "../../components/RentCards";
import Hero from "../../components/Hero";
import Testimonial from "../Testimonial";
import FAQ from "../../components/FAQ";
import CTAFooter from "../../components/CTAFooter";
import Partners from "../../components/Partners";

function Homepage() {
  return (
    <div>
      <Hero />
      <Partners />
      <RentCards />
      <Testimonial />
      <FAQ />
      <CTAFooter/>
    </div>
  );
}

export default Homepage;