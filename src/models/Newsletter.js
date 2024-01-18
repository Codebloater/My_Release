import { Schema, mongoose } from "mongoose";

const newsletterSchema = new Schema({
  emailAddress: {
    type: String,
    unique: true
  }
});

const NewsletterSchema =
  mongoose.model.NewsLetter || mongoose.model("NewsLetter", newsletterSchema);

export default NewsletterSchema;
