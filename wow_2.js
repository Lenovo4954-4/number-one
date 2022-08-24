function calc() {
    let one = parseInt(prompt ('введите число'));
    let two = parseInt(prompt ('введите второе число'));
    let three = prompt ('введите действие: \n 1: + '+ ' ' +' 3: * \n 2: - '+ '  ' +' 4: /');
    if (three == 1) { 
    let sum = one + two; 
    alert ('ответ: ' + sum)
}
    else if (three == 2) {
        let sum = one - two;
        alert ('ответ: ' + sum)
        }
    else if (three == 3) {
        let sum = one * two;
        alert ('ответ: ' + sum)
        }
    else if (three == 4) {
        let sum = one / two;
        alert ('ответ: ' + sum)
        }

}
function test() {
    let text = 'hello, world!'
    let text_2 = text .replace('world','human')
    let text_3 = text_2.toUpperCase()
    alert (text_3)
}


function cheese() {
    let a = parseInt(prompt ('введите число:'));
    let b = parseInt(prompt ('введите второе число:'));
    let c = document.getElementById('but')
    if (a > b)
    {
        alert ('Наибольшее число: ' + a);
        c.style.backgroundColor = "blue";
    }
    else
    {
        alert ('Наибольшее число: ' + b);
        c.style.backgroundColor = "green";
    }

}
function massive() {
    var arr = ['apple','berry','pineapple','pear'];
    arr.push('Манго');
    arr[3]='Груша'
    arr.shift();
    alert (arr);
}
function flash() {
    a = document.getElementById('fert_1')
    a.classList.toggle('fert')
}
function flash() {
    a = document.getElementById('fert_2')
    a.classList.toggle('fert')
}
function flash() {
    a = document.getElementById('fert_3')
    a.classList.toggle('fert')
}
function flash() {
    a = document.getElementById('fert_4')
    a.classList.toggle('fert')
}
function massive_1() {
    var id_ar = ['fert_1','fert_2','fert_3','fert_4','fert_5']
    for (let i = 0; i< 3; i++)
    {
        t = document.getElementById(id_ar[i])
        t.classList.toggle('fert')
        
    }
}