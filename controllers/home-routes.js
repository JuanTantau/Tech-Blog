const { Post, User, Comment } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

// adds post to homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
          'post_text',
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
          }
        ]
      })
    });
router.get('/login',() => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return; 
    }
    res.render('login');
});
router.get('/signup', (req, res) => {
    res.render('signup');
});
router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'post_text',
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
        }
      ]
    })
  });
module.exports = router; 