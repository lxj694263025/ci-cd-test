const fs = require('fs');

fs.writeFileSync('dist/index.min.js', `console.log(${Date.now()});`, 'utf-8');
