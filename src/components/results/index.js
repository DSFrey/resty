import { JsonViewer } from '@textea/json-viewer'
import './results.scss'

export const Results = (props) => {
  return (
    <section>
      {props.loading
        ? <p>loading...</p>
        : props.data
          ? <JsonViewer value={props.data} />
          : null
      }
    </section>
  );
}
