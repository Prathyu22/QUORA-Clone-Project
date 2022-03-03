import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
} from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";
import "./css/QuoraHeader.css";

function QuoraHeader() {
  return (
    <div className = "qHeader">
      <div className = "qHeader-content">
          <div className="qHeader__logo">
              <img src="https://cdn.dribbble.com/users/445066/screenshots/3765376/quora-app-dark-ui---ask-a-question.gif" alt="Logo" />
              <img src="https://qph.fs.quoracdn.net/main-qimg-1886b4725fd665f6a597393062c204cb" alt="Logo" />

          </div>

              <div className="qHeader__icons">
                  <div className="qHeader__icon"><HomeIcon /></div>
                  <div className="qHeader__icon"><FeaturedPlayListOutlinedIcon /></div>
                  <div className="qHeader__icon"><AssignmentTurnedInOutlined /></div>
                  <div className="qHeader__icon"><PeopleAltOutlined /></div>
                  <div className="qHeader__icon"><NotificationsOutlined /></div>
              </div>

              <div className="qHeader__input">
                  <Search />
                  <input type="text"  placeholder = "Search here" />
              </div>

              <div className= "qHeader__Rem">
                  <Avatar />
              </div>

              <Button> <b> Add Question </b> </Button> 
      </div>
    </div>
  );
}

export default QuoraHeader;
