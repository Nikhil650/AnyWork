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
    link: "/getjobs"
  },
  {
    title: "Web Design",
    icon: <MailIcon />,
    link: "/getjobs"
  },
  {
    title: "Web Development",
    icon: <AssessmentIcon />,
    link: "/getjobs"
  },
  {
    title: "Content Writing",
    icon: <DashboardIcon />,
    link: "/getjobs"
  },
  {
    title: "Graphics Design",
    icon: <GroupIcon />,
    link: "/getjobs"
  },
  {
  title: "Digital Marketing",
    icon: <PermMediaIcon />,
    link: "/getjobs"
  }
];
