import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// https://www.youtube.com/watch?v=QEsukdXFxxs&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=25

const { createStore } = require("redux");

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    case "@counter/reseted":
      return 0;
    default:
      return state;
  }
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const actionIncremented = {
  type: "@counter/incremented",
};

const actionDecremented = {
  type: "@counter/decremented",
};

const actionReseted = {
  type: "@counter/reseted",
};

// store.getState();
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({ type: actionIncremented });
// store.dispatch({ type: actionIncremented });
// store.dispatch({ type: actionIncremented });
// store.dispatch({ type: actionIncremented });

// counterReducer(0, actionIncremented);
// counterReducer(1, actionDecremented);
// counterReducer(2, actionReseted);

console.log("✔️");

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(
    <React.StrictMode>
      <div>{store.getState()}</div>
      <button onClick={() => store.dispatch(actionIncremented)}>+ 1</button>
      <button onClick={() => store.dispatch(actionDecremented)}>- 1</button>
      <button onClick={() => store.dispatch(actionReseted)}>Reset</button>
    </React.StrictMode>
  );
};

renderApp();
store.subscribe(renderApp);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div>{store.getState}</div>
//     <button onClick={()=>store.dispatch(actionIncremented)}>+ 1</button>
//     <button onClick={()=>store.dispatch(actionDecremented)}>- 1</button>
//     <button onClick={()=>store.dispatch(actionReseted)}>Reset</button>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
