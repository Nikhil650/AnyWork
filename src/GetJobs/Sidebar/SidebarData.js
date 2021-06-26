import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import PermMediaIcon from "@material-ui/icons/PermMedia";

export const SidebarData = [
  {
    title: "All",
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title: "Web Design",
    icon: <MailIcon />,
    link: "/mailbox"
  },
  {
    title: "Web Development",
    icon: <AssessmentIcon />,
    link: "/analytics"
  },
  {
    title: "Content Writing",
    icon: <DashboardIcon />,
    link: "/dashboard"
  },
  {
    title: "Graphics Design",
    icon: <GroupIcon />,
    link: "/friend"
  },
  {
  title: "Digital Marketing",
    icon: <PermMediaIcon />,
    link: "/images"
  }
];
