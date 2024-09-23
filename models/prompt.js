import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }, 
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;

// Schema: In Mongoose, a schema defines the structure of the documents within a collection in MongoDB. It specifies the fields, types, validation rules, etc., that each document must adhere to. Schemas are used to define how the data will be stored in MongoDB.
// Model: Models are constructors compiled from schemas. An instance of a model represents a MongoDB document. Models are responsible for creating and reading documents from the underlying MongoDB database.
// Models: This is a property of the mongoose object that keeps track of all the models that have been defined so far. When you call model('Prompt'), Mongoose checks if a model with the name 'Prompt' already exists in models. If it doesn't, Mongoose creates a new model based on the schema you've defined.
// ref: 'User': This line in the schema definition tells Mongoose that the creator field is a reference to a document in the User collection. The 'User' string matches the name of the model (or collection) that the ObjectId in the creator field points to. This is crucial for population, a feature in Mongoose that allows you to automatically replace the specified paths in the document with documents from other collections. In this case, when you query a prompt, you can use .populate('creator') to automatically fetch the user document that corresponds to the creator ObjectId, providing you with the full user details instead of just the ObjectId.
