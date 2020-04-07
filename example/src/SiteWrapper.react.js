// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";
import img from "./Picture5.svg"

import type { NotificationProps } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type State = {|
  notificationsObjects: Array<NotificationProps>,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
  +useExact?: boolean,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
  +useExact?: boolean,
|};

const navBarItems: Array<navItem> = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Interface",
    icon: "box",
    subItems: [
      {
        value: "Cards Design",
        to: "/cards",
        LinkComponent: withRouter(NavLink),
      },
      { value: "Charts", to: "/charts", LinkComponent: withRouter(NavLink) },
      {
        value: "Pricing Cards",
        to: "/pricing-cards",
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
  {
    value: "Components",
    icon: "calendar",
    subItems: [
      { value: "Maps", to: "/maps", LinkComponent: withRouter(NavLink) },
      { value: "Icons", to: "/icons", LinkComponent: withRouter(NavLink) },
      { value: "Store", to: "/store", LinkComponent: withRouter(NavLink) },
      { value: "Blog", to: "/blog", LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: "Pages",
    icon: "file",
    subItems: [
      { value: "Profile", to: "/profile", LinkComponent: withRouter(NavLink) },
      { value: "Login", to: "/login", LinkComponent: withRouter(NavLink) },
      {
        value: "Register",
        to: "/register",
        LinkComponent: withRouter(NavLink),
      },
      {
        value: "Forgot password",
        to: "/forgot-password",
        LinkComponent: withRouter(NavLink),
      },
      { value: "400 error", to: "/400", LinkComponent: withRouter(NavLink) },
      { value: "401 error", to: "/401", LinkComponent: withRouter(NavLink) },
      { value: "403 error", to: "/403", LinkComponent: withRouter(NavLink) },
      { value: "404 error", to: "/404", LinkComponent: withRouter(NavLink) },
      { value: "500 error", to: "/500", LinkComponent: withRouter(NavLink) },
      { value: "503 error", to: "/503", LinkComponent: withRouter(NavLink) },
      { value: "Email", to: "/email", LinkComponent: withRouter(NavLink) },
      {
        value: "Empty page",
        to: "/empty-page",
        LinkComponent: withRouter(NavLink),
      },
      { value: "RTL", to: "/rtl", LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Gallery",
    to: "/gallery",
    icon: "image",
    LinkComponent: withRouter(NavLink),
  },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation",
  },
];

const accountDropdownProps = {
  avatarURL: "./demo/faces/female/25.jpg",
  name: "Jane Pearson",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "help-circle", value: "Need help?" },
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends React.Component<Props, State> {

  render(): React.Node {
    
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          imageURL: "./demo/brand/Picture5.png",
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="./demo/brand/cARBON SAVINGS.xlsx"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"                                                                                                                                                               
                color="primary"
                download
              >
                Download Source Data                                       
              </Button>
              <Button
                href="http://www.dexlerenergy.com"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"                                                                                                                                                               
                color="primary"
              >
                Visit Us                                       
              </Button>
            </Nav.Item>
          )
          /*accountDropdown: accountDropdownProps,*/
        }}
        //navProps={{ itemsObjects: navBarItems }}
        //routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
                      
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
