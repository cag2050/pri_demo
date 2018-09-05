import { isDevelopment } from 'pri/client';
import * as React from 'react';

class Props {}

class State {}

export default class Page extends React.PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <div>
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Welcome to pri!</h1>
        <p style={{ padding: '10 50px' }}>Current env: {isDevelopment ? 'local' : 'prod'}</p>
      </div>
    );
  }
}
