import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://www.twitter.com/poppunkonchain" target="_blank">@PopPunkOnChain</a>
        </li>
        <li>
          <a href="https://www.twitter.com/legallyblockchn" target="_blank">@LegallyBlockchn</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;