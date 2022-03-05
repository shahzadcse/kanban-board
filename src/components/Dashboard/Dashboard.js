import React from "react";

import TaskList from "../TaskList/TaskList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="board-container">
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
