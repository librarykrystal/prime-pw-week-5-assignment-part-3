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
let raindogs = new AddToCollection('Raindogs', 'Tom Waits', 1985);

// TESTED console.log(indigos);
console.log('Current collection:', collection);