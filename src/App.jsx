import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  // 인풋값 관리
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });
  const inputTodoHandler = (e) => {
    // console.log("e", e.target);
    const { id, value } = e.target;
    setTodo({
      ...todo,
      [id]: value,
    });
  };

  // 투두리스트 생성 및 동작
  const [todoList, setTodoList] = useState([]);
  const resetInput = () => {
    setTodo({ title: "", content: "" });
  };

  const submitTodoList = (e) => {
    e.preventDefault();

    if (!todo.title.trim() || !todo.content.trim()) {
      alert(`빈칸을 모두 입력해주세요`);
      return;
    }

    const { title, content } = todo;
    setTodoList((prev) => {
      return [...prev, { title: title.trim(), content: content.trim() }];
    });
    console.log(todoList);

    resetInput();
  };

  // 자동 포커스
  const titleRef = useRef("");
  useEffect(() => {
    titleRef.current.focus();
  }, [todoList]);

  // 투두리스트 삭제
  const deleteHandler = (title) => {
    console.log(`삭제될 투두`, title);
    const newTodoList = todoList.filter((todo) => {
      return todo.title !== title;
    });
    setTodoList(newTodoList);
  };
  return (
    <>
      <form onSubmit={submitTodoList}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={todo.title}
          onChange={inputTodoHandler}
          ref={titleRef}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          value={todo.content}
          onChange={inputTodoHandler}
        />
        <button>투두리스트 추가</button>
      </form>
      <div>
        <h3>Working</h3>
        <ul>
          {todoList.map((todo) => {
            return (
              <li key={todo.title}>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <button onClick={() => deleteHandler(todo.title)}>삭제</button>
                <button>완료</button>
              </li>
            );
          })}
        </ul>
        <h3>Done</h3>
      </div>
    </>
  );
}

export default App;
