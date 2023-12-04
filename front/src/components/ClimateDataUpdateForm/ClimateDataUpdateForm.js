import infoIcone from '../../infoIcone.png';

function ClimateDataUpdateForm() {
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="">
                        <img
                            className=""
                            src={infoIcone}
                            alt=""
                        />
                    </div>
                    <div>
                        <p>La mise à jour des données est un dialogue entre votre entreprise et OpenClimat qui vérifie les données. Aucune information soumise dans ce formulaire ne sera publiée sans discussion préalable.</p>
                        <p>Prochaine analyse: <strong>Décembre 2023</strong></p>
                    </div>
                </div>
            </div>

            <div className="">
                <h1>Vous souhaitez demander une mise à jour de votre page publique OpenClimat ?</h1>
                <p>Voici les élements que vous pouvez mettre à jour (tout ou partie)</p>
                <ul>
                    <li>Performance climatique (% de réduction des émissions sur vos scopes 1&2 et 3)</li>
                    <li>Bilan carbone (données brutes de vos émissions sur vos scopes 1&2 et 3)</li>
                    <li>Labels liés au climat (SBTi, CDP)</li>
                </ul>
            </div>

            <div className="">
                <h1>Contact</h1>
                <form className="">
                    <div>
                       <label className="">
                            Nom
                            <br/>
                            <input
                                value=""
                                type="text"
                                placeholder=""                        
                        />
                        </label>
                        <label className="">
                            Prénom
                            <br/>
                            <input
                                value=""
                                type="text"
                                placeholder=""                        
                            />
                        </label> 
                    </div>
                    <div>
                        <label className="">
                            Votre poste
                            <br/>
                            <input
                                value=""
                                type="text"
                                placeholder=""                        
                            />
                        </label>
                    </div>                    
                    <div>
                        <label className="">
                            Adresse email
                            <br/>
                            <input
                                value=""
                                type="text"
                                placeholder=""                        
                            />
                        </label>
                        <label className="">
                            Numéro de téléphone
                            <br/>
                            <input
                                value=""
                                type="text"
                                placeholder=""                        
                            />
                        </label>   
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default ClimateDataUpdateForm;