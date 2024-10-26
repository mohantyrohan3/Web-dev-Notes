References in Mongoose

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);


const postSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }  // Referencing User model
});

const Post = mongoose.model('Post', postSchema);

## // Create a new user
const user = new User({ name: 'John Doe', email: 'john@example.com' });
await user.save();

// Create a new post associated with the user
const post = new Post({
  title: 'My First Post',
  content: 'This is my first post content.',
  author: user._id  // Reference to the user
});
await post.save();



const userId = 'USER_ID_HERE';  // Replace with the actual user ID

Post.find({ author: userId })
  .populate('author')  // Populate author data if needed
  .exec((err, posts) => {
    if (err) {
      return console.error(err);
    }
    console.log(posts);  // This will return all posts written by the specified user
  });


---------------------


# Multer

1. enctype = "multipart/form-data" should be given to form in react
2. Follow the documentation