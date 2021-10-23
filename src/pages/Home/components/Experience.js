import "../../../styles/bg.css";
import "../../../styles/img.css";
import "../../../styles/div.css";
import ico1 from "../../../assets/angular-icon.svg";
import ico2 from "../../../assets/spring.svg";
import ico3 from "../../../assets/images.png";
export const Experience = () => {
  return (
    <>
      <div class="bg">
        <p>Proyectos</p>
        <div>
          <div class="ui red card">
            <div class="content">
              <div class="header">Pinio Ecommerce</div>
            </div>
            <div class="content">
              <h4 class="ui sub header">Desarrollo FullStack</h4>
              <div class="ui small feed">
                <div class="event">
                  <div class="content">
                    <div class="summary">
                      <div>
                        <h5>Autor(es)</h5>
                        <h6>Italo Rivadeneyra</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="event">
                  <div class="content">
                    <div class="summary">
                      <h6>
                        Esta proyecto consiste en el desarrollo de un Ecommerce
                        contemplando diferentes modulos: Venta y Administracion
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="event">
                  <div class="content">
                    <img className="ico-img" src={ico1} />
                    <img className="ico-img" src={ico2} />
                    <img className="ico-img" src={ico3} />
                  </div>
                </div>
              </div>
              <div>
                <div>aqui va una info de mi ultimo proyecto</div>
                <iframe
                  src="https://apppinioclientsdev.azurewebsites.net"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
            <div class="extra content">
              <button class="ui button">
                <a
                  href="https://orange-plant-06bd58e10.azurestaticapps.net"
                  target="_blank"
                >
                  Ver Proyecto
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
