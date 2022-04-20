import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

import { route } from "../../routerPath/routerPath";
import { PhotoFunc } from "./PhotoTypes";
import styles from "./Photo.module.scss";
import { PhotoCard } from "./PhotoCard/PhotoCard";

export const Photo: PhotoFunc = (props) => {
  return props.id ? (
    <>
      <PhotoCard {...props} />
      <Nav variant="pills" activeKey="1" className={styles.nav}>
        <Nav.Item>
          <Nav.Link eventKey="1" as={Link} to={route.home.link}>
            Домашняя страница
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  ) : (
    <Loader />
  );
};
