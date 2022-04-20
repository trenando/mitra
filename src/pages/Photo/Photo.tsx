import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { PhotoCard } from "../../components/PhotoCard/PhotoCard";
import { route } from "../../routerPath/routerPath";
import { PhotoFunc } from "./PhotoTypes";
import styles from "./Photo.module.scss"

export const Photo: PhotoFunc = (props) => {
  return props.id ? (
    <>
      <PhotoCard {...props} />
      <Nav variant="pills" activeKey="1" className={styles.nav}>
        <Nav.Item>
          <Nav.Link eventKey="1" as={Link} to={route.home.link}>Домашняя страница</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  ) : (
    <Loader />
  );
};