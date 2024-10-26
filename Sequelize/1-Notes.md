1. Installing the libraries

npm install --save sequelize

npm install --save pg pg-hstore # Postgres
npm install --save mysql2



2. Setting Up Connection in config file

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'database_name',
    'user_name',
    'password',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
);


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


module.exports = sequelize;

3. Then Models at models folder

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.NOW 
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    timestamps:false,
  },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;

# in app.js
const userDb = require('./models/user');

userDb.sync();


sequelize.sync({ force: true }); // for syncronizing all the models


4. Creating an Instance

app.post('/create', async (req, res) => {
    const {firstname, lastname } = req.body;
    const user = await userDb.create({ firstName:firstname, lastName:lastname });
    res.json(user);
});


5. Model Quering

// Find all users
const users = await User.findAll();

Model.findAll({
  attributes: ['foo', 'bar'],
});



Post.findAll({
  where: {
    authorId: 2,
  },
});
// SELECT * FROM post WHERE authorId = 2;


You can use Opertors , Grouping , Limit , Ordering . Multiple useCases are found in the docs

6. update and delete

// Change everyone without a last name to "Doe"
await User.update(
  { lastName: 'Doe' },
  {
    where: {
      lastName: null,
    },
  },
);


// Delete everyone named "Jane"
await User.destroy({
  where: {
    firstName: 'Jane',
  },
});


7. getter setter and virtuals watch video

// you can use brycpt
const User = sequelize.define('user', {
  username: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    set(value) {
      // Storing passwords in plaintext in the database is terrible.
      // Hashing the value with an appropriate cryptographic hash function is better.
      this.setDataValue('password', hash(value));
    },
  },
});


8. Data Assoiciation - Watch docs

