// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { Link } from "react-router-dom";

// const ChatList = () => {
//   const { isPending, error, data } = useQuery({
//     queryKey: ["userChats"],
//     queryFn: () =>
//       fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
//         credentials: "include",
//       }).then((res) => res.json()),
//   });

//   return (
//     <div className="flex flex-col h-full ml-16 ">
//       <span className="font-bold text-[10px] mb-2.5 ">DASHBOARD</span>

//       <Link
//         className="block text-base p-2.5 rounded-lg hover:bg-gray-800"
//         to="/dashboard"
//       >
//         Create a new Chat
//       </Link>
//       <Link
//         className="block text-base p-2.5 rounded-lg hover:bg-gray-800"
//         to="/"
//       >
//         Explore AI CHAT BOX
//       </Link>
//       <Link
//         className="block text-base p-2.5 rounded-lg hover:bg-gray-800"
//         to=""
//       >
//         Contact
//       </Link>

//       <hr className="h-px my-5 bg-gray-300 border-none rounded-md opacity-10" />
//       <div className="text-[10px] font-semibold">RECENT CHATS</div>

//       <div className="flex flex-col overflow-y-auto text-sm">
//         {isPending
//           ? "Loading..."
//           : error
//           ? "Something went wrong"
//           : data?.map((chat) => (
//               <Link
//                 className="block p-2.5 rounded-lg hover:bg-gray-800"
//                 to={`/dashboard/chats/${chat._id}`}
//                 key={chat._id}
//               >
//                 {chat.title}
//               </Link>
//             ))}
//       </div>

//       <hr className="h-px my-24 bg-gray-300 border-none rounded-md opacity-10" />

//       <div className="flex items-center gap-2.5 mt-auto text-xs">
//         <img src="/logo.png" alt="Upgrade Logo" className="w-6 h-6" />
//         <div className="flex flex-col">
//           <span className="font-semibold">Upgrade to AI CHAT BOX PRO</span>
//           <span className="text-gray-500">
//             Get unlimited access to all features
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatList;

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const ChatList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu button for mobile */}
      <button
        onClick={toggleMenu}
        className={`fixed top-16 left-4 z-40 p-2 bg-gray-800 rounded-md md:hidden ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <Menu size={20} />
      </button>

      {/* Chat List: Slides in from the left on mobile, always visible on larger screens */}
      <div
        className={`fixed top-0 left-0 z-30 h-full w-3/4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:h-full md:w-64`}
        style={{ backgroundColor: '#12101b' }}  // Updated background color
      >
        {/* Close button for mobile */}
        <div className="relative h-full p-4 text-left">
          <button
            onClick={toggleMenu}
            className={`absolute top-4 right-4 p-2 bg-gray-800 rounded-md md:hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <X size={20} />
          </button>

          <span className="block font-bold text-[10px] mb-4 uppercase tracking-wider text-white">
            Dashboard
          </span>

          {/* Chat options */}
          <Link
            className="block p-2 mb-2 text-sm text-white transition-colors rounded-lg hover:bg-gray-700"
            to="/dashboard"
            onClick={() => setIsOpen(false)}
          >
            Create a new Chat
          </Link>
          <Link
            className="block p-2 mb-2 text-sm text-white transition-colors rounded-lg hover:bg-gray-700"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Explore AI CHAT BOX
          </Link>
          <Link
            className="block p-2 mb-2 text-sm text-white transition-colors rounded-lg hover:bg-gray-700"
            to="contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <hr className="h-px my-4 bg-gray-600 border-none opacity-20" />

          <div className="text-[10px] font-semibold uppercase tracking-wider text-white mb-2">
            Recent Chats
          </div>

          {/* Recent Chats List */}
          <div className="flex flex-col overflow-y-auto text-xs">
            {isPending
              ? "Loading..."
              : error
              ? "Something went wrong"
              : data?.map((chat) => (
                  <Link
                    className="block p-2 mb-1 text-white transition-colors rounded-lg hover:bg-gray-700"
                    to={`/dashboard/chats/${chat._id}`}
                    key={chat._id}
                    onClick={() => setIsOpen(false)}
                  >
                    {chat.title}
                  </Link>
                ))}
          </div>

          <hr className="h-px my-6 bg-gray-600 border-none opacity-20" />

          {/* Upgrade Section */}
          <div className="flex items-center gap-2 text-[10px] text-white">
            <img src="/logo.png" alt="Upgrade Logo" className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="font-semibold">Upgrade to AI CHAT BOX PRO</span>
              <span className="text-gray-400">
                Get unlimited access to all features
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatList;
