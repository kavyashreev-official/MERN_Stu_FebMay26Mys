function greetings(){
    const hour=new Date().getHours();
    let msg="Hello";

    if(hour<12) msg="Good Morning";
    else if(hour<18) msg="Good Afternoon";
    else msg="Good Evening";

    document.getElementById("greeting").textContent=msg;
}