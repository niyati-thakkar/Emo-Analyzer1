"use client"
import Image from 'next/image';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Feedback from '../Feedback/Feedback';

export default function Upload() {
  const [isHidden, setIsHidden] = useState(true);

  const showAndUnblur = () => {
    setIsHidden(false);
    $(".container").children().addClass('blur');
    // Display the content with the ID `unblur`
    // $('dontblur').remove('.blur');
    $('dontblur').remove('.hide');
  }
  $('.container').on('click', function(event) {
      // Remove the blur class from all elements
      $('.container').children().removeClass('blur');
  
      // Hide the content with the ID `dontblur`
      setIsHidden(true);
  });
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>){
    event.preventDefault();
    showAndUnblur();
    return false;
  }

  return (
    <div className="container">
      <div className="row heading">
        <h1>Audio Anazyzer</h1>
        <h3>Analyze sentiments in the Audio</h3>
      </div>
      <div className="row dark-bg">
        <div className="outerBox" style={{ backgroundImage: "url('./images/drop.png')" }}>
          <form className="firstPageForm" onSubmit={handleSubmit}>
            <div className="uploadContainer">
              <span className="drophere">DROP HERE</span>
              <button type="submit">
                <img className="uploadImage" src='./images/upload.png'></img>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id='dontblur' className={isHidden ? 'hide' : 'unblur'}>
        <Feedback></Feedback>
      </div>
    </div>
  );
}
