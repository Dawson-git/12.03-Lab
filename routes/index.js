var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  try {
    req.db.query('SELECT * FROM todos;', (err, results) => {
      if (err) {
        console.error('Error fetching todos:', err);
        return res.status(500).send('Error fetching todos');
      }
      res.render('index', { title: 'My Simple TODO', todos: results });
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

router.post('/create', function (req, res, next) {
    const { task } = req.body;
    try {
      req.db.query('INSERT INTO todos (task) VALUES (?);', [task], (err, results) => {
        if (err) {
          console.error('Error adding todo:', err);
          return res.status(500).send('Error adding todo');
        }
        console.log('Todo added successfully:', results);
        // Redirect to the home page after adding
        res.redirect('/');
      });
    } catch (error) {
      console.error('Error adding todo:', error);
      res.status(500).send('Error adding todo');
    }
});

router.post('/delete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('DELETE FROM todos WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error deleting todo:', err);
          return res.status(500).send('Error deleting todo');
        }
        console.log('Todo deleted successfully:', results);
        // Redirect to the home page after deletion
        res.redirect('/');
    });
    }catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).send('Error deleting todo:');
    }
});

//edit routine
router.post('/edit', function (req, res, next) {
    const { id, task } = req.body;
    if (!task || task.trim() === '') {
        return res.status(400).send('Task cannot be blank');
    }
    try {
        req.db.query('UPDATE todos SET task = ? WHERE id = ?;', [task.trim(), id], (err, results) => {
            if (err) {
                console.error('Error updating todo:', err);
                return res.status(500).send('Error updating todo');
            }
            res.redirect('/');
        });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).send('Error updating todo');
    }
});

//complete
router.post('/toggle', function (req, res, next) {
    const { id, completed } = req.body;
    // flip the current state: if completed=1, set to 0, and vice versa
    const newState = completed === '1' ? 0 : 1;
    try {
        req.db.query('UPDATE todos SET completed = ? WHERE id = ?;', [newState, id], (err, results) => {
            if (err) {
                console.error('Error toggling todo:', err);
                return res.status(500).send('Error toggling todo');
            }
            res.redirect('/');
        });
    } catch (error) {
        console.error('Error toggling todo:', error);
        res.status(500).send('Error toggling todo');
    }
});

module.exports = router;