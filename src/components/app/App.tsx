import { FormPersonalData } from '../form-personal/form.personal';
import { Header } from '../header/header';
import './app.scss';

const title = 'My page';

function App() {
  return (
    <div>
      <Header title={title}></Header>
      <main>
        <FormPersonalData></FormPersonalData>
      </main>
    </div>
  );
}

export default App;
