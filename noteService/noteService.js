const fs = require("fs");
class NoteService{
    constructor(file){
    this.file=file
    }
    read(){
    fs.readFile(this.file,"utf-8",(err,data)=>{
        if (err) {
            reject(err);
          }
          console.log("READ110");
          console.log(JSON.parse(data));
       return JSON.parse(data);
    })
    }
    write(){
    let a=JSON.parse(fs.readFileSync(this.file,"utf-8"));
    let whatever={
        id:1,
        text:"abvc"
    }
    a.push(whatever);
    whatever.id++;
    console.log(a)
    fs.writeFile(this.file,JSON.stringify(a),(err,data)=>{
        if (err) {
            reject(err);
          }
    });
    }
}

module.exports = NoteService;