/**
 * PetStore API
 * ## PetStore OpenAPI 設計 - バックエンド： Laravel v8.x - フロントエンド： Vue v2.x ,LaravelMix v6.x
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
    instance = new PetStoreApi.RequestOrderStore();
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

  describe('RequestOrderStore', function() {
    it('should create an instance of RequestOrderStore', function() {
      // uncomment below and update the code to test RequestOrderStore
      //var instane = new PetStoreApi.RequestOrderStore();
      //expect(instance).to.be.a(PetStoreApi.RequestOrderStore);
    });

    it('should have the property petId (base name: "pet_id")', function() {
      // uncomment below and update the code to test the property petId
      //var instance = new PetStoreApi.RequestOrderStore();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new PetStoreApi.RequestOrderStore();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PetStoreApi.RequestOrderStore();
      //expect(instance).to.be();
    });

  });

}));
