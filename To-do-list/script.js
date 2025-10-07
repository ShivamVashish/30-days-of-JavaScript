const button = document.getElementById('add-task-button')
button.addEventListener('click',()=>{
    const input = document.getElementById('new-task-input').value.trim();
    const todo_container = document.querySelector('#todo-list-container')
    if(input === ''){
        alert("Please adding task")
        return
    }
    const li  = document.createElement('li')
    li.addEventListener('click',()=>{
        if(li.style.textDecoration === 'line-through'){
            li.style.textDecoration = 'none'
            li.style.textDecorationColor = 'currentColor'
        }else{
            li.style.textDecoration = 'line-through'
       
             li.style.textDecorationColor = 'gray'
             li.style.textDecorationThickness = '3px'
        }
    }) 
    li.style.backgroundColor = 'gray'
    li.style.padding = '10px'
    li.style.borderRadius = '4px'
    li.style.border = '2px solid black'
    li.style.color = 'white'
    li.style.fontSize = '20px'
    li.style.fontWeight = 'bold'
    li.style.display = 'flex'
    li.style.justifyContent = 'space-between'
    li.style.alignItems = 'center'
    const span = document.createElement('span')
    span.textContent = input;
    const btn = document.createElement('button')
    btn.textContent = 'x'
    btn.style.backgroundColor = 'white'
    btn.style.color = 'gray'
    btn.style.padding = '5px 15px'
    btn.style.borderRadius = '10px'
    btn.addEventListener('click',(e)=>{
       e.stopPropagation()
        li.remove();  
    })
    li.appendChild(span)
    li.appendChild(btn)
    todo_container.appendChild(li)
    document.getElementById('new-task-input').value = ''

})
