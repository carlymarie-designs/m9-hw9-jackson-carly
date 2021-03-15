// create Desserts class
class Desserts {
	constructor(type, calories) {

		// set vars
		this.type = type;
		this.calories = calories;
		console.log('feed me');
	} 
}

class IceCream extends Desserts {
	constructor (type, calories, flavor, scoops) {
		super(type, calories);
		this.flavor = flavor;
		this.scoops = scoops;
	}

	// create method inside of sub class
	includeSpoon() {
		console.log('Here is your spoon!');
	}

}

const vanillaIceCream = new IceCream( 'Ice Cream', 340, 'Vanilla', 3 );
console.log(vanillaIceCream);


// call method in subclass
vanillaIceCream.includeSpoon();