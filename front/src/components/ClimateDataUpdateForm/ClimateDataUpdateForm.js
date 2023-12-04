import Button from '../Button/Button';
import Line from '../Line/Line';
import UpdateDescription from './UpdateDescription/UpdateDescription';
import UpdateForm from './UpdateForm/UpdateForm';
import UpdateInfo from './UpdateInfo/UpdateInfo';
import './ClimateDataUpdateForm.css';

function ClimateDataUpdateForm() {
    return (
        <div className='ClimateDataUpdateForm'>
            <div className='ClimateDataUpdateForm-container'>
                <UpdateInfo/>
                <UpdateDescription/>
                <Line className={"ClimateDataUpdateForm-line"} />
                <UpdateForm/>
            </div>
            <div className='ClimateDataUpdateForm-buttonContainer'>
                <Button className={ 'ClimateDataUpdateForm-buttonContainer-button' } title={ 'Commencer'} />
            </div>
        </div>
    )
}

export default ClimateDataUpdateForm;