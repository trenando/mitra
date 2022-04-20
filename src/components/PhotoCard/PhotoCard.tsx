import React from "react"
import { Image } from "react-bootstrap"
import { PhotoCardFunc } from "./PhotoCardTypes"
import styles from "./PhotoCard.module.scss"

export const PhotoCard: PhotoCardFunc = ({ albumId, id, title,
    url, thumbnailUrl }) => {
    return <div className={styles.card}>
        <span>Айди альбома: {albumId}</span>
        <span>Заголовок: {title}</span>
        <Image src={url} alt={thumbnailUrl} />
    </div>
}
