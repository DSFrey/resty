export const History = (props) => {
  const handleQuerySelect = (e) => {
    props.dispatch({ type: 'select', payload: e.currentTarget.id })
  }
  return (
    <section data-testid='history' id='history'>
      {
        props.state.history.map((entry, index) => {
          return (
            <div
              key={index}
              id={index}
              className={props.state.showRequest === index ? 'selected' : ''}
              onClick={handleQuerySelect}
            >
              <span>{entry.requestParams.method}</span>
              <span>{entry.requestParams.url}</span>
            </div>)
        })
      }
    </section>
  );
}
