'use strict';

var fcash_base = module.exports;

// module information
fcash_base.version = 'v' + require('./package.json').version;
fcash_base.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of fcash-lib found. ' +
      'Please make sure to require fcash-lib and check that submodules do' +
      ' not also include their own fcash-lib dependency.';
    throw new Error(message);
  }
};
fcash_base.versionGuard(global._fcash_base);
global._fcash_base = fcash_base.version;

// crypto
fcash_base.crypto = {};
fcash_base.crypto.BN = require('./lib/crypto/bn');
fcash_base.crypto.ECDSA = require('./lib/crypto/ecdsa');
fcash_base.crypto.Hash = require('./lib/crypto/hash');
fcash_base.crypto.Random = require('./lib/crypto/random');
fcash_base.crypto.Point = require('./lib/crypto/point');
fcash_base.crypto.Signature = require('./lib/crypto/signature');

// encoding
fcash_base.encoding = {};
fcash_base.encoding.Base58 = require('./lib/encoding/base58');
fcash_base.encoding.Base58Check = require('./lib/encoding/base58check');
fcash_base.encoding.BufferReader = require('./lib/encoding/bufferreader');
fcash_base.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
fcash_base.encoding.Varint = require('./lib/encoding/varint');

// utilities
fcash_base.util = {};
fcash_base.util.buffer = require('./lib/util/buffer');
fcash_base.util.js = require('./lib/util/js');
fcash_base.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
fcash_base.errors = require('./lib/errors');

// main bitcoin library
fcash_base.Address = require('./lib/address');
fcash_base.Block = require('./lib/block');
fcash_base.MerkleBlock = require('./lib/block/merkleblock');
fcash_base.BlockHeader = require('./lib/block/blockheader');
fcash_base.HDPrivateKey = require('./lib/hdprivatekey.js');
fcash_base.HDPublicKey = require('./lib/hdpublickey.js');
fcash_base.Networks = require('./lib/networks');
fcash_base.Opcode = require('./lib/opcode');
fcash_base.PrivateKey = require('./lib/privatekey');
fcash_base.PublicKey = require('./lib/publickey');
fcash_base.Script = require('./lib/script');
fcash_base.Transaction = require('./lib/transaction');
fcash_base.URI = require('./lib/uri');
fcash_base.Unit = require('./lib/unit');

// dependencies, subject to change
fcash_base.deps = {};
fcash_base.deps.bnjs = require('bn.js');
fcash_base.deps.bs58 = require('bs58');
fcash_base.deps.Buffer = Buffer;
fcash_base.deps.elliptic = require('elliptic');
fcash_base.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
fcash_base.Transaction.sighash = require('./lib/transaction/sighash');
