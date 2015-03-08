(function () {
    'use strict';

    var controllerId = 'survey';
    angular.module('app').controller(controllerId, ['$location', 'api', survey]);

    function survey($location, api) {
      var vm = this;
      var questionIndex = 0;
      var numberOfQuestions;
      var id = $location.path().split('/')[2];

      vm.showLastPage = false;
      vm.canGoBack = false;
      vm.email = '';
      vm.nps = '5';

      vm.color = function(q){
        if(q.type == 'string') return 'blue';
        if(q.type == 'range') return 'purple';
        return 'green';
      };

      vm.showPage = function(index) {
        return index == questionIndex;
      };

      vm.isRange = function(q){
        return q.type == 'range';
      };

      vm.isText = function(q){
        return q.type == 'text';
      };

      vm.isEmail = function(q){
        return q.type == 'email';
      };

      vm.start = function(){

      };

      vm.next = function(){
        var question = vm.survey.questions[questionIndex];
        var response = {questionId: question.id};

        if(questionIndex < numberOfQuestions) {

          // create question and save values
          if(question.type == 'email') response.value = vm.emailValue;
          if(question.type == 'text') response.value = vm.textValue;
          if(question.type == 'range') response.numberValue = vm.rangeValue;

          questionIndex++;
        }

        vm.canGoBack = true;

        if(questionIndex == numberOfQuestions) {
          // publish responses
          forEach(response in responses){
            api.createResponse(vm.survey.id, response);
          }

          vm.showLastPage = true;
          vm.canGoBack = false;
        }

        return false;
      };

      if(xignal.surveyFromServer){
        populateVm(xignal.surveyFromServer);
      } else if(id) {
        var survey = api.getSurvey(id);
        survey.$promise.then(populateVm, showError);
      }

      function populateVm(survey){
        vm.survey = survey;
        numberOfQuestions = survey.questions.length;
        responses = new Array(numberOfQuestions);
      }

      function showError(err){
        console.log(err);
      }

    };
})();