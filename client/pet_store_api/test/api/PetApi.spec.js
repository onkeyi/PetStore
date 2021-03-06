/**
 * PetStore API
 * ## Swagger PetStore  実装 - バックエンド： Laravel - フロントエンド： Vue
 *
 * The version of the OpenAPI document: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PetStoreApi);
  }
}(this, function(expect, PetStoreApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PetStoreApi.PetApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PetApi', function() {
    describe('addNewPet', function() {
      it('should call addNewPet successfully', function(done) {
        //uncomment below and update the code to test addNewPet
        //instance.addNewPet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addNewPetComment', function() {
      it('should call addNewPetComment successfully', function(done) {
        //uncomment below and update the code to test addNewPetComment
        //instance.addNewPetComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePetById', function() {
      it('should call deletePetById successfully', function(done) {
        //uncomment below and update the code to test deletePetById
        //instance.deletePetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePetCommentById', function() {
      it('should call deletePetCommentById successfully', function(done) {
        //uncomment below and update the code to test deletePetCommentById
        //instance.deletePetCommentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPetByCategory', function() {
      it('should call findPetByCategory successfully', function(done) {
        //uncomment below and update the code to test findPetByCategory
        //instance.findPetByCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPetByStatus', function() {
      it('should call findPetByStatus successfully', function(done) {
        //uncomment below and update the code to test findPetByStatus
        //instance.findPetByStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPetByTag', function() {
      it('should call findPetByTag successfully', function(done) {
        //uncomment below and update the code to test findPetByTag
        //instance.findPetByTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllPets', function() {
      it('should call getAllPets successfully', function(done) {
        //uncomment below and update the code to test getAllPets
        //instance.getAllPets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCommentByPetId', function() {
      it('should call getCommentByPetId successfully', function(done) {
        //uncomment below and update the code to test getCommentByPetId
        //instance.getCommentByPetId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPetById', function() {
      it('should call getPetById successfully', function(done) {
        //uncomment below and update the code to test getPetById
        //instance.getPetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePetById', function() {
      it('should call updatePetById successfully', function(done) {
        //uncomment below and update the code to test updatePetById
        //instance.updatePetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadImage', function() {
      it('should call uploadImage successfully', function(done) {
        //uncomment below and update the code to test uploadImage
        //instance.uploadImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
