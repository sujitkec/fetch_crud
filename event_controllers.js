const User = require('./model')

module.exports.getall_users = async (req, res) => {
    try {
        const events = await User.find({})
        res.status(200).json(events)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports.get_users = async (req, res) => {
    try {
        const {id} = req.params
        const events = await User.findById(id);
        res.status(200).json(events)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports.editEvent = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, {...req.body});
        await user.save();
        res.status(200).json("Successfully Edited")
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports.addEvent = async (req, res) => {
    try {
        const {rollno} = {...req.body};
        const existinguser = await User.findOne({rollno})
        if (existinguser) {
            res.status(200).json("User Already Created Please Delete and Create")
        }
        else {
            const newEvent = new User({...req.body})
            await newEvent.save();
            res.status(200).json(newEvent)
        }
    } catch (err) {
        console.log(err.message)
        res.status(500).json('Something went worng...')
    }
}

module.exports.deleteEvent = async (req, res) => {
    const {id} = req.params
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json("Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}
