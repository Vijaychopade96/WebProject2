let inputTextarea =document.getElementById("input-textarea");
let characCount=document.getElementById("charac-count");
let wordCount=document.getElementById("word-count");

inputTextarea.addEventListener("input" ,()=> {
    characCount.textContent=inputTextarea.value.length;
    let txt=inputTextarea.value.trim();
    wordCount.textContent=txt.split(/\s+/).filter((item)=>
    item).length;

});
