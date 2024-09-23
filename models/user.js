import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
    image: {
        type: String,
      } 
});

const User = models.User || model("User", UserSchema);
export default User;

// Schema: In Mongoose, a schema defines the structure of the documents within a collection in MongoDB. It specifies the fields, types, validation rules, etc., that each document must adhere to. Schemas are used to define how the data will be stored in MongoDB.
// Model: Models are constructors compiled from schemas. An instance of a model represents a MongoDB document. Models are responsible for creating and reading documents from the underlying MongoDB database.
// Models: This is a property of the mongoose object that keeps track of all the models that have been defined so far. When you call model('Prompt'), Mongoose checks if a model with the name 'Prompt' already exists in models. If it doesn't, Mongoose creates a new model based on the schema you've defined.
