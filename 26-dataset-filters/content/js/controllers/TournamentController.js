function TournamentController() {
	this.players = [{
		name: 'Todd Motto',
		rank: 4,
		gender: 'male'
	},{
		name: 'Nevaeh Mckinney',
		rank: 1,
		gender: 'female'
	},{
		name: 'Vernon Carpenter',
		rank: 2,
		gender: 'male'
	},{
		name: 'Martha Fox',
		rank: 8,
		gender: 'female'
	},{
		name: 'Rick Vasquez',
		rank: 7,
		gender: 'male'
	},{
		name: 'Ida Shelton',
		rank: 5,
		gender: 'female'
	},{
		name: 'Larry Shaw',
		rank: 9,
		gender: 'male'
	},{
		name: 'Alfred Morgan',
		rank: 6,
		gender: 'male'
	},{
		name: 'Tamara Morrison',
		rank: 3,
		gender: 'female'
	},{
		name: 'Kay Ruiz',
		rank: 10,
		gender: 'female'
	}];
}

angular
	.module('app')
	.controller('TournamentController', TournamentController);
