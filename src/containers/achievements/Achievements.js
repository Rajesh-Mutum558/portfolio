import React, {useContext} from "react";
import "./Achievements.scss";
import AchievementsCard from "../../components/achievementsCard/AchievementsCard";
import {achievementsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievements() {
  const {isDark} = useContext(StyleContext);
  if (!achievementsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievementss">
        <div className="achievements-main-div">
          <div className="achievements-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievements-heading"
                  : "heading achievements-heading"
              }
            >
              {achievementsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievements-subtitle"
                  : "subTitle achievements-subtitle"
              }
            >
              {achievementsSection.subtitle}
            </p>
          </div>
          <div className="achievements-cards-div">
            {achievementsSection.achievementssCards.map((card, i) => {
              return (
                <AchievementsCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
