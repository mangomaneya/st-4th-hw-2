const TodoItem = ({ todo, deleteHandler, doneTodoListHandler }) => {
  const { id, title, content } = todo;
  return (
    <li key={id}>
      <p>{title}</p>
      <p>{content}</p>
      <button onClick={() => deleteHandler(id)}>삭제</button>
      <button onClick={() => doneTodoListHandler(id)}>완료</button>
    </li>
  );
};

export default TodoItem;
