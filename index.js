const express = require('express')
const morgan = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()

//Middlewares 
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(require('./routes/routes'))


app.set("port", process.env.PORT);
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});