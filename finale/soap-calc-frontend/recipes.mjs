export const recipes = [
	{
        recipeName: 'Mild Soap',
        baseOils: [
            { name: 'Coconut Oil', weight: "4.8 oz" },
            { name: 'Castor Oil', weight: "3.2 oz" },
            { name: 'Lard', weight: "24 oz" },
        ],
        water: "8.7 oz",
        lyeType: "NaOH",
        lyeWeight: "6.1 oz",
        additives: [
            { name: "Fragrance Oil", weight: "1.5 oz" },
            { name: "Colorant", weight: "2 tsp" }
        ],
        fragrance: [
            { name: "Floral", weight: "1.5 oz" }
        ],
        description: "Mild on skin, lasts a decent amount of time, and has good lather.",
        notes: "Ensure accurate measurements for safety. Optional: fragrance and colorant.",
        image: { src: './images/pink-n-yellow.PNG', alt: 'Pink and yellow swirled soap' }
    },
    {
        recipeName: 'Liquid Hand Soap',
        baseOils: [
            { name: 'Coconut Oil', weight: "2.4 oz" },
            { name: 'Castor Oil', weight: "1.6 oz" },
            { name: 'Lard', weight: "10.4 oz" },
            { name: 'Rice Bran Oil', weight: "1.6 oz" }
        ],
        water: "4.8 oz",
        lyeType: "KOH",
        lyeWeight: "3 oz",
        additives: [
            {  }
        ],
        fragrance: [
            { name: "Fruity", weight: "0.5 oz" }
        ],
        description: "Good and mild for hand washing. Can also be used as foaming hand wash when you add 30-50% soap base and the remaining as water.",
        notes: "Make sure in liquid soap you don't use more than 3% superfat. You want a little but to much will make for fat to form on the top of the bottle. I suggest 1-3% tops.",
        image: { src: './images/hand-soap.jpg', alt: "Hand soap in a pump bottle"}
    },
    {
        recipeName: 'Carrot Soap',
        baseOils: [
            { name: 'Coconut Oil', weight: "4 oz" },
            { name: 'Cocoa Butter', weight: ".96 oz" },
            { name: 'Castor Oil', weight: "2.24 oz" },
            { name: 'Lard', weight: "14.22 oz" },
            { name: 'Olive Oil', weight: "6.53 oz" },
            { name: 'Palm Kernel Oil Flakes', weight: "4 oz" },
            { name: 'Shea Butter', weight: "1.5 oz" },
        ],
        water: "9.29 oz",
        lyeType: "NaOH",
        lyeWeight: "4.64 oz",
        additives: [
            { name: 'Carrot Puree', weight: "4.5 oz" }, 
        ],
        fragrance: [
            { name: "10x Orange Essential Oil", weight: "1 oz" }
        ],
        description: "This one is amazingly hard and long lasting but also so mild on the skin!",
        notes: "Add the pumpkin puree at trace along with the 10x essential oils. This is a favorite.",
        image: { src: './images/plain-bar.PNG', alt: "Plain bar of soap"}
    },
    {
        recipeName: 'Hard 5 Oil Soap',
        baseOils: [
            { name: 'Coconut Oil', weight: "4 oz" },
            { name: 'Cocoa Butter', weight: ".96 oz" },
            { name: 'Castor Oil', weight: "2.24 oz" },
            { name: 'Lard', weight: "15.8 oz" },
            { name: 'Olive Oil', weight: "4.8 oz" },
            { name: 'Palm Kernel Oil Flakes', weight: "4 oz" },
        ],
        water: "9 oz",
        lyeType: "NaOH",
        lyeWeight: "4.5 oz",
        additives: [
            { name: 'Green and Yellow Mica', weight: "1/4 tsp" }, 
        ],
        fragrance: [
            { name: "10x Orange Essential Oil", weight: ".8 oz" },
            { name: "5x Lemon Essential Oil", weight: ".8 oz" }
        ],
        description: "You're going to love this mild bar. It will leave your skin feeling rejuvinated and loved!",
        notes: "At trace, add essential oils. Once in the mold, sprinkle micas on the top and swirl in.",
        image: { src: './images/plain-w-top-swirl.PNG', alt: "Plain bar with top swirl"}
    },
    {
        recipeName: 'Facial Soap',
        baseOils: [
            { name: 'Coconut Oil', weight: "16.8 oz" },
            { name: 'Castor Oil', weight: "2.4 oz" },
            { name: 'Olive Oil', weight: "4.8 oz" },
        ],
        water: "6.86 oz",
        lyeType: "NaOH",
        lyeWeight: "3.43 oz",
        additives: [
            { name: 'French Green Clay', weight: "1/2 tsp" }, 
            { name: 'Rose Clay', weight: "1/2 tsp" },
            { name: 'Bentonite', weight: "1/2 tsp" },
            { name: 'Activated Charcoal', weight: "1/2 tsp" },
        ],
        fragrance: [
            { name: "Peppermint Essential Oil", weight: ".16 oz" },
            { name: "Lavander Essential Oil", weight: ".16 oz" },
            { name: "Lemon Essential Oil", weight: ".16 oz" },
            { name: "Rosemary Essential Oil", weight: ".16 oz" },
            { name: "Tea Tree Essential Oil", weight: ".11 oz" }
        ],
        description: "You're going to love this mild bar. It will leave your skin feeling rejuvinated and loved!",
        notes: "I switched out the water for cooled Green Tea. Add the essential oils before trace. It sets up fast so stir with a spoon don't use a immersion blender.Divided the soap at trace and added the clays and activated charcoal which color and then swirl or layer them in",
        image: { src: './images/charcoal-rose.jpeg', alt: "pink, green, white and black facial soap"}
    }
];

