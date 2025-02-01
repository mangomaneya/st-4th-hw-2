import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // 인풋값 관리
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    content: "",
  });
  const inputTodoHandler = (e) => {
    // console.log("e", e.target);
    const { id, value } = e.target;
    setTodo({
      ...todo,
      id: uuidv4(),
      [id]: value,
    });
  };

  // 투두리스트 생성 및 동작
  const [todoList, setTodoList] = useState([]);
  const resetInput = () => {
    setTodo({ id: 0, title: "", content: "" });
  };

  const submitTodoList = (e) => {
    e.preventDefault();

    if (!todo.title.trim() || !todo.content.trim()) {
      alert(`빈칸을 모두 입력해주세요`);
      return;
    }

    const { id, title, content } = todo;
    setTodoList((prev) => {
      return [
        ...prev,
        { id: id, title: title.trim(), content: content.trim() },
      ];
    });
    console.log("todoList =>", todoList);

    resetInput();
  };

  // 자동 포커스
  const titleRef = useRef("");
  useEffect(() => {
    titleRef.current.focus();
  }, [todoList]);

  // 투두리스트 삭제
  const deleteHandler = (id) => {
    console.log(`삭제될 투두 id =>`, id);
    const newDeletedTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(newDeletedTodoList);
  };

  // 완료 투두리스트 생성 - doneTodoList 스테이트 생성 / onclick이벤트
  const [doneTodoList, setDoneTodoList] = useState([]);
  const doneTodoListHandler = (id) => {
    // console.log("id>", id);
    const newDoneTodoList = todoList.find((todo) => {
      return todo.id === id;
    });
    console.log("newDoneTodoList =>", newDoneTodoList);
    setDoneTodoList((prev) => {
      // console.log('prev =>', prev)
      return [...prev, newDoneTodoList];
    });

    //기존 투두리스트에서 현재 선택된 투두 삭제
    deleteHandler(id);
    console.log("todoList", todoList);
  };

  // 완료 취소 동작 - 취소된 완료 투두리스트를, 기본 투두리스트에 추가 / 완료리스트 재갱신
  const workingTodoList = (id) => {
    const newWorkingTodoList = doneTodoList.find((todo) => {
      return todo.id === id;
    });
    setTodoList((prev) => {
      return [...prev, newWorkingTodoList];
    });
    const newDoneTodoList = doneTodoList.filter((todo)=>{
      return todo.id !== id;
    })
    setDoneTodoList(newDoneTodoList);
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
              <li key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <button onClick={() => deleteHandler(todo.id)}>삭제</button>
                <button onClick={() => doneTodoListHandler(todo.id)}>
                  완료
                </button>
              </li>
            );
          })}
        </ul>
        <h3>Done</h3>
        <ul>
          {doneTodoList.map((todo) => {
            return (
              <li key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <button onClick={() => deleteHandler(todo.id)}>삭제</button>
                <button onClick={() => workingTodoList(todo.id)}>취소</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
