process.env.PORT = process.env.PORT || 3000;


//ebtorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


//base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:NIRVANA33@ds245523.mlab.com:45523/cafe'
}

process.env.URLDB = urlDB;