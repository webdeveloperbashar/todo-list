let todoText = document.getElementById('todoText')
let reset = document.getElementById('reset')
let clock = document.getElementById('clock')
let wrongMsg = document.getElementById('wngMsg')
let inputParentDiv = document.getElementById('inputParentDiv')
let btn = document.getElementById('btn')
let header = document.getElementById('header')
let result  = document.getElementById('result')
btn.addEventListener('click', function(){
    if(todoText.value === ''){
        wrongMsg.innerText = 'Please something write here !'
        wrongMsg.className = 'alert alert-danger'
        todoText.insertAdjacentElement('afterend', wrongMsg)
        setTimeout(() => {
            wrongMsg.remove()
        }, 5000)
    }else{
        createLi(todoText.value)
        todoText.value = ''
    }
})
//Text field Disabled
todoText.addEventListener('keypress', function(){
    if(this.value.length > 30){
        this.disabled = true
        let p = document.createElement('p')
        p.innerText = 'Please write less than 30 characters'
        p.className = 'alert alert-danger'
        inputParentDiv.appendChild(p)
        todoText.insertAdjacentElement('afterend', p)
        setTimeout(() => {
            todoText.disabled = false
            todoText.value = ''
            p.remove()
        }, 5000)
    }
})
//Create Clock
function clockTime(){
    let date = new Date()
    let getHours = date.getHours()
    let getMinutes = date.getMinutes()
    let period = 'AM'
    if(getHours === 0){
        getHours = 12
    }
    if(getHours >= 12){
        getHours = getHours - 12
        period = 'PM'
    }
    hours = getHours < 10 ? `0${getHours}` : getHours
    minutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes
    clock.innerHTML = `${hours}:${minutes} ${period}`
}
setInterval(clockTime, 1000)
//Create li element Function
function createLi(value){
    let li = document.createElement('LI')
    li.className = 'list-group-item d-flex'
    li.style.fontSize = '15px'
    li.textContent = value
    result.insertBefore(li, result.childNodes[0])
    let span1 = document.createElement('span')
    span1.className = 'd-flex ml-auto text-success bold'
    span1.innerHTML = '<i class="fas fa-edit"></i>'
    span1.addEventListener('click', function(){
        let input = document.createElement('input')
        input.className = 'input form-control'
        input.type = 'text'
        input.value = li.textContent
        li.appendChild(input)
        input.addEventListener('keypress', function(e){
            if(e.key === 'Enter'){
                li.textContent = this.value
                li.appendChild(span1)
                li.appendChild(span2)
            }
        })
    })
    li.appendChild(span1)
    let span2 = document.createElement('span')
    span2.className = 'delete d-flex text-danger bold'
    span2.innerHTML = '<i class="fas fa-times"></i>'
    span2.addEventListener('click', function(){
        li.remove()
    })
    li.appendChild(span2)
}