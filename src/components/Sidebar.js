import React from 'react';

const Sidebar = () => {
  return (
    <div className="side fixed left-0 top-0 h-screen w-16 bg-gray-900 flex flex-col items-center justify-center space-y-6">
      <a href="https://www.linkedin.com/in/shivshankar-ghyar-870972289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <img src="./Images/linkdein.jpg" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform duration-300"/>
      </a>
      <a href="https://x.com/Shivshanka77956?t=nd72U6Ent4TGTmM39OajQA&s=08" target="_blank" rel="noopener noreferrer">
        <img src="./Images/twitter.png" alt="Twitter" className="w-10 h-10 hover:scale-110 transition-transform duration-300"/>
      </a>
      <a href="mailto:shivghyar538@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src="./Images/mail.jpg" alt="Email" className="w-10 h-10 hover:scale-110 transition-transform duration-300"/>
      </a>
      <a href="https://www.instagram.com/shiv_ghyar?utm_source=qr&igsh=MXBmajhjMGZubW9wZA==" target="_blank" rel="noopener noreferrer">
        <img src="./Images/instagram.png" alt="Instagram" className="w-10 h-10 hover:scale-110 transition-transform duration-300"/>
      </a>
      <a href="https://wa.me/qr/RU5S7TBK7NBKA1" target="_blank" rel="noopener noreferrer">
        <img src="./Images/whatsapp.jpg" alt="WhatsApp" className="w-10 h-10 hover:scale-110 transition-transform duration-300"/>
      </a>
    </div>
  );
};

export default Sidebar;
