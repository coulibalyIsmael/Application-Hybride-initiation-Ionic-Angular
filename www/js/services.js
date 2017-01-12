angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://192.168.43.215:5000/sessions/:sessionId');
});
