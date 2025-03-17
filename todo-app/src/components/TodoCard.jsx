export function TodoCard(props) {
  const { todo, handleDeleteTodo, handleCompleteTodo, todoIndex } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todo.complete}
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
        >
          <h6>Zrobione</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Usuń</h6>
        </button>
      </div>
    </div>
  );
}
