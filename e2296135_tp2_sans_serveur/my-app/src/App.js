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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      image:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/123/12383/12383477.jpg",
      nom: "Canon EOS Rebel T7 DSLR Camera with 18-55mm IS Lens Kit",
      description:
        "Take your photography to the next level with the Canon EOS Rebel T7 DSLR Camera. This 24.1MP device will easily allow you to take high quality images that you can share with the whole world. Its easy-to-use operation allows you to capture every moment as it happens and not be limited to blurry or washed-out point-and-shoot pictures.",
      prix: 550.59,
      categorie: "Appareil photo",
    },
    {
      nom: "Sony E-Mount APS-C 55–210mm f/4.5-6.3 OSS 3.8x Telephoto Zoom Lens - Black",
      description:
        "The Sony 55-210mm f/4.5-6.3 telephoto zoom lens offers optical performance in a compact, lightweight size. Whether you're capturing wildlife or action on the field, the Optical SteadyShot image stabilization and fast autofocus ensure you get sharp, detailed images. The 7-blade circular aperture lets you create beautiful perfectly round bokeh.",
      prix: "399.99",
      categorie: "Lentille photo",
      image:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/102/10288/10288046.jpg",
      id: 2,
    },
    {
      nom: "Sony E-Mount Full-Frame FE 35mm f/1.8 Wide Angle Prime Lens",
      description:
        "Capture the world around you in stunning detail with the Sony SEL35F18F 35mm f/1.8 prime lens. Boasting a large f/1.8 aperture, fast, quiet, and precise AF operation, and an equivalent focal length of 52.5mm, this lightweight, compact lens is ideal for everyday snapshots, food photography, landscapes, night scenes, and so much more.",
      prix: "699.99",
      categorie: "Lentille photo",
      image:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/138/13802/13802973.jpg",
      id: 3,
    },
    {
      nom: "Sony E-Mount Full-Frame FE 70-200mm f/2.8 OSS Premium G Master Telephoto Zoom Lens",
      description:
        "Capture epic landscape and wildlife photos with the Sony FE 70-200mm master lens. This G Master series telephoto zoom lens with f/2.8 aperture delivers extraordinary rendering, quick and efficient autofocus, and premium image stabilisation. It can capture stunning bokeh and details in true-to-life colours with extremely high resolution.",
      prix: "2599.99",
      categorie: "Lentille photo",
      image:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/145/14517/14517960.jpg",
      id: 4,
    },
    {
      nom: "Sony Alpha a7 II Full-Frame Mirrorless Camera with FE 28-70mm Lens Kit",
      description:
        "Capture images as they were meant to be seen with the Sony a7 II mirrorless camera. Its 24.3MP full-frame Exmor sensor and BIONZ X processor faithfully reproduce colours, textures, and details as seen by the naked eye. Built-in 5-axis image stabilization compensates for 5 different types of camera shake. Includes a FE 28-70mm f/3.5-5.6 OSS lens.",
      prix: "1400.59",
      categorie: "Appareil photo",
      image:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/103/10347/10347557.jpg",
      id: 5,
    },
    {
      nom: "DJI Action 2 Power Combo 4K Action Camera - Grey",
      description:
        "Capture stunning photos and videos with the DJI Action 2 camera power combo. Its lightweight and portable design makes it your perfect companion to record all those unforgettable moments. A 4K/120fps resolution allows you to shoot videos in sharp, lifelike detail. It also includes an adapter mount and two magnetic mounts to shoot from any angle for more creative video footages.",
      prix: "330.59",
      categorie: "Appareil photo",
      image:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/157/15777/15777881.jpg",
      id: 6,
    },
    {
      nom: "Kingston Canvas Go! Plus 256GB 170MB/s microSDXC Memory Card",
      description:
        "Save those great shots on the go with the Kingston Canvas Go! Plus 256GB microSDXC memory card. This memory card has a 170MB/s maximum read speed and 90MB/s write speed for a speedy and efficient workflow. U3 and V30 support mean you can capture 4K UHD video at high speeds. An optional SD adapter is included for use with SD-compatible devices.",
      prix: "37.99",
      categorie: "Carte SD",
      image:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/147/14707/14707227.jpg",
      id: 7,
    },
  ]);
  // 1 - Global

  const modifyTask = async (updTask) => {
    const id = updTask.id;
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              nom: updTask.nom,
              description: updTask.description,
              categorie: updTask.categorie,
              prix: updTask.prix,
              image: updTask.image,
            }
          : task
      )
    );
    setShowModifyTask(false);
  };
  //2 - Delete

  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //4 Insert

  const addTask = async (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 1000);
    const newTask = { id, ...task };
    //console.log(newTask)
    setTasks([...tasks, newTask]);
  };

  //5 toggle form
  const [showAddTask, setShowAddTask] = useState(false);
  const [showModifyTask, setShowModifyTask] = useState(false);
  const [taskIdModification, setTaskIdModification] = useState(0);

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
