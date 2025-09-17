import React from "react";
import { Link } from "react-router-dom";
import ClickSpark from "../ClickSpark/ClickSpark";

const Header = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <nav className="glass nav">
        <div className="nav-items">
          {/* Logo */}
          <span className="text-4xl font-extrabold bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_10px_#ff00ff]">
            UniLyf
          </span>

          {/* Auth Buttons */}
          <Link to="/login" className="nav-btn secondary">
            Login
          </Link>
          <Link to="/signup" className="nav-btn primary">
            Sign Up
          </Link>
        </div>
      </nav>
    </ClickSpark>
  );
};

export default Header;
