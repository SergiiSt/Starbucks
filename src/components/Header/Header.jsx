import Logo from "../../images/StarBucks_logo_mob.png";
import Menu from "../../images/Mob_menu.png";

import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.container}`}>
        <a href="">
          <img src={Logo} alt="Logo" />
        </a>
        <nav>
          <img src={Menu} alt="Menu" />
        </nav>
      </div>
    </header>
  );
}
