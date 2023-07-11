import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

export default function Example() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="flex flex-col bg-transparent"
        indicatorProps={{
          className: "bg-transparent flex flex-col border-r-2 border-blue-500 shadow-none rounded-none h-full",
          style: {
            top: `${data.findIndex((item) => item.value === activeTab) * 100}%`,
          },
        }}
      >
        {data.map(({ label, value }, index) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-blue-500" : ""}
            style={{
              zIndex: data.length - index,
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
