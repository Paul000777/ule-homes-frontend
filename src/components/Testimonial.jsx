// import React from "react";
// import "../App.css";
// import bigImg from "../assets/testimonial-big.npg";
// import smallImg1 from "../assets/testimonial-small-1.npg";
// import smallImg2 from "../assets/testimonial-small-2.npg";

// function Testimonial() {
//   return (
//     <section className="testimonial-section">
//       <h2 className="testimonial-title">
//         Why Our Customers <br /> Love Ule Homes
//       </h2>

//       <div className="testimonial-container">
//         {/* Big Card */}
//         <div className="testimonial-card big-card">
//           <img src={bigImg} alt="customer testimonial" />

//           <div className="testimonial-overlay">
//             <p>
//               “Ule Homes helped to take the burden of first time
//               resettlement rent package off.”
//             </p>
//           </div>

//           <div className="testimonial-info">
//             <h4>Jane Smith</h4>
//             <span>Lagos • Model 3</span>
//           </div>
//         </div>

//         {/* Small Card 1 */}
//         <div className="testimonial-card">
//           <img src={smallImg1} alt="customer testimonial" />

//           <div className="testimonial-info">
//             <h4>Jane Smith</h4>
//             <span>Lagos • Model 2</span>
//           </div>
//         </div>

//         {/* Small Card 2 */}
//         <div className="testimonial-card">
//           <img src={smallImg2} alt="customer testimonial" />

//           <div className="testimonial-info">
//             <h4>Jane Smith</h4>
//             <span>Lagos • Model 2</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonial;
import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";

function Testimonial() {
  return (
    <section className="customer-love">
      {/* SECTION HEADING */}
      <h2 className="customer-love-title">
        Why Our Customers <br /> Loves Ule Homes
      </h2>

      {/* CARDS */}
      <div className="customer-cards">

        {/* CARD 1 */}
        <div className="customer-card">
          <div className="image-wrapper">
            <img src={customer1} alt="Jane Smith" className="customer-img" />

            <div className="play-icon">▶</div>

            <div className="testimonial-overlay">
              “Ule Homes helped to take the burden of first time resettlement rent package off.”
            </div>
          </div>

          <div className="customer-meta">
            <p className="customer-name">Jane Smith</p>
            <p className="customer-location">Lagos • Model 2</p> {/* Changed to • */}
          </div>
        </div>

        {/* CARD 2 */}
        <div className="customer-card">
          <div className="image-wrapper">
            <img src={customer2} alt="Jane Smith" className="customer-img" />

            <div className="play-icon">▶</div>

            <div className="testimonial-overlay">
              “Ule Homes helped to take the burden of first time resettlement rent package off.”
            </div>
          </div>

          <div className="customer-meta">
            <p className="customer-name">Jane Smith</p>
            <p className="customer-location">Lagos • Model 2</p> {/* Changed to • */}
          </div>
        </div>

        {/* CARD 3 */}
        <div className="customer-card">
          <div className="image-wrapper">
            <img src={customer3} alt="Jane Smith" className="customer-img" />

            <div className="play-icon">▶</div>

            <div className="testimonial-overlay">
              “Ule Homes helped to take the burden of first time resettlement rent package off.”
            </div>
          </div>

          <div className="customer-meta">
            <p className="customer-name">Jane Smith</p>
            <p className="customer-location">Lagos • Model 2</p> {/* Changed to • */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonial;