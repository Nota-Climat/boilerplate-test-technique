import fs from 'fs';

const submitForm = (req, res) => {
    const logData = `${new Date().toString()} - Data received: ${JSON.stringify(req.body)}`;
    const logFile = `${new Date().toISOString().slice(0, 10)} - log.txt`;

    const readLogFile = () => { fs.readFile(logFile, 'utf8', (err, data) => {
        if(err){
            console.error('Error to write the file', err);
        } else { 
            const content = data;
            console.log(content); 
        }
    })};

    fs.appendFile(logFile, logData + '\n', (err) => {
        if (err) {
          console.error('Error :', err);
          res.status(500).send('Error :', err);
        } else {
          res.status(200).send('Data received and logged');
          readLogFile();
        }
    });
}

export default submitForm;