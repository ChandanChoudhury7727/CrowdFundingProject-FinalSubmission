const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be blank"],
    trim: true, // Removes extra spaces
  },
  subTitle: {
    type: String,
    required: [true, "Subtitle cannot be blank"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
    trim: true,
  },
  imageUrl: {
    type: String,
    validate: {
      validator: function (url) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(url);
      },
      message: "Invalid image URL",
    },
  },
  required: {
    type: Number,
    required: [true, "Amount required must be added"],
    min: [1, "Required amount must be greater than zero"],
  },
  raised: {
    type: Number,
    default: 0,
    min: [0, "Raised amount cannot be negative"],
  },
  start: {
    type: Date,
    default: Date.now,
  },
  donorsNum: {
    type: Number,
    default: 0,
    min: [0, "Donor count cannot be negative"],
  },
  donors: [
    {
      transactionID: {
        type: String,
        required: [true, "Transaction ID is required"],
        default: function () {
          return "txn_" + Date.now();
        }, // ✅ Auto-generates unique transaction ID
      },
      donationAmount: {
        type: Number,
        default: 0,
        min: [1, "Donation amount must be at least 1"],
      },
    },
  ],
  isHidden: {
    type: Boolean,
    default: false,
  },
  isActivated: {
    type: Boolean,
    default: true,
  },
});

// Create Campaign Model
const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
