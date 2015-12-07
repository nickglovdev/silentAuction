import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Aucion Silencio
            <nav className="options">
              <Link to="#">Create</Link>
              <Link to="#">Current</Link>
              <Link to="#">Past</Link>
            </nav>
          </h1>
        </header>
        <aside>
          <nav>
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
          </nav>
        </aside>
        <div className="pageWrap">
            <main>
              {this.props.children}
            </main>
        </div>
      </div>
    )
  }
}

export default App;
