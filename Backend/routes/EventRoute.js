const router = require("express").Router();
const Event = require("../models/Event");

http://Localhost:8070/events/add

router.route("/add").post((req,res)=>{

    const event_name = req.body.event_name;
    const date = Date(req.body.date);
    const time = req.body.time;
    const location = req.body.location;
    const description = req.body.description;

    const newEvent = new Event({
        event_name,
        date,
        time,
        location,
        description

    })

    newEvent.save().then(()=> {
        res.json("Event Added");

    }).catch((err)=>{
        console.log(err);

    })

})

router.route("/view").get((req,res)=>{

    Event.find().then((EventRoute)=>{
        res.json(EventRoute)
    }).catch((err)=>{
        console.log(err)

    })

})

http://Localhost:8070/events/update/434645njnrb563

router.route("/update/:id").put(async (req, res)=> {
    let eventID = req.params.id;
    const{event_name,date,time,location,description} = req.body;

    const updateEvent = {
        event_name,
        date,
        time,
        location,
        description
    }

    const update = await Event.findByIdAndUpdate(eventID, updateEvent)
    .then(()=> {
        res.status(200).send({status:" Event Updated"})
    
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error With Updating Data" , error: err.message});
    })

})

http://Localhost:8070/events/delete/77ghdh7387g7ye63

router.route("/delete/:id").delete(async(req , res )=> {
    let eventID = req.params.id;

    await Event.findByIdAndRemove(eventID)
    .then(()=>{
        res.status(200).send({status: "Event Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500)({status: "Error With Delete Event", error: err.message});
    })
})

module.exports = router;