const element = document.querySelector("#myParagraph").textContent;
function highlightwords(element){
    const obj = {};
    const paragraph = element.split(" ");
    paragraph.forEach(item => item in obj ? obj[item] ++ : obj[item] = 1)
    console.log(obj);
    const entry = Object.entries(obj);
    const sortedEntries = entry.sort((a,b) => b[1] - a[1]);
    const top5 = sortedEntries.slice(1, 6);
    const top5Keys = top5.map(entry => entry[0]);
    console.log(top5Keys)
    console.log(paragraph);

    const highlightedText = paragraph.map(word => {
        console.log(word);
        if(top5Keys.includes(word)) {
            return `<span class = "highlight">${word}</span>`;

        }
    })
document.querySelector("#myParagraph").innerHTML=highlightedText.join(" ")
}
