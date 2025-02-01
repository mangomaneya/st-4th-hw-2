import TodoItem from "./TodoItem";

const TodoList = ({ todoList, deleteHandler, doneTodoListHandler }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteHandler={deleteHandler}
            doneTodoListHandler={doneTodoListHandler}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
