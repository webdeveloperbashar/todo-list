# ToDo List

Click the link and show the website [VISIT WEBSITE](https://webdeveloperbashar.github.io/todo-list/ "Show Website")

# Common CSS Code

## Mobile Device Frame Make

<p>The device with borders:</p>

```CSS
.smartphone {
    position: relative;
    width: 361px;
    height: 640px;
    margin: auto;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
}
```
<p>The horizontal line on the top of the device:</p>

```CSS
.smartphone:before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
}
```
<p>The circle on the bottom of the device:</p>

```CSS
.smartphone:after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
}
```
<p>The screen (or content) of the device:</p>

```CSS
.smartphone .content {
    width: 100%;
    height: 100%;
    background: #ddd;
    overflow: auto;
}
```

# Common JavaScript Code

<p>Wrong Message Show And Text Field Disabled JavaScript Code:</p>

```Js
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
```

<p>Create Clock using JavaScript code:</p>

```JS
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
```

