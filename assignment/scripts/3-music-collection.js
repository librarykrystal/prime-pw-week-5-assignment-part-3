console.log('***** Music Collection *****')


let collection = [];

function AddToCollection(title, artist, yearPublished){
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    collection.push(this);
    return this;
}   // end of AddToCollection

let indigos = new AddToCollection('Ellington Indigos', 'Duke Ellington', 1958);
console.log('Album Test / Indigos', indigos);
// Used first album as in-prog function writing tester before adding add'l albums
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
    console.log('Albums in collection:', collectionArray.length);
    for(eachAlbum of collectionArray){
        console.log(eachAlbum.title, 'by', eachAlbum.artist, 'published in', eachAlbum.yearPublished);
    }
}   // end of showCollection

console.log('Calling the showCollection function:');
showCollection(collection);


function findByArtist(artist){
    let artistResults = [];
    for(eachArtist of collection){
        if(eachArtist.artist == artist){
            artistResults.push(eachArtist);
        }
    }
    return artistResults;
}   // end of findByArtist

// Test for artist with 1 album in array:
console.log('Search for OutKast:', findByArtist('OutKast'));
// Test for artist with 2 albums in array:
console.log('Search for Elvis Costello:', findByArtist('Elvis Costello'));
// Test for artist NOT in array:
console.log('Search for artist not in collection:', findByArtist('Yanni'));