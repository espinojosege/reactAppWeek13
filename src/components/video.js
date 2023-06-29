import React from "react";
import video1 from "../assignment.mp4";

export default class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <video controls width="75%" src={video1} />
      </div>
    );
  }
}
