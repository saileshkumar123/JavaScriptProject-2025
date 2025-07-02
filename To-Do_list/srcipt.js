const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
    console.log("ffffffffffffffffffffff");
    if(inputbox.value === ''){
        alert("you must write something");
    }
    else{
        let list=document.createElement('li');
        list.innerHTML=inputbox.value;
        listcontainer.appendChild(list)
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        list.appendChild(span)
    }
    inputbox.value='';
    showdata();
}

listcontainer.addEventListener('click',function(e){
    console.log(e.target.tagName)
   if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
         showdata();
   }
   else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        showdata();
   }
},false)


function showdata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();

