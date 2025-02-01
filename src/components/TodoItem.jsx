const TodoItem = ({ todo, deleteHandler, stateTodoListHandler, 버튼이름 }) => {
  const { id, title, content } = todo;
  return (
    <li key={id}>
      <p>{title}</p>
      <p>{content}</p>
      <button onClick={() => deleteHandler(id)}>삭제</button>
      <button onClick={() => stateTodoListHandler(id)}>{버튼이름}</button>
    </li>
  );
};

export default TodoItem;
