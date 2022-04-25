import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./componenets/TodoCreate";
import TodoHead from "./componenets/TodoHead";
import TodoList from "./componenets/TodoList";
import TodoTemplate from "./componenets/TodoTemplate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <TodoProvider>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    );
}

export default App;
