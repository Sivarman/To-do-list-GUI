let tasks=[]; 
let task = document.getElementById("tsk");
let addbutton = document.getElementById("add");
let deletebutton = document.getElementById("del");
let deltask = document.getElementById("deltsk");
let op = document.getElementById("msg");
let displaybutton = document.getElementById("disp"); 
addbutton.addEventListener("click",function(e){
    e.preventDefault(); 
    
    let utask = task.value.trim();
    if(utask!== ""){
        tasks.push(utask);
        op.textContent=`${utask.charAt(0).toUpperCase()+utask.slice(1)} addded successfully`;
        task.value="";
    }
    else{
        op.textContent ="Enter a valid task";
    }
});
deletebutton.addEventListener("click",function(e){
    e.preventDefault();
    let udtask = deltask.value.trim();
    if(tasks.includes(udtask)){
        let index = tasks.indexOf(udtask);
        tasks.splice(index,1);
        op.textContent = `${udtask.charAt(0).toUpperCase()+udtask.slice(1)} deleted successfully`;
        deltask.value="";
    }
    else{
        op.textContent =`${udtask} doesn't exist`; 
    }

});
displaybutton.addEventListener("click", function(e) {
    e.preventDefault();
    op.innerHTML = ""; // clear previous
    tasks.forEach((item, index) => {
        op.innerHTML += `${index + 1}. ${item}<br>`;
    });
});


