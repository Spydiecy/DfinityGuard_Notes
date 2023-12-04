import React from "react";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Header() {
  return (
    <header>
      <div className="icon-lib">
        <LibraryBooksIcon />
      </div>
      <div>
        <h1>
          DfinityGuard Notes
        </h1>
      </div>
    </header>
  );
}

export default Header;
