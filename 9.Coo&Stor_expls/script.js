let strBtn = document.getElementById("store-btn")
let rtrvBtn = document.getElementById("retrieve-btn")
let rmvBtn = document.getElementById("remove-btn")

let uid = 777;
let user = {
	name: "Raul",
	age: 44,
	hobbies: ["Sports", "Cooking"],
};


strBtn.addEventListener('click', function(){
    
    localStorage.setItem('userId', uid)  

    localStorage.setItem('user', user) 
    localStorage.setItem("user", JSON.stringify(user)); //user obyektin string etdim        
   
});

rtrvBtn.addEventListener('click', function(){

    let value=localStorage.getItem('userId')
    console.log(value)

    
    let value2 = JSON.parse(localStorage.getItem("user"));
    console.log("Value is",value2)
});


rmvBtn.addEventListener('click', function(){
    localStorage.removeItem('userId')
});
