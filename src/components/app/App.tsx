import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormAccessData } from '../form-acess/form.acess.data';

const title = 'Title';
const text = 'Isdi Coders';

function App() {
  return (
    <div>
      <Header title={title}></Header>
      <FormAccessData></FormAccessData>

      <Footer text={text}></Footer>
    </div>
  );
}

export default App;
