let millisec=0;
let sec=0;
let min=0;
let hour=0;
let interval;
let appendmillisec=0;
let appendsec=0;
let appendmin=0;
let appendhour=0;



function StopWatch(){
    millisec+=10;
    if(millisec<1000 && sec==0)
    {
        appendsec="00";
        appendhour="00";
        appendmin="00";
    }
    
    if(millisec<9)
    {
        appendmillisec="00"+millisec.toString();
    }
    if(millisec>10)
    {
        appendmillisec="0"+millisec.toString();
    }
    if(millisec>=100)
    {
        appendmillisec=millisec;
    }
     if(millisec==1000)
    {
        sec++;
        millisec=0;
    if(sec<10)
    {
        appendsec="0"+sec.toString();
    }
    else{
        appendsec=sec;
    }
    if(sec/60==1)
    {
        min++;
        sec=0;
    if(min<=9)
    {
        appendmin="0"+min.toString();
    }
    else{
        appendmin=min;
    }
    if(min==60)
    {
        hour++;
        min=0;
    }
    if(hour<=9)
    {
        appendhour="0"+hour.toString();
    }
    else{
        appendhour=hour;
    }
}
    }
    
    document.getElementById("display").innerHTML=appendhour+ ":" + appendmin+":"+appendsec+":"+appendmillisec;
}
function start(){

    interval=setInterval(StopWatch, 10);
    document.getElementById("start").style.display="none";
}
function pause(){

    clearInterval(interval);
    document.getElementById("start").style.display="inline-block";
}
function reset(){

    clearInterval(interval);
    hour=0;
    min=0;
    sec=0;
    millisec=0;
    document.getElementById("display").innerHTML="00:00:00:000";

}