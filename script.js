let name = "Alex"
let balance = 10000
let account = 7777

let namePrompt = prompt("имя")

if(namePrompt == name){
    let accPrompt = prompt("номер счета")
    if(accPrompt == account){
    let money = prompt("сколько обналичить?")
    if(money <= balance){
        console.log("Снято:" + money + ",Осталось:" + (balance - money))
    }else{
        alert("error")
    }
    }else{
        alert("error")
    }
}else{
    alert("error")
}
