import photo from "../../../assets/PSX_20210709_132034.png";
import "../../../styles/info.css";
import "../../../styles/bg.css";
export const Info = () => {
  function github() {
    window.open("https://github.com/ital08");
  }
  function linkedin() {
    window.open("https://www.linkedin.com/in/iarivadeneyra/");
  }
  return (
    <>
      <div class="bg">
        <div class="info">
          <div class="photo">
            <img class="img-photo1" src={photo} />
          </div>
          <div class="button-section">
            <div
              onClick={github}
              class="button-space ui vertical animated button "
              tabindex="0"
            >
              <div class="hidden content">GitHub</div>
              <div class="visible content">
                <i class="github icon"></i>
              </div>
            </div>
            <div
              onClick={linkedin}
              class="ui vertical animated button button-space"
              tabindex="0"
            >
              <div class="hidden content">LinkedIn</div>
              <div class="visible content">
                <i class="linkedin icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
