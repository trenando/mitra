import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { route } from "../../routerPath/routerPath";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <section className={styles.section}>
      <div className={styles.error}>
        <span className={styles.error__number}>404</span>
        <span className={styles.error__message}>Данная страница не существует</span>
        <Nav.Item>
          <Nav.Link className={styles.error__link} as={Link} to={route.home.link}>Вернуться на главную</Nav.Link>
        </Nav.Item>
      </div>
    </section>
  );
};