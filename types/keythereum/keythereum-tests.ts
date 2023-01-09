import keythereum = require('keythereum');

keythereum.version;
keythereum.browser;
keythereum.crypto;
keythereum.constants;
keythereum.isHex('00FF');
keythereum.isBase64('AA==');
keythereum.str2buf('');
keythereum.isCipherAvailable('aes-256-gcm');
keythereum.encrypt('plaintext', 'key', 'iv', 'aes-256-gcm');
keythereum.decrypt('ciphertext', 'key', 'iv', 'aes-256-gcm');
keythereum.privateKeyToAddress('private key');
keythereum.getMAC('derivedKey', 'ciphertext');
keythereum.deriveKey('password', 'salt', { cipher: 'aes-256-gcm', kdf: 'scrypt' });
keythereum.deriveKey('password', 'salt', { cipher: 'aes-256-gcm', kdf: 'scrypt' }, result => {});
keythereum.create({ ivBytes: 32, keyBytes: 32 });
keythereum.create({ ivBytes: 32, keyBytes: 32 }, result => {});
keythereum.marshal(Buffer.from(''), Buffer.from(''), Buffer.from(''), Buffer.from(''));
keythereum.dump(Buffer.from(''), Buffer.from(''), Buffer.from(''), Buffer.from(''));
keythereum.generateKeystoreFilename('0xaaaa');
