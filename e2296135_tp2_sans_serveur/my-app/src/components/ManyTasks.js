import SingleTask from "./SingleTask";
import UpdateTask from "./UpdateTask";

const ManyTasks = ({ tasks, onDeleteMany, onModify, onToggleMany }) => {
  return (
    <>
      <div className="row many">
        {tasks.map((task) => (
          <SingleTask
            key={task.id}
            onModify={onModify}
            task={task}
            onDelete={onDeleteMany}
            onToggle={onToggleMany}
          />
        ))}
      </div>
    </>
  );
};

export default ManyTasks;
