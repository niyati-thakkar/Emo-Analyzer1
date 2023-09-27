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
    const [fileName, setFileName] = useState('');
    const handleFileChange = (event : React.SyntheticEvent<HTMLFormElement>) => {
      const fileInput = event.target;
      if (fileInput.files.length > 0) {
        // Access the first file in the list (assuming single file selection)
        const selectedFile = fileInput.files[0];
        setFileName(selectedFile.name);
        $('.fileSelected').removeClass('hide');
      } else {
        setFileName('');
            $('.fileSelected').addClass('hide');
      }
    };


  return (
    <div className="containerOuter">
      <div className="row heading">
        <h1>Audio Anazyzer</h1>
        <h3>Analyze sentiments in the Audio</h3>
      </div>
      <div className="container dark-bg">
        <div className="outerBox" style={{ backgroundImage: "url('./images/drop.png')" }}>
          <form className="firstPageForm" onSubmit={handleSubmit}>
            <div className="uploadContainer row">
              <span className="drophere">DROP HERE</span>
              <div className="inputParent row" style={{ background: 'url("./images/upload.png") no-repeat', backgroundSize: 'cover', display: 'inline-block' }}>
  <input type='file' style={{ opacity: 0, width: '100%', height: '100%' }} onChange={handleFileChange}/>
</div>
<p className="fileSelected hide">Selected File: {fileName}</p>
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
