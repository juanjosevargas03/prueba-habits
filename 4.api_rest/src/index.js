const express = require('express');
const app = express();
require('./database');

app.set('port', process.env.port || 4000);

app.use(express.json());

app.use(require('./routes/paises'));
app.use(require('./routes/usuarios'));
app.use(require('./routes/puntajes'));


app.listen(app.get('port') ,() => {
    console.log('Server on port ',app.get('port'));
})