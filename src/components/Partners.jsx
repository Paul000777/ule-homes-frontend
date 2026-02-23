// import "../App.css";

// function Partners() {
//   return (
//     <section className="partners-section">

//       <p className="partners-heading">As featured in</p>

//       <div className="partners">
//         <img src="/src/assets/techcabal.png" alt="TechCabal" />
//         <img src="/src/assets/lsetf.png" alt="LSETF" />
//         <img src="/src/assets/techpoint.png" alt="TechPoint" />
//         <img src="/src/assets/antler.png" alt="Antler" />
//         <img src="/src/assets/nhm.png" alt="NHM" />
//         <img src="/src/assets/techparley.png" alt="TechParley" />
//       </div>
//     </section>
//   );
// }

// export default Partners;

import "../App.css";

import techcabal from "../assets/techcabal.png";
import lsetf from "../assets/lsetf.png";
import techpoint from "../assets/techpoint.png";
import antler from "../assets/antler.png";
import nhm from "../assets/nhm.png";
import techparley from "../assets/techparley.png";

function Partners() {
  return (
    <section className="partners-section">
      {/* Small heading */}
      <p className="partners-heading">As featured in</p>

      {/* Logos row */}
      <div className="partners">
        <img src={techcabal} alt="TechCabal" />
        <img src={lsetf} alt="LSETF" />
        <img src={techpoint} alt="TechPoint" />
        <img src={antler} alt="Antler" />
        <img src={nhm} alt="NHM" />
        <img src={techparley} alt="TechParley" />
      </div>
    </section>
  );
}

export default Partners;