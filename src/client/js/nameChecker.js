function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "trump",
        "bush",
        "jobs",
        "musk"
    ]

    if(names.includes(inputText)) {
        // alert("this is an eligible president");
        return true;
    }
    return false
    
}

export { checkForName }
