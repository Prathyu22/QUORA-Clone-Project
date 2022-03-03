import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://48b6yd3iigex2rv7g41h5sts-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Historical-Fiction-1024x596.jpg"
          alt=""/>
        <p><b>History</b></p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.businessenglishpod.com/wordpress/wp-content/uploads/Business-English-Pod-Learn-Business-English.jpg"
          alt=""/>

        <p><b>Business</b></p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://executiveeducation.wharton.upenn.edu/wp-content/uploads/2018/12/1901-understanding-client-psychology.jpg"
          alt=""/>
        <p><b>Psychology</b></p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTMdndtlW7IQCf9iK474cYyil080IkuQTlA&usqp=CAU"
          alt=""/>
        <p><b>Cooking</b></p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg"
          alt=""/>
        <p><b>Music</b></p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://static.theprint.in/wp-content/uploads/2019/11/science.jpg"
          alt=""/>
        <p><b>Science</b></p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.nutraingredients-latam.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-latam.com/article/2019/09/12/nutrition-in-health-focus-could-saves-millions-of-lives-who-says/10142249-1-eng-GB/Nutrition-in-Health-Focus-Could-saves-Millions-of-Lives-WHO-says.jpg"
          alt=""/>
        <p><b>Health</b></p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cf.ltkcdn.net/movies/images/orig/207771-1892x1588-movieconcept.jpg"
          alt=""/>
        <p><b>Movies</b></p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/section/image/rs4492_177531624-low.jpg?itok=oDi1Qzl3"
          alt=""/>
        <p><b>Technology</b></p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://149701767.v2.pressablecdn.com/wp-content/uploads/2018/03/test.png"
          alt=""/>
        <p><b>Education</b></p>
      </div>
      <div className="sidebarOption">
        <b><Add /></b>
        <p className="text"><b>Discover Spaces</b></p>
      </div>
    </div>
  );
}

export default SidebarOptions;