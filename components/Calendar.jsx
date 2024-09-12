import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarComponent = () => {
  const [view, setView] = useState('dayGridMonth');
  const [events, setEvents] = useState([
    { title: 'Meeting', start: new Date() }
  ]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });

  const handleEventAdd = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      setEvents([
        ...events,
        { title: newEvent.title, start: new Date(newEvent.date) }
      ]);
      setNewEvent({ title: '', date: '' });
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

      <div className="flex-grow bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-lg h-[500px] overflow-auto">
        <FullCalendar
          key={view} // view değiştiğinde takvim yeniden render edilecek
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          headerToolbar={false}
          editable={true}
          events={events}
          eventContent={(eventInfo) => (
            <div className="flex flex-col p-1 bg-neutral-800 rounded text-neutral-100">
              <span>{eventInfo.event.title}</span>
            </div>
          )}
          className="h-full bg-neutral-900 text-neutral-100"
        />
      </div>

      <form onSubmit={handleEventAdd} className="mt-4 flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Etkinlik Başlığı"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="p-2 rounded border border-neutral-700 bg-neutral-800 text-neutral-100"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="p-2 rounded border border-neutral-700 bg-neutral-800 text-neutral-100"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-neutral-700 text-neutral-100 hover:bg-neutral-600 transition-colors"
        >
          Etkinlik Ekle
        </button>
      </form>
    </div>
  );
};

export default CalendarComponent;
