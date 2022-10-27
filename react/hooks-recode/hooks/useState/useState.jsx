const MyReact = (() => {
  const states = [],
        stateSetters = [];
  
  let stateIndex = 0;
  
  function createState (initialState, stateIndex) {
    return states[stateIndex] !== undefined ? states[stateIndex] : initialState;
  }

  function createStateSetter (stateIndex) {
    return function (newState) {
      if (typeof newState === 'function') {
        states[stateIndex] = newState(states[stateIndex]);
      } else {
        states[stateIndex] = newState;
      }

      render();
    }
  }

  function useState (initialState) {
    states[stateIndex] = createState(initialState, stateIndex);

    if (!stateSetters[stateIndex]) {
      stateSetters.push(createStateSetter(stateIndex));
    }

    const _state = states[stateIndex],
          _setState = stateSetters[stateIndex];

    stateIndex ++;

    return [ _state, _setState ];
  }
  
  // function useState (initialState) {

  //   _state = _state === undefined ? initialState : _state;

  //   const _setState = (newState) => {
  //     if (typeof newState === 'function') {
  //       console.log('fn');
  //       _state = newState(_state);
  //     } else {
  //       console.log('plain value');
  //       _state = newState;
  //     }
  //     render();
  //   }
    

  //   return [ _state, _setState ];
  // }

  function render () {
    stateIndex = 0;

    ReactDOM.render(
      <App />,
      document.querySelector('#app')
    )
  }

  return {
    useState
  }
})();

const { useState } = MyReact;

function App () {

  const [ count, setCount ] = useState(0);
  const [ flag, setFlag ] = useState(false);

  return (
    <div>
      <h1>{ count }</h1>
      <h1>{ flag ? '打开状态' : '关闭状态' }</h1>
      <button onClick={ () => setCount(count + 1) }>ADD 1</button>
      <button onClick={ () => setCount(count => count - 1) }>MINUS 1</button>
      <button onClick={ () => setFlag(flag => flag = !flag) }>{ flag ? '关闭' : '打开' }</button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)