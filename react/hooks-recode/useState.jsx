const MyReact = (() => {
  // let _state;

  // function useState(initialState) {

  //   _state = _state === undefined ? initialState : _state;

  //   const _setState = function (newState) {
  //     _state = newState;
  //     render();
  //   }

  //   return [_state, _setState];
  // }

  // function render () {
  //   ReactDOM.render(
  //     <App />,
  //     document.getElementById('app')
  //   );
  // }
  
  // -------------------------

  // let _state;

  // function useState(initialState) {

  //   _state = _state === undefined ? initialState : _state;

  //   const _setState = function (newState) {
      
  //     if (typeof newState === 'function') {
  //       _state = newState(_state);
  //     } else {
  //       _state = newState;
  //     }
  //     render();
  //   }

  //   return [_state, _setState];
  // }

  // function render () {
  //   ReactDOM.render(
  //     <App />,
  //     document.getElementById('app')
  //   );
  // }

  // -------------------------
  const state = [],
        stateSetters = [];

  let stateIndex = 0;

  function createStateSetter (index) {
    return function (newState) {
      if (typeof newState === 'function') {
        state[index] = newState(state[index]);
      } else {
        state[index] = newState;
      }
      render();
    }
  }

  function createState (initialState, index) {
    return state[index] ? state[index] : initialState;
  }

  function useState(initialState) {
    state[stateIndex] = createState(initialState, stateIndex);
    
    if (!stateSetters[stateIndex]) {
      stateSetters.push(createStateSetter(stateIndex));
    }

    const _state = state[stateIndex],
          _setState = stateSetters[stateIndex];
    
    stateIndex ++;

    return [ _state, _setState ];
  }

  function render () {
    stateIndex = 0;

    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }

  return {
    useState
  }
})();

const { useState } = MyReact;

function App () {
  // const [ count, setCount ] = useState(0);

  // --------------------------------------------

  const [ count1, setCount1 ] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  return (
    <div>
      {/* <h1>{ count }</h1>
      <button onClick={ () => setCount(count + 1) }>ADD 1</button> */}

      {/* ----------------------------------- */}

      {/* <h1>{ count }</h1>
      <button onClick={ () => setCount(count => count + 1) }>ADD 1</button> */}

      {/* ----------------------------------- */}

      <h1>{ count1 } { count2 }</h1>
      <button onClick={ () => setCount1(count => count + 1) }>add count 1</button>
      <button onClick={ () => setCount1(count1 - 1) }>minus count 1</button>
      <button onClick={ () => setCount2(100) }>set count 2</button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')  
);