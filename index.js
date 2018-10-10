'use strict';

var fcore = module.exports;

// module information
fcore.version = 'v' + require('./package.json').version;
fcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of fcash-lib found. ' +
      'Please make sure to require fcash-lib and check that submodules do' +
      ' not also include their own fcash-lib dependency.';
    throw new Error(message);
  }
};
fcore.versionGuard(global._fcore);
global._fcore = fcore.version;

// crypto
fcore.crypto = {};
fcore.crypto.BN = require('./lib/crypto/bn');
fcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
fcore.crypto.Hash = require('./lib/crypto/hash');
fcore.crypto.Random = require('./lib/crypto/random');
fcore.crypto.Point = require('./lib/crypto/point');
fcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
fcore.encoding = {};
fcore.encoding.Base58 = require('./lib/encoding/base58');
fcore.encoding.Base58Check = require('./lib/encoding/base58check');
fcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
fcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
fcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
fcore.util = {};
fcore.util.buffer = require('./lib/util/buffer');
fcore.util.js = require('./lib/util/js');
fcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
fcore.errors = require('./lib/errors');

// main bitcoin library
fcore.Address = require('./lib/address');
fcore.Block = require('./lib/block');
fcore.MerkleBlock = require('./lib/block/merkleblock');
fcore.BlockHeader = require('./lib/block/blockheader');
fcore.HDPrivateKey = require('./lib/hdprivatekey.js');
fcore.HDPublicKey = require('./lib/hdpublickey.js');
fcore.Networks = require('./lib/networks');
fcore.Opcode = require('./lib/opcode');
fcore.PrivateKey = require('./lib/privatekey');
fcore.PublicKey = require('./lib/publickey');
fcore.Script = require('./lib/script');
fcore.Transaction = require('./lib/transaction');
fcore.URI = require('./lib/uri');
fcore.Unit = require('./lib/unit');

// dependencies, subject to change
fcore.deps = {};
fcore.deps.bnjs = require('bn.js');
fcore.deps.bs58 = require('bs58');
fcore.deps.Buffer = Buffer;
fcore.deps.elliptic = require('elliptic');
fcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
fcore.Transaction.sighash = require('./lib/transaction/sighash');
