//Print longest word within the string in JavaScript


function longest(str) {

    str = str.match(/[a-zA-Z0-9]+/gi);

    let largest = "";

    for (let i = 0; i < str.length; i++) {

        if (str[i].length > largest.length) {
            largest = str[i]
        }
    }
    return largest;
}


console.log(longest("Hello guys this is the best repository for the javascript problems"))
