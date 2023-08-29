import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-sm text-white py-4 px-2 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} LAB. <br/> Todos los derechos reservados.</p>
        <p className='text-[0.8rem]'>
          Diseño y Desarrollo por{' '}
          <a
            href="https://lucioberte-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Lucio A Berté.
          </a>
        </p>
      </div>
    </footer>
  );
};