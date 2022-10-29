import { useReducer } from 'react';
import axios from 'axios'

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Form } from './components/form';
import { Results } from './components/results';
import { History } from './components/history';

export const initialData = {
  history: [],
  showRequest: 0,
  loading: false
}

export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, history: [action.payload, ...state.history], showRequest: 0 };

    case 'select':
      return { ...state, showRequest: parseInt(action.payload) }

    case 'loading':
      return { ...state, loading: !state.loading }

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(dataReducer, initialData)

  const handleApiCall = async (requestParams) => {
    dispatch({ type: 'loading' });
    let response = await axios(requestParams)
    let newRequest = {
      requestParams,
      headers: response.headers,
      data: response.data
    }
    dispatch({ type: 'add', payload: newRequest })
    dispatch({ type: 'loading' });
  }

  return (
    <>
      <Header />
      <History state={state} dispatch={dispatch} />
      <Form handleApiCall={handleApiCall} />
      <Results data={state.history[state.showRequest]} loading={state.loading} />
      <Footer />
    </>
  );
}

export default App;
