import { useState } from "react";

const UpdateTask = ({ onModify, tasks, taskId }) => {
  let taskToModify;
  for (const task of tasks) {
    if (task.id === taskId) {
      taskToModify = task;
    }
  }
  const [id] = useState(taskToModify.id);
  const [nom, setNom] = useState(taskToModify.nom);
  const [description, setDescription] = useState(taskToModify.description);
  const [prix, setPrix] = useState(taskToModify.prix);
  const [categorie, setCategorie] = useState(taskToModify.categorie);
  const [image, setImage] = useState(taskToModify.image);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!nom) {
      alert("Veuillez ajouter un nom");
      return;
    }
    if (!description) {
      alert("Veuillez ajouter une description");
      return;
    }
    if (!prix) {
      alert("Veuillez ajouter un prix");
      return;
    }
    if (!categorie) {
      alert("Veuillez ajouter une categorie");
      return;
    }
    if (!image) {
      alert("Veuillez ajouter un image");
      return;
    }

    onModify({ id, nom, description, prix, categorie, image });
    // console.log(onModify)
    setNom("");
    setDescription("");
    setPrix("");
    setCategorie("");
    setImage("");
  };
  return (
    <form className="form_container" onSubmit={onSubmit}>
      <div className="form-group">
        <label>Nom</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nom de l'item"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Description de l'item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Prix</label>
        <input
          type="text"
          className="form-control"
          placeholder="Prix de l'item"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Catégorie</label>
        <input
          type="text"
          className="form-control"
          placeholder="Catégorie de l'item"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input
          type="text"
          className="form-control"
          placeholder="Lien image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <input
        type="submit"
        className="btn btn-block"
        value="Modifier la tache"
      />
    </form>
  );
};

export default UpdateTask;
