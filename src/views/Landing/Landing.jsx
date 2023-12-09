import React, { useState } from "react";
import { ShoeBox } from "../../components/shoeBox/shoeBox";

export default function Landing({ setLandingPage }) {
  const [animate, setAnimate] = useState(null);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setLandingPage(false);
    }, 2000);
  };

  return (
    <>
      <ShoeBox animate={animate} setLandingPage={setLandingPage} />;
      <div className="landing-containder">
        <button className="landingBtn" onClick={handleClick}>
          START HERE
        </button>
      </div>
    </>
  );
}
