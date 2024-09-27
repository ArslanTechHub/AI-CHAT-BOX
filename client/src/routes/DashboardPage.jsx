// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const DashboardPage = () => {
//   const queryClient = useQueryClient();

//   const navigate = useNavigate();

//   const mutation = useMutation({
//     mutationFn: (text) => {
//       return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text }),
//       }).then((res) => res.json());
//     },
//     onSuccess: (id) => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ["userChats"] });
//       navigate(`/dashboard/chats/${id}`);
//     },
//   });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const text = e.target.text.value;
//     if (!text) return;

//     mutation.mutate(text);
//   };

//   return (
//     <div className="flex flex-col items-center h-full p-8">
//       {/* Logo and Title */}
//       <div className="flex items-center gap-5 mb-16">
//         <img src="/logo.png" alt="Logo" className="w-20 h-20 " />
//         <h1 className="text-6xl mb-8  md:text-7xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#217bfe] to-[#e55571]">
//           AI CHAT BOX
//         </h1>
//       </div>

//       {/* Chat Options */}
//       <div className="grid max-w-5xl grid-cols-1 gap-8 mb-16 md:grid-cols-3 w-fit">
//         {[
//           { icon: "/chat.png", text: "Create a New Chat" },
//           { icon: "/image.png", text: "Analyze Images" },
//           { icon: "/code.png", text: "Help me with my Code" },
//         ].map((option, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center p-8 transition-all duration-300 transform border border-gray-200 shadow-lg cursor-pointer rounded-xl hover:shadow-xl hover:-translate-y-1"
//           >
//             <img
//               src={option.icon}
//               alt={option.text}
//               className="w-20 h-20 mb-6"
//             />
//             <span className="text-xl font-semibold text-center">
//               {option.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Search Bar */}
//       <div className="w-full max-w-3xl mt-auto">
//         <form onSubmit={handleSubmit} className="relative">
//           <input
//             type="text"
//             name="text"
//             placeholder="Ask Me Anything......."
//             className="w-full px-6 py-3 bg-[#2c2937] text-[#ececec] rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#217bfe] text-base"
//           />
//           <button
//             type="submit"
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#605e68] hover:bg-[#4a4854] rounded-full p-3 transition-colors duration-300"
//           >
//             <img src="/arrow.png" alt="Search" className="w-3 h-3" />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;


import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    mutation.mutate(text);
  };

  return (
    <div className="flex flex-col items-center h-full p-4 sm:p-6 md:p-8">
      {/* Logo and Title */}
      <div className="flex flex-col items-center gap-3 mb-8 sm:flex-row sm:gap-5 sm:mb-12 lg:mb-16">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#217bfe] to-[#e55571]">
          AI CHAT BOX
        </h1>
      </div>

      {/* Chat Options */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:mb-12 lg:mb-16">
        {[
          { icon: "/chat.png", text: "Create a New Chat" },
          { icon: "/image.png", text: "Analyze Images" },
          { icon: "/code.png", text: "Help me with my Code" },
        ].map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 transition-all duration-300 transform border border-gray-200 shadow-lg cursor-pointer sm:p-6 lg:p-8 rounded-xl hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={option.icon}
              alt={option.text}
              className="w-16 h-16 mb-4 sm:w-18 sm:h-18 lg:w-20 lg:h-20 sm:mb-5 lg:mb-6"
            />
            <span className="text-lg font-semibold text-center sm:text-xl">
              {option.text}
            </span>
          </div>
        ))}
      </div>

     {/* Search Bar */}
<div className="w-full max-w-3xl mt-auto mb-auto sm:mb-6 md:mb-8"> {/* Added margin bottom classes for responsiveness */}
  <form onSubmit={handleSubmit} className="relative">
    <input
      type="text"
      name="text"
      placeholder="Ask Me Anything......."
      className="w-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-[#2c2937] text-[#ececec] rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#217bfe] text-sm sm:text-base"
    />
    <button
      type="submit"
      className="absolute right-2 sm:right-2.5 lg:right-3 top-1/2 transform -translate-y-1/2 bg-[#605e68] hover:bg-[#4a4854] rounded-full p-2 sm:p-2.5 lg:p-3 transition-colors duration-300"
    >
      <img src="/arrow.png" alt="Search" className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
    </button>
  </form>
</div>



    </div>
  );
};

export default DashboardPage;