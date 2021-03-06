# Тестовое задание

## Задача

Написать страничку: "Касса кинотеатра".

1. На экране появляется кинозал - квадратики мест (10 рядов по 10 мест).

2. Свободные места - зеленые квадратики, занятые места - красные квадратики.

3. Часть мест занята изначально (10 случайных квадратиков). 

4. Мышкой выбираем нужные места (можно выбирать только свободные) - места выделяются/развыделяются желтым.

Справа появляется статус: "Вы выбрали места: ряд 1 место 4, ряд 1 место 5..." и общая стоимость (1 билет стоит 100 руб). Ниже кнопки "Купить" и "Отмена" - после нажатия Купить - квадратики становятся красными и выдается сообщение: "Спасибо за заказ!".

## Решение

Для удобной работы с DOM деревом, была использована сторонняя библиотека - «Reactjs».

При загрузке страницы, скрипт генерирует и отображает 100 мест, из которых 10 случайных мест уже заняты.

Информация о выбранных билетах появляется снизу, чтобы предотвратить смещение контента в сторону.

При нажатии на кнопку «Купить», желтые (выбранные) квадратики становятся красными и показывается модальное окно с текстом «Спасибо за заказ!».

При нажатии на кнопку «Отмена», желтые (выбранные) квадратики становятся зелеными и их можно выбрать снова.

В интерфейсе используется 3d трансформация конетна, для создания эффекта реального кинотеатра.
