function capitalize(str){
    // console.log(str)
    let str1=str.slice(0,1).toUpperCase()
    // console.log(str1)
    let str2=str.slice(1).toLowerCase()
    // console.log(str2)
    str=str1+str2
    console.log(str)
}

// Test cases to try:
capitalize("SCREAMING") // Should become "Screaming"
capitalize("already_Proper") // Should become "Already_proper"
capitalize("wEiRd_CaSiNg") // Should become "Weird_casing"
capitalize("s") // Should become "S"
capitalize("") // Edge case - empty string
capitalize("12345") // Numbers as string
capitalize("πython") // Unicode character
