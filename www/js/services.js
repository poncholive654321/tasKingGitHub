angular.module('starter.services', [])

.service('ProjectService', function() {
	this.all = function(){
		return [
			{ id: "1", name: 'project 1 from service looooooooooooooooong named' },
			{ id: "2", name: 'project 2 from service' }
		]
	}
	
	this.one = function(id){
		var ret = {};
		angular.forEach(this.all(),function(project){
			console.log(project);
			if (id == project.id){
				ret = project;
			}
		});
		return ret;
	}
});
