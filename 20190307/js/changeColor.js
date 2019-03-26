var oBox = document.getElementById('box')

var boxList = oBox.getElementsByTagName('li')

// for (var i = 0; i < boxList.length; i += 3) {

//     boxList[i].style.backgroundColor = 'pink'

// }

for (var i = 0; i < boxList.length; i++) {

    // if (i % 3 == 0) {
    //     boxList[i].style.backgroundColor = 'pink'
    // }
    // i % 3 == 0 ? boxList[i].style.backgroundColor = 'pink' : ''
    switch (i % 3) {
        case 0:
            boxList[i].style.backgroundColor = 'pink'
            break;
        default:
            break;
    }
}