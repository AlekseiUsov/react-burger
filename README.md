### Stellar burgers


https://alekseiusov.github.io/react-burger/

### Описание:

Сайт межгалактической бургерной. Содержит главную страницу, ленту заказов и личный кабинет.  - здесь вы можете собрать бургер на ваш вкус. Ленту заказов - общая лента сделанных бургеров, в ней можете отследить ваш заказ по номеру. Страница личного кабинета - содержит данные о пользователи и историю заказов. 

### Авторизация пользователя: 

Для того чтобы пользователь мог зайти в личный кабинет, он обязательно должен быть зарегистрирован в системе. Если данное условие не выполнено, то пользователь не сможет авторизироваться и получить доступ к странице личного кабинета. Для успешной авторизации необходимо пройти идентификацию (ввести email, ранее зарегистированный) и аутентификацию - ввести корректный пароль. Вводимые данные сверяется, с теми, которые хранится на сервере. Если всё совпадёт, выполнится авторизация.

### Главная страница:

Здесь вы можете собрать бургер на ваш вкус. Страница состоит из двух частей: слева - раздел с ингридиентами, справо - собранный бургер. 

Чтобы собрать бургер, необходимо перенести из левой части страницы игридиенты в правую часть. В разделе ингридиентов, при успешном переносе, в крайнем правом углу перетаскиваемого игридиента срабатывает счетчик. Он отражает сколько раз вы добавляли конкретный ингридиент в ваш бургер. Ингридиенты разбиты на три группы: булки, начинки и соусы. Для удобной навигации с правой стороны есть скрол, а так же над игридиентами есть табы навигации. Нажимая на таб, происходит скрол на соответствующий раздел. При нажатии на игридиент появляется поп-ап с подробной информацией о ингридиенте. 

Собранный бургер отражает все ингридиенты, которые вы добавили. Первый и нижний ингридиент - всегда булка. Последовательность ингридиентов между булками можно менять. Для этого достаточно потянуть выбранный элемент и переместить туда, куда хочется. Так же есть возможность удалить ингидиенты между булками. 

После того, как вы собрали ваш бургер, можно оформить заказ, однако есть два условия. Необходимо выбрать булки и как минимум один ингридиент. 

### Страница заказов:

Как и главная, эта страница состоит из двух частей. Слева - список заказов, справо - счетчик заказов. 

Список содержит информацию о 50-ти последних заказах, сделанных пользователями. Справо от списка есть скрол, который позволит удобно перемещаться по истории заказов. При нажатии на конкретный заказ появляется поп-ап с подробной информацией о заказе. 

Счетчик заказов содержит: номера готовых заказов, заказов находящихся в работе, количество бургеров сделанных за все время и бургеров выполненных сегодня.

В режиме реально времени происходит обновление списка заказов, номеров выполенных заказов и заказов, находящихся в работе, т.к. соединение с сервером открыто при помощи WebSockets.

### Личный кабинет: 

В личном кабинете храниться история заказов пользователя, так же как и на странице заказов, соединение c сервером выполненно при помощи WebSokets. В режиме реально времени, происходит изменение в истории заказов конкретного пользователя. При нажатии на заказ появляется поп-ап с подробной информацией о заказе. В личном кабинете есть возможность изменить данные: восстановить или сменить пароль, изменить email  имя. И последнее - на странице есть кнопка выхода, при нажатии на которую происходит выход из учетной записи и редирект на страницу с логином. 

### Модальные окна 

В проекте выполнен роутинг с помощью библиотеки react routing dom. При открытии модального окна в браузерной строке появится уникальная ссылка. Если скопировать эту ссылку из браузерной строки и вставить ее в браузерную строку, но в новой вкладке, откроется отдельная страница с информацией из модального окна, которая будет немного по-другому оформлена. 

