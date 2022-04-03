const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"+EGpo@k4pokrf3wlg4-g4gkl@+",
    database:"trynodejs_db",
})

db.connect((err) => {

    if(err){
        console.log('Error = '+ err.stack)
        return
    }
    
})

module.exports = db