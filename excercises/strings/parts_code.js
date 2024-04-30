// supplierCode:productNumber-size
// ACME:123-L the large (L) part 123 is supplied by ACME
// DI:12345-M the medium (M) part 12345 is supplied by DI
// ACE:1-12 the size 12 part 1 is supplied by ACE

// that returns all characters before the :
function getSupplier(code){

}

// that returns all characters between the : and -
function getProductNumber(code){
    return code.slice(code.indexOf(":")+1, code.indexOf("-"))
}

// that returns all characters after the -
function getSize(code){

}

console.log(getProductNumber("ACME:123-L"))
