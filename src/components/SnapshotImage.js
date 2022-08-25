
export const SnapshotImage = ({path, number}) => {

    const imgPath = require(`../Utility/Images/${path}/snapshot-${number}.jpg`);

    return(
        <img src={imgPath} alt={`${path} snapshot number ${number}`} />
    )
};