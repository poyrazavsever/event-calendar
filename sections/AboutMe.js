import React from 'react';

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-screen bg-neutral-950 px-12 text-white">
      <div className="flex flex-col items-start md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-3xl md:6xl font-bold mb-4">Hakkımda</h1>
        <p className="text-xl md:text-2xl leading-relaxed mb-4">
          Merhaba! Ben Poyraz Avsever, 18 yaşındayım ve yazılım geliştirici olmayı hedefliyorum.
          UI/UX tasarımı ve frontend geliştirme konularına 4 yıldır ilgi duyuyorum. 
          Şu anda React ve Tailwind CSS kullanarak modern ve şık kullanıcı arayüzleri oluşturuyorum.
        </p>
        <p className="text-xl md:text-2xl leading-relaxed mb-4">
          Yazılım ve tasarım dünyasında sürekli olarak yeni şeyler öğrenmekten büyük keyif alıyorum. 
          Bu süreçte çeşitli projelerde yer aldım ve kendimi sürekli geliştirmeye çalışıyorum.
        </p>
        <p className="text-xl md:text-2xl leading-relaxed mb-4">
          Eğer bu konular hakkında konuşmak isterseniz, benimle iletişime geçmekten çekinmeyin! 
          Fikirlerinizi ve projelerinizi paylaşmak için her zaman açığım.
        </p>
      </div>
      <div className="hidden md:w-1/3 md:flex">
        <img 
          src="Photo.jpg" 
          alt="Poyraz Avsever" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutMe;
