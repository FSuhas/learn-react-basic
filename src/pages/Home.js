import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className='home'>
      <Navigation></Navigation>
      <div className="homeContent">
        <div className="content">
          <h1>Fabien Suhas</h1>
          <h2>Développeur Full-Stack</h2>
          <p>Après 15 ans en vente et en marketing je suis fier et fraichement sorti de formation au Wagon #batch-860-paris. <br />
          <br />
          J'ai pu grâce a ça me familiarisé avec la logique des différents langages de code.<br />
          <br />
          Je souhaite me spécialiser en Front-end et me former à l’univers de React et de Javascript.</p>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">Télécharger C.V</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
