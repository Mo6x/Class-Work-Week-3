'strict';
let btn = document.getElementById('btncount');
 let int = document.getElementById('number');
 let increment = 0
 let timeout 
addEventListener('click', function(){
    increment += 1
    int.innerHTML = increment
  
    clearTimeout(timeout)
    timeout = setTimeout(()=>{ 
        increment = 0; 
        int.innerText = increment;
    },5000);
})




