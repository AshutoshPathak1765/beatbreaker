import { useState } from "react";
import "./App.css";

import Home from "./Page/Home";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import View from "./Page/View";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='dark text-foreground bg-background w-full'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
