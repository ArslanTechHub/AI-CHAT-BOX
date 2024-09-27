// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { TypeAnimation } from "react-type-animation";

// const HomePage = () => {
//   const [typingStatus, setTypingStatus] = useState("human1");

//   // const testing = async () => {
//   //   await fetch("http://localhost:3000/api/test", {
//   //     credentials: "include",
//   //   });
//   // };

//   return (
//     <div className="relative flex flex-col items-center justify-between min-h-screen overflow-hidden homepage">
//       <img
//         src="/orbital.png"
//         alt=""
//         className="absolute bottom-0 left-0 opacity-5 animate-rotateOrbital z-[-1]"
//       />
//       <div className="content flex items-center gap-[50px] flex-grow w-full max-w-7xl mx-auto px-4 mt-[-50px]">
//         <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center left">
//           <h1 className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#217bfe] to-[#e55571]">
//             AI CHAT BOX
//           </h1>
//           <h2 className="text-xl font-semibold md:text-2xl">
//             Supercharge your creativity and productivity
//           </h2>
//           <h3 className="font-light max-w-[70%] text-sm md:text-base">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
//             sint dolorem doloribus, architecto dolor.
//           </h3>
//           <Link
//             to="/dashboard"
//             className="px-6 py-3 bg-[#217bfe] text-white rounded-[20px] text-sm mt-5 hover:bg-white hover:text-[#217bfe]"
//           >
//             Get Started
//           </Link>
//         </div>

//         <div className="flex items-center justify-center flex-1 h-full right">
//           <div className="imgContainer flex items-center justify-center bg-[#140e2d] rounded-[50px] w-[80%] h-[60%] relative">
//             <div className="bgContainer absolute top-0 left-0 w-full h-full overflow-hidden rounded-[50px]">
//               <div className="bg bg-[url('/bg.png')] opacity-20 w-[200%] h-full bg-auto animate-slideBg"></div>
//             </div>
//             <img
//               src="/bot.png"
//               alt=""
//               className="object-contain w-full h-full animate-botAnimate"
//             />
//             <div className="chat absolute bottom-[-20px] right-[-30px] flex items-center gap-2.5 p-2 md:p-3 bg-[#2c2937] rounded-lg">
//               <img
//                 src={
//                   typingStatus === "human1"
//                     ? "/human1.jpeg"
//                     : typingStatus === "human2"
//                     ? "/human2.jpeg"
//                     : "/bot.png"
//                 }
//                 alt=""
//                 className="object-cover w-4 h-4 rounded-full md:w-6 md:h-6"
//               />
//               <TypeAnimation
//                 sequence={[
//                   "Human: How can AI improve customer service?",
//                   2000,
//                   () => setTypingStatus("bot"),
//                   "Bot: AI can streamline support with faster response times and personalized interactions.",
//                   2000,
//                   () => setTypingStatus("human2"),
//                   "Human2: What industries benefit most from AI?",
//                   () => setTypingStatus("bot"),
//                   "Bot: AI is transforming healthcare, finance, retail, and more through automation and insights.",
//                   2000,
//                   2000,
//                   () => setTypingStatus("human1"),
//                 ]}
//                 wrapper="span"
//                 repeat={Infinity}
//                 cursor={true}
//                 omitDeletionAnimation={true}
//                 className="text-xs md:text-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full gap-2 mt-auto mb-4 terms">
//         <img src="/logo.png" alt="" className="w-3 h-3 md:w-4 md:h-4" />
//         <div className="links flex gap-2 text-[#888] text-[10px] md:text-xs">
//           <Link to="/">Terms of Service</Link>
//           <span>|</span>
//           <Link to="/">Privacy Policy</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen overflow-hidden homepage lg:relative lg:flex lg:flex-col lg:items-center lg:justify-between lg:min-h-screen lg:overflow-hidden">
      <img
        src="/orbital.png"
        alt=""
        className="absolute bottom-0 left-0 opacity-5 animate-rotateOrbital z-[-1] w-full lg:absolute lg:bottom-0 lg:left-0 lg:opacity-5 lg:animate-rotateOrbital lg:z-[-1]"
      />
      <div className="content flex flex-col items-center gap-8 flex-grow w-full max-w-7xl mx-auto px-4 py-8 md:flex-row md:items-start md:py-16 lg:content lg:flex lg:items-center lg:gap-[50px] lg:flex-grow lg:w-full lg:max-w-7xl lg:mx-auto lg:px-4 lg:mt-[-50px]">
        <div className="flex flex-col items-center justify-center flex-1 w-full gap-4 text-center left md:items-start md:text-left lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-1 lg:gap-4 lg:text-center lg:left">
          <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#217bfe] to-[#e55571] sm:text-5xl md:text-6xl md:text-center lg:text-7xl lg:font-black lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-r lg:from-[#217bfe] lg:to-[#e55571]">
            AI CHAT BOX
          </h1>
          <h2 className="text-xl font-semibold sm:text-2xl md:text-center lg:text-xl lg:font-semibold lg:md:text-2xl">
            Supercharge your creativity and productivity
          </h2>
          <h3 className="font-light max-w-[90%] text-sm sm:max-w-[80%] md:max-w-full md:text-center  lg:font-light lg:max-w-[70%] lg:text-sm lg:md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            sint dolorem doloribus, architecto dolor.
          </h3>
          <Link
            to="/dashboard"
            className="  px-6 py-3 bg-[#217bfe] text-white rounded-[20px] text-sm mt-5 hover:bg-white hover:text-[#217bfe] transition-colors md:text-center lg:px-6 lg:py-3 lg:bg-[#217bfe] lg:text-white lg:rounded-[20px] lg:text-sm lg:mt-5 lg:hover:bg-white lg:hover:text-[#217bfe]"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center justify-center flex-1 w-full mt-8 md:mt-0 lg:flex lg:items-center lg:justify-center lg:flex-1 lg:h-full lg:right">
          <div className="imgContainer flex items-center justify-center bg-[#140e2d] rounded-[30px] w-full max-w-[500px] h-[300px] relative sm:w-[85%] sm:h-[400px] md:h-[450px] lg:imgContainer lg:flex lg:items-center lg:justify-center lg:bg-[#140e2d] lg:rounded-[50px] lg:w-[80%] lg:h-[60%] lg:relative">
            <div className="bgContainer absolute top-0 left-0 w-full h-full overflow-hidden rounded-[30px] lg:bgContainer lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:overflow-hidden lg:rounded-[50px]">
              <div className="bg bg-[url('/bg.png')] opacity-20 w-[200%] h-full bg-auto animate-slideBg lg:bg lg:bg-[url('/bg.png')] lg:opacity-20 lg:w-[200%] lg:h-full lg:bg-auto lg:animate-slideBg"></div>
            </div>
            <img
              src="/bot.png"
              alt=""
              className="object-contain w-full h-full animate-botAnimate lg:object-contain lg:w-full lg:h-full lg:animate-botAnimate"
            />
            <div className="chat absolute bottom-[-10px] right-[-10px] flex items-center gap-2 p-2 bg-[#2c2937] rounded-lg sm:bottom-[-15px] sm:right-[-15px] sm:gap-2.5 md:bottom-[-20px] md:right-[-20px] lg:chat lg:absolute lg:bottom-[-20px] lg:right-[-30px] lg:flex lg:items-center lg:gap-2.5 lg:p-2 lg:md:p-3 lg:bg-[#2c2937] lg:rounded-lg">
              <img
                src={
                  typingStatus === "human1"
                    ? "/human1.jpeg"
                    : typingStatus === "human2"
                    ? "/human2.jpeg"
                    : "/bot.png"
                }
                alt=""
                className="object-cover w-4 h-4 rounded-full sm:w-5 sm:h-5 md:w-6 md:h-6 lg:object-cover lg:w-4 lg:h-4 lg:rounded-full lg:md:w-6 lg:md:h-6"
              />
              <TypeAnimation
                sequence={[
                  "Human: How can AI improve customer service?",
                  2000,
                  () => setTypingStatus("bot"),
                  "Bot: AI can streamline support with faster response times and personalized interactions.",
                  2000,
                  () => setTypingStatus("human2"),
                  "Human2: What industries benefit most from AI?",
                  () => setTypingStatus("bot"),
                  "Bot: AI is transforming healthcare, finance, retail, and more through automation and insights.",
                  2000,
                  2000,
                  () => setTypingStatus("human1"),
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                omitDeletionAnimation={true}
                className="text-[10px] sm:text-xs md:text-sm lg:text-xs lg:md:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-2 mt-auto mb-4 terms lg:flex lg:flex-col lg:items-center lg:w-full lg:gap-2 lg:mt-auto lg:mb-4 lg:terms">
        <img src="/logo.png" alt="" className="w-3 h-3 md:w-4 md:h-4 lg:w-3 lg:h-3 lg:md:w-4 lg:md:h-4" />
        <div className="links flex gap-2 text-[#888] text-[10px] md:text-xs lg:links lg:flex lg:gap-2 lg:text-[#888] lg:text-[10px] lg:md:text-xs">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;