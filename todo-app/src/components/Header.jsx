export function Header(props) {
  const { todos } = props;
  const todosLength = todos.filter((val) => !val.complete).length;
  const taskOrTasks =
    todosLength === 1
      ? "zadanie"
      : todosLength > 4 || todosLength === 0
      ? "zadań"
      : "zadania";

  return (
    <header>
      <h1 className="text-gradient">
        Masz do wykonania {todosLength} {taskOrTasks}
      </h1>
    </header>
  );
}
