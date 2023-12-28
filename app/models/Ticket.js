// ticketModel.js

import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

let Ticket;

if (mongoose.models && mongoose.models.Tickets) {
    Ticket = mongoose.models.Tickets;
} else {
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
    );

    Ticket = mongoose.model("Tickets", ticketSchema);
}

export default Ticket;
