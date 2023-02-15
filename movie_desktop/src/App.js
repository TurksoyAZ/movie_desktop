import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';

function App() {
  return (

    <section className="App">

      <article className='componentsContainer'>
        
        <div className='backColorApp'>
          <Header />
          <Home />
          <Footer />
        </div>

      </article>

    </section>
  );
}

export default App;
