import React, { useContext } from "react";
import "./TaskList.css";
import { GlobalContext } from "../../context/GlobalStates";
import { Link } from "react-router-dom";
import TaskCard from "../TaskCard/TaskCard";
const TaskList = () => {
  const { lists, listIds } = useContext(GlobalContext);

  //console.log(lists);

  return (
    <>
      {listIds.map((id, i) => {
        return (
          <>
            <div className="task-column" key={i}>
              <h1>{lists[id].title}</h1>

              <TaskCard cards={lists[id].cards} listId={lists[id].id} />
              <Link to={`/${lists[id].id}/addtask`} className="button">
                Add New Task
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TaskList;
