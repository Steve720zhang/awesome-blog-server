const schedule = require('node-schedule');
const mysqldump = require('mysqldump')
schedule.scheduleJob('* 1 * * *', function() {
    mysqldump({
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_SCHEMA,
        },
        dumpToFile: `./dump-${new Date().toDateString()}.sql`,
    });
});