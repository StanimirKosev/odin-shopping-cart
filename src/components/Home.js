import React from "react";
import backgroud1 from "../images/background-1.avif";

export const Home = () => {
  return (
    <div className="home">
      <div className="quote-one">
        <div className="quote">
          Read at every wait; read at all hours; read within leisure; read in
          times of labor; read as one goes in; read as one goes out. The task of
          the educated mind is simply put: read to lead.
        </div>
        <div data-testid="author" className="author">
          Marcus Tullius Cicero
        </div>
      </div>
      <img alt="background" src={backgroud1} />
    </div>
  );
};
