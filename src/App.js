import Container from './Container';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <Container>
      <Form />
      <Footer
        text='*Kurs z dnia 22.04.2021- według danych z Narodowego Banku Polskiego "Tabela nr 077/A/NBP/2021"'
      />
    </Container>
  );
};
export default App;