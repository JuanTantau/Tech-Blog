const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
        })
});

// new post comment 
router.post('/', withAuth, (req, res) => {
{
    Comment.create({
        comment_text: req.body.comment_text, 
        post_id: req.body.post_id,
        user_id: req.session.user_id,
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
        })
    }
});

// delete comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: ' Err no comment was found with this ID' });
            return;
        }
        res.json(dbCommentData);
    }).catch(err => {
    });
});
module.exports = router