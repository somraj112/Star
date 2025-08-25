// import React from "react";
// import ClickSpark from "../ClickSpark/ClickSpark";

// const Header = () => {
//   return (
//     <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 
//       bg-[#1a1a1a]/80 backdrop-blur-lg border border-transparent 
//       rounded-2xl shadow-[0_0_20px_#8b5cf6] 
//       bg-gradient-to-r from-[#ff00ff]/10 via-transparent to-[#00ffff]/10 
//       px-6 py-3 flex items-center justify-between min-h-[64px]">
      
//       <ClickSpark
//         sparkColor="#fff"
//         sparkSize={10}
//         sparkRadius={15}
//         sparkCount={8}
//         duration={400}
//       >
//         <div className="flex items-center gap-3 w-full justify-between">
//           {/* Logo */}
//           <span className="text-4xl font-bold bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#8b5cf6] 
//             bg-clip-text text-transparent drop-shadow-[0_0_10px_#00ffff]">
//             UniLyfe
//           </span>

//           {/* Buttons */}
//           <div className="flex gap-3 flex-shrink-0">
//             <button
//               className="relative px-6 py-3 bg-[#141414] text-[#00ffff] border border-[#00ffff] rounded-lg 
//               hover:shadow-[0_0_20px_#00ffff,0_0_40px_#00ffff] transition-all duration-300"
//             >
//               Login
//             </button>

//             <button
//               className="relative px-6 py-3 bg-[#141414] text-[#ff00ff] border border-[#ff00ff] rounded-lg 
//               hover:shadow-[0_0_20px_#ff00ff,0_0_40px_#ff00ff] transition-all duration-300"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </ClickSpark>
//     </nav>
//   );
// };

// export default Header;

import React from "react";
import ClickSpark from "../ClickSpark/ClickSpark";

const Header = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 
      bg-[#1a1a1a]/80 p-6 border border-transparent rounded-2xl 
      shadow-[0_0_25px_#8b5cf6] backdrop-blur-lg flex items-center justify-between min-h-[64px]">
      
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="flex items-center gap-3 w-full justify-between">
          
          {/* Logo */}
          <span className="text-4xl font-extrabold bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_10px_#ff00ff]">
            UniLyfe
          </span>
          
          {/* Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            {/* Login - outlined neon */}
            <button
              className="relative px-6 py-2 rounded-lg text-[#00ffff] border border-[#00ffff] 
              hover:shadow-[0_0_15px_#00ffff] transition duration-300"
            >
              Login
            </button>

            {/* Sign Up - glowing filled neon */}
            <button
              className="relative px-6 py-2 rounded-lg bg-[#ff00ff] text-white font-semibold 
              shadow-[0_0_20px_#ff00ff] hover:shadow-[0_0_35px_#ff00ff] 
              transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </ClickSpark>
    </nav>
  );
};

export default Header;
