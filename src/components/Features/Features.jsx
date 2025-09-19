import css from "./Features.module.css";
import heartMobx2 from "../../images/heart_mob_x2.png";
import heartMob from "../../images/heart_mob.jpg";

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
                <picture>
                  <source
                    srcSet={heartMobx2}
                    media="(max-width: 1023px) and (min-resolution: 2dppx)"
                  />
                  <source srcSet={heartMob} media="(max-width: 1023px)" />
                  <img
                    src={heartMob}
                    alt="Heart"
                    width={86}
                    height={86} // подставь реальные размеры
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
              </div>
              <h3 className={css.featureListItemTitle}>Fast</h3>
              <p className={css.featureListItemText}>
                Our cafe will serve you quickly
              </p>
            </li>
            <li className={css.featureListItem}>
              <div>
                <div className={css.circle}></div>
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
