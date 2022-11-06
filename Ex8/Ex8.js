var app =angular.module("Ex8App",[])

//Post Comment Form
app.controller("FrmCtrl",function($scope){
    $scope.comment = [];
    $scope.btn_add = function() {
        if($scope.txtcomment !=''){
            $scope.comment.push($scope.txtcomment);
            $scope.txtcomment = "";
        }
    }
    $scope.remItem = function($index) {
        $scope.comment.splice($index, 1);
    }
})

//Simple Calculator
app.controller('CalcCtrl', function($scope) {
    $scope.result = function() {
        if ($scope.operation == ' Addition (+) ') {
            return $scope.a + $scope.b;
        }
        if ($scope.operation == 'Subtraction(-)') {
            return $scope.a - $scope.b;
        }
        if ($scope.operation == 'Multiplictn(*)') {
            return $scope.a * $scope.b;
        }
        if ($scope.operation == ' Division (/) ') {
            return $scope.a / $scope.b;
            
        }
    };
});

//To Do List
app.controller('TodoCtrl', function($scope) {
    $scope.tasks = [];
    $scope.add = function() {
        $scope.tasks.push($scope.new_task);
        console.log($scope.d);
    }
    $scope.dtasks = [];
    $scope.done = function() {
        $scope.tasks.pop($scope.$index);
        $scope.dtasks.push($scope.t);
        console.log($scope.dtasks);
    }
});

//BMI Calculator
app.controller('BMICtrl', function($scope) {
    $scope.bmi_calc = function () {
        var bmi = $scope.w * 10000 / ($scope.h * $scope.h);
        $scope.output = bmi;

        if (bmi < 18.5) {
            $scope.comment = 'Under weight';
        } else if (bmi >= 18.5 && bmi < 25) {
            $scope.comment = 'Normal';
        } else if (bmi >= 25 && bmi < 30) {
            $scope.comment = 'Over weight';
        } else if (bmi > 30) {
            $scope.comment = 'Obese';
        }
    }
});