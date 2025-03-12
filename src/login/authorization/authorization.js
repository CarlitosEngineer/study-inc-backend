/*
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../../../database/db');
const bcrypt = require('bcrypt');

function beginpassport() {
    passport.use(new LocalStrategy(async function verify(username, password, done) {
        try {
            if (!/^[a-zA-Z0-9_]+$/.test(username)) {
                return done(null, false, { message: 'Invalid username format.' });
            }

            const user = await db.get('SELECT * FROM accounts WHERE username = ?', [username]);
            if (!user) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }

            const isMatch = await bcrypt.compare(password, user.hashed_password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }));
}

// Exportar correctamente la función
module.exports = { beginpassport };
*/