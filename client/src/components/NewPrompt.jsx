import React, { useEffect, useRef, useState } from "react";
import Upload from "./Upload";
import { IKImage } from "imagekitio-react";
import model from "../lib/gemini";
import Markdown from "react-markdown";
import { json } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewPromt = ({ data }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  const endRef = useRef(null);
  const formRef = useRef(null);
  //IN production we don't need this
  const hasRun = useRef(false);

  const chat = model.startChat({
    history: data?.history.map(({ role, parts }) => ({
      role,
      parts: [{ text: parts[0].text }],
    })),
  });

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data, question, answer, img.dbData]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question.length ? question : undefined,
          answer,
          img: img.dbData?.filepath || undefined,
        }),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient
        .invalidateQueries({ queryKey: ["chat", data._id] })
        .then(() => {
          formRef.current.reset();
          setQuestion(""), setAnswer("");
          setImg({
            isLoading: false,
            error: "",
            dbData: {},
            aiData: {},
          });
        });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const add = async (text, isInitial) => {
    if (!isInitial) setQuestion(text);

    // Check if img.aiData is an object and has properties
    const hasAiData = img.aiData && Object.keys(img.aiData).length > 0;

    try {
      // Call your chat.sendMessageStream() with the proper arguments
      const result = await chat.sendMessageStream(
        hasAiData ? [img.aiData, text] : [text]
      );

      let accumulatedText = "";

      // Iterate over the streamed result
      for await (const chunk of result.stream) {
        const chunkText = await chunk.text(); // Ensure you're awaiting chunk.text()

        // Accumulate the text and update the state with the latest chunk
        accumulatedText += chunkText;
        setAnswer((prev) => prev + chunkText); // Append each chunk to the answer state

        // Optionally, finalize the answer after the stream ends
        setAnswer(accumulatedText);
      }

      mutation.mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;

    if (!text) return;

    add(text, false);
  };
  useEffect(() => {
    if (!hasRun.current) {
      if (data?.history?.length === 1) {
        add(data.history[0].parts[0].text, true);
      }
    }
    hasRun.current = true;
  }, []);
  return (
    <>
      {img.isLoading && <div>Loading....</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}

      {question && <div>{question}</div>}
      {answer && (
        <div>
          <Markdown>{answer}</Markdown>
        </div>
      )}

      {/* <button onClick={add}>Test AI</button> */}

      <div ref={endRef} />
      <div className="w-full max-w-3xl mt-auto ">
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="relative flex items-center "
        >
          {}

          <Upload setImg={setImg} />
          <input type="file" id="file-upload" multiple={false} hidden />

          <input
            type="text"
            name="text"
            placeholder="Ask anything......."
            className="w-full pl-16 px-12 py-3  justify-center  bg-[#2c2937] text-[#ececec] rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#217bfe] text-base"
          />

          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#605e68] hover:bg-[#4a4854] rounded-full p-3 transition-colors duration-300"
          >
            <img src="/arrow.png" alt="Search" className="w-3 h-3" />
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPromt;
