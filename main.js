
function ceasarEncypt(msg)

{
    const charCodes = []
        for (let i = 0; i < msg.length; i++) {
            charCodes.push(msg[i].charCodeAt(0))
        }


        for (let i = 0; i < charCodes.length; i++) {
    charCodes[i] = charCodes[i] + 1
            
        }


    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
    result = result + String.fromCharCode(charCodes[i])
    }

return result
}

const secretMessage = "RETREATTOMORROW"
const encryptedMessage = ceasarEncypt(secretMessage)


console.log(secretMessage, encryptedMessage)