import Students from './components/Students';

class App extends React.Component {
  render () {
    return (
      <div>
        <Students />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)