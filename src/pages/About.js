import React, { Component } from 'react';
import "./About.css";
import profpic from "../assets/profpic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img
            className="profile_image"
            src={profpic}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Tyler Lee</div>
          <div className="brief_description">
          Interests - swimming, movies, and gaming
          </div>
        </div>
      </div>
    </div>
    )
  }
}