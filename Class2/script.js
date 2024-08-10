const fs = require('fs');

// fs.writeFile("test.txt","Hey, How are you",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })

// fs.appendFile("test.txt", " sab thik h", function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("done");
//     }
// })

// fs.rename("test.txt","newText.txt",function(err){
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("done");
//     }
// })

// fs.copyFile("newText.txt","./copy/copy.txt",function(err){
//         if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("done");
//     }
// })

// at this time I have made one file name demo.txt and one folder named copyDemo with one file inside it named dem.txt manually
// fs.unlink("demo.txt",function(err){
//     if(err) {
//         console.log(err);//gives error in json format
//     }
//     else {
//         console.log("done");
//     }
// })


//recursive true is written because it will delete when folder is not empty if folder is empty it is not used
// fs.rmdir("./copyDemo",{recursive:true},function(err){
//     if (err) {
//         console.log(err.message);//gives error in message form
//     }
//     else {
//         console.log("done");
//     }
// })


