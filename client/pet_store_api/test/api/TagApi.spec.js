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
    instance = new PetStoreApi.TagApi();
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

  describe('TagApi', function() {
    describe('addNewTag', function() {
      it('should call addNewTag successfully', function(done) {
        //uncomment below and update the code to test addNewTag
        //instance.addNewTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTagById', function() {
      it('should call deleteTagById successfully', function(done) {
        //uncomment below and update the code to test deleteTagById
        //instance.deleteTagById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllTags', function() {
      it('should call getAllTags successfully', function(done) {
        //uncomment below and update the code to test getAllTags
        //instance.getAllTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTagById', function() {
      it('should call getTagById successfully', function(done) {
        //uncomment below and update the code to test getTagById
        //instance.getTagById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTagById', function() {
      it('should call updateTagById successfully', function(done) {
        //uncomment below and update the code to test updateTagById
        //instance.updateTagById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));