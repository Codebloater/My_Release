import { Schema, mongoose } from "mongoose";

const newPositionSchema = new Schema({
  walletAddress: {
    type: String,
    required: true
  },
  poolAddress: {
    type: String,
    required: true
  },
  tokenId: Number,
  automationStatus: {
    type: Boolean,
    default: false
  },
  emailAddress: {
    type: String
  },
  currentDate: {
    type: Date,
    default: Date.now
  },
  futureDate: {
    type: Date
  }
});

// Checks that there should be only 1 type of Declared Combination should be there in Database
newPositionSchema.index({ walletAddress: 1, poolAddress: 1 }, { unique: true });

const NewPositionSchema =
  mongoose.model.UserPositions ||
  mongoose.model("UserPositions", newPositionSchema);

export default NewPositionSchema;
