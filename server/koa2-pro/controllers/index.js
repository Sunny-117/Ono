const { INDEX } = require('../configs/page'),
      courseData = require('../data/course');

async function index (ctx, next) {
  await ctx.render('index', {
    INDEX,
    courseData
  })
}

module.exports = {
  index
}