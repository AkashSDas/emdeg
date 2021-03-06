import styles from "../styles/components/Navbar.module.scss";

function Navbar() {
  const logoSVG = () => (
    <svg
      id={styles.logo}
      width="41"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.786 18.679a1.08 1.08 0 01-.146-.09c-1.938-1.183-5.958-3.314-7.665-3.035A67.388 67.388 0 0023.285 21C18.446 18.965 7.213 12.116 1 1l38.268 5.257c.268-.003.516.027.732.1l-.732-.1c-1.575.017-3.884 1.2-4.982 1.886.971 2.143.071 7.916-.5 10.536z"
        fill="#fff"
      />
      <path
        d="M1 1l39 5.357c-1.486-.5-4.429.982-5.714 1.786M1 1l28.357 10.357M1 1l33.286 7.143M1 1c6.212 11.116 17.446 17.965 22.286 20a67.388 67.388 0 012.689-5.446m3.382-4.197c1 2.203 3.286 6.75 4.429 7.322m-4.429-7.322c-.835.078-2.141 1.973-3.382 4.197m7.81 3.125c.572-2.62 1.472-8.393.5-10.536m-.5 10.536c-1.873-1.161-6.06-3.411-7.81-3.125"
        stroke="#FF8989"
      />
    </svg>
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        {logoSVG()} <span className={styles.headerLetter}>Letter</span>
      </div>
      <nav className={styles.menu}>
        <li className={styles.menuItem}>Plugins</li>
        <li className={styles.menuItem}>Pricing</li>
        <li className={styles.menuItem}>Log in</li>
        <li className={styles.menuItem}>Free Trial</li>
      </nav>
    </header>
  );
}

export default Navbar;
