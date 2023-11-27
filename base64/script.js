function encode() {
    var encodeString = document.getElementById("toEncode").value;
    console.log("Original String: " + encodeString);

    var newString = btoa(encodeString); // Verschlüsseln
    console.log("Encoded String: " + newString);

    document.getElementById("encryptedText").innerHTML = "Verschlüsselter Text: " + newString;

}