import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManyTasks from "./components/ManyTasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { useEffect } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import UpdateTask from "./components/UpdateTask";
import Nav from "./components/Nav";

function App() {
  // 1 - Global
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const modifyTask = async (task) => {
    const updTask = { ...task };

    const id = updTask.id;

    console.log(id);

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const newTask = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              nom: newTask.nom,
              description: newTask.description,
              categorie: newTask.categorie,
              prix: newTask.prix,
              image: newTask.image,
            }
          : task
      )
    );

    setShowModifyTask(false);
  };
  //2 - Delete

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //4 Insert

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  //5 toggle form
  const [showAddTask, setShowAddTask] = useState(false);
  const [showModifyTask, setShowModifyTask] = useState(false);
  const [taskIdModification, setTaskIdModification] = useState(0);

  //3 - toggle
  const toggleReminder = async (id) => {
    console.log(id);

    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  return (
    <BrowserRouter>
      <div className="conteneur">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Nav />
        </nav>
        <Header
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {showModifyTask && (
          <UpdateTask
            onModify={modifyTask}
            tasks={tasks}
            taskId={taskIdModification}
          />
        )}
        {tasks.length > 0 ? (
          <Routes>
            <Route
              path="/portail"
              element={
                <ManyTasks
                  tasks={tasks}
                  onModify={(id) => {
                    setShowModifyTask(!showModifyTask);
                    setTaskIdModification(id);
                  }}
                  onDeleteMany={deleteTask}
                  // onToggleMany={toggleReminder}
                />
              }
            />
          </Routes>
        ) : (
          "No tasks"
        )}
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
