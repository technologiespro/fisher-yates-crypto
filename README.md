# fisher-yates-crypto

[Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) Implementation in JavaScript with default cryptographically strong random number generator.
Designed to be a drop-in replacement for Math.random. Can be used with Node or in a browser.

## Requirements

* NodeJS 6+

## Installation

`npm install fisher-yates-crypto --save`

## Usage

```js
const shuffleCrypto = require('fisher-yates-crypto')
const deck = ['A', 'B', 'C', 'D']
const shuffledDeck = shuffleCrypto(deck)
```

```js
const randomizer = function() {
    return 0.6361052929345046
};
const shuffleCrypto = require('fisher-yates-crypto')
const deck = ['A', 'B', 'C', 'D']
const shuffledDeck = shuffleCrypto(deck, randomizer())
```


