import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  // const testing = async () => {
  //   await fetch("http://localhost:3000/api/test", {
  //     credentials: "include",
  //   });
  // };

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen overflow-hidden homepage">
      <img
        src="/orbital.png"
        alt=""
        className="absolute bottom-0 left-0 opacity-5 animate-rotateOrbital z-[-1]"
      />
      <div className="content flex items-center gap-[50px] flex-grow w-full max-w-7xl mx-auto px-4 mt-[-50px]">
        <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center left">
          <h1 className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#217bfe] to-[#e55571]">
            AI CHAT BOX
          </h1>
          <h2 className="text-xl font-semibold md:text-2xl">
            Supercharge your creativity and productivity
          </h2>
          <h3 className="font-light max-w-[70%] text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            sint dolorem doloribus, architecto dolor.
          </h3>
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-[#217bfe] text-white rounded-[20px] text-sm mt-5 hover:bg-white hover:text-[#217bfe]"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center justify-center flex-1 h-full right">
          <div className="imgContainer flex items-center justify-center bg-[#140e2d] rounded-[50px] w-[80%] h-[60%] relative">
            <div className="bgContainer absolute top-0 left-0 w-full h-full overflow-hidden rounded-[50px]">
              <div className="bg bg-[url('/bg.png')] opacity-20 w-[200%] h-full bg-auto animate-slideBg"></div>
            </div>
            <img
              src="/bot.png"
              alt=""
              className="object-contain w-full h-full animate-botAnimate"
            />
            <div className="chat absolute bottom-[-20px] right-[-30px] flex items-center gap-2.5 p-2 md:p-3 bg-[#2c2937] rounded-lg">
              <img
                src={
                  typingStatus === "human1"
                    ? "/human1.jpeg"
                    : typingStatus === "human2"
                    ? "/human2.jpeg"
                    : "/bot.png"
                }
                alt=""
                className="object-cover w-4 h-4 rounded-full md:w-6 md:h-6"
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
                className="text-xs md:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-2 mt-auto mb-4 terms">
        <img src="/logo.png" alt="" className="w-3 h-3 md:w-4 md:h-4" />
        <div className="links flex gap-2 text-[#888] text-[10px] md:text-xs">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
