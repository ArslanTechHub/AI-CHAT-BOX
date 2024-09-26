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
      // Invalidate and refetch
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
    <div className="flex flex-col items-center h-full p-8">
      {/* Logo and Title */}
      <div className="flex items-center gap-5 mb-16">
        <img src="/logo.png" alt="Logo" className="w-20 h-20 " />
        <h1 className="text-6xl mb-8  md:text-7xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#217bfe] to-[#e55571]">
          AI CHAT BOX
        </h1>
      </div>

      {/* Chat Options */}
      <div className="grid max-w-5xl grid-cols-1 gap-8 mb-16 md:grid-cols-3 w-fit">
        {[
          { icon: "/chat.png", text: "Create a New Chat" },
          { icon: "/image.png", text: "Analyze Images" },
          { icon: "/code.png", text: "Help me with my Code" },
        ].map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 transition-all duration-300 transform border border-gray-200 shadow-lg cursor-pointer rounded-xl hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={option.icon}
              alt={option.text}
              className="w-20 h-20 mb-6"
            />
            <span className="text-xl font-semibold text-center">
              {option.text}
            </span>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-3xl mt-auto">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            name="text"
            placeholder="Ask Me Anything......."
            className="w-full px-6 py-3 bg-[#2c2937] text-[#ececec] rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#217bfe] text-base"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#605e68] hover:bg-[#4a4854] rounded-full p-3 transition-colors duration-300"
          >
            <img src="/arrow.png" alt="Search" className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
