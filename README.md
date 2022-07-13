"# To-Do-List" 
User story
    As a user I want to:
    
        -Sign up
        -Login
        -Loginout
        -Create to-do list
        -Edit to-do list
        -Delete to-do list
        -Complete to-do list
User model:

    name: String
    Username: String
    Password: String
    
To-Do List model:

    name: String
    complete: Boolean
    creator: UserID
Activity model:
    
    activity: String
    description: String
    due-date: String
    ListId: To-do List Id 
 Strech Goal:
 
    Create a calender to show the due date
    Send autoamted email reminders
--------------------------------------------
|name|path|HTTP Verb|description|
|----|----|---------|-----------|
|Index|/to-do|GET|show active to-do list|
|new|/to-do/new|GET|show form to create new to-do list|
|create|/to-do|POST|create new to-do list|
|show|/to-do/lists/|GET|show to-do lists|
|show|/to-do/lists/:id|GET|show selected to-do list|
|edit|/to-do/lists/:id/edit|GET|show form to edit to-do list|
|update|/to-do/lists/:id|PUT|update changes to list|
|delete|/to-do/lists/:id/|DELETE|delete to-do list|
----------------------------------
![290600905_588023016166386_4040005499980730777_n](https://user-images.githubusercontent.com/48740174/178804148-89ca9165-3cd3-464a-8391-7cb284b331b9.jpg)
![292958889_775202553495179_8187223582887559907_n](https://user-images.githubusercontent.com/48740174/178804856-2ae7eb55-a607-43e3-99ad-f0413afc2959.jpg)
![290691841_385466700348858_6494239086135453699_n](https://user-images.githubusercontent.com/48740174/178804885-835124bc-79a2-475e-be50-76ca5c5a75ee.jpg)
![292281626_723795835597387_125163261332089854_n](https://user-images.githubusercontent.com/48740174/178814804-94cc6935-9354-4b69-9c7f-27e1f5b6f780.jpg)

