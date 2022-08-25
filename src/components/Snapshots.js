import { useEffect, useState } from "react";
import { SnapshotImage } from "./SnapshotImage";

export const Snapshots = ({project, openModal}) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        let images = [];
        for(let i = 1; i < 7; i++){
            images.push(<SnapshotImage key={i} path={project.imgPath} number={i} openModal={openModal} />)
        };
        setPhotos(images);
    },[project, openModal]);

    return(
        <div className="snapshot-container">
        <h2>Snapshots</h2>
        <div className="img-grid">
            {photos}
        </div>
    </div>
    )
}