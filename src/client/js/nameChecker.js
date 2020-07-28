function checkForName(inputText) {
    // console.log("::: Running checkForName :::", inputText);
    let names = [
        "trump",
        "obama",
        "bush",
        "clinton",        
        "regan",
        "carter"
    ]
        
        if(names.includes(inputText.toLowerCase())) {
        // alert("this is an eligible president");
        return true;
    }
    return false
    
}

export { checkForName }
