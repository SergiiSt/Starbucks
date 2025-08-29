import css from "./Features.module.css";

export default function Features() {
  return (
    <section className={css.features}>
      <div className="container">
        <h2 className={css.visuallyHidden}>Features</h2>
        <div className={css.featuresInfo}>
          <ul className={css.featureList}>
            <li className={css.featureListItem}>
              <h3 className={css.featureListItemTitle}>Tasty</h3>
              <p className={css.featureListItemText}>
                We have the most delicious coffee
              </p>
            </li>
            <li>
              <h3 className={css.featureListItemTitle}>Fast</h3>
              <p className={css.featureListItemText}>
                Our cafe will serve you quickly
              </p>
            </li>
            <li>
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
