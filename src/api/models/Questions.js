/**
* Questions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    connection: 'someMongodbServer',
  attributes: {
        text: 'string',
        type: {
            type: 'string', 
            enum: ['string', 'text', 'range']
        },
  }
};
