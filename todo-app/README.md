# Todo App

A simple Todo List app built with React. This application allows you to add, complete, delete, and filter your todos. It also uses the browser's `localStorage` to save your todos, so you won't lose them even if you refresh the page.

## Features

- **Add Todo**: Users can add new todos.
- **Complete Todo**: Users can mark a todo as completed.
- **Delete Todo**: Users can remove a todo from the list.
- **Filter Todos**: Users can filter todos by their completion status (All, Completed, or Incomplete).
- **Persist Todos**: Todos are saved in the browser’s `localStorage`, so data persists between page reloads.

## Tech Stack

- **React**: The app is built using React for managing UI components and state.
- **localStorage**: Uses the browser's `localStorage` to persist todos between page reloads.

## Components

- **Header**: Displays the title and the total number of todos.
- **Tabs**: Provides the option to filter todos (All, Completed, or Incomplete).
- **TodoInput**: A form to input new todos.
- **TodoList**: Displays the list of todos with the ability to complete or delete them.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/todo-app.git
```

2. Navigate to the project directory:

```bash
cd todo-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

Your app should now be running on `http://localhost:3000`.

## Usage

- **Add a Todo**: Type a task in the input field and click "Add Todo."
- **Complete a Todo**: Click on a todo to mark it as completed.
- **Delete a Todo**: Click the delete icon on a todo to remove it.
- **Filter Todos**: Use the tabs at the top to view All, Completed, or Incomplete todos.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork the project, open issues, or submit pull requests if you'd like to contribute.
