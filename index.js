const Random = require('crypto-random')

const shuffle = function(deck, random = null) {
    let length      = deck.length
    let clone       = deck.slice(0)
    let shuffled    = []

    if (!random) {
        while (length--) {
            shuffled.push(clone.splice(Math.floor(Random.value() * length), 1).shift())
        }
    } else {
        while (length--) {
            shuffled.push(clone.splice(Math.floor(random() * length), 1).shift())
        }
    }

    return shuffled
}

module.exports = shuffle