import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import Todo from "../Todo";
import { addTodoList } from "../../redux/actions";
import { selectReamingTodoList } from "../../redux/selectors";

export default function TodoList() {
  const dispatch = useDispatch();
  const [addTodo, setAddTodo] = useState("");
  const [addPriority, setAddPriority] = useState("Medium");

  const todoList = useSelector(selectReamingTodoList);
  const handleAddButtonClick = () => {
    dispatch(
      addTodoList({
        id: uuidv4(),
        name: addTodo,
        completed: false,
        priority: addPriority,
      })
    );
    setAddTodo("");
    setAddPriority("Medium");
  };

  const handleAddTodoChange = (e) => {
    setAddTodo(e.target.value);
  };

  const handleAddPriorityChange = (e) => {
    setAddPriority(e);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={addTodo} onChange={handleAddTodoChange} />
          <Select
            defaultValue="Medium"
            value={addPriority}
            onChange={handleAddPriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
