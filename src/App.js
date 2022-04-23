import logo from './logo.svg';
import './App.scss';
import { Alert, Card, DatePicker } from 'antd';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div class='container'>
      <h1>Componentes Ant Design</h1>
      <span> Programación III </span>
      <div>
        <Alert message='Success Text' type='success' />
        <Alert message='Info Text' type='info' />
        <Alert message='Warning Text' type='warning' />
        <Alert message='Error Text' type='error' />
      </div>
      <div>
        <label>Selecciona una fecha</label>
        <DatePicker onChange={ (date) => {
          const dateString = new Date(date).toLocaleDateString()
          console.log(dateString)
          }
        }>
        </DatePicker>
      </div>
      <div>
        <Card
          size='small'
          title='Tarjeta de presentación'
          extra={<a href='#'> Ver más </a>}
          style={{ width: 300 }}
          >
          <p> Karol Liseth Rojas </p>
          <p> Ingeniera electrónica e ingeniera de sistemas </p>
          <p>
            <small> karol.rojasb@gmail.com </small>
          </p>
          </Card>
      </div>
    </div>
  );
}

export default App;
