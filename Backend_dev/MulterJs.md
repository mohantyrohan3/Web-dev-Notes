1. npm install multer
2. Uploading to gridfs

npm install mongoose multer multer-gridfs-storage gridfs-stream


3. 

const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const { MongoClient } = require('mongodb');

const Mongo_Url = process.env.MONGO_URL;
const conn = mongoose.createConnection(Mongo_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Initialize gfs
let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads'); // Specify collection name for files
});

module.exports = gfs;