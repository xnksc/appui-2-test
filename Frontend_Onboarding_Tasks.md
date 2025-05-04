## Материалы для изучения

Общепринятые в компании правила работы с git и правила для web разработки.

- [Git](https://git.imbalanced.tech/government/agreements-policies-regulations/-/blob/main/guidelines/git.md?ref_type=heads)
- [Web](https://git.imbalanced.tech/government/agreements-policies-regulations/-/blob/main/guidelines/web-coding-guideline.md?ref_type=heads)

### App UI 2

В дальнейшей работе вам придется много работать с библиотекой App UI 2 и app.ui.js для некоторых проектов не перешедших на 2 версию.

App UI 2 - библиотека-фреймворк, на основе vue, позволяющая быстро верстать макеты различной сложности. Для этой библиотеки разработано расширение [App UI 2 Starter Kit](https://git.imbalanced.tech/mcdis/design.js/parts/extensions/app.ui-2.kit).

Starter Kit - это набор компонентов, иконок и стилей, совместимых с библиотекой-каркасом App UI 2.

Исходники библиотеки находятся тут:

- [App UI 2](https://git.imbalanced.tech/mcdis/design.js/parts/app.ui-2)
- [App UI 2 Starter Kit](https://git.imbalanced.tech/mcdis/design.js/parts/extensions/app.ui-2.kit)

Также есть браузер компонентов, работающий на App UI 2.

Stage окружение: https://design-js-stage.imbalanced.tech/#/

Исходники браузера компонентов: https://git.imbalanced.tech/mcdis/design.js/parts/app.ui-2.component-browser

Здесь же вы можете найти руководство по App UI 2 в разделе [Руководство](https://design-js-stage.imbalanced.tech/#/guide/introduction), в хедере.

---

### App.ui.js

Также можете ознакомиться с тем, как работает и что представляет из себя библиотека app.ui.js.

Исходники: https://git.imbalanced.tech/mcdis/design.js/parts/app.ui.js

Stage окружение: https://design-js-prod.imbalanced.tech/#/

---

## Практическое задание на работу с библиотекой App UI 2

Вам предлагается сверстать в локальном окружении сайт с использованием библиотеки App UI 2 и стартового набора компонентов.

### Условия:

В хедере должны присутствовать ссылки на 2 страницы:

- Пользователи
- Посты

#### Пользователи

Страница пользователей - список пользователей из https://jsonplaceholder.typicode.com/users

Вам необходимо придумать как отобразить список пользователей в форме карточек.

Каждая карточка должна содержать краткую информацию о пользователе.
Для верстки карточек рекомендуется по возможности использовать компоненты из библиотеки App UI 2 Starter Kit.
Но допускается использование своих компонентов, если их нет в библиотеке.

#### Подробная информация о пользователе

В карточке пользователя должна быть кнопка/ссылка ведущая на страницу с подробной информацией о пользователе.

Подробная информация о пользователе должна быть реализована с использованием компонента NodeTreeExpander для отображения вложенных объектов в объекте пользователя.
https://design-js-stage.imbalanced.tech/#/component-library/node-tree-expander

#### Посты

Страница с постами - список постов из https://jsonplaceholder.typicode.com/posts.

Посты должны быть представлены в формате таблицы с использованием компонента TableList.
https://design-js-stage.imbalanced.tech/#/component-library/table

**Дополнительные задания:**

1. В списке постов нужно заменить userId на полное имя пользователя из USERS
2. Реализовать клик по ряду.
   - По клику должна открываться панель с карточкой пользователя с краткой информацией о нем.
   - Повторный клик по ряду скрывает панель.
   - В карточке пользователя должна быть ссылка, ведущая на страницу конкретного пользователя с более подробной информацией.
3. Реализовать фильтрацию/поиск по списку постов по городу автора поста.
   - Поле фильтрации реализовать с использованием компонента AppInput.
4. Реализовать поиск по тексту поста.
5. Реализовать сортировку постов по имени пользователя.

Задачи предоставляются на проверку в формате архива проекта. Выкладывать их куда-либо не нужно.

За .npmrc файлом обращайтесь к разработчику, к которому вы прикреплены в рамках онбординга.

Полезные ссылки:

- https://design-js-stage.imbalanced.tech/#/
- https://jsonplaceholder.typicode.com/
- https://jsonplaceholder.typicode.com/posts
- https://jsonplaceholder.typicode.com/users
