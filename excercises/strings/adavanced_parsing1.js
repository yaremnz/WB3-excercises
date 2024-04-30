function parseAndDisplayName(name){
    console.log(name);
    firstSpacePosition = name.indexOf(" ");
    if(firstSpacePosition == -1){
        //not found
        console.log("Only name: " + name);
        console.log(""); //blank line
        return; // exit function
    }
    first = name.slice(0, firstSpacePosition)
    right = name.slice(firstSpacePosition+1, name.length);
    rightSpace = right.indexOf(" "); 
    if(rightSpace == -1){
        console.log("First name: " + first);
        console.log("Last name: " + right);
        console.log(""); //blank line
        return; //exit function now
    }

    middle= right.slice(0, firstSpacePosition);
    last = right.slice(firstSpacePosition+1, rightSpace.length);

    console.log("First name: " + first);
    console.log("Middle name: " + middle);
    console.log("Last name: " + last);
    console.log(""); //blank line

}
 parseAndDisplayName("billy joe bob");

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");

parseAndDisplayName("Zendaya");
parseAndDisplayName("Taylor Swift");
parseAndDisplayName("Kevin Ernest Long");

// Name: Cher
// Only name: Cher

// Name: Brenda Kaye
// First name: Brenda
//Last name: Kaye

// Name: Cher
// first name: Dana
// Middle name: Lynn
// last name: Wyatt