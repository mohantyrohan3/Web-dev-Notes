Packages

1. nodemon (nodemon index.js)
2. express
3. ejs (app.set(view engine ) , app.set(views, )  )
4. express.urlencoded (middleware)
5. express.json (middleware)
6. middleware (app.use)
7. express.static(middleware)( app.use(express.static(static folder))
8. query and string params (req.query)
9. mongoose (config file and models folder)
10. mongoose queries (crud)
11. in scripts - npm start (nodemon index.js)
12. using router middleware (app.use('/'',router file location)
13. routes and controllers
14. layout , partials (skipped as i have already learnt react )
15. passport js (local , google)
16. Refering to  another database (just write field_name : mongoose.Schema.ObjectId )
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const post = new Post({
  title: 'My First Post',
  content: 'This is the content of my first post.',
  author: user._id, // Assign the user's ObjectId to the post's author field
});

Post.findOne({ title: 'My First Post' })
  .populate('author')
  .exec((err, post) => {
    if (err) {
      // Handle error
    } else {
      console.log(post);
    }
  });


17. To save the user info in local use a middle ware setauthenticated and there ( res.locals.user = req.user ) (optional step and depends on the project)
18.  You can create check authentication middleware in get or post routes
19. Nesting population
20. Update and Delete operation
21. For flash messages (connect-flash)
22. Use noty for animated flash messages
23. Using it as api (axios , ajax )
24. return res.json({}) // for sending out json data
25. File upload using multer
26. Sending emails using Nodemailer (gmail )
27. 








Passport Js (Authentication)

Session Based (local)

1. use routes and mongoose and models for storing emails and username and password
2.  hashing of password (bcrypt) hashSync(req.body.password, 10)
3. express-session (paste above our routes ) (inside cookie property , maxAge : 1000 * 60 *60 * 24 )
4. connect-mongo === store: MongoStore.create({mongoUrl :  , collectionName: "sessions"})
5. passport passport-local
6. create a passport.js middleware and make a config file for it
7. inside config file use compareSync(password , user.password)
8. passport.authenticate('local', {successRedirect:"'}) put this in post routes
9. use passport session and initialize middlewares and put it below express session app.use(passport.initialize())
app.use(passport.session())

10. req.user and req.session
11. req.logout()
12. req.isAuthencticated()

Session Based (Google auth)

1. keep all the config same as above and make few changes - in database instead of password use googleId
2. passport-google-auth20
3. use google developers console and create oauth client id
4. add a redirect url for auth/callback
5. make config file for passport google auth
6. use passport google auth requests from website itself
7. also add successredirect



Token Based Authentication 

Passport JWT authentication


1. use cors for backend to front end app (const cors == require('cors') then app.use(cors())
2. make database file having username and password fields (you can use email also)
3. install bcrypt , cors , passport , passport-jwt dependencies
4. In register post request make a new model and save it (password use bcrypt) and then send a json 
res.send({ success:,message:,user:{send only id and username of the user

5. In login post request just make User,findOne in try catch block and if error send error and if password is not matching(compareSync) then return error.
6. now for creating a jwt we have to include library called jsonwebtoken
7. jwt.sign(payload, secretOrPrivateKey, [options, callback])
in payload make an object having username and id
PrivateKey will be a random string
Then finally just pass a expiresIn : "1d" object

8. Then just send the response with a token from above
9. Make passport-jwt config file where in opt use Secret key from jwt used above
10. make protected route and passport.authenticate('jwt',{session:'false'})
11. Then make a get request to protected route with Key Authorization : token
12. Make react app , install router dom and axios
13. localStorage.setItem('token',user.data.token)
14. localStorage.getItem('token')
15. In axios get request add headers as Authorizatio:token
16. let navigate = UseNavigate()
17. use useEffect in react app to simply add authorizzation to 