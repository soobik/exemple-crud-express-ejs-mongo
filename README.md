# exemple-crud-express-ejs-mongo
Un exemple de ***CRU*** D en utilisant expressjs, EJS, mongoDB(mongoose)

J'ai utilisé le workflow suivant : 

1- Dans le repertoire de travail faire la commande suivante
***express mon_projet --view=ejs***

2- ***cd mon_projet && npm install***

3- ***npm install mongoose --save***

4- Dans le fichier ***app.js***

```javascript
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/[nom_de_votre_base]')
  .then(() =>  console.log('connection succesful'))
```

5- A partir de cette etape vous pouvez lancer ***nodemon*** apres avoir ***changer votre port***.
