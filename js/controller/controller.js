app.controller("MainController", ["$scope", function($scope) { 
$scope.title = "For Kids";

}]);

app.controller("SubController", ["$scope", function($scope) { 
$scope.heading = "Kids Toys";
$scope.products=[{
    toy: "Alex Playmat", 
    points: 235,  
    cover: 'image/Toys/AlexPlaymat.jpg',
    likes:0
  },
  {
    toy: "Toy Bear", 
    points: 195 ,  
    cover: 'image/Toys/bear.jpg',
    likes:0
  }
 ,
 {
    toy: "Buzzy Bee", 
    points: 175,  
    cover: 'image/Toys/Buzzy-Bee.jpg',
    likes:0
  },
  {
    toy: "Ladder-Truck", 
    points: 140,  
    cover: 'image/Toys/Ladder-Truck.jpg',
    likes:0
  },
  ]
}]);
