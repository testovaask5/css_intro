# Git help

### Создать пустой git репозиторий (делается один раз при создании)

`$ git init`

### Возможно потребуется настройка Git:

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

### Сначала надо проиндексировать

`$ git add .`

### Проверить статус файлов для Git:

`$ git status`

### Сохранить заиндексированный код в истории версий кода Git (репозиторий):

`$ git commit -m "Commit's name"`

### Комбинация git add и git commit

`$ git commit -am "Commit's name"`

### Просмотр истории версий кода (выйти из конца команды - клавиша q):

`$ git log`

### Добавить удаленный репозиторий:

`$ git remote add origin https://github.com/testovaask5/css_intro.git`

### Просмотреть список удаленных репозиториев:

`$ git remote show`

### Просмотреть информацию о удаленном репозитории

`$ git remote show origin`

### Отправляем в удаленный репозиторий:

`$ git push origin master`

## Работа с ветвями:

### Создание новой ветви:

`$ git branch new-branch`

### Просмотр всех ветвей:

`$ git branch --list`

### Переключится на новую ветвь:

`$ git checkout new-branch`

### Вносим изменения в файлы и делаем commit

`$ git commit -am "Commit's name"`

### Переходим обратно в главную ветвь:

`$ git checkout master`

### Вносим изменения в файлы и делаем commit (необязательно)

`$ git commit -am "Commit's name"`

### Делаем слияние ветвей (необходимо убедится, что мы в master ветке `$ git status`)

`$ git merge new-branch`

### В случае конфликтов редактируем файлы и делаем индексацию файлов и commit:

`$ git commit -am "Commit's name"`

### Удалить ветку:

`$ git branch -d new-branch`