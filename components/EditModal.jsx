const EditModal = ({ task, onSave, onCancel }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            title: e.target.title.value,
            start: e.target.start.value,
            end: e.target.end.value
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80">
            <div className="bg-neutral-950 w-80 md:w-96 border border-neutral-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4">Görevi Düzenle</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="title">Başlık:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={task.title}
                            className="w-full p-2 bg-neutral-700 text-neutral-100 border border-neutral-600 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="start">Başlama Tarihi:</label>
                        <input
                            type="date"
                            id="start"
                            name="start"
                            defaultValue={task.start}
                            className="w-full p-2 bg-neutral-700 text-neutral-100 border border-neutral-600 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="end">Bitiş Tarihi:</label>
                        <input
                            type="date"
                            id="end"
                            name="end"
                            defaultValue={task.end}
                            className="w-full p-2 bg-neutral-700 text-neutral-100 border border-neutral-600 rounded"
                        />
                    </div>
                    <div className="flex justify-start gap-2 pt-2">
                        <button
                            type="submit"
                            className="bg-green-900 text-neutral-100 px-4 py-2 rounded hover:bg-green-700 transition-colors"
                        >
                            Güncelle
                        </button>
                        <button
                            onClick={onCancel}
                            className="bg-red-900 text-neutral-100 px-4 py-2 rounded hover:bg-red-500 transition-colors"
                        >
                            İptal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal