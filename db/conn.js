const mongoose = require('mongoose');
const DB = 'mongodb+srv://root:pass123@cluster0.i6pniru.mongodb.net/signup?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);

mongoose.connect(DB).then(() => {
    console.log(`connection successfull`);
}).catch((err) => console.log(`no connection`));