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
    instance = new PetStoreApi.PetComment();
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

  describe('PetComment', function() {
    it('should create an instance of PetComment', function() {
      // uncomment below and update the code to test PetComment
      //var instane = new PetStoreApi.PetComment();
      //expect(instance).to.be.a(PetStoreApi.PetComment);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PetStoreApi.PetComment();
      //expect(instance).to.be();
    });

    it('should have the property petId (base name: "pet_id")', function() {
      // uncomment below and update the code to test the property petId
      //var instance = new PetStoreApi.PetComment();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new PetStoreApi.PetComment();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new PetStoreApi.PetComment();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PetStoreApi.PetComment();
      //expect(instance).to.be();
    });

  });

}));
