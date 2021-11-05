import React from 'react';
class GitHubBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      tag: 'all',
    };
  }

  render() {
    let tag = this.state.tag;
    return (
      <main className="main">
        <div className="main_header">
          <nav className="flex">
            <h2
              className={tag === 'all' ? 'cursor-pointer ' : 'inline-block '}
              data-id="all"
            >
              All
            </h2>
            <p>fghtfyhdyxd</p>
          </nav>
        </div>
      </main>
    );
  }
}

export default GitHubBattle;
