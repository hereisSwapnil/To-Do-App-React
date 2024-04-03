import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  toggleComplete,
} from "../../app/slices/todoSlice";
import "./ListItem.css";

// This component will display a single todo item.
export const ListItem = ({ todo }) => {
  // The editing state will determine if the todo item is being edited.
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const dispatch = useDispatch();

  // The handleDelete function will dispatch the deleteTodo action with the todo item's id.
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  // The handleEdit function will set the editing state to true.
  const handleEdit = () => {
    setEditing(true);
  };

  // The handleSaveEdit function will dispatch the editTodo action with the todo item's id and the edited text.
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

  // The handleCancelEdit function will set the edited text back to the original text and set the editing state to false.
  const handleCancelEdit = () => {
    setEditedText(todo.text);
    setEditing(false);
  };

  // The handleToggleComplete function will dispatch the toggleComplete action with the todo item's id.
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
