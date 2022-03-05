import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Dashboard from "./components/Dashboard/Dashboard";
import EditTask from "./components/EditTask/EditTask";
import Header from "./components/Header/Header";
import { GlobalContext, GlobalProvider } from "./context/GlobalStates";

function App() {
  const { lists } = useContext(GlobalContext);
  console.log(JSON.stringify(lists));
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/:list/addtask" element={<AddTask />} />
            <Route path="/edit/:list/:id" element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
