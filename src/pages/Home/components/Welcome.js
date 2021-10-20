import gif from "../../../assets/full-stack-developer.gif";
import "../../../styles/bg.css";
import "../../../styles/img.css";
import "../../../styles/div.css";
import photo from "../../../assets/LOW_CODE_DEVELOPMENT.png";
import { getWakaTimeStats } from "../../../services";
import { useEffect, useState } from "react";
export const Welcome = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getWakaTimeStats();
    return () => {
      console.log("axios cleanup.");
    };
  }, []);
  return (
    <>
      <div class="bg">
        <div class="push-mid">
          <div class="main-welcome">
            <div>
              <div>
                <h3>Web Developer</h3>
              </div>
            </div>
            <div class="right">
              <img class="img-1" src={gif} />
            </div>
          </div>
          {/* skills */}
          <div class="secondary-welcome">
            <div class="skills-section">
              <div>
                <h3>Skills</h3>
              </div>
              <div>
                <p>HTML</p>
                <div class="containers">
                  <div class="skills html"></div>
                </div>

                <p>CSS</p>
                <div class="containers">
                  <div class="skills css"></div>
                </div>

                <p>JavaScript</p>
                <div class="containers">
                  <div class="skills js"></div>
                </div>
                <p>Java</p>
                <div class="containers">
                  <div class="skills java"></div>
                </div>
                <p>Python</p>
                <div class="containers">
                  <div class="skills py"></div>
                </div>
              </div>
            </div>
            <div class="push-mid">
              <img class="img-2" src={photo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
