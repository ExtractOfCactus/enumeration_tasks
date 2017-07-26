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

	// insertAt: function (arr, itemToAdd, index) {
		
	// },

	// square: function (arr) {
		
	// },

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
