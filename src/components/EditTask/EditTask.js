import React, { useContext } from "react";
import { useParams } from "react-router";
import AddTask from "../AddTask/AddTask";
import { GlobalContext } from "../../context/GlobalStates";

const EditTask = () => {
  const { lists, listIds, addTask } = useContext(GlobalContext);
  const { list, id } = useParams();
  // console.log(lists);

  const taskToEdit = lists[list].cards.find((task) => task.id === id);
  console.log(taskToEdit);

  return (
    <>
      <AddTask editTask={taskToEdit} isEdit={true} />
    </>
  );
};

export default EditTask;
