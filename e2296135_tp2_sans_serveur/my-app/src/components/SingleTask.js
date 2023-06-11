import { FaTimes } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import Button from "./Button";

const SingleTask = ({ task, onDelete, onToggle, showModify, onModify }) => {
  return (
    // <div class='card' style='width: 18rem;'><div class='thumbnail'><img alt='Card image cap' class='card-img-top image_gallery' src=" +
    //     tableau_data[i]["webformatURL"] +
    //     "></div>" +
    //     "<div class='card-body'><a class='btn btn-link' href='/post-view/" +
    //     tableau_data[i]["id"] +
    //     "'>Afficher les détails</a></div></div>
    <div className="card">
      <div className="thumbnail">
        <img className="card-img-top image_gallery" src={task.image}></img>
        <div class="card-body">
          <p>
            {" "}
            <strong>Produit : </strong>
            {task.nom}
          </p>
          <p>
            {" "}
            <strong>Description : </strong>{" "}
          </p>
          <p className="texte_petit">{task.description}</p>
          <p>
            {" "}
            <strong>Catégorie :</strong> {task.categorie}
          </p>
          <p>
            <strong>Prix :</strong> {task.prix}$
          </p>
          <h3>
            <FaPenAlt onClick={() => onModify(task.id)} />
            {/* <Button text={showModify?'Fermer':'Modifier'} color={showModify?'red':'green'}
            onClick={onModify}/> */}
            <FaTimes
              style={{ color: "red" }}
              onClick={() => onDelete(task.id)}
            />
          </h3>
          <p>{task.day}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
