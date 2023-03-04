

const mongoose = require("mongoose");


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/spatel", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((r) => console.log("connection successfull...."))
    .catch((err) => console.log("error " + err));

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);


const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "sssss JS",
            ctype: "Back End",
            videos: 50,
            author: "Thapa Technical",
            active: true
        })
        const result = await reactPlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}


// createDocument()

// read
const getDocument = async () => {
    const result = await Playlist.find();
    console.log(result);
}

// getDocument();



// uddate 

const getUpdate = async (_id) => {

    try {
        const result = await Playlist.findByIdAndUpdate({
            _id
        }, {
            $set: {
                name: "Satish Patel 22"
            }
        }, { new: true }
        );
        console.log(result);

    } catch (err) {
        console.log("error :" + err);

    }



}


// getUpdate("63fc892970cdff34da96150e");
// delete

const deleteDocument = async (_id) => {

    try{

        const result = await Playlist.findByIdAndDelete({_id},{new : true});
        console.log(result);
    }catch(e){
        console.log("error :" + e);
    }
}

deleteDocument("63fc892970cdff34da96150e");
