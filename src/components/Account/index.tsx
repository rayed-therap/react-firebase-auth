import React from "react";
import { Link as RouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Link from "@material-ui/core/Link";

const AccountPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link component={RouterLink} to={ROUTES.PASSWORD_CHANGE}>
            Change Password
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountPage;
