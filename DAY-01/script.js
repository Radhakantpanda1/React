import React from "react";
import ReactDOM  from "react-dom/client";
let hh=React.createElement('h1',{id:"head"},"hello world from react npm done updated");
console.log(hh);// object
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(root);// object
root.render(hh);
let parent=React.createElement("div",{id:'parent'},[React.createElement("div",{id:'child'},[React.createElement("h1",{id:'hh1'},"I AM H1 USING REACT"),React.createElement("h2",{id:'hh2'},"I AM H2 USING REACT")]),React.createElement("div",{id:'child'},[React.createElement("h1",{id:'hh1'},"I AM H1 USING REACT"),React.createElement("h2",{id:'hh2'},"I AM H2 USING REACT")])]);
const groot=ReactDOM.createRoot(document.getElementById("groot"));
groot.render(parent);


