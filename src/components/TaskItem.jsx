import { useState } from 'react';

function TaskItem({ task, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleSave = () => {
    if (editTitle.trim() === '') return;
    onUpdate(task.id, editTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        className="task-checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <>
          <input
            className="task-input"
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <div className="task-actions">
            <button className="btn btn-primary" onClick={handleSave}>
              Kaydet
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              İptal
            </button>
          </div>
        </>
      ) : (
        <>
          <span className="task-title">{task.title}</span>
          <div className="task-actions">
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(true)}
            >
              Düzenle
            </button>
            <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
              Sil
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;