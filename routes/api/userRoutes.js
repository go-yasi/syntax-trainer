const router = require('express').Router();
const { User, Score, Snippet } = require('../../models');
// const withAuth =  require('../utils/auth');

// POST to create new user
router.post('/', async (req,res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
            bio: req.body.bio,
            avatar: req.body.avatar
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST to login user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username }});

        if (!userData) {
            res.status(400).json({ message: 'No user found with this username. Please try again.'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password. Please try again.'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in.'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// POST to logout user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// GET to get a user by id
router.get('/:id', 
// withAuth,
async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [
                { model: Score, model: Snippet }
            ]
        });
        if (!userData) {
            res.status(400).json({ message: "Could not find user with this ID!"});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE to update high_score (make call to all scores by user) — PROBABLY DON'T NEED THIS?
// router.put('/:id', async (req, res) => {
//     try {
//         const userData = await User.update(req.body, 
//             { where: { id: req.params.id }});
//         if (!userData) {
//             res.status(400).json({ message: "No user with this ID!"});
//             return;
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router;