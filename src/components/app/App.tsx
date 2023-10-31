import { Header } from '../header/header';
import { FormPersonalData } from '../form-personal/form.personal';
import { FormAccessData } from '../form-acess/form.acess.data';
import './app.scss';
import { Footer } from '../footer/footer';
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
