const sequelize = require('../../config/connection');
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, User, Comment} = require('../../models');

// all posts
router.get('/', () => {
    Post.findAll({
      attributes: ['post_text', 
                   'id',
                   'created_at',
                   'title'
                ],
      include: [
          {
            model: Comment,
            attributes: ['post_id', 'comment_text', 'id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          },
      ]
    }) 
});

// single post by ID
router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['post_text', 
                   'id', 
                   'created_at',
                   'title'
                ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['post_id', 'comment_text', 'id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
  });

// makes a new post
router.post('/', withAuth, () => {
    Post.create({ 
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.session.user_id
    })
});

// update post
router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        post_text: req.body.post_text
      },
      {
        where: {
          id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post was found with matching ID' });
            return;
        }
        res.json(dbPostData);
    })
      .catch(err => {
    });
});
module.exports = router;