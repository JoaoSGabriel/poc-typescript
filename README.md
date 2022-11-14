# Republic Tasks

Back-end to organize tasks on republic, kind of to-do list management using Typescript.

# About

Republic Tasks is an app maked to organize your tasks republic, with you colegues, for always keep home tasks on day.
You can create new tasks and keep up with you how many tasks each person need to do. 
Every week, your group can reset the tasks to "incomplete" state and, restart all the loop.

# Technologies

- Typescript / Express
- dotenv
- joi
- pg

# How to start
1. **Clone** this repository
2. **install** all dependencies

```http
 npm i
 ```
# How to run tests locally:

The postgres database already have a few itens for us to test it;

First you need to create and import the database using the data inside the **dump.sql** file.

```http
psql dbname < dumpfile
```

After that, execute this command:

```http
npx nodemon src/app.ts
```

Then we can start testing it!
# Documentation

Using an API Tester (such as ThunderClient), you can verify any router in description below!

#### GET /tasks

will return all the tasks listened on API as

```http
{
  name: string;
  description: string;
  completed: boolean;
}
```

#### PUT /tasks?taskId=3

Will update as done one task of you choose. The **taskId** need to send by QUERY on the route.
IF sucefully, API will send code 200.

#### GET /tasksCount?userId=2

Will return a counter of incomplete tasks of one person. The **userId** need to send by QUERY on the route. The respost is like

```http
{
  name: string;
  taskToDo: number;
}
```

#### POST /tasksCreate

Body: { "text": "Limpar os tapetes", "userId": "2" }

Will create a new task for user, choose by ID. Default of completed camp is **False**.
IF sucefully, API will send code 201. 

#### DELETE /tasks

Body: { "taskId": 3 }

Will delete from app the task who correspond to select ID send in the body.
IF sucefully, API will send code 200.

#### POST /tasks

This route use to reset to default all tasks listened on API.
IF sucefully, API will send code 200.
