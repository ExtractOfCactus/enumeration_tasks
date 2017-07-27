var arrayTasks = {

	// concat: function (arr1, arr2) {
	// 	var newArray = []
	// 	for (element of arr1) {
	// 		newArray.push(element);
	// 	}
	// 	for (element of arr2) {
	// 		newArray.push(element);
	// 	}
	// 	return newArray;
	// },

	concat: function (arr1, arr2) {
		var resultArray = arr1.concat(arr2);
		return resultArray;
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

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = [];
		for (index in arr) {
			if (arr[index] === itemToFind) {
				indexArray.push(index);
			}
		}
		return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenArray = arr.filter(function(value) {
			return value % 2 === 0;
		})
		var squaredArray = this.square(evenArray);
		return this.sum(squaredArray);
	}

}

module.exports = arrayTasks
