var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'jobs';

	locals.data = {
		years: ["2018", "2017", "2016", "2015", "2014", "2013"]
	}

	view.render('events');

};