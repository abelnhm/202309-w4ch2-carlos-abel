
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormPersonalData } from '../form-personal/form.personal';
import { FormAccessData } from '../form-acess/form.acess.data';
import './app.scss';
const title = 'My page';
const text = 'Isdi Coders';

function App() {
  return (
    <div>
      <Header title={title}></Header>
      <main>
        <FormPersonalData></FormPersonalData>
        <FormAccessData></FormAccessData>
      </main>
      <Footer text={text}></Footer>
    </div>
  );
}

export default App;
