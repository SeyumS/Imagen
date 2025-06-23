import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Upload.css'

function Upload() {

  //add second version for smaller screens
  return (
    <div className='upload-container'>
      <div className="image-upload-container">
        <div className="upload-image-upload rounded">
          <p className='upload-plus-icon h1 text-muted'>+</p>
        </div>
      </div>
      <div className="upload-form-container p-5">
        <p className="title">title</p>
        <div className="input-group mb-3">
          <input type="text" className="form-control upload-form" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
        <p className="description">description</p>
        <div className="input-group mb-3">
            <input type="text" className="form-control upload-form description-form" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
          </div>
        <p className="boards">boards</p>
        <div className="input-group mb-3">
          <input type="text" className="form-control upload-form" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
        <p className="tagged-topics"> tagged topics</p>
        <div className="input-group mb-3">
            <input type="text" className="form-control upload-form" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
          </div>
      </div>
    </div>
  )
}

export default Upload