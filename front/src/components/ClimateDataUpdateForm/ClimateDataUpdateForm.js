import { useState } from "react";
import Button from '../Button/Button';
import Line from '../Line/Line';
import UpdateDescription from './UpdateDescription/UpdateDescription';
import UpdateForm from './UpdateForm/UpdateForm';
import UpdateInfo from './UpdateInfo/UpdateInfo';
import './ClimateDataUpdateForm.css';

function ClimateDataUpdateForm() {
    const [submit, setSubmit] = useState(false);
    const handleButtonClick = () => {
        setSubmit(true);
    };
    const afterSubmit = () => {
        setSubmit(false);
    };

    return (
        <div className='ClimateDataUpdateForm'>
            <div className='ClimateDataUpdateForm-container'>
                <UpdateInfo/>
                <UpdateDescription/>
                <Line className={"ClimateDataUpdateForm-line"} />
                <UpdateForm submit={submit} afterSubmit={afterSubmit}/>
            </div>
            <div className='ClimateDataUpdateForm-buttonContainer'>
                <Button
                    className={ 'ClimateDataUpdateForm-buttonContainer-button' }
                    title={ 'Commencer'}
                    handleAction={handleButtonClick}
                />
            </div>
        </div>
    )
}

export default ClimateDataUpdateForm;