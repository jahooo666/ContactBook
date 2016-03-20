/**
 * Created by Jasiek on 2016-03-20.
 */
angular.module('ContactsApp')
    .factory('Contact', function ($resource){
        return $resource('/api/contact/:id', {id: '@id'},{
            'update':{method: 'PUT'}
        });
    });