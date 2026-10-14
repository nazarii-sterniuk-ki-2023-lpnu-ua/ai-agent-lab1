# Інструкція з використання

## Запуск агента
Для генерації проєкту було використано GitHub Copilot Chat із запитом:
`@workspace Прочитай мій агентський маніфест у .github/agents/build-engineer.agent.md та виконай команду з файлу prompts/init.prompt.md. Дотримуйся всіх інструкцій, використовуй skills та згенеруй усі необхідні файли для проєкту Hello World (src/index.js, package.json, tests/index.test.js, .gitignore та .github/workflows/ci.yml).`

## Локальна перевірка
Для складання та тестування проєкту локально виконайте команди:
```bash
npm install
npm test