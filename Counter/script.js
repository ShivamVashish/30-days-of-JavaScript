// Set Initail count
// let count = 0;
// const value = document.querySelector('#value')
// const button = document.querySelectorAll('.btn')
// button.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//         const styles = e.currentTarget.classList;
//         if(styles.contains('Minus')){
//             count--;
//         }
//         else if(styles.contains('Plus')){
//             count++;
//         }
//         else{
//             count=0;
//         }
// //         if(count > 0){
// //             value.style.color = "Green"
// //         }
// //         if(count < 0){
// //             value.style.color = "Red"
// //         } 
// //         if(count == 0){
// //             value.style.color = 'Black'
// //         }
//         value.textContent = count
//     })
// })

let count1 = 0
const value1 = document.querySelector('#value')
const btn = document.querySelectorAll('.btn')
btn.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const element = e.currentTarget.classList;
        if(element.contains('Plus')){
            count1 ++;
        } else if(element.contains('Minus')){
            count1--;
        } else{
            count1 = 0;
        }
        if(count1 > 0){
            value1.style.color = 'Green'
        }
        if(count1 < 0){
            value1.style.color = 'Red'
        } if(count1 == 0){
            value1.style.color = 'Black'
        }
        value1.textContent = count1
    })
})