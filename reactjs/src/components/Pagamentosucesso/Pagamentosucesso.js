import React from 'react';
import './Pagamentosucesso.css'


const Pagamentosucesso = () => {
  return (
    <main>
      <div className="map-responsive">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58481.26136996242!2d-46.730422496264175!3d-23.637347580528605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50f8ac76dfdb%3A0xc160a87f059ec93d!2sSenac%20Largo%20Treze!5e0!3m2!1spt-BR!2sbr!4v1718972142676!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          className="rounded" 
          width="600" 
          height="450" 
          frameBorder="0" 
          style={{ border: 0 }} 
          allowFullScreen
          title="Eiffel Tower Map"
        ></iframe>
      </div>
    </main>
  );
};

export default Pagamentosucesso;
