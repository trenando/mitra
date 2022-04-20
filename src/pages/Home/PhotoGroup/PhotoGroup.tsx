import React from "react";
import { ImageLink } from "../../../components/ImageLink/ImageLink";
import { route } from "../../../routerPath/routerPath";
import { HomePhotos } from "../HomeTypes";
import styles from "./PhotoGroup.module.scss"
import { PhotoGroupFunc } from "./PhotoGroupTypes";

export const PhotoGroup:PhotoGroupFunc = ({element,index}) => {
  return (
    <div>
      <span className={styles.group}>{`Группа ${index + 1}`}</span>
      <div className={styles.images}>
        {element.map((el: HomePhotos) => {
          return (
            <div key={el.id} className={styles.images__item}>
              <span>{el.title}</span>
              <ImageLink src={el.url} link={`${route.photo.link}/${el.id}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
