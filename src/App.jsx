import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return alert("TODOを入力してください");
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickComplate = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickDelete = (index) => {
    // スプレッド構文で現在のincompleteTodosの値を複製し新しい配列を生成
    const newTodos = [...incompleteTodos];
    // splice() 第一引数に何番目の要素か、第二引数にいくつ削除するか指定する
    newTodos.splice(index, 1);
    // このnewTodosでsetIncompleteTodosを更新する
    setIncompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const backIncompleteTodos = [...completeTodos];
    backIncompleteTodos.splice(index, 1);

    const backCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(backIncompleteTodos);
    setIncompleteTodos(backCompleteTodos);
  };

  return (
    <div>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは５個までです！</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </div>
  );
};
