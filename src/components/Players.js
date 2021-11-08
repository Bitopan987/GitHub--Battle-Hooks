function Players(props) {
  let inputText1 = props.inputText1;
  //   let inputText2 = props.inputText2;
  return (
    <>
      <div className="form_section">
        <form
          onSubmit={(e) => props.handleSubmit(e)}
          data-id="inputText1"
          className={
            props.hideForm1 && !props.closeUser1Data ? 'hidden' : 'visible'
          }
        >
          <label htmlFor="p-1" className="form_header">
            Player One
          </label>
          <div className="wrapper">
            <input
              type="text"
              placeholder="github username"
              id="p-1"
              className={
                props.darkMode ? 'handle_input_dark' : 'handle_input_light'
              }
              data-id="inputText1"
              value={inputText1}
              onChange={(e) => props.handleChange(e)}
              onKeyDown={(e) => props.handleKeyPress(e)}
            />
            <input type="submit" value="submit" className="btn_submit" />
          </div>
        </form>

        <form
          onSubmit={(e) => props.handleSubmit(e)}
          data-id="inputText1"
          className={
            props.hideForm1 && !props.closeUser1Data ? 'hidden' : 'visible'
          }
        >
          <label htmlFor="p-1" className="form_header">
            Player One
          </label>
          <div className="wrapper">
            <input
              type="text"
              placeholder="github username"
              id="p-1"
              className={
                props.darkMode ? 'handle_input_dark' : 'handle_input_light'
              }
              data-id="inputText1"
              value={inputText1}
              onChange={(e) => props.handleChange(e)}
              onKeyDown={(e) => props.handleKeyPress(e)}
            />
            <input type="submit" value="submit" className="btn_submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Players;
