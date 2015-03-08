/**
 * SurveysController
 *
 * @description :: Server-side logic for managing surveys
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var getSurvey = function(id, callback) {
  var jsonQuery = { "id": id };
  //var jsonProjection = {
  //    id: true,
  //    questions: true,
  //    responses: true,
  //    userId: true,
  //    name: true,
  //    description: true,
  //    location: true, shortUrl: true, createdAt: true, updatedAt: true,
  //};
  Surveys.findOne(jsonQuery, function (err, tempSurvey) {
    var survey = {
        id: tempSurvey.id,
        questions: tempSurvey.questions,
        userId: tempSurvey.userid,
        name: tempSurvey.name,
        description: tempSurvey.description,
        location: tempSurvey.location,
        shortUrl: tempSurvey.shortUrl,
        createdAt: tempSurvey.createdAt,
        updatedAt: tempSurvey.updatedAt,
    };
    callback(survey);
  });
};

module.exports = {
    getQuestions: function (req, res) {
      var surveyId = req.param('id');
      getSurvey(surveyId, function(survey) {
          res.send(JSON.stringify(survey));
      });
    },

    displaySurvey: function(req, res) {
      var surveyId = req.param('id');
      getSurvey(surveyId, function(survey) {
        res.view('survey', { survey: survey });
      });
    }
}

