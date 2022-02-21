const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

//connect to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medcare'
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

// create a register route
app.post('/register', (req, res) => {

    //getting input info from the front end
    const username = req.body.userName;
    const email = req.body.eMail;
    const password = req.body.passWord;

    //insert query to the database
    db.query("INSERT INTO register (username, email, password) VALUES (?, ?, ?)",
    [username, email, password],
    (err, result) => {
        console.log(err); //consoling the error
    });
});

// create login route
app.post('/login', (req, res) => {

    //getting input info from the front end
    const username = req.body.userName;
    const email = req.body.eMail;
    const password = req.body.passWord;

    // check the query in the database
    db.query("SELECT * FROM register WHERE username = ? AND email = ? AND password = ?",
    [username, email, password],
    (err, result) => {
        if (err){
            res.send({err: err})
        }

        if (result.length > 0){
            res.send(result)
        } else{
            res.send({message: 'Wrong combination, try again!'})
        }
    })
})

// FORM SERVER CONNECTION
app.post("/api/insert", (req, res) => {
    //getting input form the front end
    const appFname = req.body.appFname;
    const appLname = req.body.appLname;
    const appNumber = req.body.appNumber;
    const appGender = req.body.appGender;
    const appBirthday = req.body.appBirthday;
    const appHealth = req.body.appHealth;
    const appAddress = req.body.appAddress;
    const appEmail = req.body.appEmail;

    const sqlInsert = "INSERT INTO appt (fname, lname, mobile, gender, birthday, health, address, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [appFname, appLname, appNumber, appGender, appBirthday, appHealth, appAddress, appEmail], (err, result) => {
        console.log(err);
    });
});


// SELECT ALL DATA FROM DB AND DIPLAY ON FE
app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM appt";

    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        res.send(result);
    });
});

//DELETE THE DATA FROM DB
app.delete("/api/delete/:id", (req, res) => {
    const name = req.params.id

    db.query("DELETE FROM appt WHERE id = ? ", name, (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
    

})



app.listen(3001, () => {
    console.log('YOUR SERVER IS RUNNING!') //run node ndex.js after
});
