/*
  Radix Sort:

  1. look at the one's place,
  2. add numbers to buckets that represent each digit (eg 8976 place 0 is 6, so it goes in bucket 6)
  3. combine the buckets in order back into a list
  4. repeat 1-3, looking at the next place until no numbers have that place

  [12 35 21 15] -> 1:[21] 2:[12] 5:[35 15]
  1:[21] 2:[12] 5:[35 15] -> [21 12 35 15]
  [21 12 35 15] -> 1:[12 15] 2:[21] 3:[35]
  1:[12 15] 2:[21] 3:[35] -> [12 15 21 35]
*/



function digitAt(num, pos){
  //pos will be a negative number
  //by doing num.length + pos this function essentially gets a digit from right side
  //of the number.
  num = num.toString();
  return num[num.length+pos];
}

function radixSort (arrayForSorting, compNumAt) {
  //base case: done === true. this is tested at the end of the function.
  //tempArr is the array that temporary holds on to groups numbers grouped by
  //their digit at certain position.
  //compNumAt is current digit position that the function need to check.
  var done = true, tempArr = [];
  compNumAt = compNumAt || -1;

  //loop through each item, and group them by digit at location: compNumAt
  arrayForSorting.forEach(function(num){
    var curDigit = digitAt(num, compNumAt);

    //can current number return a digit at this position?
    //if yes then keep sorting, which means done = false;
    //  and as long as there is one number that needs to be sorted, we will keep on sorting
    //  the whole thing.
    //if no then assign current number to a group labeled as 0
    if (curDigit){
      done = false;
    } else {
      curDigit = 0;
    }
    
    //assigning numbers to groups with the same digit at the same location;
    tempArr[curDigit] ? tempArr[curDigit].push(num) : tempArr[curDigit] = [num];
  });
    
    //all numbers are assigned to correct groups
    //time to flatten the arr;
    arrayForSorting = tempArr.reduce(function(flattenArr, numBracket){
      return flattenArr.concat(numBracket ? numBracket : []);
    }, []);

  //if done === false, that means at least one number in the array still has more digits
  //that the functions need to look at.
  //if done === true, that means none of the numbers have any more digits to sort with.
  return done ? arrayForSorting : radixSort(arrayForSorting, compNumAt-1);

}


