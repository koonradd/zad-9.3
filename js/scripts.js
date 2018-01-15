var text = ('Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.');
var dinosaur = ('triceratops');
var nameUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor', nameUpperCased);
var textCharsAfterSub = textCharsAfter.substr(0, textCharsAfter.length/2);
console.log(textCharsAfterSub);
