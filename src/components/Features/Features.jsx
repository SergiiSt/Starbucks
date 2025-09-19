import css from "./Features.module.css";
import heartMobx2 from "../../images/heart_mob_x2.png";
import heartMob from "../../images/heart_mob.png";
import rocketMobx2 from "../../images/rocket_mob_x2.png";
import rocketMob from "../../images/rocket_mob.png";
import moneyMobx2 from "../../images/money_mob_x2.png";
import moneyMob from "../../images/money_mob.png";

export default function Features() {
  return (
    <section className={css.features}>
      <div className="container">
        <h2 className={css.visuallyHidden}>Features</h2>
        <div className={css.featuresInfo}>
          <ul className={css.featureList}>
            <li className={css.featureListItem}>
              <div>
                <div className={css.circle}></div>
                <picture className={css.heartIcon}>
                  <source
                    srcSet={heartMobx2}
                    media="(max-width: 1023px) and (min-resolution: 2dppx)"
                  />
                  <source srcSet={heartMob} media="(max-width: 1023px)" />
                  <img
                    src={heartMob}
                    alt="Heart"
                    width={86}
                    height={86}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <h3 className={css.featureListItemTitle}>Tasty</h3>
              <p className={css.featureListItemText}>
                We have the most delicious coffee
              </p>
            </li>
            <li className={css.featureListItem}>
              <div>
                <div className={css.circle}></div>
                <picture className={css.rocketIcon}>
                  <source
                    srcSet={rocketMobx2}
                    media="(max-width: 1023px) and (min-resolution: 2dppx)"
                  />
                  <source srcSet={rocketMob} media="(max-width: 1023px)" />
                  <img
                    src={rocketMob}
                    alt="Rocket"
                    width={122}
                    height={118}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <h3 className={css.featureListItemTitle}>Fast</h3>
              <p className={css.featureListItemText}>
                Our cafe will serve you quickly
              </p>
            </li>
            <li className={css.featureListItem}>
              <div>
                <div className={css.circle}></div>
                <picture className={css.moneyIcon}>
                  <source
                    srcSet={moneyMobx2}
                    media="(max-width: 1023px) and (min-resolution: 2dppx)"
                  />
                  <source srcSet={moneyMob} media="(max-width: 1023px)" />
                  <img
                    src={moneyMob}
                    alt="Money"
                    width={122}
                    height={118}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <h3 className={css.featureListItemTitle}>Available</h3>
              <p className={css.featureListItemText}>
                Cafe will serveat the most pleasant prices
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
