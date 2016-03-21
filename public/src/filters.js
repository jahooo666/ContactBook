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
    });