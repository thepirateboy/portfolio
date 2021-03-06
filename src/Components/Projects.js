import React from "react";
import * as Cards from "./Card";

function Projects() {
  return (
    <section id="projects">
      <div class="container" id="projects-container">
        <div class="row text-center mb-5">
          <div class="col">
            <h2>Actually there are lots more! Will be updated very soon.</h2>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          {/* <!--  Cards  --> */}
          {Cards.cardList}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,224L21.8,229.3C43.6,235,87,245,131,224C174.5,203,218,149,262,122.7C305.5,96,349,96,393,96C436.4,96,480,96,524,101.3C567.3,107,611,117,655,112C698.2,107,742,85,785,69.3C829.1,53,873,43,916,80C960,117,1004,203,1047,208C1090.9,213,1135,139,1178,90.7C1221.8,43,1265,21,1309,16C1352.7,11,1396,21,1418,26.7L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
      <section id="white"></section>
    </section>
  );
}

export default Projects;
