var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = []
		for (element of arr1) {
			newArray.push(element);
		}
		for (element of arr2) {
			newArray.push(element);
		}
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = arr.map(function(number) {
			return number * number;
		})
		return newArray;
	},

	sum: function (arr) {
		var sum = 0;
		var totalSum = arr.reduce(function(sum, item) {
			return sum + item;
		}, 0)
		return totalSum;
	},

	findDuplicates: function (arr) {
		var newArray = [];
		var resultArray = [];
		for (item of arr) {
			newArray.includes(item) && !resultArray.includes(item) ? resultArray.push(item) : newArray.push(item);
		}
		return resultArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var resultArray = arr.filter(function(value) {
			return (value != valueToRemove);
		})
		return resultArray;
	},

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
