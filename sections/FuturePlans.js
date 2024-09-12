import React from 'react';

export default function FuturePlans() {
  return (
    <div className="flex flex-col gap-6 items-start justify-center h-screen bg-neutral-900 px-12 py-16">
      <h1 className="text-3xl md:text-6xl text-neutral-200 font-bold mb-4">Gelecekte Eklemeyi Planladıklarım</h1>
      <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
        EventNest projesine eklemeyi düşündüğüm birçok yeni özellik var. İlk olarak, kullanıcıların etkinliklerini daha detaylı bir şekilde yönetebilmeleri için 
        <span className="text-neutral-400"> ileri düzey filtreleme</span> ve <span className="text-neutral-400">arama fonksiyonları</span> eklemeyi planlıyorum. Böylece kullanıcılar, etkinliklerini daha hızlı ve kolay bir şekilde bulabilecekler.
      </p>
      <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mt-4">
        Ayrıca, <span className="text-neutral-400">grup etkinlikleri</span> ve <span className="text-neutral-400">davet mekanizması</span> eklemeyi planlıyorum. Bu özellik ile kullanıcılar, etkinliklerine arkadaşlarını davet edebilecek ve katılım durumu gibi bilgilere anında ulaşabilecekler.
      </p>
      <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mt-4">
        Bir diğer plan ise <span className="text-neutral-400">entegre bildirim sistemi</span>. Kullanıcılar etkinlik yaklaştığında ya da bir değişiklik olduğunda anlık bildirim alabilecekler. Bu bildirimler e-posta veya uygulama içi olarak iletilebilecek.
      </p>
      <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mt-4">
        Gelecekte uygulamaya <span className="text-neutral-400">üçüncü parti entegrasyonlar</span> eklemeyi de düşünüyorum. Örneğin, Google Takvim, Outlook gibi popüler takvim servisleri ile senkronize çalışma özelliği, etkinlik yönetimini daha da kolaylaştıracak.
      </p>
      <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mt-4">
        Mobil kullanıcılar için daha optimize bir deneyim sunmayı hedefliyorum. <span className="text-neutral-400">PWA (Progressive Web App)</span> desteği ile kullanıcılar uygulamayı cihazlarına yükleyerek offline olarak da kullanabilecekler.
      </p>
    </div>
  );
}
