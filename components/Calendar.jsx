import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarComponent = () => {
  const [view, setView] = useState('dayGridMonth');

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
          events={[
            { title: 'Meeting', start: new Date() }
          ]}
          className="h-full bg-neutral-900 text-neutral-100"
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
