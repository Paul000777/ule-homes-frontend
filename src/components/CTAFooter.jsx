// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import houseImg from "../assets/house.png"; 
// import { useNavigate } from "react-router-dom";

// function CTAFooter() {
//   const navigate = useNavigate();

//   // Scroll to top when logo is clicked
//   const scrollToTop = () => {
//     navigate("/");
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 150);
//   };

//   return (
//     <>
//       {/* CTA SECTION */}
//       <section className="cta-section">
//         <div className="cta-container">

//           <div className="cta-left">
//             <h2>Ready to Take the First Step?</h2>
//             <p>
//               Home ownership is no longer a dream,<br />
//               It’s a form away.
//             </p>
//             <button className="cta-btn">
//               Start your application
//             </button>
//           </div>

//           <div className="cta-right">
//             <img src={houseImg} alt="House and keys" />
//           </div>

//         </div>
//       </section>

//       {/* FOOTER  */}
//       <footer className="footer">
//         <div className="footer-container">

//           {/* LEFT SIDE */}
//           <div className="footer-left">
//             <img
//               src="/src/assets/ule-logo.png"
//               alt="ULE Homes Logo"
//               className="footer-logo"
//               onClick={scrollToTop}   // <-- Added click handler
//             />
//             <p>
//               Empowering you with affordable housing
//               finance. Join Ule Homes today
//             </p>

//             <div className="social-icons">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FaFacebookF />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                 <FaXTwitter />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedinIn />
//               </a>
//               <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
//                 <FaTiktok />
//               </a>
//             </div>
//           </div>

//           {/* RIGHT LINKS */}
//           <div className="footer-links">
//             <div>
//               <h4>Company</h4>
//               <a href="#">About Ule</a>
//               <a href="#">How it works</a>
//               <a href="#">FAQs</a>
//               <a href="#">Contact</a>
//               <a href="#">Careers</a>
//             </div>

//             <div>
//               <h4>Product</h4>
//               <a href="#">Ule for property managers</a>
//               <a href="#">Ule for companies</a>
//               <a href="#">Eligibility checker</a>
//               <a href="#">Loan calculator</a>
//             </div>

//             <div>
//               <h4>Security</h4>
//               <a href="#">Terms & conditions</a>
//               <a href="#">Privacy policy</a>
//               <a href="#">Cookies policy</a>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>All Rights Reserved. 2026 Ule Homes</p>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default CTAFooter;


import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import houseImg from "../assets/house.png"; 
import { useNavigate } from "react-router-dom";

function CTAFooter() {
  const navigate = useNavigate();

  // Scroll to top when logo is clicked
  const scrollToTop = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      {/* CTA SECTION */}
      <section id="cta-footer" className="cta-section">   {/* ✅ Added id */}
        <div className="cta-container">

          <div className="cta-left">
            <h2>Ready to Take the First Step?</h2>
            <p>
              Home ownership is no longer a dream,<br />
              It’s a form away.
            </p>
            <button className="cta-btn">
              Start your application
            </button>
          </div>

          <div className="cta-right">
            <img src={houseImg} alt="House and keys" />
          </div>

        </div>
      </section>

      {/* FOOTER  */}
      <footer className="footer">
        <div className="footer-container">

          {/* LEFT SIDE */}
          <div className="footer-left">
            <img
              src="/src/assets/ule-logo.png"
              alt="ULE Homes Logo"
              className="footer-logo"
              onClick={scrollToTop}   // ✅ Click to go home + scroll top
            />
            <p>
              Empowering you with affordable housing
              finance. Join Ule Homes today
            </p>

            {/* ✅ Added id for social icons */}
            <div id="social-icons-section" className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="footer-links">
            <div>
              <h4>Company</h4>
              <a href="#">About Ule</a>
              <a href="#">How it works</a>
              <a href="#">FAQs</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>

            <div>
              <h4>Product</h4>
              <a href="#">Ule for property managers</a>
              <a href="#">Ule for companies</a>
              <a href="#">Eligibility checker</a>
              <a href="#">Loan calculator</a>
            </div>

            <div>
              <h4>Security</h4>
              <a href="#">Terms & conditions</a>
              <a href="#">Privacy policy</a>
              <a href="#">Cookies policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>All Rights Reserved. 2026 Ule Homes</p>
        </div>
      </footer>
    </>
  );
}

export default CTAFooter;
