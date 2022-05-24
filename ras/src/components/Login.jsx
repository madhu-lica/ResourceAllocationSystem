import React from "react";

function Note() {
  return (
    <div className="note">
    <h2>LOGIN</h2><br></br>

      <form>
      
          <input type="text" name="username" placeholder="Enter Username"></input><br></br><br></br>
          <input type="password" name="password" placeholder="Enter password"></input><br></br><br></br>
          <input id="submit" type="submit"></input>

      </form>
    </div>
  );
}

export default Note;