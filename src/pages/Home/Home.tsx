import React from "react";
import { Loader } from "../../components/Loader/Loader";
import { HomeFunction, HomePhotos } from "./HomeTypes";
import styles from "./Home.module.scss";
import { route } from "../../routerPath/routerPath";
import { ImageLink } from "../../components/ImageLink/ImageLink";

export const Home: HomeFunction = ({ photos }) => {



  return <>
    {photos.length !== 0 ? (<div>
      {photos.map((el: Array<HomePhotos>, index: number) => {
        return (<div key={el[index].id}>
          <span className={styles.group}>{`Группа ${index + 1}`}</span>
          <div className={styles.images}>
            {el.map((element: HomePhotos) => {
              return <div key={element.id} className={styles.images__item}>
                <span>{element.title}</span>
                <ImageLink src={element.url} link={`${route.photo.link}/${element.id}`}/>
              </div>
            })}
          </div>
        </div>)
      })}
    </div>
    ) : (
      <Loader />
    )}
  </>;
};
