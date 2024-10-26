1. Using Loadash
2. Json is a string type data , JSON.parse(jsonstring) , JSON.stringify(jsonobject)
3. In mongoose you can provide enum parameter as weel , unique , 
4. bodyparser in express automatically extracts data from the client request and converts into javascript object and we can access using req.body()
5. req.params.worktype   --- /person/:worktype



For authorization

1. Define User Roles
First, you need to define roles for your users in your database, either in the user schema or a separate table.

For example, in a MongoDB user schema:

js
Copy code
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user', 'moderator'], // Define your roles
        default: 'user'
    }
});
2. Create Middleware for Role-Based Access
Create middleware functions to check if a user has the appropriate role to access specific routes or services.

Example:

js
Copy code
function ensureRole(role) {
    return (req, res, next) => {
        if (req.isAuthenticated() && req.user.role === role) {
            return next();
        } else {
            res.status(403).json({ message: 'Unauthorized' });
        }
    };
}
3. Restrict Access to Routes
Use the middleware in your routes to restrict access based on user roles.

Example:

js
Copy code
app.get('/admin', ensureRole('admin'), (req, res) => {
    res.send('Welcome to the admin panel');
});

app.get('/user', ensureRole('user'), (req, res) => {
    res.send('Welcome to the user dashboard');
});
4. Handling Multiple Roles
If you want to allow multiple roles to access certain routes, you can adjust the middleware to check against a set of roles.

Example:

js
Copy code
function ensureRoles(roles) {
    return (req, res, next) => {
        if (req.isAuthenticated() && roles.includes(req.user.role)) {
            return next();
        } else {
            res.status(403).json({ message: 'Unauthorized' });
        }
    };
}

app.get('/dashboard', ensureRoles(['admin', 'user']), (req, res) => {
    res.send('Welcome to the dashboard');
});
5. Integrating with Passport.js
Since Passport.js handles the authentication, the req.isAuthenticated() and req.user values will be set if a user is logged in. You can check req.user.role in the middleware to authorize the user.

6. Fine-Grained API Access Control
For finer control, you can restrict specific API endpoints to certain users by applying the same middleware approach to your API routes.

js
Copy code
app.get('/api/restricted', ensureRole('admin'), (req, res) => {
    res.json({ message: 'Only admins can see this' });
});
By following this approach, you can control access to services and APIs based on user roles, adding authorization to your application.

