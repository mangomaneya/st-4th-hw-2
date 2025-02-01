const TodoForm = ({ submitTodoList, todo, inputTodoHandler, titleRef }) => {
  const { title, content } = todo;
  return (
    <form onSubmit={submitTodoList}>
      <label htmlFor="title">제목</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={inputTodoHandler}
        ref={titleRef}
      />
      <label htmlFor="content">내용</label>
      <input
        type="text"
        id="content"
        value={content}
        onChange={inputTodoHandler}
      />
      <button>투두리스트 추가</button>
    </form>
  );
};

export default TodoForm;
