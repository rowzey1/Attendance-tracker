const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const PORT = 4000;

require("dotenv").config();

let db,
  dbConnectionStr =
    "mongodb+srv://basilkalurosy:Rosy7412@rosyb.pt1jk.mongodb.net/?retryWrites=true&w=majority&appName=RosyB";
dbName = "PhoneBook";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (request, response) => {
  db.collection("contacts")
    .find()
    .sort({thumbUp:-1}) //sort in descending order
    .toArray()
    .then((data) => {
      response.render("index.ejs", { info: data });
    })
    .catch((error) => console.error(error));
    
});

app.post("/addContact", (request, response) => {
  db.collection("contacts")
    .insertOne(request.body)
    .then((result) => {
      console.log("Rapper Added");
      response.redirect("/");
    })
    .catch((error) => console.error(error));
});

app.put("/addContact", (request, response) => {
  if (request.body.thumbUp !== undefined) {
    db.collection("contacts")
      .findOneAndUpdate(
        {
          Name: request.body.Name,
          StudentId: request.body.StudentId,
        },
        {
          $set: {
            thumbUp: request.body.thumbUp + 1,
          },
        },
        {
          sort: { _id: -1 },
          upsert: true,
        }
      )
      .then((result) => {
        console.log("Added One Like");
        response.json("Like Added");
      })
      .catch((error) => console.error(error));
  } else if (request.body.thumbDown !== undefined) {
    db.collection("contacts")
      .findOneAndUpdate(
        {
          Name: request.body.Name,
          StudentId: request.body.StudentId,
        },
        {
          $set: {
            thumbDown: request.body.thumbDown + 1,
          },
        },
        {
          sort: { _id: -1 },
          upsert: true,
        }
      )
      .then((result) => {
        console.log("Added One Dislike");
        response.json("Dislike Added");
      })
      .catch((error) => console.error(error));
  }
});

app.delete("/addContact", (request, response) => {
  db.collection("contacts")
    .deleteOne({
      Name: request.body.Name,
      StudentId: request.body.StudentId,
    })
    .then((result) => {
      console.log("Contact Deleted");
      response.json("Contact Deleted");
    })
    .catch((error) => console.error(error));
});
