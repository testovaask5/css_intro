# Bash мануал

### Создание папки:

`$ mkdir namedir`

### Перейти в папку (по отоносительному пути):

`$ cd namedir`

### Полный (абсолютный) путь

`$ pwd`

### Создать файл:

`$ touch test.js`

### Просмотреть файлы в папке:

`$ ls`

### Просмотреть все файлы (и скрытые) в папке:

`$ ls -la`

### Переименовать файл:

`$ mv test.js script.js`

### Переместить файл в папку выше:

`$ mv script.js ../somedir/main.js`

### Скопировать файл:

`$ cp ../pics/2.jpg ./pics/wallpaper.jpg`

### Удалить файл (сначала нажо создать):

```shell
$ touch style.css
$ rm style.css
```

### Перейти на уровень выше:

`$ cd ..`

### Удалить папку:

`$ rm -rf namedir`

### Выполнить несколько команд подряд

`$ mkdir assets && cd assets && touch style.css`