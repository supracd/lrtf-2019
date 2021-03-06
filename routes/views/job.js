var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'jobs';

	locals.data = {
		jobs: [],
	}

	view.query('jobs', keystone.list('Job').model.find().sort('sortOrder'));

	view.render('jobs');

};
