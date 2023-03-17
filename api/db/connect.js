import mongoose from "mongoose";

async function connectDb(database_url, dbName) {
  const db_Name = {
    dbName: dbName,
  };
  try {
    await mongoose.connect(database_url, db_Name);
    console.log(`connected to ${db_Name.dbName} database`);
  } catch (err) {
    console.log(err);
  }
}

export default connectDb;
