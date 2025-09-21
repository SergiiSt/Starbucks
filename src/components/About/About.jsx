import makeImg2 from "../../images/about_make_mob_x2.png";
import makeImg from "../../images/about_make_mob.png";

import css from "./About.module.css";

export default function About() {
  return (
    <section className={css.about}>
      <div className="container">
        <ul className={css.aboutList}>
          <li>
            <picture>
              <source
                srcSet={makeImg2}
                media="(max-width: 1023px) and (min-resolution: 2dppx)"
              />
              <source srcSet={makeImg} media="(max-width: 1023px)" />
              <img
                className={css.makeImg}
                src={makeImg}
                alt="Make coffee"
                width={163}
                height={240}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
