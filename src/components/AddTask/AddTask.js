import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalStates";
import { v4 } from "uuid";
import "./AddTask.css";

const AddTask = ({ editTask, isEdit }) => {
  const { lists, listIds, addTask } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState(() => {
    return isEdit ? editTask.title : "";
  });
  const [date, setDate] = useState(() => {
    return isEdit ? editTask.date : "";
  });
  const [user, setUser] = useState(() => {
    return isEdit ? editTask.user : "Assigned User";
  });
  const [state, setState] = useState(() => {
    return isEdit ? editTask.state : "Status";
  });
  const { list } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();

    const newCard = {
      id: v4(),
      title,
      date,
      user,
      state,
    };
    if (isEdit) {
      console.log(lists[list].title);

      if (lists[list].title.toLowerCase() === state.toLowerCase()) {
        editTask.title = title;
        editTask.date = date;
        editTask.user = user;
        editTask.state = state;
      } else {
        const filtered = lists[list].cards.filter(
          (task) => task.id === editTask.id
        );
        console.log(filtered);
        console.log(state);
        if (lists[list].title.toLowerCase() !== state.toLowerCase()) {
          lists[list].cards.splice(
            lists[list].cards.findIndex((e) => e.id === editTask.id),
            1
          );
        }
        for (let i in lists) {
          if (lists[i].title.toLowerCase() === state.toLowerCase()) {
            lists[i].cards.push(filtered[0]);
          }
        }
      }
    } else {
      for (let i in lists) {
        if (lists[i].title.toLowerCase() === state.toLowerCase()) {
          lists[i].cards.push(newCard);
        }
      }
    }

    //addTask(newCard);
    navigate("/");
  };

  const changeTitle = (e) => {
    e.preventDefault();

    setTitle(e.target.value);
  };

  const changeState = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const changeDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const changeUser = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  return (
    <div className="task-modal">
      <div className="task-modal-inner">
        <form onSubmit={submitHandler}>
          <label htmlFor="task-title">Task title</label>
          <input
            type="text"
            placeholder="Add new task"
            id="task-title"
            className="task-title"
            name="title"
            required
            value={title}
            onChange={changeTitle}
          />
          <section>
            <label htmlFor="task-date">Due Date</label>
            <input
              type="date"
              name="duedate"
              placeholder="yyyy-MM-dd"
              id="task-date"
              className="task-date"
              value={date}
              onChange={changeDate}
            />
            <label htmlFor="state">Task's State</label>
            <select name="status" id="state" onChange={changeState}>
              <option value={state}>{state}</option>
              <option value="planned"> Planned </option>
              <option value="started"> Started </option>
              <option value="completed"> Completed </option>
            </select>
            <label htmlFor="users">Assignee</label>
            <select name="user" id="users" onChange={changeUser}>
              <option value={user}>{user}</option>
              <option value="jack"> Jack </option>
              <option value="john"> John </option>
              <option value="jill"> Jill </option>
            </select>
          </section>
          <button type="submit">{isEdit ? "Edit Task" : "Add Task"}</button>
          <Link to="/" className="button">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
