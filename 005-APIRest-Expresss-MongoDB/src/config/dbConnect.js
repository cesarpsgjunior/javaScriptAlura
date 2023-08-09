import mongoose from "mongoose";

mongoose.connect("mongodb+srv://cesarpsgjunior:123@cluster0.upzhlbh.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;