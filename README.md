# React Basics - Todo & Counter App

A responsive, brutalist-style React application built to demonstrate the fundamentals of React. This project was bootstrapped using **Create React App** and follows the "React basics" roadmap item.

---

## 🚀 How to Run the Project

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm start
   ```
   *Note: The project is pre-configured to run on **port 3002** (set in `package.json`) to prevent conflicts with standard local environment ports.*

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🛠️ Tech Stack & Styling

* **Core**: React 19, HTML5
* **Build Tooling**: Create React App (`react-scripts` v5)
* **Styling**: Vanilla CSS featuring a custom **brutalist theme** (bold borders, flat neon accents, monospace fonts) and fully responsive **media queries** for mobile and desktop screens.

---

## 📖 Core React Concepts Demonstrated

This project serves as a practical implementation of the 15 React core topics:

| Concept | Description | Implementation File |
| :--- | :--- | :--- |
| **JSX** | Combining HTML-like markup structure inside JavaScript. | Used in all `.js` files in `src/` |
| **Functional Components** | Modular, reusable UI components written as plain JavaScript functions. | [src/components/Counter.js](src/components/Counter.js), [src/components/TodoForm.js](src/components/TodoForm.js), [src/components/TodoItem.js](src/components/TodoItem.js), [src/components/TodoList.js](src/components/TodoList.js) |
| **Props** | Read-only properties passed down from parent components to child components. | Passed to [src/components/TodoList.js](src/components/TodoList.js) and [src/components/TodoItem.js](src/components/TodoItem.js) |
| **useState** | Local state hook to manage dynamic component values (inputs, counts, arrays). | Manages counts in [src/components/Counter.js](src/components/Counter.js), inputs in [src/components/TodoForm.js](src/components/TodoForm.js), and todos/filters in [src/App.js](src/App.js) |
| **useEffect** | Side-effect hook to sync components with external systems or run code on state changes. | Syncs the todo array with `localStorage` in [src/App.js](src/App.js) |
| **Conditional Rendering** | Conditionally displaying elements based on state or evaluations. | Dynamic empty state inside [src/components/TodoList.js](src/components/TodoList.js) and status line rendering in [src/App.js](src/App.js) |
| **List Rendering with Keys** | Dynamically rendering array elements with stable, unique `key` identifiers. | Mapping todo elements inside [src/components/TodoList.js](src/components/TodoList.js) using unique `todo.id` |

---

## 📂 File Map

* **[src/App.js](src/App.js)**: Main entry component. Manages root todos/filters states, handles CRUD business logic, and synchronizes todos with `localStorage`.
* **[src/components/Counter.js](src/components/Counter.js)**: Standard interactive counter utilizing local `useState`.
* **[src/components/TodoForm.js](src/components/TodoForm.js)**: Form for creating new items with controlled inputs.
* **[src/components/TodoList.js](src/components/TodoList.js)**: Maps the active list of todos to item components; renders the conditional empty-state view.
* **[src/components/TodoItem.js](src/components/TodoItem.js)**: Visual list-item component exposing custom action toggles and deletes to the list parent.
* **[src/index.css](src/index.css)**: Brutalist styling guide and responsive screen layouts (flexbox, CSS Grid, media queries).
