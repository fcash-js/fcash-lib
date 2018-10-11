# Fcash Crypto
The cryptographic primitives (ECDSA and HMAC) implementations in this package have been reviewed by the Fcash engineering team. More audits and reviews are welcomed.

## Random
The `fcash-base.crypto.Random` namespace contains a single function, named `getRandomBuffer(size)` that returns a `Buffer` instance with random bytes. It may not work depending on the engine that fcash-base is running on (doesn't work with IE versions lesser than 11).

## BN
The `fcash-base.crypto.BN` class contains a wrapper around [bn.js](https://github.com/indutny/bn.js), the bignum library used internally in fcash-base.

## Point
The `fcash-base.crypto.Point` class contains a wrapper around the class Point of [elliptic.js](https://github.com/indutny/elliptic), the elliptic curve library used internally in fcash-base.

## Hash
The `fcash-base.crypto.Hash` namespace contains a set of hashes and utilities. These are either the native `crypto` hash functions from `node.js` or their respective browser shims as provided by the `browserify` library.

## ECDSA
`fcash-base.crypto.ECDSA` contains a pure JavaScript implementation of the elliptic curve DSA signature scheme based on [elliptic.js](https://github.com/indutny/elliptic).
