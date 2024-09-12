const DeleteModal = ({ onDelete, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80">
      <div className="bg-neutral-950 border border-neutral-800 w-72 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl w-full text-center mb-4">Emin misiniz?</h2>
        <div className="flex justify-center gap-4 pt-2">
          <button
            onClick={onDelete}
            className="bg-red-900 text-neutral-100 px-4 py-2 rounded hover:bg-red-500 transition-colors"
          >
            Sil
          </button>
          <button
            onClick={onCancel}
            className="bg-neutral-700 text-neutral-100 px-4 py-2 rounded hover:bg-neutral-500 transition-colors"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};


export default DeleteModal