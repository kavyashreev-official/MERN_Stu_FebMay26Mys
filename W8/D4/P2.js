// Timestamp and Advanced queries

const mongoose = require("mongoose");
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
        // 27017-port number, 127.0.0.1-connection string 
        console.log("Connected to MongoDB");

        const demoSchema = new mongoose.Schema(
            {
                name: String
            },
            {
                timestamps: true
            }
        );
        const Model = mongoose.model('Log', demoSchema);
        await Model.deleteMany();

        const doc=await Model.create([
            { name: "Anisha" },
            { name: "Bhargav" },
            { name: "Chandru" }
        ]);
        console.log("Document:", doc);

        const recent=await Model.find({
            createdAt:{
                $gte:new Date(Date.now()-900000)
            }
        }).sort({createdAt:-1});
        console.log("Recent: ",recent);

    }
    catch (err) {
        console.log("Error:", err.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("DB disconnected.");
    }
}
main();