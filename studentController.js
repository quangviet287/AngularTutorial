mainApp.controller("studentController", function($scope) {
   $scope.student = {
      firstName: "Mahesh",
      lastName: "Parashar",
      fees:500,
      
      subjects:[
         {id: 1,name:'Physics',marks:70},
         {id: 2,name:'Chemistry',marks:80},
         {id: 3,name:'Math',marks:65},
         {id: 4,name:'English',marks:75},
         {id: 5,name:'Hindi',marks:67}
      ],
      
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      },

      age: 22
   };
});