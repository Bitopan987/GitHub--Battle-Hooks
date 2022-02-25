import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import { Route, Routes } from 'react-router-dom';
import GitHubStars from './components/GitHubStars';
import GitHubBattle from './components/GitHubBattle';
import Battle from './components/Battle';
import { useState } from 'react';

function App() {
  let [inputText1, setInputText1] = useState('');
  let [inputText2, setInputText2] = useState('');
  let [hideForm1, setHideForm1] = useState(false);
  let [hideForm2, setHideForm2] = useState(false);
  let [data1, setData1] = useState('');
  let [data2, setData2] = useState('');
  let [closeUser1Data, setCloseUser1Data] = useState(true);
  let [closeUser2Data, setCloseUser2Data] = useState(true);
  let [darkMode, setDarkMode] = useState('');

  const handleSubmit = (event) => {
    console.dir(event);
    event.preventDefault();
    let id = event.target.dataset.id;
    if (inputText1 || inputText2) {
      fetch(`https://api.github.com/users/${inputText1 || inputText2}`)
        .then((res) => res.json())
        .then((data) => {
          if (id === 'inputText1') {
            setInputText1('');
            setData1(data);
            setHideForm1(true);
            setCloseUser1Data(false);
          } else {
            setInputText2('');
            setData2(data);
            setHideForm2(true);
            setCloseUser2Data(false);
          }
        });
    }
  };

  const handleChange = ({ target }) => {
    let { value } = target;
    let id = target.dataset.id;
    if (id === 'inputText1') {
      setInputText1(value);
    } else {
      setInputText2(value);
    }
  };

  const handleKeyPress = (event) => {
    if (event.target === 13) {
      handleSubmit(event);
    }
  };

  const closeUserData = ({ target }) => {
    let id = target.dataset.id;
    if (id === 'user1') {
      setHideForm1(!hideForm1);
      setCloseUser1Data(!closeUser1Data);
      setData1('');
    } else {
      setHideForm2(!hideForm1);
      setCloseUser2Data(!closeUser1Data);
      setData2('');
    }
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark_bg' : 'light_bg'}>
      <div className="container">
        <BrowserRouter>
          <Header toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route exact path="/" element={<GitHubStars />} />
            <Route
              exact
              path="/battle"
              element={
                <GitHubBattle
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  handleKeyPress={handleKeyPress}
                  closeUserData={closeUserData}
                />
              }
            />

            <Route path="/userbattle" element={<Battle />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
