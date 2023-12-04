import './UpdateDescription.css'

function UpdateDescription() {
    return (
        <div className="UpdateDescription">
            <h1>Vous souhaitez demander une mise à jour de votre page publique OpenClimat ?</h1>
            <p>Voici les élements que vous pouvez mettre à jour (tout ou partie)</p>
            <ul>
                <li>Performance climatique (% de réduction des émissions sur vos scopes 1&2 et 3)</li><br/>
                <li>Bilan carbone (données brutes de vos émissions sur vos scopes 1&2 et 3)</li><br/>
                <li>Labels liés au climat (SBTi, CDP)</li><br/>
            </ul>
        </div>
    )
}

export default UpdateDescription;