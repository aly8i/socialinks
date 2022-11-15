import mongoose from "mongoose";
const SocialSchema = new mongoose.Schema(
  {
    displayname:{
      required: true,
      type: String,
      maxlength: 20,
    },
    description:{
      required: true,
      type: String,
      maxlength: 60,
    },
    type:{
      required: true,
      type: String,
      maxlength: 20,
    },
    link: {
        required: true,
        type: String,
        maxlength: 60,
    },
    profilephoto: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Social ||
  mongoose.model("Social", SocialSchema);
