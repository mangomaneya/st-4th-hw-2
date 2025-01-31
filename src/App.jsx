import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
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

  const titleRef = useRef("");
  useEffect(() => {
    titleRef.current.focus();
  }, [todoList]);

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
                <button>삭제</button>
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
