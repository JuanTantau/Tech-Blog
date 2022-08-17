const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// logged in users dashboard 
router.get('/', withAuth,(req, res) => {
    Post.findAll({
      where:{
        user_id:req.session
      },
      attributes: [
        'post_text',
        'id',
        'created_at',
        'title'
      ],
      include:[
        {
          model:Comment,
          attributes:['post_id', 'comment_text', 'id', 'user_id', 'created_at'],
          include:{
            model: User,
            attributes:['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
  });

// edit id
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
    where:{
    id:params.id
    },
    attributes:['post_text', 
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

// gets newpost
router.get('/newpost', (req, res) => {
  res.render('new-posts');
});

module.exports = router;