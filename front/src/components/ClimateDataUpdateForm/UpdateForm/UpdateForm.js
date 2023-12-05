import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import validateEmail from "../../../services/validateEmail";
import validatePhone from "../../../services/validatePhone";

import './UpdateForm.css';

function UpdateForm() {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ job, setJob ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phoneNumbers, setPhoneNumbers ] = useState("");

    const [ errorMessageEmail, setErrorMessageEmail ] = useState("");
    const [ errorMessagePhone, setErrorMessagePhone ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    const location = useLocation();

    const handleSubmit = async (event) => {
        event.preventDefault();

        let isValid = true;
    
        if (!lastName || !firstName || !email || !job || !phoneNumbers) {
            setErrorMessage("Tous les champs sont requis.");
            isValid = false;            
        } else if (phoneNumbers && !validatePhone(phoneNumbers)){
            setErrorMessagePhone("Le format du telephone n'est pas bon.");
            isValid = false;
        } else if (email && !validateEmail(email)){
            setErrorMessageEmail("Le format de l'email n'est pas bon.");
            isValid = false;
        } else {
            setErrorMessage('');
            setErrorMessageEmail('');
            setErrorMessagePhone('');
        }
        
        if(isValid){
            try{
                const response = await axios.post('http://localhost:3000/form', { phoneNumbers, job, email, lastName, firstName})
                console.log(response.data)
            } catch(error) {
                console.error(error)
            };
        }
    };

    useEffect(() => {
        const getDraft = async () => {
            try{
                const queryParams = new URLSearchParams(location.search);
                const draft = queryParams.get('draft');
                if (draft === '12345'){
                    const response = await axios.get(`http://localhost:3000/form?draft=${draft}`)
                    const {email, job, firstName, lastName, phoneNumbers} = response.data;
                    setEmail(email);
                    setPhoneNumbers(phoneNumbers);
                    setJob(job);
                    setFirstName(firstName);
                    setLastName(lastName);
                }
            } catch(error){
                console.error(error)
            }
        };
        getDraft();
    }, [location.search]);

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
                        { errorMessageEmail &&
                            <div className="UpdateForm-errorMessage">
                                <p >{ errorMessageEmail }</p>
                            </div>
                        }
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
                        { errorMessagePhone &&
                            <div className="UpdateForm-errorMessage">
                                <p >{ errorMessagePhone }</p>
                            </div>
                        }
                    </label>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm;