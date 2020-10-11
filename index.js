const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


let NoteRouter=require("./router/routes")
let NoteService=require("./noteService/noteService")
let noteService= new NoteService(path.join(__dirname,"alldata","notesdata.json"));

//setup bodyParser middleware
app.use(express.urlencoded({ extended: false }));
// support parsing of application/json type post data
app.use(express.json());

//setup the first entry layout
app.use("/", new NoteRouter(noteService).router());

//set up static file
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("the port just started at 3000");
});
