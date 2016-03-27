/**
 * Created by Jasiek on 2016-03-21.
 */
angular.module('ContactsApp')
//best function ever! -> changes loremIpsumDolorSitAmet into Lorem Ipsum Dolor Sit Amet basicly decamelcase string :D
    .filter('labelCase',function (){
        return function (input){
            input = input.replace(/([A-Z])/g, ' $1');
            return input[0].toUpperCase() + input.slice(1);
        };
    })

    .filter('camelCase', function(){
       // First Name -> firstName
        return function (input) {
            return input.toLowerCase().replace(/ (\w)/g, function(match, letter){
               return letter.toUpperCase();
            });
        };
    })

    .filter('keyFilter', function () {
            return function(obj,query){
            var result = {};
            angular.forEach(obj,function(val,key){
                if(key !== query){
                    result[key] = val;
                }
            });
            return result;
        };
});