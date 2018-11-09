// Controller logic for index.html

  var app = angular.module('myApp', ['ui.router', 'ui.bootstrap']); 
  app.filter('selectedType', function() {
    // innerVariable in firstArgument | methodName:secondArgument
    // First argument => "projects" will always be the list of elements to filter
    // Second argument => "type" will always be what comes after methodName
    return function(projects, type,languagetype) {
	// Return a smaller list of array inside projects which filters what is not needed
        return projects.filter(function(project) {
	    // Go through each type for this current project 
            for (var i in project.type) {
		// If the passed in 2nd argument contains any of these types 
                if (type.indexOf(project.type[i]) != -1 || type == '') {
		    // If no language specified, always return true
		    if(languagetype=='') {
			    // return true if the project type exists
			    return true;
		    }
		    // If the project language contains the current language as an index, return true
		    else if (project.language.indexOf(languagetype) != -1) {
			    return true;
		    }
		    return false; 
		   
                }
            }
	    // Otherwise, return false which means you shouldn't display this project
            return false;

        });
    };
  });
  app.controller('AppCtrl', ['$scope', '$http','$modal', '$log', function($scope, $http, $modal, $log) {
    console.log("hello world from controller"); 
    // Open a modal window for display 
     $scope.open = function (link) {
	    var modalInstance = $modal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: link,
		      controller: 'ProjCtrl',
		      size:'lg',
	    });
    };
    // For testing
    $scope.haha = "lala";
	/*
	TODO
	1. Python3 
		// Currently in Github/Python3
		{ name: 'BayesNet', img: 'img/projects/BayesNetCover.png', data:'' , type:['desktop'],language:['python'], link:"bayesNet.html" },
	2. Bash
		// Currently in Github/Bash
		{ name: 'Cut', img: 'img/projects/CutCover.png', data:'Bash Cut implemented in C' , type:['desktop'],language:['c'], link:"cut.html" },
	3. Unix
		// Currently in Github/UNIX 
		{ name: 'JobControl', img: 'img/projects/JobControlCover.png', data:'' , type:['desktop'],language:['c'], link:"jobControl.html" },
	4. C
		// Still in assignment files ECE344
		{ name: 'PreemptiveThreads', img: 'img/projects/PreemptiveThreads.png', data:'' , type:['desktop'],language:['c'], link:"preemptiveThreads.html" },
	5. OpenGL 
		// Currently in Github/OpenGL
		{	 name: 'PenguinSimulator', img: 'img/projects/PreemptiveThreads.png', data:'' , type:['desktop'],language:['c'], link:"preemptiveThreads.html" },
	6. SQL, Java
		// Github/Java/MovieDatabase
			CSC343A2
	7. XML
		// Currently still in assignment files 
			CSC343A3
	8. C(AVL Bag, Indexing)
		// Currently still in assignment files 
			CSC190 Assignment 3
	9. Java
		// Currenty still in assignment files 
		Assigment 2B (creating Bash functionalities in Java)
	10. Java/Android 
		// Currently in Github/teamatesname/BeHeard 
		{ name: 'BeHeard', img: 'img/projects/BeHeardCover.png', data:'A community driven mobile app to anonymously share experience.' , type:['mobile'],language:['java'], link:"http://devpost.com/software/beheard-uflg3p" },
	*/
    // Note: Each must have both type and language although empty if not code won't work! e.g. RubeGoldberg need a language of '' if not won't work
	  var details = [
	    { name: 'SoundNote', img: 'img/projects/SoundNoteCover.png', data: 'Ear training website'  , type: ['web'],language:['javascript'], link:"soundNote.html"},
	    { name: 'MotionTrackingDodgeBall', img: 'img/projects/MotionTrackingDodgeBallCover.png', data: 'Implement Kinect-like sensor using Altera DE2 board' , type:['hardware'],language:['verilog'], link:"motionTrackingDodgeBall.html" },
	    //{ name: 'DowelSortingRobot', img: 'img/projects/DowelSortingRobotCover.png', data: 'Robot that sorts dowels' , type:['hardware'],language:['assembly'], link:"dowelSortingRobot.html" },
	    { name: 'MusicPlayer', img: 'img/projects/MusicPlayerCover.png', data: 'Digital Signal Processing algorithms on Altera DE2 board' , type:['hardware'],language:['assembly'], link:"musicPlayer.html" },
	    { name: 'RubeGoldbergToyBox', img: 'img/projects/RubeGoldbergToyBoxCover.png', data: 'Playful Machine to close a toy-box' , type:['hardware'],language:[''], link:"rubeGoldbergToyBox.html" },
		{ name: 'BalancingRobot', img: 'img/projects/BalancingRobotCover.png', data:'A robot that balances itself' , type:['hardware'],language:['assembly'], link:"balancingRobot.html" },
		{ name: 'BattleServer', img: 'img/projects/BattleServerCover.png', data:'A Multi-player Server Based Game' , type:['desktop'],language:['c'], link:"battleServer.html" },
		{ name: 'DoodleJump', img: 'img/projects/DoodleJumpCover.png', data:'A vertical 2D game' , type:['desktop'],language:['cplusplus'], link:"doodleJump.html" },
		{ name: 'FaceRecognition', img: 'img/projects/FaceRecognitionCover.png', data:'PCA algorithm to detect faces' , type:['desktop'],language:['python'], link:"faceRecognition.html" },
		{ name: 'Outbreak', img: 'img/projects/OutbreakCover.jpg', data:'Djiktra Algorithm to determine outbreak of virus' , type:['desktop'],language:['python'], link:"outbreak.html" },
		{ name: 'PainterlyRendering', img: 'img/projects/PainterlyRenderingCover.png', data:'Transform images to digital paintings' , type:['desktop'],language:['python'], link:"painterlyRendering.html" },
		{ name: 'RayTracer', img: 'img/projects/RayTracerCover.jpg', data:'Ray Tracer from Scratch' , type:['desktop'],language:['cplusplus'], link:"rayTracer.html" },
		{ name: 'ServerDatabase', img: 'img/projects/ServerDatabaseCover.png', data:'A secure server database' , type:['desktop'],language:['c'], link:"serverDatabase.html" },
		{ name: 'SideShooter', img: 'img/projects/SideShooterCover.png', data:'A horizontal 2D game' , type:['desktop'],language:['cplusplus'], link:"sideShooter.html" },
		{ name: 'SolitaireEncryption', img: 'img/projects/SolitaireEncryptionCover.jpg', data:'Encryption Algorithm based on cards' , type:['desktop'],language:['c'], link:"solitaireEncryption.html" },
		{ name: 'Sudoku', img: 'img/projects/SudokuCover.png', data:'Sudoku Solver Algorithm' , type:['desktop'],language:['python'], link:"sudoku.html" },
		{ name: 'TriangulationMatting', img: 'img/projects/TriangulationMattingCover.png', data:'Algorithm to change background in movies' , type:['desktop'],language:['python'], link:"triangulationMatting.html" },
		{ name: 'GraphicalCircuitSimulator', img: 'img/projects/GraphicalCircuitSimulatorCover.png', data:'Graphical Resistive Circuit Solver' , type:['desktop'],language:['cplusplus'], link:"graphicalCircuitSimulator.html" },
	  ];
    $scope.projects = details;
    // initialize to display everything 
    $scope.typefilter = '';
    $scope.languagefilter= '';
    $scope.clicked = function(type) {
        $scope.typefilter = type;
	// initialize language filter
        $scope.languagefilter='';
    }
    $scope.language= function(type) {
        $scope.languagefilter= type;
    }
  }]);

angular.module('myApp').controller('ProjCtrl', function ($scope, $modalInstance) {
  $scope.close= function () {
    $modalInstance.dismiss('cancel');
  };
});



