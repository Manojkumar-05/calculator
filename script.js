const display = document.querySelector('.display')

function getButton(btn){

    const element = btn.innerText
    display.innerText += element
}

function result(){
    display.innerText = eval(display.innerText)
}

const c = document.querySelector('#clear')

c.addEventListener('click',function(){
    display.innerText = ""
})
