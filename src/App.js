import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GitHubStars from './components/GitHubStars';
import GithubBattle from './components/GitHubBattle';
import Battle from './components/Battle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }
  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    return (
      <div className={this.state.darkMode ? 'dark' : ''}>
        <BrowserRouter>
          <Header toggleDarkMode={this.toggleDarkMode} {...this.state} />
          <Routes>
            <Route path="/" exact>
              <GitHubStars {...this.state} />
            </Route>
            <Route path="/battle" exact>
              <GithubBattle {...this.state} />
            </Route>
            <Route
              path="/userbattle"
              component={Battle}
              {...this.state}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
