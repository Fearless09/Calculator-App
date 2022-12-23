//THEMES

let themebtn1 = document.querySelector('.theme1');
let themebtn2 = document.querySelector('.theme2');
let themebtn3 = document.querySelector('.theme3');

themebtn1.addEventListener('click', (e) => {
    themebtn1.style.display = "none"
    themebtn2.style.display = "block"
    document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 90%)'
    document.querySelector('body').style.color = 'hsl(60, 10%, 19%)'
    document.querySelector('.equals').style.backgroundColor = 'hsl(25, 98%, 40%)'
    document.querySelector('.theme-badge').style.backgroundColor = 'hsl(0, 5%, 81%)'
    document.querySelector('.keypad').style.backgroundColor = 'hsl(0, 5%, 81%)'
    document.querySelector('.display').style.backgroundColor = 'hsl(0, 0%, 93%)'
    document.querySelector('.display').style.color = 'hsl(221, 14%, 31%)'
    document.querySelector('.reset').style.backgroundColor = 'hsl(185, 42%, 37%)'
    document.querySelector('.del').style.backgroundColor = 'hsl(185, 42%, 37%)'
    document.querySelector('.del').style.borderColor = 'hsl(185, 58%, 25%)'
    document.querySelector('.reset').style.borderColor = 'hsl(185, 58%, 25%)'
})

themebtn2.addEventListener('click', (e) => {
    themebtn2.style.display = "none"
    themebtn3.style.display = "block"
    Array.from(document.querySelectorAll('.keypad-btn')).map( keys => {
        keys.style.color = 'hsl(52, 100%, 62%)'
        keys.style.backgroundColor = 'hsl(268, 47%, 21%)'
        keys.style.borderColor = 'hsl(290, 70%, 36%)'
    })
    document.querySelector('body').style.backgroundColor = 'hsl(268, 75%, 9%)'
    document.querySelector('body').style.color = 'hsl(52, 100%, 62%)'
    document.querySelector('.equals').style.backgroundColor = 'hsl(176, 100%, 44%)'
    document.querySelector('.theme-badge').style.backgroundColor = 'hsl(268, 71%, 12%)'
    document.querySelector('.keypad').style.backgroundColor = 'hsl(268, 71%, 12%)'
    document.querySelector('.display').style.backgroundColor = 'hsl(268, 71%, 12%)'
    document.querySelector('.display').style.color = 'hsl(52, 100%, 62%)'
    document.querySelector('.reset').style.backgroundColor = 'hsl(281, 89%, 26%)'
    document.querySelector('.del').style.backgroundColor = 'hsl(281, 89%, 26%)'
    document.querySelector('.reset').style.color = 'white'
    document.querySelector('.del').style.color = 'white'
    document.querySelector('.equals').style.color = 'hsl(198, 20%, 13%)'
    document.querySelector('.equals').style.borderColor = 'hsl(177, 92%, 80%)'

})
8
themebtn3.addEventListener('click', (e) => {
    themebtn3.style.display = "none"
    themebtn2.style.display = "none"
    themebtn1.style.display = "block"
    Array.from(document.querySelectorAll('.keypad-btn')).map( keys => {
        keys.style.color = 'hsl(221, 14%, 31%)'
        keys.style.backgroundColor = 'hsl(30, 25%, 89%)'
        keys.style.borderColor = 'hsl(28, 16%, 65%)'
    })
    document.querySelector('body').style.backgroundColor = 'hsl(222, 26%, 31%)'
    document.querySelector('body').style.color = 'white'
    document.querySelector('.equals').style.backgroundColor = 'hsl(6, 63%, 50%)'
    document.querySelector('.theme-badge').style.backgroundColor = 'hsl(223, 31%, 20%)'
    document.querySelector('.keypad').style.backgroundColor = 'hsl(223, 31%, 20%)'
    document.querySelector('.display').style.backgroundColor = 'hsl(224, 36%, 15%)'
    document.querySelector('.display').style.color = 'white'
    document.querySelector('.reset').style.backgroundColor = 'hsl(225, 21%, 49%)'
    document.querySelector('.del').style.backgroundColor = 'hsl(225, 21%, 49%)'
    document.querySelector('.reset').style.color = 'white'
    document.querySelector('.del').style.color = 'white'
    document.querySelector('.equals').style.color = 'white'
    document.querySelector('.equals').style.borderColor = 'hsl(6, 70%, 34%)'
    document.querySelector('.del').style.borderColor = 'hsl(224, 28%, 35%)'
    document.querySelector('.reset').style.borderColor = 'hsl(224, 28%, 35%)'
})


//CALCULATOR FUNCTION

let display = document.querySelector('.display')
let keypadbtn = Array.from(document.querySelectorAll('.keypad-btn'))

keypadbtn.map( keypadbtns => {
    keypadbtns.addEventListener('click', (e) => {
        console.log('Clicked')
        console.log(e.target.innerText)
        
        switch(e.target.innerText) {

            case 'RESET':
                display.value = display.placeholder;  

            case 'DEL':
                display.value = display.value.slice(0, -1);
                console.log(display.value.slice(0, -1))
                break

            case '=':
                try {
                    display.value = eval(display.value)
                } catch {
                    display.value = 'ERROR!!!'
                    setTimeout(() => (display.value = ''), 1000);
                }                
                break

            default:  
                if (display.value == '0') {
                    display.value = e.target.innerText
                    console.log("ZEROOO")
                }
                else if (display.value.includes('.')) {
                    display.value = display.value + e.target.innerText
                   
                }
                else {
                    display.value += e.target.innerText
                }              
                
        }
    })
})


//Main CAlC POWELL

// const calculator = document.querySelector('container')
// const keypad = document.querySelector('.keypad')
// const display = document.querySelector('.display')



// keypad.addEventListener('click', event => {
//     if (!event.target.closest('button')) return

//     const keypadValue = event.target.textContent
//     const { type } = event.target.dataset
//     const { previousKeyType } = event.target.dataset
    
//     //Number Keys
//     if (type == 'number') {
//         if (display.value == '0') {
//             display.value = keypadValue
//         }
//         else if (previousKeyType == 'operator') {
//             display.value = keypadValue
//         }
//         else {
//             display.value += keypadValue
//         }
//         console.log(event.target)
//     }


//     //Operator Key
//     if (type == 'operator') {
//         console.log(event.target)

//         event.target.dataset.previousKeyType = 'operator'
//     }

    
    
// })