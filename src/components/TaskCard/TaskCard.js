import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TaskCard.css";

const TaskCard = (props) => {
  const { cards, listId } = props;

  const navigate = useNavigate();

  const clickHandler = (listId, taskId) => {
    navigate(`/edit/${listId}/${taskId}`);
  };

  return (
    <>
      {cards.map((card) => {
        return (
          <div
            className="task-wrapper"
            key={card.id}
            onClick={(e) => {
              e.preventDefault();
              clickHandler(listId, card.id);
            }}
          >
            <p> {card.title}</p>
            <em> {card.date}</em>
            <p> {card.user}</p>
            <code></code>
          </div>
        );
      })}
    </>
  );
};

export default TaskCard;
