import React from "react";

export default class Username extends React.Component {
  render() {
    return (
      <div className="input">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
    );
  }
}
