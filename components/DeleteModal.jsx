const DeleteModal = ({ onDelete, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-50">
      <div className="bg-neutral-800 p-6 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-xl mb-4">Emin misiniz?</h2>
        <div className="flex justify-end gap-2">
          <button
            onClick={onDelete}
            className="bg-red-600 text-neutral-100 px-4 py-2 rounded hover:bg-red-500 transition-colors"
          >
            Sil
          </button>
          <button
            onClick={onCancel}
            className="bg-neutral-600 text-neutral-100 px-4 py-2 rounded hover:bg-neutral-500 transition-colors"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};


export default DeleteModal