function titleCaseEdit(title) {
    const splitString = title.split(' ');
    let newTitle = splitString[0].charAt(0).toUpperCase() + splitString[0].substring(1);
    for (let i = 1; i < splitString.length; i++) {
        newTitle += " " + splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return newTitle;
}
// Do not edit this line;
module.exports = titleCaseEdit;