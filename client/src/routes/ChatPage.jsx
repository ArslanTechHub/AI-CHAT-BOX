import { useQuery } from "@tanstack/react-query";
import NewPromt from "../components/NewPrompt";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";

const ChatPage = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  console.log(data);

  return (
    <div className="flex flex-col h-screen bg-[#100c1c] text-white">
      {/* Chat messages container */}
      <div className="flex-1 px-4 py-6 ">
        <div className="max-w-3xl mx-auto space-y-6">
          {isPending ? (
            <div className="py-10 text-center">
              <div className="inline-block w-8 h-8 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              <p className="mt-2">Loading...</p>
            </div>
          ) : error ? (
            <div className="py-10 text-center text-red-400">
              Something went wrong. Please try again.
            </div>
          ) : (
            data?.history?.map((message, i) => (
              <div
                key={i}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.role === "user" ? "bg-[#2c2937]" : "bg-[#1e1b29]"
                  } rounded-lg shadow-md`}
                >
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      height="300"
                      width="400"
                      transformation={[{ height: 300, width: 400 }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                      className="w-full h-auto rounded-t-lg"
                    />
                  )}
                  <div className="p-4">
                    <Markdown className="prose prose-invert max-w-none">
                      {message.parts[0].text}
                    </Markdown>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* New prompt container (fixed at the bottom) */}
      {data && (
        <div className="sticky bottom-0 w-full max-w-3xl px-4 py-6 mx-auto">
          <NewPromt data={data} />
        </div>
      )}
    </div>
  );
};

export default ChatPage;
