import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import SearchAppBar from "../components/SearchAppBar";
import ChatBar from "../components/ChatBar";
// export { sendMessage } from "../components/FormChat";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
  })
);

const Chat = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Tolong Aku!" }],
      })
      .then((res) => {
        setResult(res.data.choices[0].message.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SearchAppBar />

      <ChatBar respons={result} />
    </>
  );
};

export default Chat;
