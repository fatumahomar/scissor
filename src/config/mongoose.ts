import mongoose from "mongoose";
const connectToDatabase = async () => {
  const uri =
    "mongodb+srv://fatuabdi55:QPf2lSIjmvLXsw3d@cluster0.7az0xjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(uri, {
      serverSelectionTimeoutMS: 30000,
    })
    .then(() => console.log("Connected to Database :: MongoDB"))
    .catch((err) => console.error("Mongoose connection error:", err));
};
export default connectToDatabase;
