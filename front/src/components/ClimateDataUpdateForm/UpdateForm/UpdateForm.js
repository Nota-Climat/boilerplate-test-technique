import { useState } from "react";
import validateEmail from "../../../services/validateEmail";
import validatePhone from "../../../services/validatePhone";

import './UpdateForm.css';

function UpdateForm() {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ job, setJob ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phoneNumbers, setPhoneNumbers ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");  

    const handleSubmit = async (event) => {
        event.preventDefault();

        let isValid = true;
    
        if (!lastName || !firstName || !email || !job || !phoneNumbers) {
            setErrorMessage("Tous les champs sont requis.");
            isValid = false;            
        } else if (phoneNumbers && !validatePhone(phoneNumbers)){
            setErrorMessage("Le format du telephone n'est pas bon.");
            isValid = false;
        } else if (email && !validateEmail(email)){
            setErrorMessage("Le format de l'email n'est pas bon.");
            isValid = false;
        } else {
            setErrorMessage('');
        }
        
        if(isValid){
          console.log('submit ok');
        }
        
    }

    return (
        <div className="UpdateForm">
            <h1>Contact</h1>
            { errorMessage &&
                <div className="UpdateForm-errorMessage">
                    <p >{ errorMessage }</p>
                </div>
            }
            <form onSubmit={handleSubmit} className="" id="UpdateForm">
                <div className="UpdateForm-groupLabel">
                <label>
                        Nom
                        <br/>
                        <input
                            value={ lastName }
                            type="text"
                            placeholder="Nom..."
                            onChange={(event) => setLastName(event.target.value)}
                    />
                    </label>
                    <label className="">
                        Prénom
                        <br/>
                        <input
                            value={ firstName }
                            type="text"
                            placeholder="Prénom..."
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </label>
                </div >
                <div className="UpdateForm-groupLabel">
                    <label className="">
                        Votre poste
                        <br/>
                        <input
                            value={ job }
                            type="text"
                            placeholder="Intitulé poste..."
                            onChange={(event) => setJob(event.target.value)}
                        />
                    </label>
                </div>
                <div className="UpdateForm-groupLabel">
                    <label className="">
                        Adresse email
                        <br/>
                        <input
                            value={ email }
                            type="text"
                            placeholder="Email..."
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label>
                    <label className="">
                        Numéro de téléphone
                        <br/>
                        <input
                            value={ phoneNumbers }
                            type="text"
                            placeholder="Numéro..."
                            onChange={(event) => setPhoneNumbers(event.target.value)}
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm;