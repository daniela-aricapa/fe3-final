import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ marginRight: '10px' }}>Copyright</p>
        <img
          src="https://linafernandez.co/wp-content/uploads/2022/11/cropped-Lina-Fernandez-Odontologia-300x161.png"
          alt="Powered by Logo"
          style={{ maxHeight: '80px' }} // Ajusta la altura máxima del logo según tu preferencia
        />
      </div>
    </footer>
  );
};

export default Footer;
