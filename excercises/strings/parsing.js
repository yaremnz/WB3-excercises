// Parsing - cutting up into parts.
let name = "Brenda Kaye";

//use String's Built in .indexOf(c) and .slice(b,e) methods, 
// and .length property

// DESIRED OUTPUT   
// Name: Brenda Kaye
// First name: Brenda
// Last name: Kaye

function parseAndDisplayName(name) {
    // p = haystack.indexOf(needle)
    spacePosition = name.indexOf(" ") // space is th delimiter of words in a sentence
    let first = name.slice(0, spacePosition)
    let last = name.slice(spacePosition+1, name.length)

    console.log(`First Name: ${first}`);
    console.log(`Last Name: ${last}`);
    console.log(" ")
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");