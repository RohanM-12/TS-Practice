import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  return (
    <>
      <div className="app bg-gray-20 ">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
