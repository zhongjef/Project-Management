const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose
	.connect("mongodb+srv://jeff:SAes9P2BVWrf1oTW@cluster0-ai9jj.mongodb.net/test?retryWrites=true&w=majority")
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.log("Could not connect to MongoDB", err));
