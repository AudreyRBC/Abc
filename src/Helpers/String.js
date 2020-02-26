export const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
}