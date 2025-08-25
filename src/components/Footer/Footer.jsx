import React from "react";
import ClickSpark from "../ClickSpark/ClickSpark";
const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-4 fixed left-0 bottom-0 w-full">
    <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        © {new Date().getFullYear()} Star. All rights reserved.
      </ClickSpark>
  </footer>
);

export default Footer;