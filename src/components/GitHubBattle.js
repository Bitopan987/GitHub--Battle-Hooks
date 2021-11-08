import React from 'react';
import Players from './Players';
import { Link } from 'react-router-dom';

class GitHubBattle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputText1: '',
      inputText2: '',
      hideForm1: false,
      hideForm2: false,
      data1: '',
      data2: '',
      closeUser1Data: true,
      closeUser2Data: true,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let id = event.target.dataset.id;
    if (this.state[id]) {
      fetch(`https://api.github.com/users/${this.state[id]}`)
        .then((res) => res.json())
        .then((data) => {
          if (id === 'inputText1') {
            this.setState({
              [id]: '',
              data1: data,
              hideForm1: true,
              closeUser1Data: false,
            });
          } else {
            this.setState({
              [id]: '',
              data2: data,
              hideForm2: true,
              closeUser2Data: false,
            });
          }
        });
    }
  };

  hadleChange = ({ target }) => {
    let { value } = target;
    let id = target.dataset.id;
    this.setState({ [id]: value });
  };

  handleKeyPress = (event) => {
    if (event.target === 13) {
      this.handleSubmit(event);
    }
  };

  closeUserData = ({ target }) => {
    let id = target.dataset.id;
    if (id === 'user1') {
      this.setState((prevState) => ({
        hideForm1: !prevState.hideForm1,
        closeUser1Data: !prevState.closeUser1Data,
        data1: '',
      }));
    } else {
      this.setState((prevState) => ({
        hideForm2: !prevState.hideForm2,
        closeUser2Data: !prevState.closeUser2Data,
        data2: '',
      }));
    }
  };

  render() {
    return (
      <main className="main">
        <h1 className="battle_header">Instructions</h1>
        <section className="instruction">
          <div className="instruction_col">
            <h2>Enter two Github users</h2>
            <div>
              <img alt="" src="/images/user.png" />
            </div>
          </div>
          <div className="instruction_col">
            <h2>Battle</h2>
            <div>
              <img alt="" src="/images/swords.png" />
            </div>
          </div>
          <div className="instruction_col">
            <h2>Know the Winner</h2>
            <div>
              <img alt="" src="/images/trophy.png" />
            </div>
          </div>
        </section>
        <section className="player_container">
          <h2>Players</h2>
          <div>
            <Players
              {...this.state}
              handleChange={this.hadleChange}
              handleSubmit={this.handleSubmit}
              handleKeyPress={this.handleKeyPress}
              closeUserData={this.closeUserData}
              darkMode={this.props.darkMode}
            />
          </div>
          <div className="text-center py-12">
            <Link
              to={{
                pathname: '/userbattle',
                state: [this.state.data1, this.state.data2],
              }}
            >
              <h4
                className={
                  !this.state.closeUser1Data && !this.state.closeUser2Data
                    ? 'visible bg-black text-white py-3 px-8 font-bold inline-block rounded-md'
                    : 'hidden'
                }
              >
                Battle
              </h4>
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

export default GitHubBattle;
