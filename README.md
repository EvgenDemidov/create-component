Установка:
npm install -g create-component

Использование:
create-component -c componentname -t templatename -v name=test (опционально)

-c,--componentname - название директории (компонента);
-t, --templatename - используемый шаблон (название шаблона);
-v, --vars - переменные в шаблоне.

Добавление шаблона:
1. Создать файл в директории templates;
2. С помощью тега <template ext="js" name="component"></template> создать шаблон указав в качестве атрибута
ext(расширение файла) и name(имя фала), если не указывать name, то файл будет иметь название папки;
3. Получение переменных из шаблона осуществляется с помощью тегов <% this.name %>, где name является
передоваемая переменная, также поддерживается возможность использования выражений <% if|for|else|switch|case|break %>.
