import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Register from "./pages/Register";
import Todo from "./pages/TodoList";

const App = () => {
  return (
      <Routes>
  <Route path="/" element={<Navigate to="/login" replace />} />
  <Route path="/login" element={<Login /> } />
  <Route path="/register" element={<Register />} />
  <Route path="/todo" element={<Todo />} />
      </Routes>
  );
};

export default App;