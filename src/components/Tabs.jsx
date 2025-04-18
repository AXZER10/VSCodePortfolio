import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import json_icon from "../assets/icons/json_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
import { Link, useLocation } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import { useEffect, useState } from "react";

const TabsItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: `${react_icon}`,
  },
  {
    name: "about.html",
    path: "/about",
    icon: `${html_icon}`,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: `${css_icon}`,
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: `${js_icon}`,
  },
  {
    name: "experience.json",
    path: "/experience",
    icon: `${json_icon}`,
  },
  {
    name: "github.md",
    path: "/github",
    icon: `${markdown_icon}`,
  },
  {
    name: "settings",
    path: "/settings",
    icon: "settings",
  },
];

function Tabs() {
  const location = useLocation();
  const [visibleTabs, setVisibleTabs] = useState([TabsItems[0]]);

  useEffect(() => {
    if (visibleTabs.length > 0) {
      const currentTab = TabsItems.find(tab => tab.path === location.pathname);
      if (currentTab && !visibleTabs.some(tab => tab.path === currentTab.path)) {
        setVisibleTabs(prev => [...prev, currentTab]);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      {visibleTabs.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-textColor bg-mainBg">
          <p className="text-xl">No tab selected. Open a file from the Explorer.</p>
        </div>
      ) : (
        <div className="flex overflow-x-auto bg-tabsBg">
          {visibleTabs.map((tab) => (
            <Link
              key={tab.name}
              to={`${tab.path}`}
              className={`flex items-center ${location.pathname === tab.path
                ? " border-t-2 border-t-accentColor bg-tabActiveBg"
                : "border-2 bg-tabBg"
                } min-w-max gap-x-1 border-tabBorder px-3 text-textColor md:py-1`}
            >
              {tab.icon !== "settings" ? (
                <img src={tab.icon} height={20} width={20} alt="tab-icon" />
              ) : (
                <div className="items-center justify-center flex">
                  <VscSettings className="h-[20px] w-[20px]" />
                </div>
              )}
              <p className="text-lg font-medium">{tab.name}</p>
              {tab.name !== "home.jsx" && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVisibleTabs(prev => prev.filter(t => t.path !== tab.path));
                  }}
                  className="ml-2 text-white text-2xl hover:text-red-600"
                >
                  ×
                </button>
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Tabs;
