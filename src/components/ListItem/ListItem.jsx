import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  toggleComplete,
} from "../../app/slices/todoSlice";
import "./ListItem.css";

export const ListItem = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      dispatch(
        editTodo({
          id: todo.id,
          text: editedText,
        })
      );
      setEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedText(todo.text);
    setEditing(false);
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <div className="listItemContainer">
      <div className="listLeft">
        <div className="checkbox">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
          />
        </div>
        <div className="listText">
          {editing ? (
            <input
              className="editInput"
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <p className={`${todo.completed ? "underline" : ""}`}>
              {todo.text}
            </p>
          )}
        </div>
      </div>
      <div className="listRight">
        {editing ? (
          <>
            <div className="saveBtn" onClick={handleSaveEdit}>
              Save
            </div>
            <div className="cancelBtn" onClick={handleCancelEdit}>
              Cancel
            </div>
          </>
        ) : (
          <>
            {todo.completed ? (
              ""
            ) : (
              <div className="editBtn" onClick={handleEdit}>
                Edit
              </div>
            )}
            <div className="deleteBtn" onClick={handleDelete}>
              Delete
            </div>
          </>
        )}
      </div>
    </div>
  );
};
