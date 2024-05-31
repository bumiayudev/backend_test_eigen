const bookRoutes = require('./books');
const memberRoutes = require('./members');
const loanRoutes = require('./loan');
const returnRoutes = require('./return');

module.exports = [ bookRoutes, memberRoutes, loanRoutes, returnRoutes];