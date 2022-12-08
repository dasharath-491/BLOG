import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddTodo from "./AddTodo";

function Todo() {
  const [todos, setTodos] = useState([]);
  const id = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id.id}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [id.id]);

  const changeHandle = (event) => {
    setTitle(event.target.value);
  };

  const newTodo = {
    userId: `${id.id}`,
    id: 201,
    title: `${title}`,
  };

  const submitTodo = () => {
    setTodos([newTodo, ...todos]);
    handleClose();
    setTitle("");
  };

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container my-3">
        <Button className="todob" variant="primary" onClick={handleShow}>
          AddTodo
        </Button>
        <h1 className="todo">ToDoList</h1>
        <div className="row ">
          {todos.map((todo) => {
            return (
              <div className="card my-1" key={todo.id}>
                <div className="card-body">
                  <h6 className="card-title">
                    <input
                      className="checkbox"
                      type="checkbox"
                      defaultChecked={todo.completed}
                    />
                    <b className="todos">{todo.title}</b>
                  </h6>
                  <Button
                    className="deletebuttontodo"
                    onClick={() => handleDeleteClick(todo.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <AddTodo
          show={show}
          changeHandle={changeHandle}
          submitTodo={submitTodo}
          handleClose={handleClose}
        />
      </div>
    </>
  );
}

export default Todo;
