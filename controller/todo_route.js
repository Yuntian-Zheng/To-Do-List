const express = require("express")
const Todo = require("../models/todo")
const router = express.Router()
const Act = require("../models/activity")
//update list
router.put("/:listId/edit", (req, res) => {
    console.log(req.body.name)
    Todo.findByIdAndUpdate(req.params.listId, { name: req.body.todo })
        .then(() => {
            res.redirect("/todos")
        })
        .catch(error => {
            console.log(error)
    })
})
//show list edit form
router.get("/:listId/edit", (req, res) => {
    const listId = req.params.listId
    Todo.findById(listId)
        .then(todo => {
            res.render("todos/edit-list",{listId,todo})
        })
        .catch(error => {
        console.log(error)
    })
})
//delete list
router.delete("/:listId", (req,res)=> {
    Todo.findByIdAndDelete(req.params.listId)
        .then(() => {
            res.redirect("/todos")
        })
        .catch(error => {
            console.log(error)
        })
})
//show edit form
router.get("/:listId/:actId/edit", (req, res) => {
    const listId = req.params.listId
    Act.findById(req.params.actId)
        .then(act => {
            res.render("todos/edit",{act,listId})
        })
        .catch(error => {
            console.log(error)
        })
})
//update activity
router.put("/edit/:listId/:actId", (req, res)=> {
    Act.findByIdAndUpdate(req.params.actId, { activity: req.body.activity})
        .then(() => {
            res.redirect(`/todos/${req.params.listId}`)
        })
        .catch(error => {
            console.log(error)
        })
})
//delele act
router.delete("/:listId/:actId", (req, res) => {
    Act.findByIdAndDelete(req.params.actId)
        .then(()=> {
            res.redirect(`/todos/${req.params.listId}`)
        })
        .catch(error => {
            console.log(error)
        })
})
//update act
router.put("/:listId/:actId", (req, res)=>{
    Act.findByIdAndUpdate(req.params.actId,{completed: true})
        .then(() => {
            res.redirect(`/todos/${req.params.listId}`)
        })
        .catch(error => {
            console.log(error)
        })
})


//display form to creat new list
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('todos/create-todo', { username, loggedIn })
})
//create todo list
router.post("/", (req, res) => {
    req.body.completed = req.body.completed === "on" ? true : false
    req.body.owner = req.session.userId
    console.log("req.body.activity._id")
    Todo.create(req.body)
        .then(todo => {
            console.log(todo)
            res.redirect("/todos")
        })
        .catch(err => {
            res.json(err)
        })
})
//show todo list
router.get('/', (req, res) => {
    Todo.find({ owner: req.session.userId })
        .then(todos => {
            res.render('todos/show', { todos })
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})
//show act form
router.get("/:id", (req, res) => {
    const listId = req.params.id
    Act.find({ listId: listId })
        .then(acts => {
            Todo.findById(listId)
                .then(todo => {
                    res.render('todos/show-act', { listId, acts, todo })
                })
                .catch(error => {
                    console.log(error)
                })
        })
        .catch(error => {
            console.log(error)
        })
})
//create act
router.post("/:id", (req, res) => {
    req.body.listId = req.params.id
    Act.create(req.body)
        .then(act => {
            console.log(act)
            res.redirect(`/todos/${req.params.id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router