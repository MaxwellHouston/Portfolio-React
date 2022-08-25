import { useEffect, useState } from "react";
import { SnapshotImage } from "./SnapshotImage";

export const Snapshots = ({project}) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        let images = [];
        for(let i = 1; i < 7; i++){
            images.push(<SnapshotImage key={i} path={project.imgPath} number={i} />)
        };
        setPhotos(images);
    },[project])

    return(
        <div className="snapshot-container">
        <div className="img-grid">
            {photos}
        </div>
    </div>
    )
}