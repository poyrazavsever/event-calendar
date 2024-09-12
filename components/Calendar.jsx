import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import toast from "react-hot-toast";
import { db, auth } from '../firebase'; // Firebase konfigürasyonunu import edin
import { ref, set, push, onValue } from "firebase/database";

const CalendarComponent = () => {
  const [view, setView] = useState('dayGridMonth');
  const [formData, setFormData] = useState({
    title: '',
    color: '#ff0000',
    startDate: '',
    endDate: '',
  });
  const [events, setEvents] = useState([]);

  // Kullanıcı kimliğini alın
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const eventsRef = ref(db, 'events/' + userId);
      onValue(eventsRef, (snapshot) => {
        const data = snapshot.val();
        const eventsArray = data ? Object.values(data) : [];
        setEvents(eventsArray);
      });
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const { title, color, startDate, endDate } = formData;
    if (!title || !color || !startDate || !endDate) {
      toast.error('Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      if (!userId) {
        toast.error('Kullanıcı kimliği alınamadı.');
        return;
      }

      // Realtime Database'a yeni etkinliği ekleyin
      const newEventRef = push(ref(db, 'events/' + userId));
      await set(newEventRef, {
        title,
        start: startDate,
        end: endDate,
        backgroundColor: color
      });

      // Etkinlikleri güncelleyin
      setEvents(prevEvents => [
        ...prevEvents,
        { title, start: startDate, end: endDate, backgroundColor: color }
      ]);

      toast.success('Etkinlik başarıyla eklendi!');

      // Formu temizleyin
      setFormData({
        title: '',
        color: '#ff0000',
        startDate: '',
        endDate: '',
      });
    } catch (error) {
      console.error("Error adding event: ", error);
      toast.error('Bir hata oluştu.');
    }
  };

  return (
    <div className="bg-neutral-950 border border-neutral-700 shadow-lg rounded-lg p-4 md:p-8 mt-4 md:mt-36 mx-12 flex flex-col h-full">
      <div className="flex justify-start mb-4">
        <button
          onClick={() => setView('dayGridMonth')}
          className={`px-4 py-2 rounded-t-lg border ${view === 'dayGridMonth' ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-600 text-neutral-200'} hover:bg-neutral-700 transition-colors md:mr-2`}
        >
          Ay Görünümü
        </button>
        <button
          onClick={() => setView('timeGridWeek')}
          className={`px-4 py-2 rounded-t-lg border ${view === 'timeGridWeek' ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-600 text-neutral-200'} hover:bg-neutral-700 transition-colors md:mr-2`}
        >
          Hafta Görünümü
        </button>
        <button
          onClick={() => setView('timeGridDay')}
          className={`px-4 py-2 rounded-t-lg border ${view === 'timeGridDay' ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-600 text-neutral-200'} hover:bg-neutral-700 transition-colors`}
        >
          Gün Görünümü
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-lg h-[500px] overflow-auto">
          <FullCalendar
            key={view} // view değiştiğinde takvim yeniden render edilecek
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={view}
            headerToolbar={false}
            editable={true}
            events={events} // Etkinlikleri burada göster
            className="h-full bg-neutral-900 text-neutral-100"
          />
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-800 p-4 rounded-lg w-full md:w-1/3">
          <h2 className="text-xl text-neutral-100 mb-4">Etkinlik Ekle</h2>
          <div className="mb-4">
            <label className="block text-neutral-300 mb-2" htmlFor="title">Başlık:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 bg-neutral-700 text-neutral-100 border border-neutral-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-300 mb-2" htmlFor="color">Renk Seç:</label>
            <input
              type="color"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full border border-neutral-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-300 mb-2" htmlFor="startDate">Başlama Tarihi:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 bg-neutral-700 text-neutral-100 border border-neutral-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-300 mb-2" htmlFor="endDate">Bitiş Tarihi:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-2 bg-neutral-700 text-neutral-100 border border-neutral-600 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-neutral-600 text-neutral-100 py-2 px-4 rounded-lg hover:bg-neutral-500 transition-colors"
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

export default CalendarComponent;
