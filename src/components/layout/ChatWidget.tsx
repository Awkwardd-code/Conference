"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "support" | "user";
  time: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! How can we help you today?",
    sender: "support",
    time: "Just now",
  },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;

    const messageId = Date.now();
    setMessages((current) => [
      ...current,
      { id: messageId, text, sender: "user", time: "Just now" },
    ]);
    setInput("");

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: messageId + 1,
          text: "Thank you for reaching out! An advisor will be with you shortly.",
          sender: "support",
          time: "Just now",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      <div
        aria-live="polite"
        className={`fixed bottom-20 right-5 z-[998] w-[calc(100vw-2.5rem)] max-w-[310px] origin-bottom-right overflow-hidden rounded-xl border border-gray-100 bg-white shadow-2xl will-change-[opacity,transform,filter] transition-[opacity,transform,filter,box-shadow] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 blur-0 opacity-100 shadow-2xl"
            : "pointer-events-none translate-y-3 scale-95 blur-[2px] opacity-0 shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between bg-[#1A3A32] px-3.5 py-3 text-white">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#D4AF37] font-serif font-bold text-[#1A3A32]">
              G
            </div>
            <div>
              <p className="text-sm font-semibold">GSN Support</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-gray-200">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Usually replies in a few minutes
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="cursor-pointer rounded-full p-1.5 text-gray-200 transition-colors hover:bg-white/10 hover:text-[#D4AF37]"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex h-64 flex-col gap-3 overflow-y-auto bg-[#F9F9F6] p-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[82%] p-2.5 text-xs shadow-sm ${
                message.sender === "support"
                  ? "self-start rounded-2xl rounded-tl-sm bg-white text-gray-800"
                  : "self-end rounded-2xl rounded-tr-sm bg-[#1A3A32] text-white"
              }`}
            >
              <p>{message.text}</p>
              <span
                className={`mt-1 block text-[10px] ${
                  message.sender === "support"
                    ? "text-gray-400"
                    : "text-gray-300"
                }`}
              >
                {message.time}
              </span>
            </div>
          ))}
        </div>

        <form
          onSubmit={sendMessage}
          className="flex items-center gap-2 border-t border-gray-100 bg-white p-2.5"
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Write a message..."
            aria-label="Message"
            className="min-w-0 flex-1 rounded-full border-none bg-[#F9F9F6] px-3 py-2 text-xs outline-none ring-[#D4AF37] placeholder:text-gray-400 focus:ring-1"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#D4AF37] text-[#1A3A32] transition-colors duration-300 hover:bg-[#1A3A32] hover:text-white"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>

      <div className="fixed bottom-3 right-3 z-[999] h-[78px] w-[94px] sm:bottom-5 sm:right-5">
        {!isOpen && (
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
            viewBox="0 0 94 78"
          >
            <defs>
              <path id="chat-badge-arc" d="M 15 38 Q 43 2 80 22" />
            </defs>
            <text
              fill="#67c8d2"
              fontSize="10"
              fontWeight="700"
              letterSpacing="0.2"
            >
              <textPath href="#chat-badge-arc">We Are Here</textPath>
            </text>
          </svg>
        )}
        {!isOpen && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1 top-10 z-10 -rotate-12 text-lg leading-none"
          >
            👋
          </span>
        )}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          className="absolute bottom-0 right-2 flex size-12 cursor-pointer items-center justify-center rounded-full bg-[#00a651] text-white shadow-lg transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-2xl sm:right-3"
        >
          {!isOpen && (
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#D4AF37] opacity-75" />
          )}
          <span
            className={`absolute transition-all duration-300 ease-out ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
            }`}
          >
            <X className="size-5" />
          </span>
          <span
            className={`absolute transition-all duration-300 ease-out ${
              isOpen ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <MessageCircle className="size-6" />
          </span>
        </button>
      </div>
    </>
  );
}
