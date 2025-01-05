function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lowercase to make the comparison case-insensitive
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the first occurrence of the substring
    return lowerStr.indexOf(lowerSubStr);
}
