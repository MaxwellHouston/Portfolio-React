
export const SnapshotImage = ({path, number, openModal}) => {

    const imgPath = require(`../Utility/Images/${path}/snapshot-${number}.jpg`);

    const handleClick = () => {
        openModal(path, number);
    }

    return(
        <img className="snapshot" src={imgPath} alt={`${path} snapshot number ${number}`} onClick={handleClick} />
    )
};