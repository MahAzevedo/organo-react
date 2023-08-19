import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import ListaSuspensa from './componentes/ListaSuspensa';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
      <ListaSuspensa itens={times} />
    </div>
  );
} 

export default App;
