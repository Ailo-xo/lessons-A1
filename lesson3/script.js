// условия оператора if/else  swich/case
// let email = prompt('Введите ваш email')
// let password = prompt('Введите ваш пароль')
// let userEmail = 'admin'
// let userPassword = 'admin123'

// if(email === userEmail && password === userPassword) {
//     alert("вы успешно вошли в систему")
// }else {
//     alert("неверный логин или пароль")
// }

// let number = prompt("Введите число")
// if(number < 0){
//     alert('число положительное');
// }else if(numder < 0){
//     alert('число отрицательное');
// }else {
//     alert('число равно к нулю');
// }



// let month = prompt('Введите любой месяц');
// switch(month){
//     case 'январь':
//     case 'февраль':
//     case 'декабрь':
//         alert('Зима');
//         break;
//     case 'март':
//     case 'апрель':
//     case 'май':
//         alert('весна');
//         break;
//     case 'июнь':
//     case 'июль':
//     case 'август':
//         alert('лето');
//         break;
//     case 'сентябрь':
//     case 'октябрь':
//     case 'ноябрь':
//         alert('осень');
//         break;
//     default:
//         alert('такого месяца не существует');
// }


let region = prompt('Кыргызстандын районун жазыңыз (мисалы: Сокулук, Алай ж.б.)');

switch(region) {
    case 'Сокулук':
    case 'Ала-Бука':
        alert('Чүй облусу');
        break;

    case 'Кара-Суу':
    case 'Алай':
        alert('Ош облусу');
        break;

    case 'Ак-Суу':
    case 'Жети-Өгүз':
        alert('Ысык-Көл облусу');
        break;

    case 'Ноокен':
    case 'Сузак':
        alert('Жалал-Абад облусу');
        break;

    default:
        alert('Мындай район табылган жок же аты туура эмес жазылды!');
}