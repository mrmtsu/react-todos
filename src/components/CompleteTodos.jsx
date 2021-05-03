export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <dir className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </dir>
  );
};
