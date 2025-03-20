import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props;

  const filterTodosList =
    selectedTab === "Wszystkie"
      ? todos
      : selectedTab === "Ukończone"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex}
            {...props}
            todo={todo}
          />
        );
      })}
    </>
  );
}
