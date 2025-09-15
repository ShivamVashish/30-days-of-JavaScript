const input = document.getElementById('input-box')
const button = document.querySelectorAll('button')
let string = '';
button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const operation = e.target.innerHTML;
        if(operation == '='){
            string = eval(string)
            input.value = string
        } else if(operation == 'AC'){
            string = '';
            input.value = string
        } else if(operation == 'DEL'){
            string = string.substring(0,string.length-1)
            input.value = string
        }
        else {
                string += e.target.innerHTML;
                input.value = string
        }
    })
})