const heading = React.createElement(
  "h1",
  { className: "heading" },
  "hello world from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
