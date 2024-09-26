import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="flex flex-col h-full ml-16 ">
      <span className="font-bold text-[10px] mb-2.5 ">DASHBOARD</span>

      <Link
        className="block text-base p-2.5 rounded-lg hover:bg-gray-800"
        to="/dashboard"
      >
        Create a new Chat
      </Link>
      <Link
        className="block text-base p-2.5 rounded-lg hover:bg-gray-800"
        to="/"
      >
        Explore AI CHAT BOX
      </Link>
      <Link
        className="block text-base p-2.5 rounded-lg hover:bg-gray-800"
        to=""
      >
        Contact
      </Link>

      <hr className="h-px my-5 bg-gray-300 border-none rounded-md opacity-10" />
      <div className="text-[10px] font-semibold">RECENT CHATS</div>

      <div className="flex flex-col overflow-y-auto text-sm">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong"
          : data?.map((chat) => (
              <Link
                className="block p-2.5 rounded-lg hover:bg-gray-800"
                to={`/dashboard/chats/${chat._id}`}
                key={chat._id}
              >
                {chat.title}
              </Link>
            ))}
      </div>

      <hr className="h-px my-24 bg-gray-300 border-none rounded-md opacity-10" />

      <div className="flex items-center gap-2.5 mt-auto text-xs">
        <img src="/logo.png" alt="Upgrade Logo" className="w-6 h-6" />
        <div className="flex flex-col">
          <span className="font-semibold">Upgrade to AI CHAT BOX PRO</span>
          <span className="text-gray-500">
            Get unlimited access to all features
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
