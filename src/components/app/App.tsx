import { Header } from '../header/header';
import { FormPersonalData } from '../form-personal/form.personal';
import './app.scss';
import { Footer } from '../footer/Footer';
const title = 'My page';
const text = 'Isdi Coders';

function App() {
  return (
    <div>
      <Header title={title}></Header>
      <main>
        <FormPersonalData></FormPersonalData>
      </main>
      <Footer text={text}></Footer>
    </div>
  );
}

export default App;
