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

### Просмотр истории версий кода:

`$ git log`

### Добавить удаленный репозиторий:

`$ git remote add origin https://github.com/testovaask5/css_intro.git`

### Отправляем в удаленный репозиторий:

`$ git push origin master`