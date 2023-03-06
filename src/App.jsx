import './App.css';
import Header from './components/header';
import Cards from './components/cards';
import Footer from './components/footer';
import data from './data';

function App() {
  console.log(data[1]);
  const cards = data.map(cityData => {

    return (
      <Cards data={cityData} />
    )
  })
  return (
    <div>
      <Header />
      <section className='cards__section'>
        {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;
