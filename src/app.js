import { useState } from 'react';
import axios from 'axios'

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Form } from './components/form';
import { Results } from './components/results';

const App = () => {
  const [data, setData] = useState(null)
  const [requestParams, setRequestParams] = useState({})
  const [loading, setLoading] = useState(false)

  const callApi = async (requestParams) => {
    // mock output
    setLoading(true)
    const response = await axios(requestParams)
    setData({
      headers: response.headers,
      data: response.data
    })
    setRequestParams(requestParams)
    setLoading(false)
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading}/>
      <Footer />
    </>
  );
}

export default App;
