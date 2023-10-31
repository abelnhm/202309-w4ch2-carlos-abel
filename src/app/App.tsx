import { Header } from '../components/header/header';
import { Footer } from '../components/footer/Footer';

const title = 'Title';
const text = 'Isdi Coders';

function App() {
  return (
    <div>
      <Header title={title}></Header>
      <Footer text={text}></Footer>
    </div>
  );
}

export default App;
