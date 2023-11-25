//Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Get all comments
router.get('/', commentController.getAllComments);

//Get comments by postID
router.get('/post/:postID', commentController.getCommentsByPostID);

//Create new comment
router.post('/', commentController.createComment);

//Update comment
router.put('/:commentID', commentController.updateComment);

//Delete comment
router.delete('/:commentID', commentController.deleteComment);

module.exports = router;

//comment web server2
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Get all comments
router.get('/', commentController.getAllComments);

//Create new comment
router.post('/', commentController.createComment);

//Update comment
router.put('/:commentID', commentController.updateComment);

//Delete comment
router.delete('/:commentID', commentController.deleteComment);

module.exports = router;

//comment web server3
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Get all comments
router.get('/', commentController.getAllComments);

//Get comments by postID
router.get('/post/:postID', commentController.getCommentsByPostID);

//Create new comment
router.post('/', commentController.createComment);

//Update comment
router.put('/:commentID', commentController.updateComment);

//Delete comment
router.delete('/:commentID', commentController.deleteComment);

module.exports = router;

//comment web server4
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Get all comments
router.get('/', commentController.getAllComments);

//Get comments by postID
router.get('/post/:postID', commentController.getCommentsByPostID);

//Create new comment
router.post('/', commentController.createComment);

//Update comment
router.put('/:commentID', commentController.updateComment);

//Delete comment
router.delete('/:commentID', commentController.deleteComment);

module.exports = router;

//comment web server5
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Get all comments
router.get('/', commentController.getAllComments);

//Get comments by postID
router.get('/post/:postID', commentController.getCommentsByPostID);

//Create new comment
router.post('/', commentController.createComment);

//Update comment
router.put('/:commentID', commentController.updateComment);

//Delete comment
router.delete('/:commentID', commentController.deleteComment);

module.exports = router;

//comment web server6
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Get all comments
router.get('/', commentController.getAllComments);

//Get comments by postID
router.get('/post