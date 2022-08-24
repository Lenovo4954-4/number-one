function print_contact() {
    alert (' skype: helper \n telegram:@helper \n tel:88005353535')
}
function print_contact_1() {
    var a ="skype: helper"
    var b ="telegram:@helper"
    var c ="tel:88005353535"
    alert (a+'\n'+b+'\n'+c)
}
// function print_contact_2() {
//     alert ('🎉Поздравляем!🎉 \n Вы получили подарок.')
// }
function button() {
    let a = document.getElementById('one4')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_2() {
    let b = document.getElementById('one4')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_3() {
    let a = document.getElementById('one5')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_4() {
    let b = document.getElementById('one5')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_5() {
    let a = document.getElementById('one6')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_6() {
    let b = document.getElementById('one6')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_7() {
    let a = document.getElementById('one7')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_8() {
    let b = document.getElementById('one7')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_9() {
    let a = document.getElementById('one8')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_10() {
    let b = document.getElementById('one8')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_11() {
    let a = document.getElementById('one9')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_12() {
    let b = document.getElementById('one9')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_13() {
    let a = document.getElementById('one10')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_14() {
    let b = document.getElementById('one10')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_15() {
    let a = document.getElementById('one11')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_16() {
    let b = document.getElementById('one11')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_17() {
    let a = document.getElementById('one12')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_18() {
    let b = document.getElementById('one12')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_19() {
    let a = document.getElementById('one13')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "green"
    a.style.border = "0px"
}
function button_20() {
    let b = document.getElementById('one13')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "red"
    b.style.cursor = "pointer"
}
function button_21() {
    let a = document.getElementById('one14')
    a.style.color = "white"
    a.style.borderRadius = "3px"
    a.style.background = "darkgreen"
}
function button_22() {
    let b = document.getElementById('one14')
    b.style.color = "white"
    b.style.borderRadius = "3px"
    b.style.background = "green"
    b.style.cursor = "pointer"
}
function show() {
    let a = document.getElementById('modal')
    a.style.display = "block"
}
function close2() {
    let g = document.getElementById('modal')
    if ( window.getComputedStyle(g).display == "none" )
    {
        g.style.display = "block"
    }
    else
        g.style.display = "none"
}
function star() {
    var arr = [ 'star1', 'star2' , 'star3' , 'star4' , 'star5' ]
    for (let b = 0; arr.length; b++)
    {
        a = document.getElementById(arr[b])
        a.src = "star_1.png"
    }
}
function not_star() {
    var arr1 = [ 'star1', 'star2' , 'star3' , 'star4' , 'star5' ]
    for (let i = 0; arr1.length; i++)
    {
        a = document.getElementById(arr1[i])
        a.src = "star_2.png"
    }
}
function show_star(u) {
    var arr2 = [ 'star1', 'star2' , 'star3' , 'star4' , 'star5' ]
    u = u-1
    v = document.getElementById(arr2[u])
    if (v.src.indexOf("star_2.png") > -1)
    {
        for ( let i = 0; i <= u; i++ ) 
        {
            b = document.getElementById(arr2[i])
            b.src = "star_1.png"
        }
    }
    else
        for ( let i=0; i < arr2.length; i++ )
        {
            if ( i > u ) 
            {
                a = document.getElementById(arr2[i])
                a.src = "star_2.png"
            }
        }
}
function showup() {
    document.getElementById('cat').style.display = "flex";
}
setTimeout(showup,4000)