//Reading & writing file asynchronously with callbacks
const fs=require("fs");
const path=require("path");

const filePath=path.join(__dirname,"async-note.txt");

//append 
fs.appendFile(filePath,"New text added using fs.appendFile.",
    function(writeError){
        if(writeError){
            console.log("Append error: ",error.message);
            return;
        }
        console.log("File content appended.");
    }
);

//To write to a file
fs.writeFile(filePath,"This is written asynchronously using writeFile().",
    function(writeError){
        if(writeError){
            console.log("Write error: ",writeError.message);
            return;
        }
        console.log("File written synchronously.");
    }
);

//read from a file
fs.readFile(filePath,"utf-8",
    function(readError,content){
        if(readError){
            console.log("Read Error: ",readError.message);
            return;
        }
        console.log(content);
    }
);

console.log("Script continues while file operations are in progress.");
