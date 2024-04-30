// create an new Set

const fruitSet = new Set();

//adding elements to the set

fruitSet.add('apple');
fruitSet.add('pay');
fruitSet.add('banana');
fruitSet.add('pinaple');
fruitSet.add('grape');
fruitSet.add('apple');

console.log('Size of fruitSet:', fruitSet.size);
//check if value exist in the set
console.log(fruitSet.has('banana'));
//delete element from set
fruitSet.delete('apple');

//atkartoju i6 atminties

const fruitSet1 = new Set();
fruitSet1.add('grapes');
fruitSet1.add('bananas');
fruitSet1.add('apples');
console.log('Size of fruitset1', fruitSet1.size);
