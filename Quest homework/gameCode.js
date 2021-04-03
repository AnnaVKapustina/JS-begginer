//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var answers = [];

doWh(works.a00, works.a1, works.a2, works.a0);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers.push(1);
        doWh(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answers.push(1);
                doWh(works.d00, works.d1, works.d2, works.d0);
                switch (event) {
                    case 1:
                        answers.push(1);
                        break;
                    case 2:
                        answers.push(2);
                        break;
                }

            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answers.push(2);
                doWh(works.d00, works.d1, works.d2, works.d0);
                switch (event) {
                    case 1:
                        answers.push(1);
                        break;
                    case 2:
                        answers.push(2);
                        break;
                }

            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers.push(2);
        doWh(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
                answers.push(1);
                doWh(works.d00, works.d1, works.d2, works.d0);
                switch (event) {
                    case 1:
                        answers.push(1);
                        break;
                    case 2:
                        answers.push(2);
                        break;
                }
            case 2: // Второе действие
                answers.push(2);
                doWh(works.d00, works.d1, works.d2, works.d0);
                switch (event) {
                    case 1:
                        answers.push(1);
                        break;
                    case 2:
                        answers.push(2);
                        break;
                }

            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
quest(works, answers);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
//--------------------------------------------
function quest(works, answers) {
    while (numberQuestion != -1) {
        var numberQuestion = +prompt('Введите номер вопроса, -1 - Выход из игры');
        switch (numberQuestion) {
            case 1:
                alert('Текст вопроса: ' + works.a00 + works.a1 + works.a2 + '\nВаш ответ: ' + answers[0]);
                break;
            case 2:
                if (answers[0] == 1) {
                    alert('Текст вопроса: ' + works.b00 + works.b1 + works.b2 + '\nВаш ответ: ' + answers[1]);
                    break;
                } else {
                    alert('Текст вопроса: ' + works.c00 + works.c1 + works.c2 + '\nВаш ответ: ' + answers[1]);
                    break;
                }
            case 3:
                alert('Текст вопроса: ' + works.d00 + works.d1 + works.d2 + '\nВаш ответ: ' + answers[2]);
                break;
            case -1:
                break;
            default:
                alert('Ошибка');
        }
    }
}
//-----------------------------------------------
function doWh(a, b, c, d) {
    ok = false;
    do {
        event = +prompt(a + b + c + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(d, event);
        }
    } while (!ok);
}