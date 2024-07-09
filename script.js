window.addEventListener("load",checkInternetConnection);

function checkInternetConnection()
{
    const statustext=document.getElementById("statustext");
    const ipaddressText=document.getElementById("ipaddressText");
    const networkstrengthText=document.getElementById("networkstrengthText");
   
    
    statustext.textContent="Checking...";
    if(navigator.onLine)
    {
    fetch("https://api.ipify.org?format=json")
    .then((Response)=>Response.json())
    .then((date)=>{
        ipaddressText.textContent=date.ip;
        statustext.textContent="Connected"
        const connection=navigator.connection;
        const networkstrength=connection?connection.downlink+"MBPS":"Unknown"
       networkstrengthText.textContent=networkstrength;
    
    }
).catch(()=>{
    statustext.textContent="Disconnected";
    ipaddressText.textContent="-";
    networkstrengthText.textContent="-";
})

}
    else{
        statustext.textContent="Disconnecting";
        ipaddressText.textContent="-";
        networkstrengthText.textContent="-";
    }
}