import { JsonViewer } from '@textea/json-viewer'
import './results.scss'

export const Results = (props) => {
  return (
    <section data-testid='results'>
      {props.loading
        ? <p>loading...</p>
        : props.data
          ? <JsonViewer value={props.data} />
          : null
      }
    </section>
  );
}
