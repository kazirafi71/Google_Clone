import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import './Navigation.css'
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import AppsIcon from '@material-ui/icons/Apps';

const Navigation = () => {
  return (
    <div id='navigation' >
      <div className={styles.header}>
        <div className={styles.left__header}>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className={styles.right__header}>
          <Link to="/Gmail">Gmail</Link>
          <Link to="/Images">Images</Link>
        
            <AppsIcon />
          
          <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"></Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
