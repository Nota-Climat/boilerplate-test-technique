import infoIcone from '../../../infoIcone.png';
import './UpdateInfo.css';

function UpdateInfo() {
    return (
        <div className="UpdateInfo">
                    <div className="UpdateInfo-imageContainer">
                        <img
                            className="UpdateInfo-imageContainer-image"
                            src={infoIcone}
                            alt=""
                        />
                    </div>
                    <div className='UpdateInfo-textContainer'>
                        <p>La mise à jour des données est un dialogue entre votre entreprise et OpenClimat qui vérifie les données. Aucune information soumise dans ce formulaire ne sera publiée sans discussion préalable.</p>
                        <p>Prochaine analyse: <strong>Décembre 2023</strong></p>
                    </div>
                </div>
    )
}

export default UpdateInfo;