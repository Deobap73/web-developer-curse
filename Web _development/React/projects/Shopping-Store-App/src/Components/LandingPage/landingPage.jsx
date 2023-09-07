// src/Components/LandingPage/LandingPage.jsx

import "./landingPage.css";
import emojiDeolindo from "../../assets/Emoji_Deolindo.png";
import emojiSalma from "../../assets/Emoji_Salmal.png";
import emojiThulasi from "../../assets/Emoji_Thulasi.png";

function LandingPage() {
  const githubUrls = {
    salma: "https://github.com/SalmaRepo",
    thulasi: "https://github.com/ThulasiSushma",
    deolindo: "https://github.com/Deobap73",
  };

  return (
    <div className="landPage">
      <h1 className="landPageWelcome">
        welcome to the Shopping car React Project By...
      </h1>
      <div className="one">
        <a href={githubUrls.salma} target="_blank" rel="noopener noreferrer">
          <img className="landPageImage" src={emojiSalma} alt="Image Salma" />
        </a>
        <h2>Salma Sheik</h2>
      </div>
      <div className="two">
        <a href={githubUrls.thulasi} target="_blank" rel="noopener noreferrer">
          <img
            className="landPageImage"
            src={emojiThulasi}
            alt="Image Thulasi"
          />
        </a>
        <h2>Thulasi Sushma</h2>
      </div>
      <div className="Three">
        <a href={githubUrls.deolindo} target="_blank" rel="noopener noreferrer">
          <img
            className="landPageImage"
            src={emojiDeolindo}
            alt="Image Deolindo"
          />
        </a>
        <h2>Deolindo Baptista</h2>
      </div>

      <div>
        <h2 className="landPageVisitUs">
          Visit Us in GitHub by clicking the images
        </h2>
      </div>
    </div>
  );
}

export default LandingPage;