import mongoose, { Schema } from "mongoose";

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise; // Call a promise to mongodb

// Define the schema for the Ticket document
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

// Create or get the Ticket model
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
