var express = require('express');
var router = express.Router();

router.route('/posts')

  //returns all posts
  .get(function(req, res){

    res.send({message: 'return all posts'});
  })

  //creates a new post
  .post(function(req, res){

    res.send({message: 'add posts'});
  });

//router for a specific post within the API
router.route('/posts/:id')

  .get(function(req, res){

    res.send({message: 'return specific post with ID' + req.params.id});
  })

  .delete(function(req, res){

    res.send({message: 'delete a specific post' + req.params.id});
  })

  .put(function(req, res){

    res.send({message: 'edit a specific post' + req.params.id});
  });


module.exports = router;
