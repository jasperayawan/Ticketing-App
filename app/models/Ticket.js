import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

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
        timestamps: true
    }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Tickets", ticketSchema);

export default Ticket;