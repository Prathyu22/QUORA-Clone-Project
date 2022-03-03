import React from 'react';
import {Avatar} from "@material-ui/core";
import './css/QuoraBox.css';
function QuoraBox() {
  return (
    <div className="quoraBox">
      <div className="quoraBox_info">
          <Avatar />
      </div>
      <div className="quoraBox_quora">
          <p>Enter your question or link here...</p>
      </div>
    </div>
  )
}

export default QuoraBox
