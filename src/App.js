import React from 'react';
import styles from './assets/class-four.module.css';
import headerImage from './assets/images/citykey-logo.png';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="bg-primary text-white p-3 d-flex justify-content-start">
        <div className={styles['header-image']}>
          <img src={headerImage} alt='image-head' />
          <h1 className={styles.title}>Header</h1>
        </div>

      </header>
      <div className="container-fluid flex-grow-1">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="https://www.google.com" target="_blank">Google</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://espanol.yahoo.com/" target="_blank">Yahoo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://uai.edu.ar/" target="_blank">Universidad Abierta Interamericana</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.clarin.com/" target="_blank">Clarin</a>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>Main Content Area</h2>
            </div>
            <p>This is the main content area of the application.</p>
            <div>
              <h1>The keys to 'game-based learning'</h1>
              <p>
                Los beneficios de los video juegos han llegado también a la enseñanza con el 'game-based learning' o <span className={styles['back-color-green']}> aprendizaje basado en juegos electronicos</span>
                <strong className={styles['text-lb']}> game-based learning</strong> or <em>learning based on electronic games</em>. <span className={styles['color-bwn']}>Este método educativo	utiliza lo bueno de los video juegos para transmitir conocimientos y habilidades a los estudiantes.</span>
              </p>
              <ul>
                <li>
                  <strong>Dinamiza la educación:</strong> <span className={styles['back-color-yellow']}>Transforman la educación en un juego divertido, emocionante sin clases aburridas.</span> <span className={styles['text-rd']}>Esto hace que los estudiantes asimilen y retengan los contenidos casi sin darse cuenta. </span>
                </li>
                <li>
                  <strong>Incrementea la motivación:</strong> convierten a los estudiantes en los protagonistas de la historia y <span className={styles['back-lb']}> premian su esfuerzo con medallas</span>, vidas extra, bonus, etc. <span className={styles['text-rd']}>Así consiguen captar y mantener su interes por aprender</span>
                </li>
                <li>
                  <strong>Facilita la practica:</strong> permiten aplicar los conocimientos adquiridos sin crear situaciones de peligro. <span className={styles['text-rd']}>Este es el cometido por ejemplo de los simuladores de aviacion y navegacion. </span>
                </li>
              </ul>
              <p>
                <span className={styles['underlined-text']}>Muchos padres recelan de las videoconsolas y no quieren verlas en casa por miedo a que perjudiquen el rendimiento escolar de sus hijos </span> Sin embargo los beneficios de los videojuegos incluyen el desarrollo de habilidades como la atencion, la creatividad, la memoria, los idiomas y el trabajo en equipo.
              </p>
            </div>
          </main>
        </div>
      </div>
      <footer className="bg-dark text-white mt-auto p-3 text-center">
        <p>Footer Content Here</p>
      </footer>
    </div>
  );
}

export default App;
