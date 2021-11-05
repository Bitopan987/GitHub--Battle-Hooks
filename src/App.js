import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
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
      <div className={this.state.darkMode ? 'dark_bg' : 'light_bg'}>
        <div className="container">
          <BrowserRouter>
            <Header toggleDarkMode={this.toggleDarkMode} {...this.state} />
            <Routes>
              <Route exact path="/">
                <GitHubStars {...this.state} />
              </Route>
              <Route exact path="/battle">
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
      </div>
    );
  }
}

export default App;
