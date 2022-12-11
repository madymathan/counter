let count = document.getElementById("value")
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");
let value = 0
increase.addEventListener("click",()=>{
count.innerText = value +=1
if (value>0)
{
    return count.style.color="green" 
}   
});
decrease.addEventListener("click",()=>{
    count.innerText = value -=1
    if(value<0){
        return count.style.color="red"
    }
           
   });
   reset.addEventListener("click",()=>{
    count.innerText = value=0
     count.style.color="blue"

   
   });
