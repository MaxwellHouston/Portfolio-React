
export const SnapshotImage = ({path, number}) => {

    const imgPath = require(`../Utility/Images/${path}/snapshot-${number}.jpg`);

    const handleClick = ({target}) => {
        console.log(target.src)
    }

    return(
        <img className="snapshot" src={imgPath} alt={`${path} snapshot number ${number}`} onClick={handleClick} />
    )
};