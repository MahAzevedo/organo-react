import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;

// App JS tá na raíz do projeto.
// App JS é onde está concentrado os componentes.

// Os nomes time, Times, Time, não são palavras reservadas, são somentes nomes para pq
// no figma é um grupo de funcionários, um time, só por isso, poderia ser outros nomes.

// Em "App.js", no colaboradores vamos chamar o métodos filter() e teremos
// uma arrow function. O colaborador será o parâmetro e o resultado do booleano
// vai nos dizer se levamos ou não esse parâmetro baseado no time
// desse colaborador. Ou seja, queremos que o nome do time seja igual ao time.nome.

// esse index.js aqui, seria o "bootstrap" da nossa aplicação,
// é o ponto de entrada, é aqui que a coisa começa, o primeiro
// arquivo que vai ser executado é essa cara aqui, o index.js aqui,
// que vai renderizar o primeiro componente, e vai fazendo
// isso em cascata

// <React.StrictMode> é esse aqui que ajuda a ver os erros

// react
