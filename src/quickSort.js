/*
  Quick Sort:

  1. if the list has fewer than two elements, return the list because it is sorted
  2. picking random number from the list, called a pivot
  3. iterate through the list of numbers add to listadding each number to a sublist less, equal, or greater based on comparing to the pivot
  4. recurse on the less and greater lists to sort them
  5. combine less, equal, and greater lists in order

  [15 35 21 12] -> pivot 21 -> less:[15 12] equal: [21] greater: [35]
    recurse on less -> pivot 12 -> less:[] equal:[12] greater:[15] -> [12 15]
    recurse on greater -> [35]
  less:[12 15] equal: [21] greater: [35] -> [12 15 21 35]
*/

function sample (arr) {
  var index = Math.floor((Math.random()*length));
  return arr[index];
}


function quickSort (unsortedArray) {
  //should stop if array is less than 2 length long;
  if (unsortedArray.length<2){return unsortedArray;}

  //create the brackets to store items
  var small, equal, bigger, compItem;
  small = [];
  equal = [];
  bigger = [];
  compItem = sample(unsortedArray);


  //loop and compare all items in unsortedArray
  unsortedArray.forEach(function(item){
    if (item > compItem){
      bigger.push(item);
    } else if(item === compItem){
      equal.push(item);
    } else {
      small.push(item);
    }
  });

  //recursive sort here:
  small = quickSort(small);
  bigger = quickSort(bigger);

  return small.concat(equal, bigger);

}
