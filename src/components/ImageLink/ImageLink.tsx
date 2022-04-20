import React from "react";
import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { route } from "../../routerPath/routerPath";
import styles from "./ImageLink.module.scss";
import { ImageLinkFunc } from "./ImageLinkTypes";

export const ImageLink: ImageLinkFunc = ({ src, link }) => {
  return (
    <div className={styles.block}>
      <Image className={styles.image} fluid={true} src={src} />
      <Nav variant="pills" activeKey="1" className={styles.nav}>
        <Nav.Item>
          <Nav.Link eventKey="1" as={Link} to={link}>
            {route.photo.name}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
