import './App.scss';
import Row from './Row';
import requests from './requests.js';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow ></Row>
      <Row title="Trending" fetchUrl={requests.fetchTrending} ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} ></Row>
      <Row title="Action" fetchUrl={requests.fetchActionMovies} ></Row>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} ></Row>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} ></Row>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} ></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} ></Row>
      <Footer />
    </div>
  );
}

export default App;
