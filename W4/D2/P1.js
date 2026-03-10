// innerText & textContent
//innerText: visible rendered text only
//textContent: all text nodes regardless of css
//innerHtml: allows reading or writing HTML markup inside an element

const message=document.getElementById("message");
const textContent=document.getElementById("textContentBtn");

// for innerTextBtn 
document.getElementById("innerTextBtn").addEventListener("click",function(){
    message.innerText="Updated using innerText";
});

// for textContentBtn
document.getElementById("textContentBtn").addEventListener("click",function(){
    message.textContent="Updated using textContent";
});

//for innerHTMLBtn
const box=document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML="<strong>Original</strong> Content";
});

// for reset button
document.getElementById("resetBtn").addEventListener("click",function(){
    message.innerText="Original message";
});
