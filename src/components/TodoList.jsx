import TodoItem from "./TodoItem";

const TodoList = ({
  todoList,
  deleteHandler,
  stateTodoListHandler,
  버튼이름,
}) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteHandler={deleteHandler}
            stateTodoListHandler={stateTodoListHandler}
            버튼이름={버튼이름}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
