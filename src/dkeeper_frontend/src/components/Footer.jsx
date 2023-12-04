import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} Copyright: DfinityGuard Notes </p>
    </footer>
  );
}

export default Footer;
