import { useState } from 'react';
import './form.scss';

export const Form = (props) => {
  const availableMethods = ['GET', 'POST', 'PUT', 'DELETE']
  const [currentMethod, setCurrentMethod] = useState('GET')
  const [currentUrl, setCurrentUrl] = useState('')
  const [currentData, setCurrentData] = useState('')

  const handleMethod = (e) => {
    setCurrentMethod(e.target.id)
  }

  const handleUrl = (e) => {
    setCurrentUrl(e.target.value)
  }

  const handleData = (e) => {
    setCurrentData(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: currentMethod,
      url: currentUrl,
      data: currentData,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit} data-testid='form'>
        <label >
          <span>URL: </span>
          <input name='url' type='text' value={currentUrl} onChange={handleUrl}/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          {availableMethods.map(method => {
            return <span
              id={method}
              key={method}
              className={method === currentMethod ? 'selected' : ''}
              onClick={handleMethod}
            >{method}</span>
          })}
        </label>
        <label>
          <span>JSON: </span>
          <textarea name='JSON' value={currentData} onChange={handleData}></textarea>
        </label>
      </form>
    </>
  );
}
