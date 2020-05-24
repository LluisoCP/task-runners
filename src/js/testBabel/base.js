let aLongName = b => new Array(5).fill(b);

let a = aLongName("Lluis");

// a[3].id = 5;

// let b = a.find(mod => mod.id === 5);

if (a.includes("Lluis")) {
	console.log("Lluis is there")
}
