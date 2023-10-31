import { FormPersonalData } from '../form-personal/form.personal';
import { Header } from '../header/header';

const title = 'Title';

function App() {
  return (
    <div>
      <Header title={title}></Header>
      <FormPersonalData></FormPersonalData>
    </div>
  );
}

export default App;
