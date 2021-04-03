alert('Приветствуем вас в игре "Кто хочет стать миллионером"! \nЧтобы получить миллион, нужно правильно ответить на 4 вопроса, каждый вопрос стоит 250 000.');
var answer;
var sum = 0;
for (i = 0; i < question.length; i++) {
    answer = +prompt(question[i].q + question[i].a1 + question[i].a2 + question[i].a3 + question[i].a4 + '\nДля выхода введите -1');
    if (answer == question[i].correct) {
        sum += 250000;
        alert('Поздравляю! Ответ верный.');
    } else if (answer == -1) {
        break;
    } else if (isNaN(answer) || !isFinite(answer) || answer > 4 || answer == 0 || answer < -1) {
        alert('Вы ввели недопустимый символ')

    } else {
        alert('Неверно. Верный ответ: ' + question[i].correct)
    }
}
alert('Игра окончена. Сумма вашего выигрыша: ' + sum);