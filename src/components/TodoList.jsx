const TodoList = ({ todoList, deleteHandler, doneTodoListHandler }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
            <button onClick={() => deleteHandler(todo.id)}>삭제</button>
            <button onClick={() => doneTodoListHandler(todo.id)}>완료</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
