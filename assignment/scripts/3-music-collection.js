console.log('***** Music Collection *****')


let collection = [];

function AddToCollection(title, artist, yearPublished){
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    collection.push(this);
    return this;
}

let indigos = new AddToCollection('Ellington Indigos', 'Duke Ellington', 1958);
console.log('Album Test / Indigos', indigos);
let alice = new AddToCollection('Alice', 'Tom Waits', 2002);
console.log('Album Test / Alice', alice);
let nationalRansom = new AddToCollection('National Ransom', 'Elvis Costello', 2010);
console.log('Album Test / National Ransom', nationalRansom);
let fetchTheBoltCutters = new AddToCollection('Fetch the Bolt Cutters', 'Fiona Apple', 2020);
console.log('Album Test / Fetch the Bolt Cutters', fetchTheBoltCutters);
let stankonia = new AddToCollection('Stankonia', 'OutKast', 2000);
console.log('Album Test / Stankonia', stankonia);
let whenIWasCruel = new AddToCollection('When I was Cruel', 'Elvis Costello', 2002);
console.log('Album Test / When I was Cruel', whenIWasCruel);

console.log('Current collection:', collection);


function showCollection(collectionArray){
    console.log(collectionArray.length);
    for(eachAlbum of collectionArray){
        console.log(eachAlbum.title, 'by', eachAlbum.artist, 'published in', eachAlbum.yearPublished);
    }
}

showCollection(collection);