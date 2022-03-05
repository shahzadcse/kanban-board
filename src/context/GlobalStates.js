import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Planned",
      cards: [
        {
          id: "3cd69d14-aa91-4709-a764-1f62debc1434",
          title: "Get Filling Flow",
          date: "2022-03-11",
          user: "Jack",
          state: "Planned",
        },
        {
          id: "317c37e8-feef-40bb-ada6-4e0af8cbe00d",
          title: "ITR Filling Flow",
          date: "2022-03-18",
          user: "John",
          state: "Planned",
        },
      ],
    },
    "list-2": {
      id: "list-2",
      title: "Started",
      cards: [
        {
          id: "b4b1867c-d7e6-439d-9e66-bbf559496f7b",
          title: "Matric DashBoard",
          date: "2022-03-09",
          user: "John",
          state: "Started",
        },
        {
          id: "d10a94a5-7c48-4cb4-bcfa-d7682a9f3077",
          title: "Error Dashboard",
          date: "2022-03-11",
          user: "Jill",
          state: "Started",
        },
        {
          id: "69663dd5-1c11-4f2c-ba9b-54f588c6336a",
          title: "Advance Returns Flow",
          date: "2022-03-08",
          user: "Jack",
          state: "Started",
        },
      ],
    },
    "list-3": {
      id: "list-3",
      title: "Completed",
      cards: [
        {
          id: "1af3437a-d2a1-4919-89fb-4a43f7459ff9",
          title: "Analytics Dashboard",
          date: "2022-03-08",
          user: "Jack",
          state: "Completed",
        },
      ],
    },
  },
  listIds: ["list-1", "list-2", "list-3"],
};

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ lists: state.lists, listIds: state.listIds, addTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
