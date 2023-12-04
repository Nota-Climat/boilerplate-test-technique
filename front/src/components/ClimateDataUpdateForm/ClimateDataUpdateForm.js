import Button from '../Button/Button';
import Line from '../Line/Line';
import UpdateInfo from './UpdateInfo/UpdateInfo';
import './ClimateDataUpdateForm.css';

function ClimateDataUpdateForm() {
    return (
        <div className='ClimateDataUpdateForm'>
            <div className='ClimateDataUpdateForm-container'>
                <UpdateInfo/>

                <div className="ClimateDataUpdateForm-updateDescription">
                    <h1>Vous souhaitez demander une mise à jour de votre page publique OpenClimat ?</h1>
                    <p>Voici les élements que vous pouvez mettre à jour (tout ou partie)
                        <ul>
                            <li>Performance climatique (% de réduction des émissions sur vos scopes 1&2 et 3)</li><br/>
                            <li>Bilan carbone (données brutes de vos émissions sur vos scopes 1&2 et 3)</li><br/>
                            <li>Labels liés au climat (SBTi, CDP)</li><br/>
                        </ul>
                    </p>
                </div>

                <Line className={"ClimateDataUpdateForm-line"} />

                <div className="ClimateDataUpdateForm-updateForm">
                    <h1>Contact</h1>
                    <form className="">
                        <div className="ClimateDataUpdateForm-updateForm-groupLabel">
                        <label>
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
                        </div >
                        <div className="ClimateDataUpdateForm-updateForm-groupLabel">
                            <label className="">
                                Votre poste
                                <br/>
                                <input
                                    value="toto"
                                    type="text"
                                    placeholder=""
                                />
                            </label>
                        </div>
                        <div className="ClimateDataUpdateForm-updateForm-groupLabel">
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
            <div className='ClimateDataUpdateForm-buttonContainer'>
                <Button className={ 'ClimateDataUpdateForm-buttonContainer-button' } title={ 'Commencer'} />
            </div>
        </div>
    )
}

export default ClimateDataUpdateForm;