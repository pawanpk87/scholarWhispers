"use client";
import { useState } from "react";
import "./Header.css"

export default function Header() {
  const [activeTab, setActiveTab] = useState<string>("Home");

  const onChangeTab = (tabName: string)=>{
    setActiveTab(tabName);
  }

  return (
    <div className="flex flex-row gap-9">
      <TabItem
        name="Home"
        icon={
          <svg
            className="w-6 h-6 text-white-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"
            />
          </svg>
        }
        onChangeTab={onChangeTab}
        isActive={activeTab === "Home"}
      />

      <TabItem
        name="Message"
        icon={
          <svg
            className="w-6 h-6 text-white-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M3 6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.6l-2.9 2.6c-1 .9-2.5.2-2.5-1.1V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
              clip-rule="evenodd"
            />
          </svg>
        }
        onChangeTab={onChangeTab}
        isActive={activeTab === "Message"}
      />

      <TabItem
        name="Feed"
        icon={
          <svg
            className="w-6 h-6 text-white-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"
            />
          </svg>
        }
        onChangeTab={onChangeTab}
        isActive={activeTab === "Feed"}
      />
    </div>
  );
}

function TabItem({
  name,
  icon,
  onChangeTab,
  isActive
}: {
  name: string;
  icon: JSX.Element;
  onChangeTab: (tabName: string) => void;
  isActive: boolean
}): JSX.Element {

  const boxShadow = {
    boxShadow: `
      1.3px 1px 18.6px rgb(255, 255, 255),
      3.2px 2.5px 35.1px rgb(255, 255, 255),
      6.6px 5.1px 54.6px rgb(255, 255, 255),
      13.5px 10.6px 84.9px rgb(255, 255, 255),
      37px 29px 169px rgb(255, 255, 255)
    `
  };


  return (
    <div
      className={`tabItemCss flex items-center justify-center flex-row gap-2 px-4 py-1 bg-[#121353] opacity-500 shadow-2xl rounded-xl border-white-200   ${isActive ? "text-white" : "text-gray-400"} hover:text-white  text-md  cursor-pointer`}
      onClick={()=> onChangeTab(name)}
    >
      <div>{icon}</div>
      <div>{name}</div>
    </div>
  );
}
