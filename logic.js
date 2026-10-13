arr=["scissor","Rock","paper"]
b=document.querySelectorAll(".button")
sc=document.querySelector("#start")
user_score=document.querySelector("#userscore")
comp_score=document.querySelector("#compscore")
function user_choice(user_choice){
    console.log("userchioce: "+user_choice)   
}
function computerchoice(){
    let addr=Math.random()
    let ind=Math.floor(addr*arr.length)
    let computerchoice=arr[ind]
    console.log("computer choice: "+computerchoice)
    return computerchoice
}
function matchdraw(){
    console.log("Match Draw")
        sc.innerText="Match Draw"
        sc.style.backgroundColor="yellow"
        sc.style.color="black"
}
function userselects_rock(comp_choice){
    if(comp_choice==="scissor"){
        console.log("You Won,Rock beats scissor")
        sc.innerText="You Won,Rock beats scissor"
        user_score.innerText=Number(user_score.innerText)+1
        sc.style.backgroundColor="green"
}
else{
        console.log("You Lost,paper holds the rock.so Computer Won")
        sc.innerText="You Lost,paper holds the rock.so Computer Won"
        comp_score.innerText=Number(comp_score.innerText)+1
        sc.style.backgroundColor="red"
    } 
}
function userselects_scissor(comp_choice){
    if(comp_choice==="Rock"){
        console.log("You Lost,Rock breaks the scissor.so Computer Won")
        sc.innerText="You Lost,Rock breaks the scissor.so Computer Won"
        sc.style.backgroundColor="red"
        comp_score.innerText=Number(comp_score.innerText)+1
}
else{
    console.log("You Won,scissor cuts paper")
    sc.innerText="You Won,scissor cuts paper"
    user_score.innerText=Number(user_score.innerText)+1
    sc.style.backgroundColor="green"   
}
}
function userselects_paper(comp_choice){
    if(comp_choice==="Rock"){
        console.log("You Won,paper holds the rock")
        sc.innerText="You Won,paper holds the rock"
        sc.style.backgroundColor="green"
        user_score.innerText=Number(user_score.innerText)+1
}
else{
    console.log("You Lost,scissor cuts paper.so Computer Won")
        sc.innerText="You Lost,scissor cuts paper.so Computer Won"
        comp_score.innerText=Number(comp_score.innerText)+1
        sc.style.backgroundColor="red"
    }
}

b.forEach((ch)=>{
    ch.addEventListener("click",()=>{
        const userchoice=ch.getAttribute("id")
        user_choice(userchoice)
        let computer_choice=computerchoice()
    if(computer_choice===userchoice){
        matchdraw()
    }
    else if(userchoice==="Rock"){
        userselects_rock(computer_choice)
    }

else if(userchoice==="scissor"){
    userselects_scissor(computer_choice)
}
else{
    userselects_paper(computer_choice)
}
    })})

    

