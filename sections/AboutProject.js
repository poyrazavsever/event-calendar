import React from 'react';

export default function AboutProject() {
  return (
    <div className="flex flex-col gap-6 items-start justify-center h-screen bg-neutral-950 px-12">
      <h1 className="text-5xl md:text-6xl text-neutral-200 font-bold mb-4">EventNest. Projesi</h1>
      <p className="text-xl text-neutral-100 leading-relaxed">
        EventNest, kullanıcıların etkinliklerini yönetmek için tasarlanmış modern bir takvim uygulamasıdır. Bu platform, 
        etkinlik ekleme, düzenleme ve silme gibi temel işlevleri kolay ve hızlı bir şekilde gerçekleştirmeye olanak tanır.
        Özellikle etkinlik yönetimini basitleştirmek için tasarlanmış, kullanıcı dostu bir arayüze sahiptir.
      </p>
      <p className="text-xl text-neutral-100 leading-relaxed text-left">
        Projenin altyapısı <span className="text-neutral-400">Firebase</span> üzerine kurulmuştur. Bu sayede kullanıcı
        kimlik doğrulama, veri saklama ve gerçek zamanlı güncelleme gibi güçlü özellikler kullanılarak sorunsuz bir deneyim sunulmaktadır.
      </p>
      <p className="text-xl text-neutral-100 leading-relaxed text-left">
        <span className="text-neutral-400">React</span> ve <span className="text-neutral-400">Next.js</span> ile oluşturulan
        uygulama, modern front-end geliştirme prensiplerine uygun olarak yapılandırılmıştır. 
        Bu teknolojilerle birlikte <span className="text-neutral-400">Tailwind CSS</span> kullanılarak stil ve tasarım süreçleri kolaylaştırılmış, 
        tamamen responsive ve şık bir kullanıcı arayüzü oluşturulmuştur.
      </p>
      <p className="text-xl text-neutral-100 leading-relaxed text-left">
        Animasyon ve etkileşimlerde <span className="text-neutral-400">Framer Motion</span> kullanılarak 
        kullanıcı deneyimi artırılmıştır. Geçiş animasyonları, hover efektleri ve dinamik sayfa geçişleri bu kütüphane ile 
        etkileyici bir hale getirilmiştir.
      </p>
      <p className="text-xl text-neutral-100 leading-relaxed text-left">
        Backend kısmında <span className="text-neutral-400">Firebase Realtime Database</span> ile verilerin hızlı ve güvenli bir şekilde yönetilmesi sağlanmıştır. 
        Projede ayrıca <span className="text-neutral-400">Svelte</span> gibi framework'ler de kullanılarak performans ve hız optimizasyonu gerçekleştirilmiştir.
      </p>
    </div>
  );
}
