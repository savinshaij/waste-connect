const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");
const registeredEventsModel = require("./models/registeredEvents");
const app = express();
var Email = "";
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/wasteconnect");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  Email = email;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        res.json(user);
      } else {
        res.json("incorrect-password");
      }
    } else {
      res.json("user-not-found");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Error during login" });
  }
});

app.post("/profile", (req, res) => {
  const a = req.body;
  userModel.findOne({ email: Email }).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.json("error");
    }
  });
});

app.get("/profile-edit", (req, res) => {
  userModel.findOne({ email: Email }).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.json("error");
    }
  });
});

app.put("/profile-edit", async (req, res) => {
  const updatedUserData = req.body;

  try {
    const user = await userModel.findOneAndUpdate(
      { email: Email },
      updatedUserData,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Error updating user data" });
  }
});

app.post("/signup", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/event", async (req, res) => {
  const Data = req.body;

  try {
    const user = await registeredEventsModel.findOne({ email: Email });

    if (!user) {
      registeredEventsModel.create(Data);
    } else {
      //  console.log("eventreg user exixting trying to push")
      user.events.push(Data.events);
      user.save();
    }

    res.json(true);
  } catch (error) {
    console.log("Error during event");
  }
});

app.get("/event", (req, res) => {
  userModel.findOne({ email: Email }).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.json("error");
    }
  });
});


app.get("/registered-event", (req, res) => {
  registeredEventsModel.findOne({ email: Email }).then((user) => {
    if (user) {
      if (user.events && user.events.length > 0) {
        res.json(user.events);
      } else {
        res.json("No registered events found for this user.");
      }
    } else {
      res.status(404).json("User not found.");
    }
  });
});

app.delete("/registered-event/:eventId", async (req, res) => {
  const eventId = req.params.eventId;
  try {
    const userEvents = await registeredEventsModel.findOne({ email: Email });
    if (!userEvents) {
      return res.status(404).json({ message: 'User not found' });
    }
    const eventIndex = userEvents.events.findIndex((event) => event._id == eventId);
    if (eventIndex === -1) {
      return res.status(404).json({ message: 'Event not found' });
    }
    userEvents.events.splice(eventIndex, 1);
    await userEvents.save();
    return res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error("Error deleting the event:", error);
    res.status(500).json({ error: "Error deleting the event" });
  }
});




app.listen(3001, () => {
  console.log("server is running..");
});
