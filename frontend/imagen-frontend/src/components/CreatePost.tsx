import React from 'react'

import Upload from './../assets/upload.png'
import './CreatePost.css'

function CreatePost() {
  return (
    <div className='create-post-container'>
      <div className="cr-header">
        Create Pin
      </div>
      <div className="cr-content-container">
      <div className="cr-upload-container">
        <div className="cr-upload-container-2">
          <div className="cr-upload">
            <img src={Upload} alt="" className="cr-upload-arrow" />
            <p className="cr-upload-description">Choose a file or drag and drop it here</p>
          </div>
        </div>
      </div>
      <div className="cr-upload-form">
        <div className="cr-form-overlay">
          <p className='cr-title'>Title</p>
          <input type="text" className="cr-title-input" />
          <p className='cr-description'>Description</p>
          <input type="text" className="cr-description-input" />
          <p className='cr-link'>Link</p>
          <input type="text" className="cr-link-input" />
          <p className='cr-board'>Board</p>
          <input type="text" className="cr-board-input" />
          <p className='cr-tags'>Tagged topics</p>
          <input type="text" className="cr-tag-input" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreatePost