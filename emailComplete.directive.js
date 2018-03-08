/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
  angular.module('GRAM.components')
    .directive('emailComplete', function () {
      return {
        restrict: 'E',
        scope:{
          ctrl: '=',
          dataList: '=',
          placeHolder: '='
        },
        replace: true,
        templateUrl: 'app/common/theme/components/emailComplete/emailComplete.html',
        link: function (scope, el) {
          scope.showList = false;
          scope.initList = scope.dataList ? scope.dataList : ['ncBank.com','cibfintech.com'];
          scope.emailList = [];

          scope.inputChange = function(userName){
            scope.showList = false;
            if(!userName) return ;
            var arr = userName ? userName.split('@'):[];
            var temp = [];
            if (!arr[1]){
              
              for (var i = 0, j = scope.initList.length; i < j; i++) {
                if(userName.indexOf('@') == -1){
                  userName+='@';
                }
                temp.push(userName + scope.initList[i]);
              }
            } else{

              for(var i=0,j=scope.emailList.length;i<j;i++){
                if(scope.emailList[i].indexOf(userName) > -1){
                  temp.push(scope.emailList[i]);
                }
              }
            }
            temp.unshift(arr[0]);
            scope.emailList = temp;
            scope.showList = true;
          }

          scope.setUserName = function(userName){
            scope.ctrl.user.userName = userName;
            scope.showList = false;
          }

        }
      };
    });
  
  })();