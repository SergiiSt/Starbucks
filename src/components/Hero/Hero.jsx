import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className="container">
        <h1 className={css.heroTitle}>
          New Cafe <br />
          by <span className={css.heroTitleSpan}>StarBucks</span>
        </h1>
        <p className={css.heroText}>
          Have time to buy the most harmonious drinks in the <br /> new
          Starbucks coffee and don't forget about the discount!
        </p>
        <ul className={css.btnList}>
          <li>
            <button className={css.selectBtn} type="button">
              Select a coffee
            </button>
          </li>
          <li>
            <button className={css.moreBtn} type="button">
              More
            </button>
          </li>
        </ul>
        <ul className={css.infoList}>
          <li className={css.infoListItem}>
            <p className={css.infoListText}>
              9k<span className={css.infoListSpan}>+</span>
            </p>
            <p className={css.infoListTextSpan}>Premium Users</p>
          </li>
          <li className={css.infoListItem}>
            <p className={css.infoListText}>
              2k<span className={css.infoListSpan}>+</span>
            </p>
            <p className={css.infoListTextSpan}>Happy Customer</p>
          </li>
          <li className={css.infoListItem}>
            <p className={css.infoListText}>
              28<span className={css.infoListSpan}>+</span>
            </p>
            <p className={css.infoListTextSpan}>Awards Winning</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
