import './App.css';
import  Web  from './componentes/Web.js';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Los mejores Futbolistas de la actualidad</h1>

        <Web
        nombre='Lionel Andres Messi'
        posicion='Enganche-Numero 10 '
        pais='seleccion Argentina'
        imagen='lionel'
        texto='Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia.' />
        
        
        <Web
        nombre='Cristiano Ronaldo'
        posicion='Extremo Izquierdo-Numero 7'
        pais='seleccion Portugal'
        imagen='ronaldo'
        texto='Cristiano Ronaldo dos Santos Aveiro, conocido como Cristiano Ronaldo, es un futbolista portugués que juega como delantero o extremo. Jugador histórico, estuvo ligado a diversos equipos importantes antes de integrar desde 2021 el plantel del Manchester United Football Club de la Premier League de Inglaterra.' />

        <Web
        nombre='Neymar JR'
        posicion='Enganche-Numero 10'
        pais='seleccion Brasil'
        imagen='neymar'
        texto='Neymar da Silva Santos Júnior, conocido como Neymar Júnior o simplemente Neymar, es un futbolista brasileño que juega como delantero en el Paris Saint-Germain F. C. de la Ligue 1 de Francia, y en la selección de fútbol de Brasil.' />
        
        <Web
        nombre='Karim Benzema'
        posicion='Delantero central-Numero 9'
        pais='seleccion Francia'
        imagen='benzema'
        texto= 'Karim Benzema es un futbolista francés de ascendencia argelina​​ que juega como delantero en el Real Madrid Club de Fútbol de la Primera División de España desde la temporada 2009-10.' />

        <Web
        nombre='Robert Lewandowski'
        posicion='Delantero central-Numero 9'
        pais='seleccion Polonia'
        imagen='lewandowski'
        texto= 'Robert Lewandowski es un futbolista polaco que juega como delantero en el F. C. Barcelona de la Primera División de España. Es también internacional absoluto con la selección de Polonia desde 2008, de la cual es su capitán y máximo goleador histórico.​' />
        
        <Web
        nombre='Erling Haaland'
        posicion='Delantero central-Numero 9'
        pais='seleccion Noruega'
        imagen='haaland'
        texto= 'Erling Braut Haaland es un futbolista noruego que juega como delantero en el Manchester City F. C. de la Premier League de Inglaterra, ​ y en la selección de fútbol de Noruega.' />   
    </div>
    </div>
  );
}

export default App;
