import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddTodo from "./AddTodo";

function Todo() {
  const [todos, setTodos] = useState([]);
  const id = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id.id}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [id.id]);

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
                    <b>{todo.title}</b>
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
        <AddTodo show={show} handleClose={handleClose} />
      </div>
    </>
  );
}

export default Todo;
