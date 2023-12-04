import Button from '../Button/Button';
import Line from '../Line/Line';
import UpdateDescription from './UpdateDescription/UpdateDescription';
import UpdateInfo from './UpdateInfo/UpdateInfo';
import './ClimateDataUpdateForm.css';

function ClimateDataUpdateForm() {
    return (
        <div className='ClimateDataUpdateForm'>
            <div className='ClimateDataUpdateForm-container'>
                <UpdateInfo/>
                <UpdateDescription/>
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