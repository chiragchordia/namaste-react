import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Body />
    </div>
  );
};
const heading = React.createElement(
  "h1",
  { className: "heading" },
  "hello world from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
