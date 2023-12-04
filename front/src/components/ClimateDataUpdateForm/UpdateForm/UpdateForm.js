import './UpdateForm.css';

function updateForm() {
    return (
        <div className="UpdateForm">
            <h1>Contact</h1>
            <form className="">
                <div className="UpdateForm-groupLabel">
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
                <div className="UpdateForm-groupLabel">
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
                <div className="UpdateForm-groupLabel">
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
    )
}

export default updateForm;