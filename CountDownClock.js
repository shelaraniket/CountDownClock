 const a=setInterval(function(){
    // it gives 15th Aug date & time
    let dest=new Date("aug 15,2023 12:00:00 AM").getTime();

    // it gives current date & time
    let Now=new Date().getTime()

    // it gives diff in date and time from current date & time To 15th aug
    let diff=dest-Now;

    const a=1000*60*60;
    const b=1000*60;
    
    // it converts the miliseconds from current date and time to 15th aug  to hours  
    let Days=Math.floor(diff / (a*24));    
    console.log(Days) 

    let Hours=Math.floor( (diff % (a*24) ) /(a));
    console.log(Hours)

    let Minutes=Math.floor( (diff % (a) ) /(b));
    console.log(Minutes)

    let Seconds=Math.floor( (diff % (b) ) /(1000));
    console.log(Seconds)




    const days=document.getElementById('days')
    days.innerHTML=Days;
    
    const hours=document.getElementById('hours')
    hours.innerHTML=Hours;

    const minutes=document.getElementById('minutes')
    minutes.innerHTML=Minutes;

    const seconds=document.getElementById('seconds')
    seconds.innerHTML=Seconds;

},1000)