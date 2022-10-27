const MyReact = (() => {
  const state = [],
        stateSetters = [],
        effectDepArr = [];

  let stateIndex = 0,
      effectIndex = 0;

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

  function useEffect (cb, depArr) {
    if (typeof cb !== 'function') {
      throw new TypeError('callback must be a function');
    }

    if (typeof depArr === 'undefined') {
      cb();
    }

    if (({}).toString.call(depArr) !== '[object Array]') {
      throw new TypeError('dependences must be contained in a Array');
    }

    const isChanged = effectDepArr[effectIndex] 
                    ? depArr.every((dep, index) => dep !== effectDepArr[effectIndex][index])
                    : true
    
    if (isChanged) {
      cb();
    }
    
    effectDepArr[effectIndex] = depArr;

    effectIndex ++;      
  }

  function useReducer (reducer, initialState) {
    const [ state, setState ] = useState(initialState);

    function dispatch (action) {
      const newState = reducer(state, action);
      setState(newState);
    }

    return [ state, dispatch ];
  }

  function render () {
    stateIndex = 0;
    effectIndex = 0;
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }

  return {
    useState,
    useReducer,
    useEffect
  }
})();

const { useState, useReducer, useEffect } = MyReact;

function App () {
  
  const [ count1, setCount1 ] = useState(0);
  const [ count2, setCount2 ] = useState(0);
  const [ number, dispatch ] = useReducer(reducer, 0);

  function reducer (state, action) {
    switch(action.type) {
      case 'add':
        return state + 1;
      case 'minus':
        return state -1;
      default:
        return state;
    }
  }

  useEffect(() => {
    console.log('count1 changed');
  }, [count1]);

  useEffect(() => {
    console.log('count2 changed');
  }, [count2]);

  return (
    <div>
      <h1>{ count1 } { count2 }</h1>
      <h2>{ number }</h2>
      <button onClick={ () => setCount1(count => count + 1) }>add count 1</button>
      <button onClick={ () => setCount2(100) }>set count 2</button>
      <button onClick={ () => dispatch({ type: 'add' }) }>ADD</button>
      <button onClick={ () => dispatch({ type: 'minus' }) }>MINUS</button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')  
);