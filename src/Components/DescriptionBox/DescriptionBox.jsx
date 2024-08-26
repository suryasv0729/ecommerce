import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          temporibus, laboriosam aut molestias minus adipisci tempora odio
          tenetur velit dolor dolores optio fugiat sunt eaque distinctio magnam
          mollitia accusantium perferendis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores
          ab alias! Reprehenderit autem fugit odit voluptatem! Quod, facere.
          Fugit aliquid, nesciunt doloribus soluta incidunt aut iste ullam quod!
          Nihil.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
