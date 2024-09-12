import React, { useState, useEffect } from "react";
import { db, auth, ref, child, get, set, remove, update } from '../firebase';
import toast from "react-hot-toast";
import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";

const ProfilePage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Kullanıcı kimliğini alın
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
      fetchTasks(user.uid);
    }
  }, []);

  const fetchTasks = async (userId) => {
    try {
      const tasksRef = ref(db, `events/${userId}`);
      const snapshot = await get(tasksRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const tasksList = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setTasks(tasksList);
      } else {
        setTasks([]);
      }
    } catch (error) {
      console.error("Error fetching tasks: ", error);
      toast.error("Görevleri alırken bir hata oluştu.");
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await remove(ref(db, `events/${userId}/${taskId}`));
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      toast.success("Görev başarıyla silindi!");
    } catch (error) {
      console.error("Error deleting task: ", error);
      toast.error("Görevi silerken bir hata oluştu.");
    } finally {
      setShowDeleteModal(false);
    }
  };

  const handleEdit = async (taskId, updatedTask) => {
    try {
      await update(ref(db, `events/${userId}/${taskId}`), updatedTask);
      setTasks(prevTasks => prevTasks.map(task => (task.id === taskId ? { ...task, ...updatedTask } : task)));
      toast.success("Görev başarıyla güncellendi!");
    } catch (error) {
      console.error("Error updating task: ", error);
      toast.error("Görevi güncellerken bir hata oluştu.");
    } finally {
      setShowEditModal(false);
    }
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
    setShowEditModal(true);
  };

  const handleDeleteClick = (task) => {
    setEditingTask(task);
    setShowDeleteModal(true);
  };

  return (
    <div className="p-4 mx-12 bg-neutral-950 bg-opacity-50 border border-neutral-800 rounded text-neutral-100 mt-48">
      <h1 className="text-2xl mb-4">Etkinliklerin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {tasks.map(task => (
          <div key={task.id} className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{task.title}</h2>
            <p className="mb-2">Başlama tarihi: {task.start}</p>
            <p className="mb-2">Bitiş Tarihi: {task.end}</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleEditClick(task)}
                className="bg-neutral-600 text-neutral-100 px-4 py-2 rounded hover:bg-neutral-500 transition-colors"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDeleteClick(task)}
                className="bg-red-600 text-neutral-100 px-4 py-2 rounded hover:bg-red-500 transition-colors"
              >
                Sil
              </button>
            </div>
          </div>
        ))}

      </div>

      {showDeleteModal && (
        <DeleteModal
          onDelete={() => handleDelete(editingTask.id)}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      {showEditModal && (
        <EditModal
          task={editingTask}
          onSave={(updatedTask) => handleEdit(editingTask.id, updatedTask)}
          onCancel={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default ProfilePage;
