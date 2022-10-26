import { useState } from 'react';
import './form.scss';

export const Form = (props) => {
  const availableMethods = ['GET', 'POST', 'PUT', 'DELETE']
  const [currentMethod, setCurrentMethod] = useState('GET')

  const handleMethod = (e) => {
    setCurrentMethod(e.target.id)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      currentMethod,
      url: e.target[0].value,
      body: e.target[2].value,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
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
          <textarea name='JSON'></textarea>
        </label>
      </form>
    </>
  );
}
