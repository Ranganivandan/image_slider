const right=document.getElementById('right');
const left=document.getElementById("left");
const image=document.querySelectorAll(".image");
const slider=document.querySelector(".slider");

let num=1;




function right1(nums){
    if(nums==image.length){
        num=0;
    }
    else{
        for(let i of image){
            i.style.display="none";
        }
        image[nums].style.display="block";
       
    }
   
    }

right.addEventListener("click",()=>{
    if(num<image.length){
        right1(num);
        num++;
    }
    else{
        num=0;
        for(let y of image){
            y.style.display="none";
        }
        image[num].style.display="block";

    }
    
});

/// left 

let x=1;
left.addEventListener("click",()=>{
  
        left1(num-2);
   


num--;
});

function left1(nu){
 if(nu<0){
  num=5;
 console.log(num);
 for(let a of image){
    // a.style.display="none";
 }
   image[num].style.display="block";
    
 }
else{
    for(let z of image){
        z.style.display="none";
        }
        image[nu].style.display="block";
}
    
        
}



