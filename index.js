let btn = document.querySelectorAll(".drum");

console.log(btn)


for (let i = 0; i < btn.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',
        () => {console.log("I got clicked")
    btn[i].style.color = "green";})
    

}



