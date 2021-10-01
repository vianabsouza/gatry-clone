import React from "react";
import "./Card.css";

const PromotionCard = ({ promotion }) => {
  return (
    <div className="promotion-card">
      <img className="promotion-card__image" src={promotion.imageUrl} alt=""/>
      <div className="promotion-card__info">
        <h1 className="promotion-card__title">{promotion.title}</h1>
        <span className="promotion-card__price">R$ {promotion.price}</span>
        <footer className="promotion-card__footer">
          {promotion.comments.length > 0 && (
            <div className="promotion-card__comment">"{promotion.comments[0].comment}"</div>
          )}
          <div className="promotion-card__comments-count">
            {promotion.comments.length}{' '}
            {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
          </div>
          <a
            className="promotion-card__link"
            href={promotion.url}
            target="_blank"
            rel="noreferrer"
          >
            IR PARA O SITE
          </a>
        </footer>
      </div>
    </div>
  );
};

export default PromotionCard;
