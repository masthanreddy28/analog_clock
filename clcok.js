

let hoursbar=document.getElementById("hours")
let minsbar=document.getElementById("mins")
let secsbar=document.getElementById("secs")
setInterval(function(){

    let d=new Date();
    let hours=d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
let hrsRotate=30*hours +minutes/2;
let minRotate=6*minutes;
let secRotate=6*seconds

hoursbar.style.transform=`rotate(${hrsRotate}deg)`
minsbar.style.transform=`rotate(${minRotate}deg)`
secsbar.style.transform=`rotate(${secRotate}deg)`

},1000);