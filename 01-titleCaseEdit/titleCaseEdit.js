function titleCaseEdit(title) {
    let splitString = title.split(' ');
    splitString = splitString.map((name) => {
        return name[0].toUpperCase() + name.slice(1);
    })
    return splitString.join(" ");
}
// Do not edit this line;
module.exports = titleCaseEdit;