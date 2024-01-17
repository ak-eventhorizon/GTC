'use strict';

//блок ввода с фамилией, именем, отчеством
let l_name = document.getElementById('loginLname');
let f_name = document.getElementById('loginFname');
let m_name = document.getElementById('loginMname');

//кнопка запуска генерации логина
let btn_login_generate = document.getElementById('generateLogin');

//блок для вывода логина (1 и 2 версия)
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');


//транформирует строку на кириллице в строку на латинице по правилам транслитерации
function transform(s){

    const mapping = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'ё': 'e',
        'ж': 'zh',
        'з': 'z',
        'и': 'i',
        'й': 'y',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'kh',
        'ц': 'ts',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'shch',
        'ъ': '',
        'ы': 'y',
        'ь': '',
        'э': 'e',
        'ю': 'yu',
        'я': 'ya'
    }

    let result = ''

    //замены в строке особых случаев по правилам транслитерации
    s = s.replace('ье', 'ye')
    s = s.replace('ъе', 'ye')
    s = s.replace('ьё', 'ye')
    s = s.replace('ъё', 'ye')

    for (let i in s){
        
        let char = s[i]
        
        //Если текущего симовла нет в таблице соответствий - символ переносится в исходном виде
        if (mapping[char] === undefined) {
            result += char
        } else {
            result += mapping[char]
        }
    }

    return result
}


//генерирует логины
function translate_login(lastName, firstName, middleName){

    lastName = transform(lastName.toLowerCase())
    firstName = transform(firstName.toLowerCase())
    middleName = transform(middleName.toLowerCase())

    let form1 = 'Введите Фамилию и Имя'
    let form2 = 'Введите Отчество'

    if (lastName && firstName) {
        form1 = firstName[0] + '.' + lastName
        if (middleName) {
            form2 = firstName[0] + middleName[0] + '.' + lastName
        }  
    }

    output1.value = form1
    output2.value = form2
}



btn_login_generate.addEventListener('click', () =>  {
    translate_login(l_name.value, f_name.value, m_name.value);    
});