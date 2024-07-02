function displayTime(){
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let Am = "AM";
    let Pm = "PM";

    
    if(hour<10){
        hour = "0" + hour;
    }
    if(minutes<10){
         minutes= "0" + minutes;
    }
    if(seconds<10){
        seconds= "0" + seconds;
    }

    amOrPm = ()=> {
        if(hour > 12){
            hour = hour - 12        
            document.getElementById("AmOrPm").innerHTML = Pm;
        }else{
            document.getElementById("AmOrPm").innerHTML = Am;
        }
    }
  amOrPm();

    document.getElementById("Hour").innerHTML = hour + ":" ;
    document.getElementById("Minutes").innerHTML = minutes + ":";
    document.getElementById("Seconds").innerHTML = seconds;
     
    
   

}
setInterval(displayTime, 1000);
