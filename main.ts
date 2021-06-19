input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    sjekk_key()
})
function sjekk_key () {
    user_key = temp
    serial.writeLine(user_key)
    if (user_key == key) {
        basic.showString("" + (secret))
    } else if (user_key.length > key.length) {
        basic.showIcon(IconNames.No)
        user_key = ""
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    sjekk_key()
})
let user_key = ""
let temp = ""
let key = ""
let secret = 0
secret = 3791
key = "ABA"
