const {CRUD} = require('./helpers');
const db = require('./models');

const params = process.argv;
const args = params.slice(2);

if(params.length <= 2) process.exit(0);

const comand = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1];

switch (comand) {
    case CRUD.CREATE:
        const data = {};
        args.slice(1).map((arg)=>{
            const tmp = arg.split("=");
            data[tmp[0].substring(2)] = tmp[1];
        });
        console.log(data);
        db[entity].create(data).then(()=>{console.log('contact create')}).catch(console.log);
        break;
    case CRUD.READ:
        db[entity].findAll().then(console.log).catch(console.log);
        break;
    case CRUD.UPDATE:
        break;
    case CRUD.DELETE:
        console.log('create');
        break;
    default:
        console.log('comand not valid');
        break;
}