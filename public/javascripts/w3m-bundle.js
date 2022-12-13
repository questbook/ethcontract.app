(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package binary provides functions for encoding and decoding numbers in byte arrays.
 */
var int_1 = require("@stablelib/int");
// TODO(dchest): add asserts for correct value ranges and array offsets.
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * signed 16-bit integer and returns it.
 */
function readInt16BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (((array[offset + 0] << 8) | array[offset + 1]) << 16) >> 16;
}
exports.readInt16BE = readInt16BE;
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * unsigned 16-bit integer and returns it.
 */
function readUint16BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 0] << 8) | array[offset + 1]) >>> 0;
}
exports.readUint16BE = readUint16BE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * signed 16-bit integer and returns it.
 */
function readInt16LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (((array[offset + 1] << 8) | array[offset]) << 16) >> 16;
}
exports.readInt16LE = readInt16LE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * unsigned 16-bit integer and returns it.
 */
function readUint16LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 1] << 8) | array[offset]) >>> 0;
}
exports.readUint16LE = readUint16LE;
/**
 * Writes 2-byte big-endian representation of 16-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */
function writeUint16BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(2); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 8;
    out[offset + 1] = value >>> 0;
    return out;
}
exports.writeUint16BE = writeUint16BE;
exports.writeInt16BE = writeUint16BE;
/**
 * Writes 2-byte little-endian representation of 16-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */
function writeUint16LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(2); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    return out;
}
exports.writeUint16LE = writeUint16LE;
exports.writeInt16LE = writeUint16LE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * signed 32-bit integer and returns it.
 */
function readInt32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (array[offset] << 24) |
        (array[offset + 1] << 16) |
        (array[offset + 2] << 8) |
        array[offset + 3];
}
exports.readInt32BE = readInt32BE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * unsigned 32-bit integer and returns it.
 */
function readUint32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset] << 24) |
        (array[offset + 1] << 16) |
        (array[offset + 2] << 8) |
        array[offset + 3]) >>> 0;
}
exports.readUint32BE = readUint32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * signed 32-bit integer and returns it.
 */
function readInt32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (array[offset + 3] << 24) |
        (array[offset + 2] << 16) |
        (array[offset + 1] << 8) |
        array[offset];
}
exports.readInt32LE = readInt32LE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * unsigned 32-bit integer and returns it.
 */
function readUint32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 3] << 24) |
        (array[offset + 2] << 16) |
        (array[offset + 1] << 8) |
        array[offset]) >>> 0;
}
exports.readUint32LE = readUint32LE;
/**
 * Writes 4-byte big-endian representation of 32-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeUint32BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 24;
    out[offset + 1] = value >>> 16;
    out[offset + 2] = value >>> 8;
    out[offset + 3] = value >>> 0;
    return out;
}
exports.writeUint32BE = writeUint32BE;
exports.writeInt32BE = writeUint32BE;
/**
 * Writes 4-byte little-endian representation of 32-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeUint32LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    out[offset + 2] = value >>> 16;
    out[offset + 3] = value >>> 24;
    return out;
}
exports.writeUint32LE = writeUint32LE;
exports.writeInt32LE = writeUint32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */
function readInt64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var hi = readInt32BE(array, offset);
    var lo = readInt32BE(array, offset + 4);
    return hi * 0x100000000 + lo - ((lo >> 31) * 0x100000000);
}
exports.readInt64BE = readInt64BE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */
function readUint64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var hi = readUint32BE(array, offset);
    var lo = readUint32BE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
exports.readUint64BE = readUint64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */
function readInt64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var lo = readInt32LE(array, offset);
    var hi = readInt32LE(array, offset + 4);
    return hi * 0x100000000 + lo - ((lo >> 31) * 0x100000000);
}
exports.readInt64LE = readInt64LE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */
function readUint64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var lo = readUint32LE(array, offset);
    var hi = readUint32LE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
exports.readUint64LE = readUint64LE;
/**
 * Writes 8-byte big-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeUint64BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    writeUint32BE(value / 0x100000000 >>> 0, out, offset);
    writeUint32BE(value >>> 0, out, offset + 4);
    return out;
}
exports.writeUint64BE = writeUint64BE;
exports.writeInt64BE = writeUint64BE;
/**
 * Writes 8-byte little-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeUint64LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    writeUint32LE(value >>> 0, out, offset);
    writeUint32LE(value / 0x100000000 >>> 0, out, offset + 4);
    return out;
}
exports.writeUint64LE = writeUint64LE;
exports.writeInt64LE = writeUint64LE;
/**
 * Reads bytes from array starting at offset as big-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */
function readUintBE(bitLength, array, offset) {
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("readUintBE supports only bitLengths divisible by 8");
    }
    if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintBE: array is too short for the given bitLength");
    }
    var result = 0;
    var mul = 1;
    for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
exports.readUintBE = readUintBE;
/**
 * Reads bytes from array starting at offset as little-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */
function readUintLE(bitLength, array, offset) {
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("readUintLE supports only bitLengths divisible by 8");
    }
    if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintLE: array is too short for the given bitLength");
    }
    var result = 0;
    var mul = 1;
    for (var i = offset; i < offset + bitLength / 8; i++) {
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
exports.readUintLE = readUintLE;
/**
 * Writes a big-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */
function writeUintBE(bitLength, value, out, offset) {
    if (out === void 0) { out = new Uint8Array(bitLength / 8); }
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
    }
    if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintBE value must be an integer");
    }
    var div = 1;
    for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        out[i] = (value / div) & 0xff;
        div *= 256;
    }
    return out;
}
exports.writeUintBE = writeUintBE;
/**
 * Writes a little-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */
function writeUintLE(bitLength, value, out, offset) {
    if (out === void 0) { out = new Uint8Array(bitLength / 8); }
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
    }
    if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintLE value must be an integer");
    }
    var div = 1;
    for (var i = offset; i < offset + bitLength / 8; i++) {
        out[i] = (value / div) & 0xff;
        div *= 256;
    }
    return out;
}
exports.writeUintLE = writeUintLE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * 32-bit floating-point number and returns it.
 */
function readFloat32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset);
}
exports.readFloat32BE = readFloat32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * 32-bit floating-point number and returns it.
 */
function readFloat32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset, true);
}
exports.readFloat32LE = readFloat32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * 64-bit floating-point number ("double") and returns it.
 */
function readFloat64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset);
}
exports.readFloat64BE = readFloat64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * 64-bit floating-point number ("double") and returns it.
 */
function readFloat64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset, true);
}
exports.readFloat64LE = readFloat64LE;
/**
 * Writes 4-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat32BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value);
    return out;
}
exports.writeFloat32BE = writeFloat32BE;
/**
 * Writes 4-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat32LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value, true);
    return out;
}
exports.writeFloat32LE = writeFloat32LE;
/**
 * Writes 8-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat64BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value);
    return out;
}
exports.writeFloat64BE = writeFloat64BE;
/**
 * Writes 8-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat64LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value, true);
    return out;
}
exports.writeFloat64LE = writeFloat64LE;

},{"@stablelib/int":9}],2:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package chacha implements ChaCha stream cipher.
 */
var binary_1 = require("@stablelib/binary");
var wipe_1 = require("@stablelib/wipe");
// Number of ChaCha rounds (ChaCha20).
var ROUNDS = 20;
// Applies the ChaCha core function to 16-byte input,
// 32-byte key key, and puts the result into 64-byte array out.
function core(out, input, key) {
    var j0 = 0x61707865; // "expa"  -- ChaCha's "sigma" constant
    var j1 = 0x3320646E; // "nd 3"     for 32-byte keys
    var j2 = 0x79622D32; // "2-by"
    var j3 = 0x6B206574; // "te k"
    var j4 = (key[3] << 24) | (key[2] << 16) | (key[1] << 8) | key[0];
    var j5 = (key[7] << 24) | (key[6] << 16) | (key[5] << 8) | key[4];
    var j6 = (key[11] << 24) | (key[10] << 16) | (key[9] << 8) | key[8];
    var j7 = (key[15] << 24) | (key[14] << 16) | (key[13] << 8) | key[12];
    var j8 = (key[19] << 24) | (key[18] << 16) | (key[17] << 8) | key[16];
    var j9 = (key[23] << 24) | (key[22] << 16) | (key[21] << 8) | key[20];
    var j10 = (key[27] << 24) | (key[26] << 16) | (key[25] << 8) | key[24];
    var j11 = (key[31] << 24) | (key[30] << 16) | (key[29] << 8) | key[28];
    var j12 = (input[3] << 24) | (input[2] << 16) | (input[1] << 8) | input[0];
    var j13 = (input[7] << 24) | (input[6] << 16) | (input[5] << 8) | input[4];
    var j14 = (input[11] << 24) | (input[10] << 16) | (input[9] << 8) | input[8];
    var j15 = (input[15] << 24) | (input[14] << 16) | (input[13] << 8) | input[12];
    var x0 = j0;
    var x1 = j1;
    var x2 = j2;
    var x3 = j3;
    var x4 = j4;
    var x5 = j5;
    var x6 = j6;
    var x7 = j7;
    var x8 = j8;
    var x9 = j9;
    var x10 = j10;
    var x11 = j11;
    var x12 = j12;
    var x13 = j13;
    var x14 = j14;
    var x15 = j15;
    for (var i = 0; i < ROUNDS; i += 2) {
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> (32 - 16) | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> (32 - 12) | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> (32 - 16) | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> (32 - 12) | x5 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> (32 - 16) | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> (32 - 12) | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> (32 - 16) | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> (32 - 12) | x7 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> (32 - 8) | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> (32 - 7) | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> (32 - 8) | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> (32 - 7) | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> (32 - 8) | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> (32 - 7) | x5 << 7;
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> (32 - 8) | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> (32 - 7) | x4 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> (32 - 16) | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> (32 - 12) | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> (32 - 16) | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> (32 - 12) | x6 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> (32 - 16) | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> (32 - 12) | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> (32 - 16) | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> (32 - 12) | x4 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> (32 - 8) | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> (32 - 7) | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> (32 - 8) | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> (32 - 7) | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> (32 - 8) | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> (32 - 7) | x6 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> (32 - 8) | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> (32 - 7) | x5 << 7;
    }
    binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
    binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
    binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
    binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
    binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
    binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
    binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
    binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
    binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
    binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
    binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
    binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
    binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
    binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
    binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
    binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
/**
 * Encrypt src with ChaCha20 stream generated for the given 32-byte key and
 * 8-byte (as in original implementation) or 12-byte (as in RFC7539) nonce and
 * write the result into dst and return it.
 *
 * dst and src may be the same, but otherwise must not overlap.
 *
 * If nonce is 12 bytes, users should not encrypt more than 256 GiB with the
 * same key and nonce, otherwise the stream will repeat. The function will
 * throw error if counter overflows to prevent this.
 *
 * If nonce is 8 bytes, the output is practically unlimited (2^70 bytes, which
 * is more than a million petabytes). However, it is not recommended to
 * generate 8-byte nonces randomly, as the chance of collision is high.
 *
 * Never use the same key and nonce to encrypt more than one message.
 *
 * If nonceInplaceCounterLength is not 0, the nonce is assumed to be a 16-byte
 * array with stream counter in first nonceInplaceCounterLength bytes and nonce
 * in the last remaining bytes. The counter will be incremented inplace for
 * each ChaCha block. This is useful if you need to encrypt one stream of data
 * in chunks.
 */
function streamXOR(key, nonce, src, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) { nonceInplaceCounterLength = 0; }
    // We only support 256-bit keys.
    if (key.length !== 32) {
        throw new Error("ChaCha: key size must be 32 bytes");
    }
    if (dst.length < src.length) {
        throw new Error("ChaCha: destination is shorter than source");
    }
    var nc;
    var counterLength;
    if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) {
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
        }
        nc = new Uint8Array(16);
        // First counterLength bytes of nc are counter, starting with zero.
        counterLength = nc.length - nonce.length;
        // Last bytes of nc after counterLength are nonce, set them.
        nc.set(nonce, counterLength);
    }
    else {
        if (nonce.length !== 16) {
            throw new Error("ChaCha nonce with counter must be 16 bytes");
        }
        // This will update passed nonce with counter inplace.
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
    }
    // Allocate temporary space for ChaCha block.
    var block = new Uint8Array(64);
    for (var i = 0; i < src.length; i += 64) {
        // Generate a block.
        core(block, nc, key);
        // XOR block bytes with src into dst.
        for (var j = i; j < i + 64 && j < src.length; j++) {
            dst[j] = src[j] ^ block[j - i];
        }
        // Increment counter.
        incrementCounter(nc, 0, counterLength);
    }
    // Cleanup temporary space.
    wipe_1.wipe(block);
    if (nonceInplaceCounterLength === 0) {
        // Cleanup counter.
        wipe_1.wipe(nc);
    }
    return dst;
}
exports.streamXOR = streamXOR;
/**
 * Generate ChaCha20 stream for the given 32-byte key and 8-byte or 12-byte
 * nonce and write it into dst and return it.
 *
 * Never use the same key and nonce to generate more than one stream.
 *
 * If nonceInplaceCounterLength is not 0, it behaves the same with respect to
 * the nonce as described in the streamXOR documentation.
 *
 * stream is like streamXOR with all-zero src.
 */
function stream(key, nonce, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) { nonceInplaceCounterLength = 0; }
    wipe_1.wipe(dst);
    return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
exports.stream = stream;
function incrementCounter(counter, pos, len) {
    var carry = 1;
    while (len--) {
        carry = carry + (counter[pos] & 0xff) | 0;
        counter[pos] = carry & 0xff;
        carry >>>= 8;
        pos++;
    }
    if (carry > 0) {
        throw new Error("ChaCha: counter overflow");
    }
}

},{"@stablelib/binary":1,"@stablelib/wipe":17}],3:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
var chacha_1 = require("@stablelib/chacha");
var poly1305_1 = require("@stablelib/poly1305");
var wipe_1 = require("@stablelib/wipe");
var binary_1 = require("@stablelib/binary");
var constant_time_1 = require("@stablelib/constant-time");
exports.KEY_LENGTH = 32;
exports.NONCE_LENGTH = 12;
exports.TAG_LENGTH = 16;
var ZEROS = new Uint8Array(16);
/**
 * ChaCha20-Poly1305 Authenticated Encryption with Associated Data.
 *
 * Defined in RFC7539.
 */
var ChaCha20Poly1305 = /** @class */ (function () {
    /**
     * Creates a new instance with the given 32-byte key.
     */
    function ChaCha20Poly1305(key) {
        this.nonceLength = exports.NONCE_LENGTH;
        this.tagLength = exports.TAG_LENGTH;
        if (key.length !== exports.KEY_LENGTH) {
            throw new Error("ChaCha20Poly1305 needs 32-byte key");
        }
        // Copy key.
        this._key = new Uint8Array(key);
    }
    /**
     * Encrypts and authenticates plaintext, authenticates associated data,
     * and returns sealed ciphertext, which includes authentication tag.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If dst is given (it must be the size of plaintext + the size of tag
     * length) the result will be put into it. Dst and plaintext must not
     * overlap.
     */
    ChaCha20Poly1305.prototype.seal = function (nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        // We pass full counter, which has 12-byte nonce and 4-byte block counter,
        // and it will get incremented after generating the block, which is
        // exactly what we need: we only use the first 32 bytes of 64-byte
        // ChaCha block and discard the next 32 bytes.
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        // Allocate space for sealed ciphertext.
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) {
                throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
        }
        else {
            result = new Uint8Array(resultLength);
        }
        // Encrypt plaintext.
        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
        // Authenticate.
        // XXX: can "simplify" here: pass full result (which is already padded
        // due to zeroes prepared for tag), and ciphertext length instead of
        // subarray of result.
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        // Cleanup.
        wipe_1.wipe(counter);
        return result;
    };
    /**
     * Authenticates sealed ciphertext (which includes authentication tag) and
     * associated data, decrypts ciphertext and returns decrypted plaintext.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If authentication fails, it returns null.
     *
     * If dst is given (it must be of ciphertext length minus tag length),
     * the result will be put into it. Dst and plaintext must not overlap.
     */
    ChaCha20Poly1305.prototype.open = function (nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        // Sealed ciphertext should at least contain tag.
        if (sealed.length < this.tagLength) {
            // TODO(dchest): should we throw here instead?
            return null;
        }
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        // Authenticate.
        // XXX: can simplify and avoid allocation: since authenticate()
        // already allocates tag (from Poly1305.digest(), it can return)
        // it instead of copying to calculatedTag. But then in seal()
        // we'll need to copy it.
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        // Constant-time compare tags and return null if they differ.
        if (!constant_time_1.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
            return null;
        }
        // Allocate space for decrypted plaintext.
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) {
                throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
        }
        else {
            result = new Uint8Array(resultLength);
        }
        // Decrypt.
        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        // Cleanup.
        wipe_1.wipe(counter);
        return result;
    };
    ChaCha20Poly1305.prototype.clean = function () {
        wipe_1.wipe(this._key);
        return this;
    };
    ChaCha20Poly1305.prototype._authenticate = function (tagOut, authKey, ciphertext, associatedData) {
        // Initialize Poly1305 with authKey.
        var h = new poly1305_1.Poly1305(authKey);
        // Authenticate padded associated data.
        if (associatedData) {
            h.update(associatedData);
            if (associatedData.length % 16 > 0) {
                h.update(ZEROS.subarray(associatedData.length % 16));
            }
        }
        // Authenticate padded ciphertext.
        h.update(ciphertext);
        if (ciphertext.length % 16 > 0) {
            h.update(ZEROS.subarray(ciphertext.length % 16));
        }
        // Authenticate length of associated data.
        // XXX: can avoid allocation here?
        var length = new Uint8Array(8);
        if (associatedData) {
            binary_1.writeUint64LE(associatedData.length, length);
        }
        h.update(length);
        // Authenticate length of ciphertext.
        binary_1.writeUint64LE(ciphertext.length, length);
        h.update(length);
        // Get tag and copy it into tagOut.
        var tag = h.digest();
        for (var i = 0; i < tag.length; i++) {
            tagOut[i] = tag[i];
        }
        // Cleanup.
        h.clean();
        wipe_1.wipe(tag);
        wipe_1.wipe(length);
    };
    return ChaCha20Poly1305;
}());
exports.ChaCha20Poly1305 = ChaCha20Poly1305;

},{"@stablelib/binary":1,"@stablelib/chacha":2,"@stablelib/constant-time":4,"@stablelib/poly1305":10,"@stablelib/wipe":17}],4:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package constant-time provides functions for performing algorithmically constant-time operations.
 */
/**
 * NOTE! Due to the inability to guarantee real constant time evaluation of
 * anything in JavaScript VM, this is module is the best effort.
 */
/**
 * Returns resultIfOne if subject is 1, or resultIfZero if subject is 0.
 *
 * Supports only 32-bit integers, so resultIfOne or resultIfZero are not
 * integers, they'll be converted to them with bitwise operations.
 */
function select(subject, resultIfOne, resultIfZero) {
    return (~(subject - 1) & resultIfOne) | ((subject - 1) & resultIfZero);
}
exports.select = select;
/**
 * Returns 1 if a <= b, or 0 if not.
 * Arguments must be positive 32-bit integers less than or equal to 2^31 - 1.
 */
function lessOrEqual(a, b) {
    return (((a | 0) - (b | 0) - 1) >>> 31) & 1;
}
exports.lessOrEqual = lessOrEqual;
/**
 * Returns 1 if a and b are of equal length and their contents
 * are equal, or 0 otherwise.
 *
 * Note that unlike in equal(), zero-length inputs are considered
 * the same, so this function will return 1.
 */
function compare(a, b) {
    if (a.length !== b.length) {
        return 0;
    }
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        result |= a[i] ^ b[i];
    }
    return (1 & ((result - 1) >>> 8));
}
exports.compare = compare;
/**
 * Returns true if a and b are of equal non-zero length,
 * and their contents are equal, or false otherwise.
 *
 * Note that unlike in compare() zero-length inputs are considered
 * _not_ equal, so this function will return false.
 */
function equal(a, b) {
    if (a.length === 0 || b.length === 0) {
        return false;
    }
    return compare(a, b) !== 0;
}
exports.equal = equal;

},{}],5:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
/**
 * Package ed25519 implements Ed25519 public-key signature algorithm.
 */
const random_1 = require("@stablelib/random");
const sha512_1 = require("@stablelib/sha512");
const wipe_1 = require("@stablelib/wipe");
exports.SIGNATURE_LENGTH = 64;
exports.PUBLIC_KEY_LENGTH = 32;
exports.SECRET_KEY_LENGTH = 64;
exports.SEED_LENGTH = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function gf(init) {
    const r = new Float64Array(16);
    if (init) {
        for (let i = 0; i < init.length; i++) {
            r[i] = init[i];
        }
    }
    return r;
}
// Base point.
const _9 = new Uint8Array(32);
_9[0] = 9;
const gf0 = gf();
const gf1 = gf([1]);
const D = gf([
    0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070,
    0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203
]);
const D2 = gf([
    0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0,
    0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406
]);
const X = gf([
    0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c,
    0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169
]);
const Y = gf([
    0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666,
    0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666
]);
const I = gf([
    0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43,
    0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83
]);
function set25519(r, a) {
    for (let i = 0; i < 16; i++) {
        r[i] = a[i] | 0;
    }
}
function car25519(o) {
    let c = 1;
    for (let i = 0; i < 16; i++) {
        let v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
    const c = ~(b - 1);
    for (let i = 0; i < 16; i++) {
        const t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function pack25519(o, n) {
    const m = gf();
    const t = gf();
    for (let i = 0; i < 16; i++) {
        t[i] = n[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j = 0; j < 2; j++) {
        m[0] = t[0] - 0xffed;
        for (let i = 1; i < 15; i++) {
            m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
        const b = (m[15] >> 16) & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
    }
    for (let i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function verify32(x, y) {
    let d = 0;
    for (let i = 0; i < 32; i++) {
        d |= x[i] ^ y[i];
    }
    return (1 & ((d - 1) >>> 8)) - 1;
}
function neq25519(a, b) {
    const c = new Uint8Array(32);
    const d = new Uint8Array(32);
    pack25519(c, a);
    pack25519(d, b);
    return verify32(c, d);
}
function par25519(a) {
    const d = new Uint8Array(32);
    pack25519(d, a);
    return d[0] & 1;
}
function unpack25519(o, n) {
    for (let i = 0; i < 16; i++) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    }
    o[15] &= 0x7fff;
}
function add(o, a, b) {
    for (let i = 0; i < 16; i++) {
        o[i] = a[i] + b[i];
    }
}
function sub(o, a, b) {
    for (let i = 0; i < 16; i++) {
        o[i] = a[i] - b[i];
    }
}
function mul(o, a, b) {
    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function square(o, a) {
    mul(o, a, a);
}
function inv25519(o, i) {
    const c = gf();
    let a;
    for (a = 0; a < 16; a++) {
        c[a] = i[a];
    }
    for (a = 253; a >= 0; a--) {
        square(c, c);
        if (a !== 2 && a !== 4) {
            mul(c, c, i);
        }
    }
    for (a = 0; a < 16; a++) {
        o[a] = c[a];
    }
}
function pow2523(o, i) {
    const c = gf();
    let a;
    for (a = 0; a < 16; a++) {
        c[a] = i[a];
    }
    for (a = 250; a >= 0; a--) {
        square(c, c);
        if (a !== 1) {
            mul(c, c, i);
        }
    }
    for (a = 0; a < 16; a++) {
        o[a] = c[a];
    }
}
function edadd(p, q) {
    const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
    sub(a, p[1], p[0]);
    sub(t, q[1], q[0]);
    mul(a, a, t);
    add(b, p[0], p[1]);
    add(t, q[0], q[1]);
    mul(b, b, t);
    mul(c, p[3], q[3]);
    mul(c, c, D2);
    mul(d, p[2], q[2]);
    add(d, d, d);
    sub(e, b, a);
    sub(f, d, c);
    add(g, d, c);
    add(h, b, a);
    mul(p[0], e, f);
    mul(p[1], h, g);
    mul(p[2], g, f);
    mul(p[3], e, h);
}
function cswap(p, q, b) {
    for (let i = 0; i < 4; i++) {
        sel25519(p[i], q[i], b);
    }
}
function pack(r, p) {
    const tx = gf(), ty = gf(), zi = gf();
    inv25519(zi, p[2]);
    mul(tx, p[0], zi);
    mul(ty, p[1], zi);
    pack25519(r, ty);
    r[31] ^= par25519(tx) << 7;
}
function scalarmult(p, q, s) {
    set25519(p[0], gf0);
    set25519(p[1], gf1);
    set25519(p[2], gf1);
    set25519(p[3], gf0);
    for (let i = 255; i >= 0; --i) {
        const b = (s[(i / 8) | 0] >> (i & 7)) & 1;
        cswap(p, q, b);
        edadd(q, p);
        edadd(p, p);
        cswap(p, q, b);
    }
}
function scalarbase(p, s) {
    const q = [gf(), gf(), gf(), gf()];
    set25519(q[0], X);
    set25519(q[1], Y);
    set25519(q[2], gf1);
    mul(q[3], X, Y);
    scalarmult(p, q, s);
}
// Generates key pair from secret 32-byte seed.
function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SEED_LENGTH) {
        throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
    }
    const d = (0, sha512_1.hash)(seed);
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const publicKey = new Uint8Array(32);
    const p = [gf(), gf(), gf(), gf()];
    scalarbase(p, d);
    pack(publicKey, p);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
        publicKey,
        secretKey
    };
}
exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
function generateKeyPair(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_1.wipe)(seed);
    return result;
}
exports.generateKeyPair = generateKeyPair;
function extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
    }
    return new Uint8Array(secretKey.subarray(32));
}
exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
const L = new Float64Array([
    0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2,
    0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10
]);
function modL(r, x) {
    let carry;
    let i;
    let j;
    let k;
    for (i = 63; i >= 32; --i) {
        carry = 0;
        for (j = i - 32, k = i - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
        }
        x[j] += carry;
        x[i] = 0;
    }
    carry = 0;
    for (j = 0; j < 32; j++) {
        x[j] += carry - (x[31] >> 4) * L[j];
        carry = x[j] >> 8;
        x[j] &= 255;
    }
    for (j = 0; j < 32; j++) {
        x[j] -= carry * L[j];
    }
    for (i = 0; i < 32; i++) {
        x[i + 1] += x[i] >> 8;
        r[i] = x[i] & 255;
    }
}
function reduce(r) {
    const x = new Float64Array(64);
    for (let i = 0; i < 64; i++) {
        x[i] = r[i];
    }
    for (let i = 0; i < 64; i++) {
        r[i] = 0;
    }
    modL(r, x);
}
// Returns 64-byte signature of the message under the 64-byte secret key.
function sign(secretKey, message) {
    const x = new Float64Array(64);
    const p = [gf(), gf(), gf(), gf()];
    const d = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const signature = new Uint8Array(64);
    signature.set(d.subarray(32), 32);
    const hs = new sha512_1.SHA512();
    hs.update(signature.subarray(32));
    hs.update(message);
    const r = hs.digest();
    hs.clean();
    reduce(r);
    scalarbase(p, r);
    pack(signature, p);
    hs.reset();
    hs.update(signature.subarray(0, 32));
    hs.update(secretKey.subarray(32));
    hs.update(message);
    const h = hs.digest();
    reduce(h);
    for (let i = 0; i < 32; i++) {
        x[i] = r[i];
    }
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 32; j++) {
            x[i + j] += h[i] * d[j];
        }
    }
    modL(signature.subarray(32), x);
    return signature;
}
exports.sign = sign;
function unpackneg(r, p) {
    const t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
    set25519(r[2], gf1);
    unpack25519(r[1], p);
    square(num, r[1]);
    mul(den, num, D);
    sub(num, num, r[2]);
    add(den, r[2], den);
    square(den2, den);
    square(den4, den2);
    mul(den6, den4, den2);
    mul(t, den6, num);
    mul(t, t, den);
    pow2523(t, t);
    mul(t, t, num);
    mul(t, t, den);
    mul(t, t, den);
    mul(r[0], t, den);
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
        mul(r[0], r[0], I);
    }
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
        return -1;
    }
    if (par25519(r[0]) === (p[31] >> 7)) {
        sub(r[0], gf0, r[0]);
    }
    mul(r[3], r[0], r[1]);
    return 0;
}
function verify(publicKey, message, signature) {
    const t = new Uint8Array(32);
    const p = [gf(), gf(), gf(), gf()];
    const q = [gf(), gf(), gf(), gf()];
    if (signature.length !== exports.SIGNATURE_LENGTH) {
        throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
    }
    if (unpackneg(q, publicKey)) {
        return false;
    }
    const hs = new sha512_1.SHA512();
    hs.update(signature.subarray(0, 32));
    hs.update(publicKey);
    hs.update(message);
    const h = hs.digest();
    reduce(h);
    scalarmult(p, q, h);
    scalarbase(q, signature.subarray(32));
    edadd(p, q);
    pack(t, p);
    if (verify32(signature, t)) {
        return false;
    }
    return true;
}
exports.verify = verify;
/**
 * Convert Ed25519 public key to X25519 public key.
 *
 * Throws if given an invalid public key.
 */
function convertPublicKeyToX25519(publicKey) {
    let q = [gf(), gf(), gf(), gf()];
    if (unpackneg(q, publicKey)) {
        throw new Error("Ed25519: invalid public key");
    }
    // Formula: montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p
    let a = gf();
    let b = gf();
    let y = q[1];
    add(a, gf1, y);
    sub(b, gf1, y);
    inv25519(b, b);
    mul(a, a, b);
    let z = new Uint8Array(32);
    pack25519(z, a);
    return z;
}
exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
/**
 *  Convert Ed25519 secret (private) key to X25519 secret key.
 */
function convertSecretKeyToX25519(secretKey) {
    const d = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const o = new Uint8Array(d.subarray(0, 32));
    (0, wipe_1.wipe)(d);
    return o;
}
exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;

},{"@stablelib/random":11,"@stablelib/sha512":16,"@stablelib/wipe":17}],6:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
function isSerializableHash(h) {
    return (typeof h.saveState !== "undefined" &&
        typeof h.restoreState !== "undefined" &&
        typeof h.cleanSavedState !== "undefined");
}
exports.isSerializableHash = isSerializableHash;
// TODO(dchest): figure out the standardized interface for XOF such as
// SHAKE and BLAKE2X.

},{}],7:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
var hmac_1 = require("@stablelib/hmac");
var wipe_1 = require("@stablelib/wipe");
/**
 * HMAC-based Extract-and-Expand Key Derivation Function.
 *
 * Implements HKDF from RFC5869.
 *
 * Expands the given master key with salt and info into
 * a limited stream of key material.
 */
var HKDF = /** @class */ (function () {
    /**
     * Create a new HKDF instance for the given hash function
     * with the master key, optional salt, and info.
     *
     * - Master key is a high-entropy secret key (not a password).
     * - Salt is a non-secret random value.
     * - Info is application- and/or context-specific information.
     */
    function HKDF(hash, key, salt, info) {
        if (salt === void 0) { salt = new Uint8Array(0); }
        this._counter = new Uint8Array(1); // starts with zero
        this._hash = hash;
        this._info = info;
        // HKDF-Extract uses salt as HMAC key, and key as data.
        var okm = hmac_1.hmac(this._hash, salt, key);
        // Initialize HMAC for expanding with extracted key.
        this._hmac = new hmac_1.HMAC(hash, okm);
        // Allocate buffer.
        this._buffer = new Uint8Array(this._hmac.digestLength);
        this._bufpos = this._buffer.length;
    }
    // Fill buffer with new block of HKDF-Extract output.
    HKDF.prototype._fillBuffer = function () {
        // Increment counter.
        this._counter[0]++;
        var ctr = this._counter[0];
        // Check if counter overflowed.
        if (ctr === 0) {
            throw new Error("hkdf: cannot expand more");
        }
        // Prepare HMAC instance for new data with old key.
        this._hmac.reset();
        // Hash in previous output if it was generated
        // (i.e. counter is greater than 1).
        if (ctr > 1) {
            this._hmac.update(this._buffer);
        }
        // Hash in info if it exists.
        if (this._info) {
            this._hmac.update(this._info);
        }
        // Hash in the counter.
        this._hmac.update(this._counter);
        // Output result to buffer and clean HMAC instance.
        this._hmac.finish(this._buffer);
        // Reset buffer position.
        this._bufpos = 0;
    };
    /**
     * Expand returns next key material of the given length.
     *
     * It throws if expansion limit is reached (which is
     * 254 digests of the underlying HMAC function).
     */
    HKDF.prototype.expand = function (length) {
        var out = new Uint8Array(length);
        for (var i = 0; i < out.length; i++) {
            if (this._bufpos === this._buffer.length) {
                this._fillBuffer();
            }
            out[i] = this._buffer[this._bufpos++];
        }
        return out;
    };
    HKDF.prototype.clean = function () {
        this._hmac.clean();
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._counter);
        this._bufpos = 0;
    };
    return HKDF;
}());
exports.HKDF = HKDF;
// TODO(dchest): maybe implement deriveKey?

},{"@stablelib/hmac":8,"@stablelib/wipe":17}],8:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package hmac implements HMAC algorithm.
 */
var hash_1 = require("@stablelib/hash");
var constant_time_1 = require("@stablelib/constant-time");
var wipe_1 = require("@stablelib/wipe");
/**
 *  HMAC implements hash-based message authentication algorithm.
 */
var HMAC = /** @class */ (function () {
    /**
     * Constructs a new HMAC with the given Hash and secret key.
     */
    function HMAC(hash, key) {
        this._finished = false; // true if HMAC was finalized
        // Initialize inner and outer hashes.
        this._inner = new hash();
        this._outer = new hash();
        // Set block and digest sizes for this HMAC
        // instance to values from the hash.
        this.blockSize = this._outer.blockSize;
        this.digestLength = this._outer.digestLength;
        // Pad temporary stores a key (or its hash) padded with zeroes.
        var pad = new Uint8Array(this.blockSize);
        if (key.length > this.blockSize) {
            // If key is bigger than hash block size, it must be
            // hashed and this hash is used as a key instead.
            this._inner.update(key).finish(pad).clean();
        }
        else {
            // Otherwise, copy the key into pad.
            pad.set(key);
        }
        // Now two different keys are derived from padded key
        // by xoring a different byte value to each.
        // To make inner hash key, xor byte 0x36 into pad.
        for (var i = 0; i < pad.length; i++) {
            pad[i] ^= 0x36;
        }
        // Update inner hash with the result.
        this._inner.update(pad);
        // To make outer hash key, xor byte 0x5c into pad.
        // But since we already xored 0x36 there, we must
        // first undo this by xoring it again.
        for (var i = 0; i < pad.length; i++) {
            pad[i] ^= 0x36 ^ 0x5c;
        }
        // Update outer hash with the result.
        this._outer.update(pad);
        // Save states of both hashes, so that we can quickly restore
        // them later in reset() without the need to remember the actual
        // key and perform this initialization again.
        if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
            this._innerKeyedState = this._inner.saveState();
            this._outerKeyedState = this._outer.saveState();
        }
        // Clean pad.
        wipe_1.wipe(pad);
    }
    /**
     * Returns HMAC state to the state initialized with key
     * to make it possible to run HMAC over the other data with the same
     * key without creating a new instance.
     */
    HMAC.prototype.reset = function () {
        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        }
        // Restore keyed states of inner and outer hashes.
        this._inner.restoreState(this._innerKeyedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    /**
     * Cleans HMAC state.
     */
    HMAC.prototype.clean = function () {
        if (hash_1.isSerializableHash(this._inner)) {
            this._inner.cleanSavedState(this._innerKeyedState);
        }
        if (hash_1.isSerializableHash(this._outer)) {
            this._outer.cleanSavedState(this._outerKeyedState);
        }
        this._inner.clean();
        this._outer.clean();
    };
    /**
     * Updates state with provided data.
     */
    HMAC.prototype.update = function (data) {
        this._inner.update(data);
        return this;
    };
    /**
     * Finalizes HMAC and puts the result in out.
     */
    HMAC.prototype.finish = function (out) {
        if (this._finished) {
            // If HMAC was finalized, outer hash is also finalized,
            // so it produces the same digest it produced when it
            // was finalized.
            this._outer.finish(out);
            return this;
        }
        // Finalize inner hash and store the result temporarily.
        this._inner.finish(out);
        // Update outer hash with digest of inner hash and and finalize it.
        this._outer.update(out.subarray(0, this.digestLength)).finish(out);
        this._finished = true;
        return this;
    };
    /**
     * Returns the computed message authentication code.
     */
    HMAC.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Saves HMAC state.
     * This function is needed for PBKDF2 optimization.
     */
    HMAC.prototype.saveState = function () {
        if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't saveState() because hash doesn't implement it");
        }
        return this._inner.saveState();
    };
    HMAC.prototype.restoreState = function (savedState) {
        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        }
        this._inner.restoreState(savedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    HMAC.prototype.cleanSavedState = function (savedState) {
        if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        }
        this._inner.cleanSavedState(savedState);
    };
    return HMAC;
}());
exports.HMAC = HMAC;
/**
 * Returns HMAC using the given hash constructor for the key over data.
 */
function hmac(hash, key, data) {
    var h = new HMAC(hash, key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hmac = hmac;
/**
 * Returns true if two HMAC digests are equal.
 * Uses constant-time comparison to avoid leaking timing information.
 *
 * Example:
 *
 *    const receivedDigest = ...
 *    const realDigest = hmac(SHA256, key, data);
 *    if (!equal(receivedDigest, realDigest)) {
 *        throw new Error("Authentication error");
 *    }
 */
exports.equal = constant_time_1.equal;

},{"@stablelib/constant-time":4,"@stablelib/hash":6,"@stablelib/wipe":17}],9:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package int provides helper functions for integerss.
 */
// Shim using 16-bit pieces.
function imulShim(a, b) {
    var ah = (a >>> 16) & 0xffff, al = a & 0xffff;
    var bh = (b >>> 16) & 0xffff, bl = b & 0xffff;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
}
/** 32-bit integer multiplication.  */
// Use system Math.imul if available, otherwise use our shim.
exports.mul = Math.imul || imulShim;
/** 32-bit integer addition.  */
function add(a, b) {
    return (a + b) | 0;
}
exports.add = add;
/**  32-bit integer subtraction.  */
function sub(a, b) {
    return (a - b) | 0;
}
exports.sub = sub;
/** 32-bit integer left rotation */
function rotl(x, n) {
    return x << n | x >>> (32 - n);
}
exports.rotl = rotl;
/** 32-bit integer left rotation */
function rotr(x, n) {
    return x << (32 - n) | x >>> n;
}
exports.rotr = rotr;
function isIntegerShim(n) {
    return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
}
/**
 * Returns true if the argument is an integer number.
 *
 * In ES2015, Number.isInteger.
 */
exports.isInteger = Number.isInteger || isIntegerShim;
/**
 *  Math.pow(2, 53) - 1
 *
 *  In ES2015 Number.MAX_SAFE_INTEGER.
 */
exports.MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Returns true if the argument is a safe integer number
 * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)
 *
 * In ES2015, Number.isSafeInteger.
 */
exports.isSafeInteger = function (n) {
    return exports.isInteger(n) && (n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER);
};

},{}],10:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package poly1305 implements Poly1305 one-time message authentication algorithm.
 */
var constant_time_1 = require("@stablelib/constant-time");
var wipe_1 = require("@stablelib/wipe");
exports.DIGEST_LENGTH = 16;
// Port of Andrew Moon's Poly1305-donna-16. Public domain.
// https://github.com/floodyberry/poly1305-donna
/**
 * Poly1305 computes 16-byte authenticator of message using
 * a one-time 32-byte key.
 *
 * Important: key should be used for only one message,
 * it should never repeat.
 */
var Poly1305 = /** @class */ (function () {
    function Poly1305(key) {
        this.digestLength = exports.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = (t0) & 0x1fff;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = ((t1 >>> 10) | (t2 << 6)) & 0x1f03;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = ((t3 >>> 4) | (t4 << 12)) & 0x00ff;
        this._r[5] = ((t4 >>> 1)) & 0x1ffe;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = ((t5 >>> 11) | (t6 << 5)) & 0x1f81;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
        this._r[9] = ((t7 >>> 5)) & 0x007f;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
    }
    Poly1305.prototype._blocks = function (m, mpos, bytes) {
        var hibit = this._fin ? 0 : 1 << 11;
        var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while (bytes >= 16) {
            var t0 = m[mpos + 0] | m[mpos + 1] << 8;
            h0 += (t0) & 0x1fff;
            var t1 = m[mpos + 2] | m[mpos + 3] << 8;
            h1 += ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
            var t2 = m[mpos + 4] | m[mpos + 5] << 8;
            h2 += ((t1 >>> 10) | (t2 << 6)) & 0x1fff;
            var t3 = m[mpos + 6] | m[mpos + 7] << 8;
            h3 += ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
            var t4 = m[mpos + 8] | m[mpos + 9] << 8;
            h4 += ((t3 >>> 4) | (t4 << 12)) & 0x1fff;
            h5 += ((t4 >>> 1)) & 0x1fff;
            var t5 = m[mpos + 10] | m[mpos + 11] << 8;
            h6 += ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
            var t6 = m[mpos + 12] | m[mpos + 13] << 8;
            h7 += ((t5 >>> 11) | (t6 << 5)) & 0x1fff;
            var t7 = m[mpos + 14] | m[mpos + 15] << 8;
            h8 += ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
            h9 += ((t7 >>> 5)) | hibit;
            var c = 0;
            var d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = (d0 >>> 13);
            d0 &= 0x1fff;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += (d0 >>> 13);
            d0 &= 0x1fff;
            var d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = (d1 >>> 13);
            d1 &= 0x1fff;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += (d1 >>> 13);
            d1 &= 0x1fff;
            var d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = (d2 >>> 13);
            d2 &= 0x1fff;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += (d2 >>> 13);
            d2 &= 0x1fff;
            var d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = (d3 >>> 13);
            d3 &= 0x1fff;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += (d3 >>> 13);
            d3 &= 0x1fff;
            var d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = (d4 >>> 13);
            d4 &= 0x1fff;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += (d4 >>> 13);
            d4 &= 0x1fff;
            var d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = (d5 >>> 13);
            d5 &= 0x1fff;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += (d5 >>> 13);
            d5 &= 0x1fff;
            var d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = (d6 >>> 13);
            d6 &= 0x1fff;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += (d6 >>> 13);
            d6 &= 0x1fff;
            var d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = (d7 >>> 13);
            d7 &= 0x1fff;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += (d7 >>> 13);
            d7 &= 0x1fff;
            var d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = (d8 >>> 13);
            d8 &= 0x1fff;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += (d8 >>> 13);
            d8 &= 0x1fff;
            var d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = (d9 >>> 13);
            d9 &= 0x1fff;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += (d9 >>> 13);
            d9 &= 0x1fff;
            c = (((c << 2) + c)) | 0;
            c = (c + d0) | 0;
            d0 = c & 0x1fff;
            c = (c >>> 13);
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
        }
        this._h[0] = h0;
        this._h[1] = h1;
        this._h[2] = h2;
        this._h[3] = h3;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
    };
    Poly1305.prototype.finish = function (mac, macpos) {
        if (macpos === void 0) { macpos = 0; }
        var g = new Uint16Array(10);
        var c;
        var mask;
        var f;
        var i;
        if (this._leftover) {
            i = this._leftover;
            this._buffer[i++] = 1;
            for (; i < 16; i++) {
                this._buffer[i] = 0;
            }
            this._fin = 1;
            this._blocks(this._buffer, 0, 16);
        }
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        for (i = 2; i < 10; i++) {
            this._h[i] += c;
            c = this._h[i] >>> 13;
            this._h[i] &= 0x1fff;
        }
        this._h[0] += (c * 5);
        c = this._h[0] >>> 13;
        this._h[0] &= 0x1fff;
        this._h[1] += c;
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        this._h[2] += c;
        g[0] = this._h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for (i = 1; i < 10; i++) {
            g[i] = this._h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= (1 << 13);
        mask = (c ^ 1) - 1;
        for (i = 0; i < 10; i++) {
            g[i] &= mask;
        }
        mask = ~mask;
        for (i = 0; i < 10; i++) {
            this._h[i] = (this._h[i] & mask) | g[i];
        }
        this._h[0] = ((this._h[0]) | (this._h[1] << 13)) & 0xffff;
        this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 0xffff;
        this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 0xffff;
        this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 0xffff;
        this._h[4] = ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) & 0xffff;
        this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 0xffff;
        this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 0xffff;
        this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 0xffff;
        f = this._h[0] + this._pad[0];
        this._h[0] = f & 0xffff;
        for (i = 1; i < 8; i++) {
            f = (((this._h[i] + this._pad[i]) | 0) + (f >>> 16)) | 0;
            this._h[i] = f & 0xffff;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
    };
    Poly1305.prototype.update = function (m) {
        var mpos = 0;
        var bytes = m.length;
        var want;
        if (this._leftover) {
            want = (16 - this._leftover);
            if (want > bytes) {
                want = bytes;
            }
            for (var i = 0; i < want; i++) {
                this._buffer[this._leftover + i] = m[mpos + i];
            }
            bytes -= want;
            mpos += want;
            this._leftover += want;
            if (this._leftover < 16) {
                return this;
            }
            this._blocks(this._buffer, 0, 16);
            this._leftover = 0;
        }
        if (bytes >= 16) {
            want = bytes - (bytes % 16);
            this._blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }
        if (bytes) {
            for (var i = 0; i < bytes; i++) {
                this._buffer[this._leftover + i] = m[mpos + i];
            }
            this._leftover += bytes;
        }
        return this;
    };
    Poly1305.prototype.digest = function () {
        // TODO(dchest): it behaves differently than other hashes/HMAC,
        // because it throws when finished — others just return saved result.
        if (this._finished) {
            throw new Error("Poly1305 was finished");
        }
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
    };
    Poly1305.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._r);
        wipe_1.wipe(this._h);
        wipe_1.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true; // mark as finished even if not
        return this;
    };
    return Poly1305;
}());
exports.Poly1305 = Poly1305;
/**
 * Returns 16-byte authenticator of data using a one-time 32-byte key.
 *
 * Important: key should be used for only one message, it should never repeat.
 */
function oneTimeAuth(key, data) {
    var h = new Poly1305(key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.oneTimeAuth = oneTimeAuth;
/**
 * Returns true if two authenticators are 16-byte long and equal.
 * Uses contant-time comparison to avoid leaking timing information.
 */
function equal(a, b) {
    if (a.length !== exports.DIGEST_LENGTH || b.length !== exports.DIGEST_LENGTH) {
        return false;
    }
    return constant_time_1.equal(a, b);
}
exports.equal = equal;

},{"@stablelib/constant-time":4,"@stablelib/wipe":17}],11:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
const system_1 = require("./source/system");
const binary_1 = require("@stablelib/binary");
const wipe_1 = require("@stablelib/wipe");
exports.defaultRandomSource = new system_1.SystemRandomSource();
function randomBytes(length, prng = exports.defaultRandomSource) {
    return prng.randomBytes(length);
}
exports.randomBytes = randomBytes;
/**
 * Returns a uniformly random unsigned 32-bit integer.
 */
function randomUint32(prng = exports.defaultRandomSource) {
    // Generate 4-byte random buffer.
    const buf = randomBytes(4, prng);
    // Convert bytes from buffer into a 32-bit integer.
    // It's not important which byte order to use, since
    // the result is random.
    const result = (0, binary_1.readUint32LE)(buf);
    // Clean the buffer.
    (0, wipe_1.wipe)(buf);
    return result;
}
exports.randomUint32 = randomUint32;
/** 62 alphanumeric characters for default charset of randomString() */
const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
/**
 * Returns a uniform random string of the given length
 * with characters from the given charset.
 *
 * Charset must not have more than 256 characters.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */
function randomString(length, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    if (charset.length < 2) {
        throw new Error("randomString charset is too short");
    }
    if (charset.length > 256) {
        throw new Error("randomString charset is too long");
    }
    let out = '';
    const charsLen = charset.length;
    const maxByte = 256 - (256 % charsLen);
    while (length > 0) {
        const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
        for (let i = 0; i < buf.length && length > 0; i++) {
            const randomByte = buf[i];
            if (randomByte < maxByte) {
                out += charset.charAt(randomByte % charsLen);
                length--;
            }
        }
        (0, wipe_1.wipe)(buf);
    }
    return out;
}
exports.randomString = randomString;
/**
 * Returns uniform random string containing at least the given
 * number of bits of entropy.
 *
 * For example, randomStringForEntropy(128) will return a 22-character
 * alphanumeric string, while randomStringForEntropy(128, "0123456789")
 * will return a 39-character numeric string, both will contain at
 * least 128 bits of entropy.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */
function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length, charset, prng);
}
exports.randomStringForEntropy = randomStringForEntropy;

},{"./source/system":14,"@stablelib/binary":1,"@stablelib/wipe":17}],12:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserRandomSource = void 0;
const QUOTA = 65536;
class BrowserRandomSource {
    constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        const browserCrypto = typeof self !== 'undefined'
            ? (self.crypto || self.msCrypto) // IE11 has msCrypto
            : null;
        if (browserCrypto && browserCrypto.getRandomValues !== undefined) {
            this._crypto = browserCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) {
            throw new Error("Browser random byte generator is not available.");
        }
        const out = new Uint8Array(length);
        for (let i = 0; i < out.length; i += QUOTA) {
            this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
        }
        return out;
    }
}
exports.BrowserRandomSource = BrowserRandomSource;

},{}],13:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeRandomSource = void 0;
const wipe_1 = require("@stablelib/wipe");
class NodeRandomSource {
    constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        if (typeof require !== "undefined") {
            const nodeCrypto = require("crypto");
            if (nodeCrypto && nodeCrypto.randomBytes) {
                this._crypto = nodeCrypto;
                this.isAvailable = true;
                this.isInstantiated = true;
            }
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) {
            throw new Error("Node.js random byte generator is not available.");
        }
        // Get random bytes (result is Buffer).
        let buffer = this._crypto.randomBytes(length);
        // Make sure we got the length that we requested.
        if (buffer.length !== length) {
            throw new Error("NodeRandomSource: got fewer bytes than requested");
        }
        // Allocate output array.
        const out = new Uint8Array(length);
        // Copy bytes from buffer to output.
        for (let i = 0; i < out.length; i++) {
            out[i] = buffer[i];
        }
        // Cleanup.
        (0, wipe_1.wipe)(buffer);
        return out;
    }
}
exports.NodeRandomSource = NodeRandomSource;

},{"@stablelib/wipe":17,"crypto":91}],14:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemRandomSource = void 0;
const browser_1 = require("./browser");
const node_1 = require("./node");
class SystemRandomSource {
    constructor() {
        this.isAvailable = false;
        this.name = "";
        // Try browser.
        this._source = new browser_1.BrowserRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Browser";
            return;
        }
        // If no browser source, try Node.
        this._source = new node_1.NodeRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Node";
            return;
        }
        // No sources, we're out of options.
    }
    randomBytes(length) {
        if (!this.isAvailable) {
            throw new Error("System random byte generator is not available.");
        }
        return this._source.randomBytes(length);
    }
}
exports.SystemRandomSource = SystemRandomSource;

},{"./browser":12,"./node":13}],15:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
var binary_1 = require("@stablelib/binary");
var wipe_1 = require("@stablelib/wipe");
exports.DIGEST_LENGTH = 32;
exports.BLOCK_SIZE = 64;
/**
 * SHA2-256 cryptographic hash algorithm.
 */
var SHA256 = /** @class */ (function () {
    function SHA256() {
        /** Length of hash output */
        this.digestLength = exports.DIGEST_LENGTH;
        /** Block size */
        this.blockSize = exports.BLOCK_SIZE;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._state = new Int32Array(8); // hash state
        this._temp = new Int32Array(64); // temporary state
        this._buffer = new Uint8Array(128); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA256.prototype._initState = function () {
        this._state[0] = 0x6a09e667;
        this._state[1] = 0xbb67ae85;
        this._state[2] = 0x3c6ef372;
        this._state[3] = 0xa54ff53a;
        this._state[4] = 0x510e527f;
        this._state[5] = 0x9b05688c;
        this._state[6] = 0x1f83d9ab;
        this._state[7] = 0x5be0cd19;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */
    SHA256.prototype.reset = function () {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */
    SHA256.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._temp);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */
    SHA256.prototype.update = function (data, dataLength) {
        if (dataLength === void 0) { dataLength = data.length; }
        if (this._finished) {
            throw new Error("SHA256: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while (this._bufferLength < this.blockSize && dataLength > 0) {
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */
    SHA256.prototype.finish = function (out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = (bytesHashed / 0x20000000) | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = (bytesHashed % 64 < 56) ? 64 : 128;
            this._buffer[left] = 0x80;
            for (var i = left + 1; i < padLength - 8; i++) {
                this._buffer[i] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
            this._finished = true;
        }
        for (var i = 0; i < this.digestLength / 4; i++) {
            binary_1.writeUint32BE(this._state[i], out, i * 4);
        }
        return this;
    };
    /**
     * Returns the final hash digest.
     */
    SHA256.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Returns hash state to be used with restoreState().
     * Only chain value is saved, not buffers or other
     * state variables.
     */
    SHA256.prototype.saveState = function () {
        if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
        }
        return {
            state: new Int32Array(this._state),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Restores state saved by saveState() and sets bytesHashed
     * to the given value.
     */
    SHA256.prototype.restoreState = function (savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */
    SHA256.prototype.cleanSavedState = function (savedState) {
        wipe_1.wipe(savedState.state);
        if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA256;
}());
exports.SHA256 = SHA256;
// Constants
var K = new Int32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
    0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
    0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
    0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
    0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
    0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
    0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
    0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
    0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
function hashBlocks(w, v, p, pos, len) {
    while (len >= 64) {
        var a = v[0];
        var b = v[1];
        var c = v[2];
        var d = v[3];
        var e = v[4];
        var f = v[5];
        var g = v[6];
        var h = v[7];
        for (var i = 0; i < 16; i++) {
            var j = pos + i * 4;
            w[i] = binary_1.readUint32BE(p, j);
        }
        for (var i = 16; i < 64; i++) {
            var u = w[i - 2];
            var t1 = (u >>> 17 | u << (32 - 17)) ^ (u >>> 19 | u << (32 - 19)) ^ (u >>> 10);
            u = w[i - 15];
            var t2 = (u >>> 7 | u << (32 - 7)) ^ (u >>> 18 | u << (32 - 18)) ^ (u >>> 3);
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
        }
        for (var i = 0; i < 64; i++) {
            var t1 = (((((e >>> 6 | e << (32 - 6)) ^ (e >>> 11 | e << (32 - 11)) ^
                (e >>> 25 | e << (32 - 25))) + ((e & f) ^ (~e & g))) | 0) +
                ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;
            var t2 = (((a >>> 2 | a << (32 - 2)) ^ (a >>> 13 | a << (32 - 13)) ^
                (a >>> 22 | a << (32 - 22))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
            h = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }
        v[0] += a;
        v[1] += b;
        v[2] += c;
        v[3] += d;
        v[4] += e;
        v[5] += f;
        v[6] += g;
        v[7] += h;
        pos += 64;
        len -= 64;
    }
    return pos;
}
function hash(data) {
    var h = new SHA256();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hash = hash;

},{"@stablelib/binary":1,"@stablelib/wipe":17}],16:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
var binary_1 = require("@stablelib/binary");
var wipe_1 = require("@stablelib/wipe");
exports.DIGEST_LENGTH = 64;
exports.BLOCK_SIZE = 128;
/**
 * SHA-2-512 cryptographic hash algorithm.
 */
var SHA512 = /** @class */ (function () {
    function SHA512() {
        /** Length of hash output */
        this.digestLength = exports.DIGEST_LENGTH;
        /** Block size */
        this.blockSize = exports.BLOCK_SIZE;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._stateHi = new Int32Array(8); // hash state, high bytes
        this._stateLo = new Int32Array(8); // hash state, low bytes
        this._tempHi = new Int32Array(16); // temporary state, high bytes
        this._tempLo = new Int32Array(16); // temporary state, low bytes
        this._buffer = new Uint8Array(256); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA512.prototype._initState = function () {
        this._stateHi[0] = 0x6a09e667;
        this._stateHi[1] = 0xbb67ae85;
        this._stateHi[2] = 0x3c6ef372;
        this._stateHi[3] = 0xa54ff53a;
        this._stateHi[4] = 0x510e527f;
        this._stateHi[5] = 0x9b05688c;
        this._stateHi[6] = 0x1f83d9ab;
        this._stateHi[7] = 0x5be0cd19;
        this._stateLo[0] = 0xf3bcc908;
        this._stateLo[1] = 0x84caa73b;
        this._stateLo[2] = 0xfe94f82b;
        this._stateLo[3] = 0x5f1d36f1;
        this._stateLo[4] = 0xade682d1;
        this._stateLo[5] = 0x2b3e6c1f;
        this._stateLo[6] = 0xfb41bd6b;
        this._stateLo[7] = 0x137e2179;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */
    SHA512.prototype.reset = function () {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */
    SHA512.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._tempHi);
        wipe_1.wipe(this._tempLo);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */
    SHA512.prototype.update = function (data, dataLength) {
        if (dataLength === void 0) { dataLength = data.length; }
        if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */
    SHA512.prototype.finish = function (out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = (bytesHashed / 0x20000000) | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = (bytesHashed % 128 < 112) ? 128 : 256;
            this._buffer[left] = 0x80;
            for (var i = left + 1; i < padLength - 8; i++) {
                this._buffer[i] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
        }
        for (var i = 0; i < this.digestLength / 8; i++) {
            binary_1.writeUint32BE(this._stateHi[i], out, i * 8);
            binary_1.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
        }
        return this;
    };
    /**
     * Returns the final hash digest.
     */
    SHA512.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization. Returns hash state to be
     * used with restoreState(). Only chain value is saved, not buffers or
     * other state variables.
     */
    SHA512.prototype.saveState = function () {
        if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
        }
        return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization. Restores state saved by
     * saveState() and sets bytesHashed to the given value.
     */
    SHA512.prototype.restoreState = function (savedState) {
        this._stateHi.set(savedState.stateHi);
        this._stateLo.set(savedState.stateLo);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */
    SHA512.prototype.cleanSavedState = function (savedState) {
        wipe_1.wipe(savedState.stateHi);
        wipe_1.wipe(savedState.stateLo);
        if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA512;
}());
exports.SHA512 = SHA512;
// Constants
var K = new Int32Array([
    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
]);
function hashBlocks(wh, wl, hh, hl, m, pos, len) {
    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h, l;
    var th, tl;
    var a, b, c, d;
    while (len >= 128) {
        for (var i = 0; i < 16; i++) {
            var j = 8 * i + pos;
            wh[i] = binary_1.readUint32BE(m, j);
            wl[i] = binary_1.readUint32BE(m, j + 4);
        }
        for (var i = 0; i < 80; i++) {
            var bh0 = ah0;
            var bh1 = ah1;
            var bh2 = ah2;
            var bh3 = ah3;
            var bh4 = ah4;
            var bh5 = ah5;
            var bh6 = ah6;
            var bh7 = ah7;
            var bl0 = al0;
            var bl1 = al1;
            var bl2 = al2;
            var bl3 = al3;
            var bl4 = al4;
            var bl5 = al5;
            var bl6 = al6;
            var bl7 = al7;
            // add
            h = ah7;
            l = al7;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            // Sigma1
            h = ((ah4 >>> 14) | (al4 << (32 - 14))) ^ ((ah4 >>> 18) |
                (al4 << (32 - 18))) ^ ((al4 >>> (41 - 32)) | (ah4 << (32 - (41 - 32))));
            l = ((al4 >>> 14) | (ah4 << (32 - 14))) ^ ((al4 >>> 18) |
                (ah4 << (32 - 18))) ^ ((ah4 >>> (41 - 32)) | (al4 << (32 - (41 - 32))));
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // Ch
            h = (ah4 & ah5) ^ (~ah4 & ah6);
            l = (al4 & al5) ^ (~al4 & al6);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // K
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // w
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 0xffff | d << 16;
            tl = a & 0xffff | b << 16;
            // add
            h = th;
            l = tl;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            // Sigma0
            h = ((ah0 >>> 28) | (al0 << (32 - 28))) ^ ((al0 >>> (34 - 32)) |
                (ah0 << (32 - (34 - 32)))) ^ ((al0 >>> (39 - 32)) | (ah0 << (32 - (39 - 32))));
            l = ((al0 >>> 28) | (ah0 << (32 - 28))) ^ ((ah0 >>> (34 - 32)) |
                (al0 << (32 - (34 - 32)))) ^ ((ah0 >>> (39 - 32)) | (al0 << (32 - (39 - 32))));
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // Maj
            h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
            l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = (c & 0xffff) | (d << 16);
            bl7 = (a & 0xffff) | (b << 16);
            // add
            h = bh3;
            l = bl3;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = (c & 0xffff) | (d << 16);
            bl3 = (a & 0xffff) | (b << 16);
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
                for (var j = 0; j < 16; j++) {
                    // add
                    h = wh[j];
                    l = wl[j];
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16;
                    h = wh[(j + 9) % 16];
                    l = wl[(j + 9) % 16];
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma0
                    th = wh[(j + 1) % 16];
                    tl = wl[(j + 1) % 16];
                    h = ((th >>> 1) | (tl << (32 - 1))) ^ ((th >>> 8) |
                        (tl << (32 - 8))) ^ (th >>> 7);
                    l = ((tl >>> 1) | (th << (32 - 1))) ^ ((tl >>> 8) |
                        (th << (32 - 8))) ^ ((tl >>> 7) | (th << (32 - 7)));
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma1
                    th = wh[(j + 14) % 16];
                    tl = wl[(j + 14) % 16];
                    h = ((th >>> 19) | (tl << (32 - 19))) ^ ((tl >>> (61 - 32)) |
                        (th << (32 - (61 - 32)))) ^ (th >>> 6);
                    l = ((tl >>> 19) | (th << (32 - 19))) ^ ((th >>> (61 - 32)) |
                        (tl << (32 - (61 - 32)))) ^ ((tl >>> 6) | (th << (32 - 6)));
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    wh[j] = (c & 0xffff) | (d << 16);
                    wl[j] = (a & 0xffff) | (b << 16);
                }
            }
        }
        // add
        h = ah0;
        l = al0;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[0];
        l = hl[0];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[0] = ah0 = (c & 0xffff) | (d << 16);
        hl[0] = al0 = (a & 0xffff) | (b << 16);
        h = ah1;
        l = al1;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[1];
        l = hl[1];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[1] = ah1 = (c & 0xffff) | (d << 16);
        hl[1] = al1 = (a & 0xffff) | (b << 16);
        h = ah2;
        l = al2;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[2];
        l = hl[2];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[2] = ah2 = (c & 0xffff) | (d << 16);
        hl[2] = al2 = (a & 0xffff) | (b << 16);
        h = ah3;
        l = al3;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[3];
        l = hl[3];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[3] = ah3 = (c & 0xffff) | (d << 16);
        hl[3] = al3 = (a & 0xffff) | (b << 16);
        h = ah4;
        l = al4;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[4];
        l = hl[4];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[4] = ah4 = (c & 0xffff) | (d << 16);
        hl[4] = al4 = (a & 0xffff) | (b << 16);
        h = ah5;
        l = al5;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[5];
        l = hl[5];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[5] = ah5 = (c & 0xffff) | (d << 16);
        hl[5] = al5 = (a & 0xffff) | (b << 16);
        h = ah6;
        l = al6;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[6];
        l = hl[6];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[6] = ah6 = (c & 0xffff) | (d << 16);
        hl[6] = al6 = (a & 0xffff) | (b << 16);
        h = ah7;
        l = al7;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[7];
        l = hl[7];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[7] = ah7 = (c & 0xffff) | (d << 16);
        hl[7] = al7 = (a & 0xffff) | (b << 16);
        pos += 128;
        len -= 128;
    }
    return pos;
}
function hash(data) {
    var h = new SHA512();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hash = hash;

},{"@stablelib/binary":1,"@stablelib/wipe":17}],17:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets all values in the given array to zero and returns it.
 *
 * The fact that it sets bytes to zero can be relied on.
 *
 * There is no guarantee that this function makes data disappear from memory,
 * as runtime implementation can, for example, have copying garbage collector
 * that will make copies of sensitive data before we wipe it. Or that an
 * operating system will write our data to swap or sleep image. Another thing
 * is that an optimizing compiler can remove calls to this function or make it
 * no-op. There's nothing we can do with it, so we just do our best and hope
 * that everything will be okay and good will triumph over evil.
 */
function wipe(array) {
    // Right now it's similar to array.fill(0). If it turns
    // out that runtimes optimize this call away, maybe
    // we can try something else.
    for (var i = 0; i < array.length; i++) {
        array[i] = 0;
    }
    return array;
}
exports.wipe = wipe;

},{}],18:[function(require,module,exports){
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.scalarMultBase = exports.scalarMult = exports.SHARED_KEY_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = void 0;
/**
 * Package x25519 implements X25519 key agreement.
 */
const random_1 = require("@stablelib/random");
const wipe_1 = require("@stablelib/wipe");
exports.PUBLIC_KEY_LENGTH = 32;
exports.SECRET_KEY_LENGTH = 32;
exports.SHARED_KEY_LENGTH = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function gf(init) {
    const r = new Float64Array(16);
    if (init) {
        for (let i = 0; i < init.length; i++) {
            r[i] = init[i];
        }
    }
    return r;
}
// Base point.
const _9 = new Uint8Array(32);
_9[0] = 9;
const _121665 = gf([0xdb41, 1]);
function car25519(o) {
    let c = 1;
    for (let i = 0; i < 16; i++) {
        let v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
    const c = ~(b - 1);
    for (let i = 0; i < 16; i++) {
        const t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function pack25519(o, n) {
    const m = gf();
    const t = gf();
    for (let i = 0; i < 16; i++) {
        t[i] = n[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j = 0; j < 2; j++) {
        m[0] = t[0] - 0xffed;
        for (let i = 1; i < 15; i++) {
            m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
        const b = (m[15] >> 16) & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
    }
    for (let i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function unpack25519(o, n) {
    for (let i = 0; i < 16; i++) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    }
    o[15] &= 0x7fff;
}
function add(o, a, b) {
    for (let i = 0; i < 16; i++) {
        o[i] = a[i] + b[i];
    }
}
function sub(o, a, b) {
    for (let i = 0; i < 16; i++) {
        o[i] = a[i] - b[i];
    }
}
function mul(o, a, b) {
    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function square(o, a) {
    mul(o, a, a);
}
function inv25519(o, inp) {
    const c = gf();
    for (let i = 0; i < 16; i++) {
        c[i] = inp[i];
    }
    for (let i = 253; i >= 0; i--) {
        square(c, c);
        if (i !== 2 && i !== 4) {
            mul(c, c, inp);
        }
    }
    for (let i = 0; i < 16; i++) {
        o[i] = c[i];
    }
}
function scalarMult(n, p) {
    const z = new Uint8Array(32);
    const x = new Float64Array(80);
    const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
    for (let i = 0; i < 31; i++) {
        z[i] = n[i];
    }
    z[31] = (n[31] & 127) | 64;
    z[0] &= 248;
    unpack25519(x, p);
    for (let i = 0; i < 16; i++) {
        b[i] = x[i];
    }
    a[0] = d[0] = 1;
    for (let i = 254; i >= 0; --i) {
        const r = (z[i >>> 3] >>> (i & 7)) & 1;
        sel25519(a, b, r);
        sel25519(c, d, r);
        add(e, a, c);
        sub(a, a, c);
        add(c, b, d);
        sub(b, b, d);
        square(d, e);
        square(f, a);
        mul(a, c, a);
        mul(c, b, e);
        add(e, a, c);
        sub(a, a, c);
        square(b, a);
        sub(c, d, f);
        mul(a, c, _121665);
        add(a, a, d);
        mul(c, c, a);
        mul(a, d, f);
        mul(d, b, x);
        square(b, e);
        sel25519(a, b, r);
        sel25519(c, d, r);
    }
    for (let i = 0; i < 16; i++) {
        x[i + 16] = a[i];
        x[i + 32] = c[i];
        x[i + 48] = b[i];
        x[i + 64] = d[i];
    }
    const x32 = x.subarray(32);
    const x16 = x.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    const q = new Uint8Array(32);
    pack25519(q, x16);
    return q;
}
exports.scalarMult = scalarMult;
function scalarMultBase(n) {
    return scalarMult(n, _9);
}
exports.scalarMultBase = scalarMultBase;
function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`x25519: seed must be ${exports.SECRET_KEY_LENGTH} bytes`);
    }
    const secretKey = new Uint8Array(seed);
    const publicKey = scalarMultBase(secretKey);
    return {
        publicKey,
        secretKey
    };
}
exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
function generateKeyPair(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_1.wipe)(seed);
    return result;
}
exports.generateKeyPair = generateKeyPair;
/**
 * Returns a shared key between our secret key and a peer's public key.
 *
 * Throws an error if the given keys are of wrong length.
 *
 * If rejectZero is true throws if the calculated shared key is all-zero.
 * From RFC 7748:
 *
 * > Protocol designers using Diffie-Hellman over the curves defined in
 * > this document must not assume "contributory behavior".  Specially,
 * > contributory behavior means that both parties' private keys
 * > contribute to the resulting shared key.  Since curve25519 and
 * > curve448 have cofactors of 8 and 4 (respectively), an input point of
 * > small order will eliminate any contribution from the other party's
 * > private key.  This situation can be detected by checking for the all-
 * > zero output, which implementations MAY do, as specified in Section 6.
 * > However, a large number of existing implementations do not do this.
 *
 * IMPORTANT: the returned key is a raw result of scalar multiplication.
 * To use it as a key material, hash it with a cryptographic hash function.
 */
function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
    if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect secret key length");
    }
    if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect public key length");
    }
    const result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
        let zeros = 0;
        for (let i = 0; i < result.length; i++) {
            zeros |= result[i];
        }
        if (zeros === 0) {
            throw new Error("X25519: invalid shared key");
        }
    }
    return result;
}
exports.sharedKey = sharedKey;

},{"@stablelib/random":11,"@stablelib/wipe":17}],19:[function(require,module,exports){
(function (global){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],20:[function(require,module,exports){
(function (process){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
function isReactNative() {
    return (typeof document === "undefined" &&
        typeof navigator !== "undefined" &&
        navigator.product === "ReactNative");
}
exports.isReactNative = isReactNative;
function isNode() {
    return (typeof process !== "undefined" &&
        typeof process.versions !== "undefined" &&
        typeof process.versions.node !== "undefined");
}
exports.isNode = isNode;
function isBrowser() {
    return !isReactNative() && !isNode();
}
exports.isBrowser = isBrowser;

}).call(this)}).call(this,require('_process'))
},{"_process":139}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./crypto"), exports);
tslib_1.__exportStar(require("./env"), exports);

},{"./crypto":19,"./env":20,"tslib":124}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IEvents = void 0;
class IEvents {}
exports.IEvents = IEvents;

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _events = require("./events");
Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _events[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _events[key];
    }
  });
});

},{"./events":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEARTBEAT_EVENTS = exports.HEARTBEAT_INTERVAL = void 0;
const time_1 = require("@walletconnect/time");
exports.HEARTBEAT_INTERVAL = time_1.FIVE_SECONDS;
exports.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse",
};

},{"@walletconnect/time":81}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./heartbeat"), exports);

},{"./heartbeat":24,"tslib":124}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartBeat = void 0;
const tslib_1 = require("tslib");
const events_1 = require("events");
const time_1 = require("@walletconnect/time");
const types_1 = require("./types");
const constants_1 = require("./constants");
class HeartBeat extends types_1.IHeartBeat {
    constructor(opts) {
        super(opts);
        this.events = new events_1.EventEmitter();
        this.interval = constants_1.HEARTBEAT_INTERVAL;
        this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || constants_1.HEARTBEAT_INTERVAL;
    }
    static init(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const heartbeat = new HeartBeat(opts);
            yield heartbeat.init();
            return heartbeat;
        });
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
        });
    }
    on(event, listener) {
        this.events.on(event, listener);
    }
    once(event, listener) {
        this.events.once(event, listener);
    }
    off(event, listener) {
        this.events.off(event, listener);
    }
    removeListener(event, listener) {
        this.events.removeListener(event, listener);
    }
    initialize() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            setInterval(() => this.pulse(), time_1.toMiliseconds(this.interval));
        });
    }
    pulse() {
        this.events.emit(constants_1.HEARTBEAT_EVENTS.pulse);
    }
}
exports.HeartBeat = HeartBeat;

},{"./constants":25,"./types":29,"@walletconnect/time":81,"events":137,"tslib":124}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./heartbeat"), exports);
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./constants"), exports);

},{"./constants":25,"./heartbeat":26,"./types":29,"tslib":124}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHeartBeat = void 0;
const events_1 = require("@walletconnect/events");
class IHeartBeat extends events_1.IEvents {
    constructor(opts) {
        super();
    }
}
exports.IHeartBeat = IHeartBeat;

},{"@walletconnect/events":23}],29:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"./heartbeat":28,"dup":25,"tslib":124}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;
var _provider = _interopRequireWildcard(require("./provider"));
Object.keys(_provider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _provider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _provider[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = _provider.default;
exports.default = _default;

},{"./provider":31}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.JsonRpcProvider = void 0;
var _events = require("events");
var _jsonrpcUtils = require("@walletconnect/jsonrpc-utils");
class JsonRpcProvider extends _jsonrpcUtils.IJsonRpcProvider {
  constructor(connection) {
    super(connection);
    this.events = new _events.EventEmitter();
    this.hasRegisteredEventListeners = false;
    this.connection = this.setConnection(connection);
    if (this.connection.connected) {
      this.registerEventListeners();
    }
  }
  async connect(connection = this.connection) {
    await this.open(connection);
  }
  async disconnect() {
    await this.close();
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async request(request, context) {
    return this.requestStrict((0, _jsonrpcUtils.formatJsonRpcRequest)(request.method, request.params || []), context);
  }
  async requestStrict(request, context) {
    return new Promise(async (resolve, reject) => {
      if (!this.connection.connected) {
        try {
          await this.open();
        } catch (e) {
          reject(e);
        }
      }
      this.events.on(`${request.id}`, response => {
        if ((0, _jsonrpcUtils.isJsonRpcError)(response)) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
      try {
        await this.connection.send(request, context);
      } catch (e) {
        reject(e);
      }
    });
  }
  setConnection(connection = this.connection) {
    return connection;
  }
  onPayload(payload) {
    this.events.emit("payload", payload);
    if ((0, _jsonrpcUtils.isJsonRpcResponse)(payload)) {
      this.events.emit(`${payload.id}`, payload);
    } else {
      this.events.emit("message", {
        type: payload.method,
        data: payload.params
      });
    }
  }
  async open(connection = this.connection) {
    if (this.connection === connection && this.connection.connected) return;
    if (this.connection.connected) this.close();
    if (typeof connection === "string") {
      await this.connection.open(connection);
      connection = this.connection;
    }
    this.connection = this.setConnection(connection);
    await this.connection.open();
    this.registerEventListeners();
    this.events.emit("connect");
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    if (this.hasRegisteredEventListeners) return;
    this.connection.on("payload", payload => this.onPayload(payload));
    this.connection.on("close", () => this.events.emit("disconnect"));
    this.connection.on("error", error => this.events.emit("error", error));
    this.hasRegisteredEventListeners = true;
  }
}
exports.JsonRpcProvider = JsonRpcProvider;
var _default = JsonRpcProvider;
exports.default = _default;

},{"@walletconnect/jsonrpc-utils":41,"events":137}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsonrpc = require("./jsonrpc");
Object.keys(_jsonrpc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jsonrpc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jsonrpc[key];
    }
  });
});
var _misc = require("./misc");
Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _misc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _misc[key];
    }
  });
});
var _provider = require("./provider");
Object.keys(_provider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _provider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _provider[key];
    }
  });
});
var _validator = require("./validator");
Object.keys(_validator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validator[key];
    }
  });
});

},{"./jsonrpc":33,"./misc":34,"./provider":35,"./validator":36}],33:[function(require,module,exports){

},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IEvents = void 0;
class IEvents {}
exports.IEvents = IEvents;

},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IJsonRpcProvider = exports.IJsonRpcConnection = exports.IBaseJsonRpcProvider = void 0;
var _misc = require("./misc");
class IJsonRpcConnection extends _misc.IEvents {
  constructor(opts) {
    super();
  }
}
exports.IJsonRpcConnection = IJsonRpcConnection;
class IBaseJsonRpcProvider extends _misc.IEvents {
  constructor() {
    super();
  }
}
exports.IBaseJsonRpcProvider = IBaseJsonRpcProvider;
class IJsonRpcProvider extends IBaseJsonRpcProvider {
  constructor(connection) {
    super();
  }
}
exports.IJsonRpcProvider = IJsonRpcProvider;

},{"./misc":34}],36:[function(require,module,exports){

},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STANDARD_ERROR_MAP = exports.SERVER_ERROR_CODE_RANGE = exports.SERVER_ERROR = exports.RESERVED_ERROR_CODES = exports.PARSE_ERROR = exports.METHOD_NOT_FOUND = exports.INVALID_REQUEST = exports.INVALID_PARAMS = exports.INTERNAL_ERROR = exports.DEFAULT_ERROR = void 0;
const PARSE_ERROR = "PARSE_ERROR";
exports.PARSE_ERROR = PARSE_ERROR;
const INVALID_REQUEST = "INVALID_REQUEST";
exports.INVALID_REQUEST = INVALID_REQUEST;
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
exports.METHOD_NOT_FOUND = METHOD_NOT_FOUND;
const INVALID_PARAMS = "INVALID_PARAMS";
exports.INVALID_PARAMS = INVALID_PARAMS;
const INTERNAL_ERROR = "INTERNAL_ERROR";
exports.INTERNAL_ERROR = INTERNAL_ERROR;
const SERVER_ERROR = "SERVER_ERROR";
exports.SERVER_ERROR = SERVER_ERROR;
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
exports.RESERVED_ERROR_CODES = RESERVED_ERROR_CODES;
const SERVER_ERROR_CODE_RANGE = [-32000, -32099];
exports.SERVER_ERROR_CODE_RANGE = SERVER_ERROR_CODE_RANGE;
const STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: {
    code: -32700,
    message: "Parse error"
  },
  [INVALID_REQUEST]: {
    code: -32600,
    message: "Invalid Request"
  },
  [METHOD_NOT_FOUND]: {
    code: -32601,
    message: "Method not found"
  },
  [INVALID_PARAMS]: {
    code: -32602,
    message: "Invalid params"
  },
  [INTERNAL_ERROR]: {
    code: -32603,
    message: "Internal error"
  },
  [SERVER_ERROR]: {
    code: -32000,
    message: "Server error"
  }
};
exports.STANDARD_ERROR_MAP = STANDARD_ERROR_MAP;
const DEFAULT_ERROR = SERVER_ERROR;
exports.DEFAULT_ERROR = DEFAULT_ERROR;

},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  isNodeJs: true
};
exports.isNodeJs = void 0;
var _environment = require("@walletconnect/environment");
Object.keys(_environment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _environment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _environment[key];
    }
  });
});
const isNodeJs = _environment.isNode;
exports.isNodeJs = isNodeJs;

},{"@walletconnect/environment":21}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getError = getError;
exports.getErrorByCode = getErrorByCode;
exports.isReservedErrorCode = isReservedErrorCode;
exports.isServerErrorCode = isServerErrorCode;
exports.isValidErrorCode = isValidErrorCode;
exports.parseConnectionError = parseConnectionError;
exports.validateJsonRpcError = validateJsonRpcError;
var _constants = require("./constants");
function isServerErrorCode(code) {
  return code <= _constants.SERVER_ERROR_CODE_RANGE[0] && code >= _constants.SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code) {
  return _constants.RESERVED_ERROR_CODES.includes(code);
}
function isValidErrorCode(code) {
  return typeof code === "number";
}
function getError(type) {
  if (!Object.keys(_constants.STANDARD_ERROR_MAP).includes(type)) {
    return _constants.STANDARD_ERROR_MAP[_constants.DEFAULT_ERROR];
  }
  return _constants.STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
  const match = Object.values(_constants.STANDARD_ERROR_MAP).find(e => e.code === code);
  if (!match) {
    return _constants.STANDARD_ERROR_MAP[_constants.DEFAULT_ERROR];
  }
  return match;
}
function validateJsonRpcError(response) {
  if (typeof response.error.code === "undefined") {
    return {
      valid: false,
      error: "Missing code for JSON-RPC error"
    };
  }
  if (typeof response.error.message === "undefined") {
    return {
      valid: false,
      error: "Missing message for JSON-RPC error"
    };
  }
  if (!isValidErrorCode(response.error.code)) {
    return {
      valid: false,
      error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
  }
  if (isReservedErrorCode(response.error.code)) {
    const error = getErrorByCode(response.error.code);
    if (error.message !== _constants.STANDARD_ERROR_MAP[_constants.DEFAULT_ERROR].message && response.error.message === error.message) {
      return {
        valid: false,
        error: `Invalid error code message for JSON-RPC: ${response.error.code}`
      };
    }
  }
  return {
    valid: true
  };
}
function parseConnectionError(e, url, type) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e;
}

},{"./constants":37}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatErrorMessage = formatErrorMessage;
exports.formatJsonRpcError = formatJsonRpcError;
exports.formatJsonRpcRequest = formatJsonRpcRequest;
exports.formatJsonRpcResult = formatJsonRpcResult;
exports.payloadId = payloadId;
var _error = require("./error");
var _constants = require("./constants");
function payloadId() {
  const date = Date.now() * Math.pow(10, 3);
  const extra = Math.floor(Math.random() * Math.pow(10, 3));
  return date + extra;
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error, data)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return (0, _error.getError)(_constants.INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, (0, _error.getError)(_constants.SERVER_ERROR)), {
      message: error
    });
  }
  if (typeof data !== "undefined") {
    error.data = data;
  }
  if ((0, _error.isReservedErrorCode)(error.code)) {
    error = (0, _error.getErrorByCode)(error.code);
  }
  return error;
}

},{"./constants":37,"./error":39}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _constants = require("./constants");
Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});
var _error = require("./error");
Object.keys(_error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _error[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _error[key];
    }
  });
});
var _env = require("./env");
Object.keys(_env).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _env[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _env[key];
    }
  });
});
var _format = require("./format");
Object.keys(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _format[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _format[key];
    }
  });
});
var _routing = require("./routing");
Object.keys(_routing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _routing[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _routing[key];
    }
  });
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _url = require("./url");
Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _url[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _url[key];
    }
  });
});
var _validators = require("./validators");
Object.keys(_validators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validators[key];
    }
  });
});

},{"./constants":37,"./env":38,"./error":39,"./format":40,"./routing":42,"./types":43,"./url":44,"./validators":45}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidDefaultRoute = isValidDefaultRoute;
exports.isValidLeadingWildcardRoute = isValidLeadingWildcardRoute;
exports.isValidRoute = isValidRoute;
exports.isValidTrailingWildcardRoute = isValidTrailingWildcardRoute;
exports.isValidWildcardRoute = isValidWildcardRoute;
function isValidRoute(route) {
  if (route.includes("*")) {
    return isValidWildcardRoute(route);
  }
  if (/\W/g.test(route)) {
    return false;
  }
  return true;
}
function isValidDefaultRoute(route) {
  return route === "*";
}
function isValidWildcardRoute(route) {
  if (isValidDefaultRoute(route)) {
    return true;
  }
  if (!route.includes("*")) {
    return false;
  }
  if (route.split("*").length !== 2) {
    return false;
  }
  if (route.split("*").filter(x => x.trim() === "").length !== 1) {
    return false;
  }
  return true;
}
function isValidLeadingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}

},{}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsonrpcTypes = require("@walletconnect/jsonrpc-types");
Object.keys(_jsonrpcTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jsonrpcTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jsonrpcTypes[key];
    }
  });
});

},{"@walletconnect/jsonrpc-types":32}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHttpUrl = isHttpUrl;
exports.isLocalhostUrl = isLocalhostUrl;
exports.isWsUrl = isWsUrl;
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length) return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined") return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

},{}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isJsonRpcError = isJsonRpcError;
exports.isJsonRpcPayload = isJsonRpcPayload;
exports.isJsonRpcRequest = isJsonRpcRequest;
exports.isJsonRpcResponse = isJsonRpcResponse;
exports.isJsonRpcResult = isJsonRpcResult;
exports.isJsonRpcValidationInvalid = isJsonRpcValidationInvalid;
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
  return "error" in validation && validation.valid === false;
}

},{}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;
var _ws = _interopRequireWildcard(require("./ws"));
Object.keys(_ws).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ws[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ws[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = _ws.default;
exports.default = _default;

},{"./ws":47}],47:[function(require,module,exports){
(function (global){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WsConnection = void 0;
var _events = require("events");
var _safeJson = require("@walletconnect/safe-json");
var _jsonrpcUtils = require("@walletconnect/jsonrpc-utils");
const EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;
const resolveWebSocketImplementation = () => {
  if (typeof global !== "undefined" && typeof global.WebSocket !== "undefined") {
    return global.WebSocket;
  }
  if (typeof window !== "undefined" && typeof window.WebSocket !== "undefined") {
    return window.WebSocket;
  }
  return require("ws");
};
const WS = resolveWebSocketImplementation();
class WsConnection {
  constructor(url) {
    this.url = url;
    this.events = new _events.EventEmitter();
    this.registering = false;
    if (!(0, _jsonrpcUtils.isWsUrl)(url)) {
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
    }
    this.url = url;
  }
  get connected() {
    return typeof this.socket !== "undefined";
  }
  get connecting() {
    return this.registering;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(url = this.url) {
    await this.register(url);
  }
  async close() {
    if (typeof this.socket === "undefined") {
      throw new Error("Connection already closed");
    }
    this.socket.close();
    this.onClose();
  }
  async send(payload, context) {
    if (typeof this.socket === "undefined") {
      this.socket = await this.register();
    }
    try {
      this.socket.send((0, _safeJson.safeJsonStringify)(payload));
    } catch (e) {
      this.onError(payload.id, e);
    }
  }
  register(url = this.url) {
    if (!(0, _jsonrpcUtils.isWsUrl)(url)) {
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
    }
    if (this.registering) {
      const currentMaxListeners = this.events.getMaxListeners();
      if (this.events.listenerCount("register_error") >= currentMaxListeners || this.events.listenerCount("open") >= currentMaxListeners) {
        this.events.setMaxListeners(currentMaxListeners + 1);
      }
      return new Promise((resolve, reject) => {
        this.events.once("register_error", error => {
          this.resetMaxListeners();
          reject(error);
        });
        this.events.once("open", () => {
          this.resetMaxListeners();
          if (typeof this.socket === "undefined") {
            return reject(new Error("WebSocket connection is missing or invalid"));
          }
          resolve(this.socket);
        });
      });
    }
    this.url = url;
    this.registering = true;
    return new Promise((resolve, reject) => {
      const opts = !(0, _jsonrpcUtils.isReactNative)() ? {
        rejectUnauthorized: !(0, _jsonrpcUtils.isLocalhostUrl)(url)
      } : undefined;
      const socket = new WS(url, [], opts);
      socket.onopen = () => {
        this.onOpen(socket);
        resolve(socket);
      };
      socket.onerror = event => {
        const errorEvent = event;
        const error = this.parseError(errorEvent.error || new Error(`WebSocket connection failed for URL: ${url}`));
        this.events.emit("register_error", error);
        this.onClose();
        reject(error);
      };
    });
  }
  onOpen(socket) {
    socket.onmessage = event => this.onPayload(event);
    socket.onclose = () => this.onClose();
    socket.onerror = event => {
      const errorEvent = event;
      const error = this.parseError(errorEvent.error || new Error(`WebSocket connection failed for URL: ${this.url}`));
      this.events.emit("error", error);
    };
    this.socket = socket;
    this.registering = false;
    this.events.emit("open");
  }
  onClose() {
    this.socket = undefined;
    this.registering = false;
    this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data === "undefined") return;
    const payload = typeof e.data === "string" ? (0, _safeJson.safeJsonParse)(e.data) : e.data;
    this.events.emit("payload", payload);
  }
  onError(id, e) {
    const error = this.parseError(e);
    const message = error.message || error.toString();
    const payload = (0, _jsonrpcUtils.formatJsonRpcError)(id, message);
    this.events.emit("payload", payload);
  }
  parseError(e, url = this.url) {
    return (0, _jsonrpcUtils.parseConnectionError)(e, url, "WS");
  }
  resetMaxListeners() {
    if (this.events.getMaxListeners() > EVENT_EMITTER_MAX_LISTENERS_DEFAULT) {
      this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
    }
  }
}
exports.WsConnection = WsConnection;
var _default = WsConnection;
exports.default = _default;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"@walletconnect/jsonrpc-utils":41,"@walletconnect/safe-json":68,"events":137,"ws":48}],48:[function(require,module,exports){
'use strict';

module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueStorage = void 0;
const tslib_1 = require("tslib");
const safe_json_utils_1 = require("safe-json-utils");
const localStorage_1 = tslib_1.__importDefault(require("./lib/localStorage"));
const shared_1 = require("../shared");
class KeyValueStorage {
    constructor() {
        this.localStorage = localStorage_1.default;
    }
    getKeys() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.localStorage);
        });
    }
    getEntries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return Object.entries(this.localStorage).map(shared_1.parseEntry);
        });
    }
    getItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const item = this.localStorage.getItem(key);
            if (item === null) {
                return undefined;
            }
            return safe_json_utils_1.safeJsonParse(item);
        });
    }
    setItem(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.setItem(key, safe_json_utils_1.safeJsonStringify(value));
        });
    }
    removeItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.removeItem(key);
        });
    }
}
exports.KeyValueStorage = KeyValueStorage;
exports.default = KeyValueStorage;

},{"../shared":51,"./lib/localStorage":50,"safe-json-utils":122,"tslib":124}],50:[function(require,module,exports){
(function (global){(function (){
"use strict";
(function () {
    "use strict";
    let db;
    function LocalStorage() { }
    db = LocalStorage;
    db.prototype.getItem = function (key) {
        if (this.hasOwnProperty(key)) {
            return String(this[key]);
        }
        return null;
    };
    db.prototype.setItem = function (key, val) {
        this[key] = String(val);
    };
    db.prototype.removeItem = function (key) {
        delete this[key];
    };
    db.prototype.clear = function () {
        const self = this;
        Object.keys(self).forEach(function (key) {
            self[key] = undefined;
            delete self[key];
        });
    };
    db.prototype.key = function (i) {
        i = i || 0;
        return Object.keys(this)[i];
    };
    db.prototype.__defineGetter__("length", function () {
        return Object.keys(this).length;
    });
    if (typeof global !== "undefined" && global.localStorage) {
        module.exports = global.localStorage;
    }
    else if (typeof window !== "undefined" && window.localStorage) {
        module.exports = window.localStorage;
    }
    else {
        module.exports = new LocalStorage();
    }
})();

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./utils"), exports);

},{"./types":52,"./utils":53,"tslib":124}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IKeyValueStorage = void 0;
class IKeyValueStorage {
}
exports.IKeyValueStorage = IKeyValueStorage;

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEntry = void 0;
const safe_json_utils_1 = require("safe-json-utils");
function parseEntry(entry) {
    var _a;
    return [entry[0], safe_json_utils_1.safeJsonParse((_a = entry[1]) !== null && _a !== void 0 ? _a : "")];
}
exports.parseEntry = parseEntry;

},{"safe-json-utils":122}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PINO_CUSTOM_CONTEXT_KEY = exports.PINO_LOGGER_DEFAULTS = void 0;
exports.PINO_LOGGER_DEFAULTS = {
    level: "info",
};
exports.PINO_CUSTOM_CONTEXT_KEY = "custom_context";

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pino = void 0;
const tslib_1 = require("tslib");
const pino_1 = tslib_1.__importDefault(require("pino"));
Object.defineProperty(exports, "pino", { enumerable: true, get: function () { return pino_1.default; } });
tslib_1.__exportStar(require("./constants"), exports);
tslib_1.__exportStar(require("./utils"), exports);

},{"./constants":54,"./utils":56,"pino":119,"tslib":124}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateChildLogger = exports.formatChildLoggerContext = exports.getLoggerContext = exports.setBrowserLoggerContext = exports.getBrowserLoggerContext = exports.getDefaultLoggerOptions = void 0;
const constants_1 = require("./constants");
function getDefaultLoggerOptions(opts) {
    return Object.assign(Object.assign({}, opts), { level: (opts === null || opts === void 0 ? void 0 : opts.level) || constants_1.PINO_LOGGER_DEFAULTS.level });
}
exports.getDefaultLoggerOptions = getDefaultLoggerOptions;
function getBrowserLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    return logger[customContextKey] || "";
}
exports.getBrowserLoggerContext = getBrowserLoggerContext;
function setBrowserLoggerContext(logger, context, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    logger[customContextKey] = context;
    return logger;
}
exports.setBrowserLoggerContext = setBrowserLoggerContext;
function getLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    let context = "";
    if (typeof logger.bindings === "undefined") {
        context = getBrowserLoggerContext(logger, customContextKey);
    }
    else {
        context = logger.bindings().context || "";
    }
    return context;
}
exports.getLoggerContext = getLoggerContext;
function formatChildLoggerContext(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    const parentContext = getLoggerContext(logger, customContextKey);
    const context = parentContext.trim()
        ? `${parentContext}/${childContext}`
        : childContext;
    return context;
}
exports.formatChildLoggerContext = formatChildLoggerContext;
function generateChildLogger(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    const context = formatChildLoggerContext(logger, childContext, customContextKey);
    const child = logger.child({ context });
    return setBrowserLoggerContext(child, context, customContextKey);
}
exports.generateChildLogger = generateChildLogger;

},{"./constants":54}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _parsers = require("./parsers");
Object.keys(_parsers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parsers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parsers[key];
    }
  });
});
var _jsonrpc = require("./jsonrpc");
Object.keys(_jsonrpc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jsonrpc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jsonrpc[key];
    }
  });
});
var _validators = require("./validators");
Object.keys(_validators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validators[key];
    }
  });
});

},{"./jsonrpc":58,"./parsers":60,"./types":61,"./validators":62}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RELAY_JSONRPC = void 0;
const RELAY_JSONRPC = {
  waku: {
    publish: "waku_publish",
    subscribe: "waku_subscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe"
  },
  irn: {
    publish: "irn_publish",
    subscribe: "irn_subscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    subscribe: "iridium_subscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe"
  }
};
exports.RELAY_JSONRPC = RELAY_JSONRPC;

},{}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertType = assertType;
exports.checkParams = checkParams;
exports.hasExactParamsLength = hasExactParamsLength;
exports.hasRequiredParams = hasRequiredParams;
exports.hasRequiredParamsLength = hasRequiredParamsLength;
exports.methodEndsWith = methodEndsWith;
function assertType(obj, key, type = "string") {
  if (!obj[key] || typeof obj[key] !== type) {
    throw new Error(`Missing or invalid "${key}" param`);
  }
}
function hasRequiredParams(params, required) {
  let matches = true;
  required.forEach(key => {
    const exists = (key in params);
    if (!exists) {
      matches = false;
    }
  });
  return matches;
}
function hasExactParamsLength(params, length) {
  return Array.isArray(params) ? params.length === length : Object.keys(params).length === length;
}
function hasRequiredParamsLength(params, minLength) {
  return Array.isArray(params) ? params.length >= minLength : Object.keys(params).length >= minLength;
}
function checkParams(params, required, optional) {
  const exact = !optional.length;
  const matchesLength = exact ? hasExactParamsLength(params, required.length) : hasRequiredParamsLength(params, required.length);
  if (!matchesLength) return false;
  return hasRequiredParams(params, required);
}
function methodEndsWith(method, expected, separator = "_") {
  const split = method.split(separator);
  return split[split.length - 1].trim().toLowerCase() === expected.trim().toLowerCase();
}

},{}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePublishRequest = parsePublishRequest;
exports.parseSubscribeRequest = parseSubscribeRequest;
exports.parseSubscriptionRequest = parseSubscriptionRequest;
exports.parseUnsubscribeRequest = parseUnsubscribeRequest;
var _misc = require("./misc");
var _validators = require("./validators");
function parseSubscribeRequest(request) {
  if (!(0, _validators.isSubscribeMethod)(request.method)) {
    throw new Error("JSON-RPC Request has invalid subscribe method");
  }
  if (!(0, _validators.isSubscribeParams)(request.params)) {
    throw new Error("JSON-RPC Request has invalid subscribe params");
  }
  const params = request.params;
  (0, _misc.assertType)(params, "topic");
  return params;
}
function parsePublishRequest(request) {
  if (!(0, _validators.isPublishMethod)(request.method)) {
    throw new Error("JSON-RPC Request has invalid publish method");
  }
  if (!(0, _validators.isPublishParams)(request.params)) {
    throw new Error("JSON-RPC Request has invalid publish params");
  }
  const params = request.params;
  (0, _misc.assertType)(params, "topic");
  (0, _misc.assertType)(params, "message");
  (0, _misc.assertType)(params, "ttl", "number");
  return params;
}
function parseUnsubscribeRequest(request) {
  if (!(0, _validators.isUnsubscribeMethod)(request.method)) {
    throw new Error("JSON-RPC Request has invalid unsubscribe method");
  }
  if (!(0, _validators.isUnsubscribeParams)(request.params)) {
    throw new Error("JSON-RPC Request has invalid unsubscribe params");
  }
  const params = request.params;
  (0, _misc.assertType)(params, "id");
  return params;
}
function parseSubscriptionRequest(request) {
  if (!(0, _validators.isSubscriptionMethod)(request.method)) {
    throw new Error("JSON-RPC Request has invalid subscription method");
  }
  if (!(0, _validators.isSubscriptionParams)(request.params)) {
    throw new Error("JSON-RPC Request has invalid subscription params");
  }
  const params = request.params;
  (0, _misc.assertType)(params, "id");
  (0, _misc.assertType)(params, "data");
  return params;
}

},{"./misc":59,"./validators":62}],61:[function(require,module,exports){

},{}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPublishMethod = isPublishMethod;
exports.isPublishParams = isPublishParams;
exports.isPublishRequest = isPublishRequest;
exports.isSubscribeMethod = isSubscribeMethod;
exports.isSubscribeParams = isSubscribeParams;
exports.isSubscribeRequest = isSubscribeRequest;
exports.isSubscriptionMethod = isSubscriptionMethod;
exports.isSubscriptionParams = isSubscriptionParams;
exports.isSubscriptionRequest = isSubscriptionRequest;
exports.isUnsubscribeMethod = isUnsubscribeMethod;
exports.isUnsubscribeParams = isUnsubscribeParams;
exports.isUnsubscribeRequest = isUnsubscribeRequest;
var _misc = require("./misc");
function isSubscribeRequest(request) {
  return isSubscribeMethod(request.method) && isSubscribeParams(request.params);
}
function isSubscribeMethod(method) {
  return (0, _misc.methodEndsWith)(method, "subscribe");
}
function isSubscribeParams(params) {
  const required = ["topic"];
  const optional = [];
  return (0, _misc.checkParams)(params, required, optional);
}
function isPublishRequest(request) {
  return isPublishMethod(request.method) && isPublishParams(request.params);
}
function isPublishMethod(method) {
  return (0, _misc.methodEndsWith)(method, "publish");
}
function isPublishParams(params) {
  const required = ["message", "topic", "ttl"];
  const optional = ["prompt", "tag"];
  return (0, _misc.checkParams)(params, required, optional);
}
function isUnsubscribeRequest(request) {
  return isUnsubscribeMethod(request.method) && isUnsubscribeParams(request.params);
}
function isUnsubscribeMethod(method) {
  return (0, _misc.methodEndsWith)(method, "unsubscribe");
}
function isUnsubscribeParams(params) {
  const required = ["id", "topic"];
  const optional = [];
  return (0, _misc.checkParams)(params, required, optional);
}
function isSubscriptionRequest(request) {
  return isSubscriptionMethod(request.method) && isSubscriptionParams(request.params);
}
function isSubscriptionMethod(method) {
  return (0, _misc.methodEndsWith)(method, "subscription");
}
function isSubscriptionParams(params) {
  const required = ["id", "data"];
  const optional = [];
  return (0, _misc.checkParams)(params, required, optional);
}

},{"./misc":59}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateKeyPair = generateKeyPair;
exports.signJWT = signJWT;
exports.verifyJWT = verifyJWT;
var ed25519 = _interopRequireWildcard(require("@stablelib/ed25519"));
var _random = require("@stablelib/random");
var _time = require("@walletconnect/time");
var _constants = require("./constants");
var _utils = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function generateKeyPair(seed = (0, _random.randomBytes)(_constants.KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = (0, _time.fromMiliseconds)(Date.now())) {
  const header = {
    alg: _constants.JWT_IRIDIUM_ALG,
    typ: _constants.JWT_IRIDIUM_TYP
  };
  const iss = (0, _utils.encodeIss)(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = {
    iss,
    sub,
    aud,
    iat,
    exp
  };
  const data = (0, _utils.encodeData)({
    header,
    payload
  });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return (0, _utils.encodeJWT)({
    header,
    payload,
    signature
  });
}
async function verifyJWT(jwt) {
  const {
    header,
    payload,
    data,
    signature
  } = (0, _utils.decodeJWT)(jwt);
  if (header.alg !== _constants.JWT_IRIDIUM_ALG || header.typ !== _constants.JWT_IRIDIUM_TYP) {
    throw new Error("JWT must use EdDSA algorithm");
  }
  const publicKey = (0, _utils.decodeIss)(payload.iss);
  return ed25519.verify(publicKey, data, signature);
}

},{"./constants":64,"./utils":67,"@stablelib/ed25519":5,"@stablelib/random":11,"@walletconnect/time":81}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MULTICODEC_ED25519_LENGTH = exports.MULTICODEC_ED25519_HEADER = exports.MULTICODEC_ED25519_ENCODING = exports.MULTICODEC_ED25519_BASE = exports.KEY_PAIR_SEED_LENGTH = exports.JWT_IRIDIUM_TYP = exports.JWT_IRIDIUM_ALG = exports.JWT_ENCODING = exports.JWT_DELIMITER = exports.JSON_ENCODING = exports.DID_PREFIX = exports.DID_METHOD = exports.DID_DELIMITER = exports.DATA_ENCODING = void 0;
const JWT_IRIDIUM_ALG = "EdDSA";
exports.JWT_IRIDIUM_ALG = JWT_IRIDIUM_ALG;
const JWT_IRIDIUM_TYP = "JWT";
exports.JWT_IRIDIUM_TYP = JWT_IRIDIUM_TYP;
const JWT_DELIMITER = ".";
exports.JWT_DELIMITER = JWT_DELIMITER;
const JWT_ENCODING = "base64url";
exports.JWT_ENCODING = JWT_ENCODING;
const JSON_ENCODING = "utf8";
exports.JSON_ENCODING = JSON_ENCODING;
const DATA_ENCODING = "utf8";
exports.DATA_ENCODING = DATA_ENCODING;
const DID_DELIMITER = ":";
exports.DID_DELIMITER = DID_DELIMITER;
const DID_PREFIX = "did";
exports.DID_PREFIX = DID_PREFIX;
const DID_METHOD = "key";
exports.DID_METHOD = DID_METHOD;
const MULTICODEC_ED25519_ENCODING = "base58btc";
exports.MULTICODEC_ED25519_ENCODING = MULTICODEC_ED25519_ENCODING;
const MULTICODEC_ED25519_BASE = "z";
exports.MULTICODEC_ED25519_BASE = MULTICODEC_ED25519_BASE;
const MULTICODEC_ED25519_HEADER = "K36";
exports.MULTICODEC_ED25519_HEADER = MULTICODEC_ED25519_HEADER;
const MULTICODEC_ED25519_LENGTH = 32;
exports.MULTICODEC_ED25519_LENGTH = MULTICODEC_ED25519_LENGTH;
const KEY_PAIR_SEED_LENGTH = 32;
exports.KEY_PAIR_SEED_LENGTH = KEY_PAIR_SEED_LENGTH;

},{}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _api = require("./api");
Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});
var _constants = require("./constants");
Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _utils = require("./utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});

},{"./api":63,"./constants":64,"./types":66,"./utils":67}],66:[function(require,module,exports){
arguments[4][61][0].apply(exports,arguments)
},{"dup":61}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeData = decodeData;
exports.decodeIss = decodeIss;
exports.decodeJSON = decodeJSON;
exports.decodeJWT = decodeJWT;
exports.decodeSig = decodeSig;
exports.encodeData = encodeData;
exports.encodeIss = encodeIss;
exports.encodeJSON = encodeJSON;
exports.encodeJWT = encodeJWT;
exports.encodeSig = encodeSig;
var _concat = require("uint8arrays/concat");
var _toString = require("uint8arrays/to-string");
var _fromString = require("uint8arrays/from-string");
var _safeJson = require("@walletconnect/safe-json");
var _constants = require("./constants");
function decodeJSON(str) {
  return (0, _safeJson.safeJsonParse)((0, _toString.toString)((0, _fromString.fromString)(str, _constants.JWT_ENCODING), _constants.JSON_ENCODING));
}
function encodeJSON(val) {
  return (0, _toString.toString)((0, _fromString.fromString)((0, _safeJson.safeJsonStringify)(val), _constants.JSON_ENCODING), _constants.JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = (0, _fromString.fromString)(_constants.MULTICODEC_ED25519_HEADER, _constants.MULTICODEC_ED25519_ENCODING);
  const multicodec = _constants.MULTICODEC_ED25519_BASE + (0, _toString.toString)((0, _concat.concat)([header, publicKey]), _constants.MULTICODEC_ED25519_ENCODING);
  return [_constants.DID_PREFIX, _constants.DID_METHOD, multicodec].join(_constants.DID_DELIMITER);
}
function decodeIss(issuer) {
  const [prefix, method, multicodec] = issuer.split(_constants.DID_DELIMITER);
  if (prefix !== _constants.DID_PREFIX || method !== _constants.DID_METHOD) {
    throw new Error(`Issuer must be a DID with method "key"`);
  }
  const base = multicodec.slice(0, 1);
  if (base !== _constants.MULTICODEC_ED25519_BASE) {
    throw new Error(`Issuer must be a key in mulicodec format`);
  }
  const bytes = (0, _fromString.fromString)(multicodec.slice(1), _constants.MULTICODEC_ED25519_ENCODING);
  const type = (0, _toString.toString)(bytes.slice(0, 2), _constants.MULTICODEC_ED25519_ENCODING);
  if (type !== _constants.MULTICODEC_ED25519_HEADER) {
    throw new Error(`Issuer must be a public key with type "Ed25519"`);
  }
  const publicKey = bytes.slice(2);
  if (publicKey.length !== _constants.MULTICODEC_ED25519_LENGTH) {
    throw new Error(`Issuer must be a public key with length 32 bytes`);
  }
  return publicKey;
}
function encodeSig(bytes) {
  return (0, _toString.toString)(bytes, _constants.JWT_ENCODING);
}
function decodeSig(encoded) {
  return (0, _fromString.fromString)(encoded, _constants.JWT_ENCODING);
}
function encodeData(params) {
  return (0, _fromString.fromString)([encodeJSON(params.header), encodeJSON(params.payload)].join(_constants.JWT_DELIMITER), _constants.DATA_ENCODING);
}
function decodeData(data) {
  const params = (0, _toString.toString)(data, _constants.DATA_ENCODING).split(_constants.JWT_DELIMITER);
  const header = decodeJSON(params[0]);
  const payload = decodeJSON(params[1]);
  return {
    header,
    payload
  };
}
function encodeJWT(params) {
  return [encodeJSON(params.header), encodeJSON(params.payload), encodeSig(params.signature)].join(_constants.JWT_DELIMITER);
}
function decodeJWT(jwt) {
  const params = jwt.split(_constants.JWT_DELIMITER);
  const header = decodeJSON(params[0]);
  const payload = decodeJSON(params[1]);
  const signature = decodeSig(params[2]);
  const data = (0, _fromString.fromString)(params.slice(0, 2).join(_constants.JWT_DELIMITER), _constants.DATA_ENCODING);
  return {
    header,
    payload,
    signature,
    data
  };
}

},{"./constants":64,"@walletconnect/safe-json":68,"uint8arrays/concat":127,"uint8arrays/from-string":129,"uint8arrays/to-string":131}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeJsonParse = safeJsonParse;
exports.safeJsonStringify = safeJsonStringify;
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSON.parse(value);
  } catch (_a) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSON.stringify(value);
}

},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SignClient = exports.SIGN_CLIENT_VERSION = exports.SIGN_CLIENT_STORAGE_PREFIX = exports.SIGN_CLIENT_STORAGE_OPTIONS = exports.SIGN_CLIENT_PROTOCOL = exports.SIGN_CLIENT_EVENTS = exports.SIGN_CLIENT_DEFAULT = exports.SIGN_CLIENT_CONTEXT = exports.SESSION_EXPIRY = exports.SESSION_CONTEXT = exports.PROPOSAL_EXPIRY = exports.PROPOSAL_CONTEXT = exports.HISTORY_STORAGE_VERSION = exports.HISTORY_EVENTS = exports.HISTORY_CONTEXT = exports.ENGINE_RPC_OPTS = exports.ENGINE_CONTEXT = void 0;
var _pino = _interopRequireDefault(require("pino"));
var _core = require("@walletconnect/core");
var _logger = require("@walletconnect/logger");
var _types = require("@walletconnect/types");
var _utils = require("@walletconnect/utils");
var _events = _interopRequireWildcard(require("events"));
var _time = require("@walletconnect/time");
var _jsonrpcUtils = require("@walletconnect/jsonrpc-utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const G = "wc",
  $ = 2,
  M = "client",
  K = `${G}@${$}:${M}:`,
  D = {
    name: M,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com"
  },
  De = {
    session_proposal: "session_proposal",
    session_update: "session_update",
    session_extend: "session_extend",
    session_ping: "session_ping",
    session_delete: "session_delete",
    session_expire: "session_expire",
    session_request: "session_request",
    session_event: "session_event",
    proposal_expire: "proposal_expire"
  },
  Ae = {
    database: ":memory:"
  },
  Ce = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
  },
  Le = "history",
  be = "0.3",
  Y = "proposal",
  Ge = _time.THIRTY_DAYS,
  J = "session",
  q = _time.SEVEN_DAYS,
  X = "engine",
  P = {
    wc_sessionPropose: {
      req: {
        ttl: _time.FIVE_MINUTES,
        prompt: !0,
        tag: 1100
      },
      res: {
        ttl: _time.FIVE_MINUTES,
        prompt: !1,
        tag: 1101
      }
    },
    wc_sessionSettle: {
      req: {
        ttl: _time.FIVE_MINUTES,
        prompt: !1,
        tag: 1102
      },
      res: {
        ttl: _time.FIVE_MINUTES,
        prompt: !1,
        tag: 1103
      }
    },
    wc_sessionUpdate: {
      req: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 1104
      },
      res: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 1105
      }
    },
    wc_sessionExtend: {
      req: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 1106
      },
      res: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 1107
      }
    },
    wc_sessionRequest: {
      req: {
        ttl: _time.FIVE_MINUTES,
        prompt: !0,
        tag: 1108
      },
      res: {
        ttl: _time.FIVE_MINUTES,
        prompt: !1,
        tag: 1109
      }
    },
    wc_sessionEvent: {
      req: {
        ttl: _time.FIVE_MINUTES,
        prompt: !0,
        tag: 1110
      },
      res: {
        ttl: _time.FIVE_MINUTES,
        prompt: !1,
        tag: 1111
      }
    },
    wc_sessionDelete: {
      req: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 1112
      },
      res: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 1113
      }
    },
    wc_sessionPing: {
      req: {
        ttl: _time.THIRTY_SECONDS,
        prompt: !1,
        tag: 1114
      },
      res: {
        ttl: _time.THIRTY_SECONDS,
        prompt: !1,
        tag: 1115
      }
    }
  };
exports.ENGINE_RPC_OPTS = P;
exports.ENGINE_CONTEXT = X;
exports.SESSION_EXPIRY = q;
exports.SESSION_CONTEXT = J;
exports.PROPOSAL_EXPIRY = Ge;
exports.PROPOSAL_CONTEXT = Y;
exports.HISTORY_STORAGE_VERSION = be;
exports.HISTORY_CONTEXT = Le;
exports.HISTORY_EVENTS = Ce;
exports.SIGN_CLIENT_STORAGE_OPTIONS = Ae;
exports.SIGN_CLIENT_EVENTS = De;
exports.SIGN_CLIENT_DEFAULT = D;
exports.SIGN_CLIENT_STORAGE_PREFIX = K;
exports.SIGN_CLIENT_CONTEXT = M;
exports.SIGN_CLIENT_VERSION = $;
exports.SIGN_CLIENT_PROTOCOL = G;
var $e = Object.defineProperty,
  Me = Object.defineProperties,
  Ke = Object.getOwnPropertyDescriptors,
  H = Object.getOwnPropertySymbols,
  Ue = Object.prototype.hasOwnProperty,
  ze = Object.prototype.propertyIsEnumerable,
  F = (h, r, e) => r in h ? $e(h, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : h[r] = e,
  S = (h, r) => {
    for (var e in r || (r = {})) Ue.call(r, e) && F(h, e, r[e]);
    if (H) for (var e of H(r)) ze.call(r, e) && F(h, e, r[e]);
    return h;
  },
  Z = (h, r) => Me(h, Ke(r));
class je extends _types.IEngine {
  constructor(r) {
    super(r), this.name = X, this.events = new _events.default(), this.initialized = !1, this.ignoredPayloadTypes = [_utils.TYPE_1], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
        methods: Object.keys(P)
      }), this.initialized = !0);
    }, this.connect = async e => {
      this.isInitialized(), await this.isValidConnect(e);
      const {
        pairingTopic: s,
        requiredNamespaces: t,
        relays: i
      } = e;
      let n = s,
        o,
        c = !1;
      if (n && (c = this.client.core.pairing.pairings.get(n).active), !n || !c) {
        const {
          topic: y,
          uri: d
        } = await this.client.core.pairing.create();
        n = y, o = d;
      }
      const l = await this.client.core.crypto.generateKeyPair(),
        g = {
          requiredNamespaces: t,
          relays: i ?? [{
            protocol: _core.RELAYER_DEFAULT_PROTOCOL
          }],
          proposer: {
            publicKey: l,
            metadata: this.client.metadata
          }
        },
        {
          reject: w,
          resolve: V,
          done: C
        } = (0, _utils.createDelayedPromise)();
      if (this.events.once((0, _utils.engineEvent)("session_connect"), async ({
        error: y,
        session: d
      }) => {
        if (y) w(y);else if (d) {
          d.self.publicKey = l;
          const O = Z(S({}, d), {
            requiredNamespaces: t
          });
          await this.client.session.set(d.topic, O), await this.setExpiry(d.topic, d.expiry), n && (await this.client.core.pairing.updateMetadata({
            topic: n,
            metadata: d.peer.metadata
          })), V(O);
        }
      }), !n) {
        const {
          message: y
        } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `connect() pairing topic: ${n}`);
        throw new Error(y);
      }
      const T = await this.sendRequest(n, "wc_sessionPropose", g),
        L = (0, _utils.calcExpiry)(_time.FIVE_MINUTES);
      return await this.setProposal(T, S({
        id: T,
        expiry: L
      }, g)), {
        uri: o,
        approval: C
      };
    }, this.pair = async e => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
      this.isInitialized(), await this.isValidApprove(e);
      const {
          id: s,
          relayProtocol: t,
          namespaces: i
        } = e,
        {
          pairingTopic: n,
          proposer: o,
          requiredNamespaces: c
        } = this.client.proposal.get(s),
        l = await this.client.core.crypto.generateKeyPair(),
        g = o.publicKey,
        w = await this.client.core.crypto.generateSharedKey(l, g),
        V = {
          relay: {
            protocol: t ?? "irn"
          },
          namespaces: i,
          requiredNamespaces: c,
          controller: {
            publicKey: l,
            metadata: this.client.metadata
          },
          expiry: (0, _utils.calcExpiry)(q)
        };
      await this.client.core.relayer.subscribe(w);
      const C = await this.sendRequest(w, "wc_sessionSettle", V),
        {
          done: T,
          resolve: L,
          reject: y
        } = (0, _utils.createDelayedPromise)();
      this.events.once((0, _utils.engineEvent)("session_approve", C), ({
        error: O
      }) => {
        O ? y(O) : L(this.client.session.get(w));
      });
      const d = Z(S({}, V), {
        topic: w,
        acknowledged: !1,
        self: V.controller,
        peer: {
          publicKey: o.publicKey,
          metadata: o.metadata
        },
        controller: l
      });
      return await this.client.session.set(w, d), await this.setExpiry(w, (0, _utils.calcExpiry)(q)), n && (await this.client.core.pairing.updateMetadata({
        topic: n,
        metadata: d.peer.metadata
      })), n && s && (await this.sendResult(s, n, {
        relay: {
          protocol: t ?? "irn"
        },
        responderPublicKey: l
      }), await this.client.proposal.delete(s, (0, _utils.getSdkError)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
        topic: n
      })), {
        topic: w,
        acknowledged: T
      };
    }, this.reject = async e => {
      this.isInitialized(), await this.isValidReject(e);
      const {
          id: s,
          reason: t
        } = e,
        {
          pairingTopic: i
        } = this.client.proposal.get(s);
      i && (await this.sendError(s, i, t), await this.client.proposal.delete(s, (0, _utils.getSdkError)("USER_DISCONNECTED")));
    }, this.update = async e => {
      this.isInitialized(), await this.isValidUpdate(e);
      const {
          topic: s,
          namespaces: t
        } = e,
        i = await this.sendRequest(s, "wc_sessionUpdate", {
          namespaces: t
        }),
        {
          done: n,
          resolve: o,
          reject: c
        } = (0, _utils.createDelayedPromise)();
      return this.events.once((0, _utils.engineEvent)("session_update", i), ({
        error: l
      }) => {
        l ? c(l) : o();
      }), await this.client.session.update(s, {
        namespaces: t
      }), {
        acknowledged: n
      };
    }, this.extend = async e => {
      this.isInitialized(), await this.isValidExtend(e);
      const {
          topic: s
        } = e,
        t = await this.sendRequest(s, "wc_sessionExtend", {}),
        {
          done: i,
          resolve: n,
          reject: o
        } = (0, _utils.createDelayedPromise)();
      return this.events.once((0, _utils.engineEvent)("session_extend", t), ({
        error: c
      }) => {
        c ? o(c) : n();
      }), await this.setExpiry(s, (0, _utils.calcExpiry)(q)), {
        acknowledged: i
      };
    }, this.request = async e => {
      this.isInitialized(), await this.isValidRequest(e);
      const {
          chainId: s,
          request: t,
          topic: i
        } = e,
        n = await this.sendRequest(i, "wc_sessionRequest", {
          request: t,
          chainId: s
        }),
        {
          done: o,
          resolve: c,
          reject: l
        } = (0, _utils.createDelayedPromise)();
      return this.events.once((0, _utils.engineEvent)("session_request", n), ({
        error: g,
        result: w
      }) => {
        g ? l(g) : c(w);
      }), await o();
    }, this.respond = async e => {
      this.isInitialized(), await this.isValidRespond(e);
      const {
          topic: s,
          response: t
        } = e,
        {
          id: i
        } = t;
      (0, _jsonrpcUtils.isJsonRpcResult)(t) ? await this.sendResult(i, s, t.result) : (0, _jsonrpcUtils.isJsonRpcError)(t) && (await this.sendError(i, s, t.error));
    }, this.ping = async e => {
      this.isInitialized(), await this.isValidPing(e);
      const {
        topic: s
      } = e;
      if (this.client.session.keys.includes(s)) {
        const t = await this.sendRequest(s, "wc_sessionPing", {}),
          {
            done: i,
            resolve: n,
            reject: o
          } = (0, _utils.createDelayedPromise)();
        this.events.once((0, _utils.engineEvent)("session_ping", t), ({
          error: c
        }) => {
          c ? o(c) : n();
        }), await i();
      } else this.client.core.pairing.pairings.keys.includes(s) && (await this.client.core.pairing.ping({
        topic: s
      }));
    }, this.emit = async e => {
      this.isInitialized(), await this.isValidEmit(e);
      const {
        topic: s,
        event: t,
        chainId: i
      } = e;
      await this.sendRequest(s, "wc_sessionEvent", {
        event: t,
        chainId: i
      });
    }, this.disconnect = async e => {
      this.isInitialized(), await this.isValidDisconnect(e);
      const {
        topic: s
      } = e;
      this.client.session.keys.includes(s) ? (await this.sendRequest(s, "wc_sessionDelete", (0, _utils.getSdkError)("USER_DISCONNECTED")), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({
        topic: s
      });
    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(s => (0, _utils.isSessionCompatible)(s, e))), this.deleteSession = async (e, s) => {
      const {
        self: t
      } = this.client.session.get(e);
      await this.client.core.relayer.unsubscribe(e), await Promise.all([this.client.session.delete(e, (0, _utils.getSdkError)("USER_DISCONNECTED")), this.client.core.crypto.deleteKeyPair(t.publicKey), this.client.core.crypto.deleteSymKey(e), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.deleteProposal = async (e, s) => {
      await Promise.all([this.client.proposal.delete(e, (0, _utils.getSdkError)("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.setExpiry = async (e, s) => {
      this.client.session.keys.includes(e) && (await this.client.session.update(e, {
        expiry: s
      })), this.client.core.expirer.set(e, s);
    }, this.setProposal = async (e, s) => {
      await this.client.proposal.set(e, s), this.client.core.expirer.set(e, s.expiry);
    }, this.sendRequest = async (e, s, t) => {
      const i = (0, _jsonrpcUtils.formatJsonRpcRequest)(s, t),
        n = await this.client.core.crypto.encode(e, i),
        o = P[s].req;
      return this.client.core.history.set(e, i), this.client.core.relayer.publish(e, n, o), i.id;
    }, this.sendResult = async (e, s, t) => {
      const i = (0, _jsonrpcUtils.formatJsonRpcResult)(e, t),
        n = await this.client.core.crypto.encode(s, i),
        o = await this.client.core.history.get(s, e),
        c = P[o.request.method].res;
      this.client.core.relayer.publish(s, n, c), await this.client.core.history.resolve(i);
    }, this.sendError = async (e, s, t) => {
      const i = (0, _jsonrpcUtils.formatJsonRpcError)(e, t),
        n = await this.client.core.crypto.encode(s, i),
        o = await this.client.core.history.get(s, e),
        c = P[o.request.method].res;
      this.client.core.relayer.publish(s, n, c), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const e = [],
        s = [];
      this.client.session.getAll().forEach(t => {
        (0, _utils.isExpired)(t.expiry) && e.push(t.topic);
      }), this.client.proposal.getAll().forEach(t => {
        (0, _utils.isExpired)(t.expiry) && s.push(t.id);
      }), await Promise.all([...e.map(t => this.deleteSession(t)), ...s.map(t => this.deleteProposal(t))]);
    }, this.onRelayEventRequest = e => {
      const {
          topic: s,
          payload: t
        } = e,
        i = t.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, t);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, t);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, t);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, t);
        default:
          return this.client.logger.info(`Unsupported request method ${i}`);
      }
    }, this.onRelayEventResponse = async e => {
      const {
          topic: s,
          payload: t
        } = e,
        i = (await this.client.core.history.get(s, t.id)).request.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, t);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, t);
        default:
          return this.client.logger.info(`Unsupported response method ${i}`);
      }
    }, this.onSessionProposeRequest = async (e, s) => {
      const {
        params: t,
        id: i
      } = s;
      try {
        this.isValidConnect(S({}, s.params));
        const n = (0, _utils.calcExpiry)(_time.FIVE_MINUTES),
          o = S({
            id: i,
            pairingTopic: e,
            expiry: n
          }, t);
        await this.setProposal(i, o), this.client.events.emit("session_proposal", {
          id: i,
          params: o
        });
      } catch (n) {
        await this.sendError(i, e, n), this.client.logger.error(n);
      }
    }, this.onSessionProposeResponse = async (e, s) => {
      const {
        id: t
      } = s;
      if ((0, _jsonrpcUtils.isJsonRpcResult)(s)) {
        const {
          result: i
        } = s;
        this.client.logger.trace({
          type: "method",
          method: "onSessionProposeResponse",
          result: i
        });
        const n = this.client.proposal.get(t);
        this.client.logger.trace({
          type: "method",
          method: "onSessionProposeResponse",
          proposal: n
        });
        const o = n.proposer.publicKey;
        this.client.logger.trace({
          type: "method",
          method: "onSessionProposeResponse",
          selfPublicKey: o
        });
        const c = i.responderPublicKey;
        this.client.logger.trace({
          type: "method",
          method: "onSessionProposeResponse",
          peerPublicKey: c
        });
        const l = await this.client.core.crypto.generateSharedKey(o, c);
        this.client.logger.trace({
          type: "method",
          method: "onSessionProposeResponse",
          sessionTopic: l
        });
        const g = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({
          type: "method",
          method: "onSessionProposeResponse",
          subscriptionId: g
        }), await this.client.core.pairing.activate({
          topic: e
        });
      } else (0, _jsonrpcUtils.isJsonRpcError)(s) && (await this.client.proposal.delete(t, (0, _utils.getSdkError)("USER_DISCONNECTED")), this.events.emit((0, _utils.engineEvent)("session_connect"), {
        error: s.error
      }));
    }, this.onSessionSettleRequest = async (e, s) => {
      const {
        id: t,
        params: i
      } = s;
      try {
        this.isValidSessionSettleRequest(i);
        const {
            relay: n,
            controller: o,
            expiry: c,
            namespaces: l
          } = s.params,
          g = {
            topic: e,
            relay: n,
            expiry: c,
            namespaces: l,
            acknowledged: !0,
            controller: o.publicKey,
            self: {
              publicKey: "",
              metadata: this.client.metadata
            },
            peer: {
              publicKey: o.publicKey,
              metadata: o.metadata
            }
          };
        await this.sendResult(s.id, e, !0), this.events.emit((0, _utils.engineEvent)("session_connect"), {
          session: g
        });
      } catch (n) {
        await this.sendError(t, e, n), this.client.logger.error(n);
      }
    }, this.onSessionSettleResponse = async (e, s) => {
      const {
        id: t
      } = s;
      (0, _jsonrpcUtils.isJsonRpcResult)(s) ? (await this.client.session.update(e, {
        acknowledged: !0
      }), this.events.emit((0, _utils.engineEvent)("session_approve", t), {})) : (0, _jsonrpcUtils.isJsonRpcError)(s) && (await this.client.session.delete(e, (0, _utils.getSdkError)("USER_DISCONNECTED")), this.events.emit((0, _utils.engineEvent)("session_approve", t), {
        error: s.error
      }));
    }, this.onSessionUpdateRequest = async (e, s) => {
      const {
        params: t,
        id: i
      } = s;
      try {
        this.isValidUpdate(S({
          topic: e
        }, t)), await this.client.session.update(e, {
          namespaces: t.namespaces
        }), await this.sendResult(i, e, !0), this.client.events.emit("session_update", {
          id: i,
          topic: e,
          params: t
        });
      } catch (n) {
        await this.sendError(i, e, n), this.client.logger.error(n);
      }
    }, this.onSessionUpdateResponse = (e, s) => {
      const {
        id: t
      } = s;
      (0, _jsonrpcUtils.isJsonRpcResult)(s) ? this.events.emit((0, _utils.engineEvent)("session_update", t), {}) : (0, _jsonrpcUtils.isJsonRpcError)(s) && this.events.emit((0, _utils.engineEvent)("session_update", t), {
        error: s.error
      });
    }, this.onSessionExtendRequest = async (e, s) => {
      const {
        id: t
      } = s;
      try {
        this.isValidExtend({
          topic: e
        }), await this.setExpiry(e, (0, _utils.calcExpiry)(q)), await this.sendResult(t, e, !0), this.client.events.emit("session_extend", {
          id: t,
          topic: e
        });
      } catch (i) {
        await this.sendError(t, e, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (e, s) => {
      const {
        id: t
      } = s;
      (0, _jsonrpcUtils.isJsonRpcResult)(s) ? this.events.emit((0, _utils.engineEvent)("session_extend", t), {}) : (0, _jsonrpcUtils.isJsonRpcError)(s) && this.events.emit((0, _utils.engineEvent)("session_extend", t), {
        error: s.error
      });
    }, this.onSessionPingRequest = async (e, s) => {
      const {
        id: t
      } = s;
      try {
        this.isValidPing({
          topic: e
        }), await this.sendResult(t, e, !0), this.client.events.emit("session_ping", {
          id: t,
          topic: e
        });
      } catch (i) {
        await this.sendError(t, e, i), this.client.logger.error(i);
      }
    }, this.onSessionPingResponse = (e, s) => {
      const {
        id: t
      } = s;
      setTimeout(() => {
        (0, _jsonrpcUtils.isJsonRpcResult)(s) ? this.events.emit((0, _utils.engineEvent)("session_ping", t), {}) : (0, _jsonrpcUtils.isJsonRpcError)(s) && this.events.emit((0, _utils.engineEvent)("session_ping", t), {
          error: s.error
        });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, s) => {
      const {
        id: t
      } = s;
      try {
        this.isValidDisconnect({
          topic: e,
          reason: s.params
        }), await this.sendResult(t, e, !0), await this.deleteSession(e), this.client.events.emit("session_delete", {
          id: t,
          topic: e
        });
      } catch (i) {
        await this.sendError(t, e, i), this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (e, s) => {
      const {
        id: t,
        params: i
      } = s;
      try {
        this.isValidRequest(S({
          topic: e
        }, i)), this.client.events.emit("session_request", {
          id: t,
          topic: e,
          params: i
        });
      } catch (n) {
        await this.sendError(t, e, n), this.client.logger.error(n);
      }
    }, this.onSessionRequestResponse = (e, s) => {
      const {
        id: t
      } = s;
      (0, _jsonrpcUtils.isJsonRpcResult)(s) ? this.events.emit((0, _utils.engineEvent)("session_request", t), {
        result: s.result
      }) : (0, _jsonrpcUtils.isJsonRpcError)(s) && this.events.emit((0, _utils.engineEvent)("session_request", t), {
        error: s.error
      });
    }, this.onSessionEventRequest = async (e, s) => {
      const {
        id: t,
        params: i
      } = s;
      try {
        this.isValidEmit(S({
          topic: e
        }, i)), this.client.events.emit("session_event", {
          id: t,
          topic: e,
          params: i
        });
      } catch (n) {
        await this.sendError(t, e, n), this.client.logger.error(n);
      }
    }, this.isValidConnect = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(o);
      }
      const {
        pairingTopic: s,
        requiredNamespaces: t,
        relays: i
      } = e;
      (0, _utils.isUndefined)(s) || (await this.isValidPairingTopic(s));
      const n = (0, _utils.isValidRequiredNamespaces)(t, "connect()");
      if (n) throw new Error(n.message);
      if (!(0, _utils.isValidRelays)(i, !0)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `connect() relays: ${i}`);
        throw new Error(o);
      }
    }, this.isValidApprove = async e => {
      if (!(0, _utils.isValidParams)(e)) throw new Error((0, _utils.getInternalError)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const {
        id: s,
        namespaces: t,
        relayProtocol: i
      } = e;
      await this.isValidProposalId(s);
      const n = this.client.proposal.get(s),
        o = (0, _utils.isValidNamespaces)(t, "approve()");
      if (o) throw new Error(o.message);
      const c = (0, _utils.isConformingNamespaces)(n.requiredNamespaces, t, "update()");
      if (c) throw new Error(c.message);
      if (!(0, _utils.isValidString)(i, !0)) {
        const {
          message: l
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(l);
      }
    }, this.isValidReject = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: i
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i);
      }
      const {
        id: s,
        reason: t
      } = e;
      if (await this.isValidProposalId(s), !(0, _utils.isValidErrorReason)(t)) {
        const {
          message: i
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: l
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(l);
      }
      const {
        relay: s,
        controller: t,
        namespaces: i,
        expiry: n
      } = e;
      if (!(0, _utils.isValidRelay)(s)) {
        const {
          message: l
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const o = (0, _utils.isValidController)(t, "onSessionSettleRequest()");
      if (o) throw new Error(o.message);
      const c = (0, _utils.isValidNamespaces)(i, "onSessionSettleRequest()");
      if (c) throw new Error(c.message);
      if ((0, _utils.isExpired)(n)) {
        const {
          message: l
        } = (0, _utils.getInternalError)("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: c
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(c);
      }
      const {
        topic: s,
        namespaces: t
      } = e;
      await this.isValidSessionTopic(s);
      const i = this.client.session.get(s),
        n = (0, _utils.isValidNamespaces)(t, "update()");
      if (n) throw new Error(n.message);
      const o = (0, _utils.isConformingNamespaces)(i.requiredNamespaces, t, "update()");
      if (o) throw new Error(o.message);
    }, this.isValidExtend = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: t
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(t);
      }
      const {
        topic: s
      } = e;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(o);
      }
      const {
        topic: s,
        request: t,
        chainId: i
      } = e;
      await this.isValidSessionTopic(s);
      const {
        namespaces: n
      } = this.client.session.get(s);
      if (!(0, _utils.isValidNamespacesChainId)(n, i)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(o);
      }
      if (!(0, _utils.isValidRequest)(t)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `request() ${JSON.stringify(t)}`);
        throw new Error(o);
      }
      if (!(0, _utils.isValidNamespacesRequest)(n, i, t.method)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `request() method: ${t.method}`);
        throw new Error(o);
      }
    }, this.isValidRespond = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: i
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(i);
      }
      const {
        topic: s,
        response: t
      } = e;
      if (await this.isValidSessionTopic(s), !(0, _utils.isValidResponse)(t)) {
        const {
          message: i
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(t)}`);
        throw new Error(i);
      }
    }, this.isValidPing = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: t
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(t);
      }
      const {
        topic: s
      } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(o);
      }
      const {
        topic: s,
        event: t,
        chainId: i
      } = e;
      await this.isValidSessionTopic(s);
      const {
        namespaces: n
      } = this.client.session.get(s);
      if (!(0, _utils.isValidNamespacesChainId)(n, i)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o);
      }
      if (!(0, _utils.isValidEvent)(t)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
      if (!(0, _utils.isValidNamespacesEvent)(n, i, t.name)) {
        const {
          message: o
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async e => {
      if (!(0, _utils.isValidParams)(e)) {
        const {
          message: t
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(t);
      }
      const {
        topic: s
      } = e;
      await this.isValidSessionOrPairingTopic(s);
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: r
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(r);
    }
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(_core.RELAYER_EVENTS.message, async r => {
      const {
        topic: e,
        message: s
      } = r;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s))) return;
      const t = await this.client.core.crypto.decode(e, s);
      (0, _jsonrpcUtils.isJsonRpcRequest)(t) ? (this.client.core.history.set(e, t), this.onRelayEventRequest({
        topic: e,
        payload: t
      })) : (0, _jsonrpcUtils.isJsonRpcResponse)(t) && (await this.client.core.history.resolve(t), this.onRelayEventResponse({
        topic: e,
        payload: t
      }));
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(_core.EXPIRER_EVENTS.expired, async r => {
      const {
        topic: e,
        id: s
      } = (0, _utils.parseExpirerTarget)(r.target);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, !0), this.client.events.emit("session_expire", {
        topic: e
      })) : s && (await this.deleteProposal(s, !0));
    });
  }
  isValidPairingTopic(r) {
    if (!(0, _utils.isValidString)(r, !1)) {
      const {
        message: e
      } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(r)) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
      throw new Error(e);
    }
    if ((0, _utils.isExpired)(this.client.core.pairing.pairings.get(r).expiry)) {
      const {
        message: e
      } = (0, _utils.getInternalError)("EXPIRED", `pairing topic: ${r}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(r) {
    if (!(0, _utils.isValidString)(r, !1)) {
      const {
        message: e
      } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `session topic should be a string: ${r}`);
      throw new Error(e);
    }
    if (!this.client.session.keys.includes(r)) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `session topic doesn't exist: ${r}`);
      throw new Error(e);
    }
    if ((0, _utils.isExpired)(this.client.session.get(r).expiry)) {
      await this.deleteSession(r);
      const {
        message: e
      } = (0, _utils.getInternalError)("EXPIRED", `session topic: ${r}`);
      throw new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(r) {
    if (this.client.session.keys.includes(r)) await this.isValidSessionTopic(r);else if (this.client.core.pairing.pairings.keys.includes(r)) this.isValidPairingTopic(r);else if ((0, _utils.isValidString)(r, !1)) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r}`);
      throw new Error(e);
    } else {
      const {
        message: e
      } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(r) {
    if (!(0, _utils.isValidId)(r)) {
      const {
        message: e
      } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `proposal id should be a number: ${r}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(r)) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `proposal id doesn't exist: ${r}`);
      throw new Error(e);
    }
    if ((0, _utils.isExpired)(this.client.proposal.get(r).expiry)) {
      await this.deleteProposal(r);
      const {
        message: e
      } = (0, _utils.getInternalError)("EXPIRED", `proposal id: ${r}`);
      throw new Error(e);
    }
  }
}
class ke extends _core.Store {
  constructor(r, e) {
    super(r, e, Y, K), this.core = r, this.logger = e;
  }
}
class Ye extends _core.Store {
  constructor(r, e) {
    super(r, e, J, K), this.core = r, this.logger = e;
  }
}
class A extends _types.ISignClient {
  constructor(r) {
    super(r), this.protocol = G, this.version = $, this.name = D.name, this.events = new _events.EventEmitter(), this.on = (s, t) => this.events.on(s, t), this.once = (s, t) => this.events.once(s, t), this.off = (s, t) => this.events.off(s, t), this.removeListener = (s, t) => this.events.removeListener(s, t), this.connect = async s => {
      try {
        return await this.engine.connect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.pair = async s => {
      try {
        return await this.engine.pair(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.approve = async s => {
      try {
        return await this.engine.approve(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.reject = async s => {
      try {
        return await this.engine.reject(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.update = async s => {
      try {
        return await this.engine.update(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.extend = async s => {
      try {
        return await this.engine.extend(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.request = async s => {
      try {
        return await this.engine.request(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.respond = async s => {
      try {
        return await this.engine.respond(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.ping = async s => {
      try {
        return await this.engine.ping(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.emit = async s => {
      try {
        return await this.engine.emit(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.disconnect = async s => {
      try {
        return await this.engine.disconnect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.find = s => {
      try {
        return this.engine.find(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.name = r?.name || D.name, this.metadata = r?.metadata || (0, _utils.getAppMetadata)();
    const e = typeof r?.logger < "u" && typeof r?.logger != "string" ? r.logger : (0, _pino.default)((0, _logger.getDefaultLoggerOptions)({
      level: r?.logger || D.logger
    }));
    this.core = r?.core || new _core.Core(r), this.logger = (0, _logger.generateChildLogger)(e, this.name), this.session = new Ye(this.core, this.logger), this.proposal = new ke(this.core, this.logger), this.engine = new je(this);
  }
  static async init(r) {
    const e = new A(r);
    return await e.initialize(), e;
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.engine.init(), this.logger.info("SignClient Initilization Success");
    } catch (r) {
      throw this.logger.info("SignClient Initilization Failure"), this.logger.error(r.message), r;
    }
  }
}
exports.default = A;
const Je = A;
exports.SignClient = Je;

},{"@walletconnect/core":70,"@walletconnect/jsonrpc-utils":41,"@walletconnect/logger":55,"@walletconnect/time":81,"@walletconnect/types":71,"@walletconnect/utils":72,"events":137,"pino":119}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Subscriber = exports.Store = exports.SUBSCRIBER_STORAGE_VERSION = exports.SUBSCRIBER_EVENTS = exports.SUBSCRIBER_DEFAULT_TTL = exports.SUBSCRIBER_CONTEXT = exports.STORE_STORAGE_VERSION = exports.Relayer = exports.RELAYER_SUBSCRIBER_SUFFIX = exports.RELAYER_STORAGE_OPTIONS = exports.RELAYER_SDK_VERSION = exports.RELAYER_RECONNECT_TIMEOUT = exports.RELAYER_PROVIDER_EVENTS = exports.RELAYER_EVENTS = exports.RELAYER_DEFAULT_RELAY_URL = exports.RELAYER_DEFAULT_PROTOCOL = exports.RELAYER_DEFAULT_LOGGER = exports.RELAYER_CONTEXT = exports.Pairing = exports.PUBLISHER_DEFAULT_TTL = exports.PUBLISHER_CONTEXT = exports.PENDING_SUB_RESOLUTION_TIMEOUT = exports.PAIRING_STORAGE_VERSION = exports.PAIRING_RPC_OPTS = exports.PAIRING_DEFAULT_TTL = exports.PAIRING_CONTEXT = exports.MessageTracker = exports.MESSAGES_STORAGE_VERSION = exports.MESSAGES_CONTEXT = exports.KeyChain = exports.KEYCHAIN_STORAGE_VERSION = exports.KEYCHAIN_CONTEXT = exports.JsonRpcHistory = exports.HISTORY_STORAGE_VERSION = exports.HISTORY_EVENTS = exports.HISTORY_CONTEXT = exports.Expirer = exports.EXPIRER_STORAGE_VERSION = exports.EXPIRER_EVENTS = exports.EXPIRER_DEFAULT_TTL = exports.EXPIRER_CONTEXT = exports.Crypto = exports.Core = exports.CRYPTO_JWT_TTL = exports.CRYPTO_CONTEXT = exports.CRYPTO_CLIENT_SEED = exports.CORE_VERSION = exports.CORE_STORAGE_PREFIX = exports.CORE_STORAGE_OPTIONS = exports.CORE_PROTOCOL = exports.CORE_DEFAULT = exports.CORE_CONTEXT = void 0;
var _events = _interopRequireWildcard(require("events"));
var _pino = _interopRequireDefault(require("pino"));
var _keyvaluestorage = _interopRequireDefault(require("@walletconnect/keyvaluestorage"));
var _heartbeat = require("@walletconnect/heartbeat");
var _logger = require("@walletconnect/logger");
var _types = require("@walletconnect/types");
var _safeJson = require("@walletconnect/safe-json");
var K = _interopRequireWildcard(require("@walletconnect/relay-auth"));
var _utils = require("@walletconnect/utils");
var _time = require("@walletconnect/time");
var _jsonrpcProvider = require("@walletconnect/jsonrpc-provider");
var _jsonrpcUtils = require("@walletconnect/jsonrpc-utils");
var _jsonrpcWsConnection = _interopRequireDefault(require("@walletconnect/jsonrpc-ws-connection"));
var _lodash = _interopRequireDefault(require("lodash.isequal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function fi(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var n = r.charAt(s),
      a = n.charCodeAt(0);
    if (t[a] !== 255) throw new TypeError(n + " is ambiguous");
    t[a] = s;
  }
  var o = r.length,
    h = r.charAt(0),
    l = Math.log(o) / Math.log(256),
    d = Math.log(256) / Math.log(o);
  function g(u) {
    if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u.length === 0) return "";
    for (var D = 0, P = 0, E = 0, I = u.length; E !== I && u[E] === 0;) E++, D++;
    for (var C = (I - E) * d + 1 >>> 0, y = new Uint8Array(C); E !== I;) {
      for (var R = u[E], x = 0, m = C - 1; (R !== 0 || x < P) && m !== -1; m--, x++) R += 256 * y[m] >>> 0, y[m] = R % o >>> 0, R = R / o >>> 0;
      if (R !== 0) throw new Error("Non-zero carry");
      P = x, E++;
    }
    for (var S = C - P; S !== C && y[S] === 0;) S++;
    for (var $ = h.repeat(D); S < C; ++S) $ += r.charAt(y[S]);
    return $;
  }
  function M(u) {
    if (typeof u != "string") throw new TypeError("Expected String");
    if (u.length === 0) return new Uint8Array();
    var D = 0;
    if (u[D] !== " ") {
      for (var P = 0, E = 0; u[D] === h;) P++, D++;
      for (var I = (u.length - D) * l + 1 >>> 0, C = new Uint8Array(I); u[D];) {
        var y = t[u.charCodeAt(D)];
        if (y === 255) return;
        for (var R = 0, x = I - 1; (y !== 0 || R < E) && x !== -1; x--, R++) y += o * C[x] >>> 0, C[x] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0) throw new Error("Non-zero carry");
        E = R, D++;
      }
      if (u[D] !== " ") {
        for (var m = I - E; m !== I && C[m] === 0;) m++;
        for (var S = new Uint8Array(P + (I - m)), $ = P; m !== I;) S[$++] = C[m++];
        return S;
      }
    }
  }
  function G(u) {
    var D = M(u);
    if (D) return D;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: g,
    decodeUnsafe: M,
    decode: G
  };
}
var wi = fi,
  vi = wi;
const we = r => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  Ii = r => new TextEncoder().encode(r),
  Ci = r => new TextDecoder().decode(r);
class Ri {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class _i {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return ve(this, e);
  }
}
class Si {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ve(this, e);
  }
  decode(e) {
    const t = e[0],
      i = this.decoders[t];
    if (i) return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const ve = (r, e) => new Si({
  ...(r.decoders || {
    [r.prefix]: r
  }),
  ...(e.decoders || {
    [e.prefix]: e
  })
});
class Ti {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new Ri(e, t, i), this.decoder = new _i(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const B = ({
    name: r,
    prefix: e,
    encode: t,
    decode: i
  }) => new Ti(r, e, t, i),
  F = ({
    prefix: r,
    name: e,
    alphabet: t
  }) => {
    const {
      encode: i,
      decode: s
    } = vi(t, e);
    return B({
      prefix: r,
      name: e,
      encode: i,
      decode: n => we(s(n))
    });
  },
  xi = (r, e, t, i) => {
    const s = {};
    for (let d = 0; d < e.length; ++d) s[e[d]] = d;
    let n = r.length;
    for (; r[n - 1] === "=";) --n;
    const a = new Uint8Array(n * t / 8 | 0);
    let o = 0,
      h = 0,
      l = 0;
    for (let d = 0; d < n; ++d) {
      const g = s[r[d]];
      if (g === void 0) throw new SyntaxError(`Non-${i} character`);
      h = h << t | g, o += t, o >= 8 && (o -= 8, a[l++] = 255 & h >> o);
    }
    if (o >= t || 255 & h << 8 - o) throw new SyntaxError("Unexpected end of data");
    return a;
  },
  Pi = (r, e, t) => {
    const i = e[e.length - 1] === "=",
      s = (1 << t) - 1;
    let n = "",
      a = 0,
      o = 0;
    for (let h = 0; h < r.length; ++h) for (o = o << 8 | r[h], a += 8; a > t;) a -= t, n += e[s & o >> a];
    if (a && (n += e[s & o << t - a]), i) for (; n.length * t & 7;) n += "=";
    return n;
  },
  p = ({
    name: r,
    prefix: e,
    bitsPerChar: t,
    alphabet: i
  }) => B({
    prefix: e,
    name: r,
    encode(s) {
      return Pi(s, i, t);
    },
    decode(s) {
      return xi(s, i, t, r);
    }
  }),
  Oi = B({
    prefix: "\0",
    name: "identity",
    encode: r => Ci(r),
    decode: r => Ii(r)
  });
var Ai = Object.freeze({
  __proto__: null,
  identity: Oi
});
const zi = p({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
var Ni = Object.freeze({
  __proto__: null,
  base2: zi
});
const Ui = p({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
var Li = Object.freeze({
  __proto__: null,
  base8: Ui
});
const Fi = F({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
var Mi = Object.freeze({
  __proto__: null,
  base10: Fi
});
const $i = p({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  }),
  Ki = p({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });
var ki = Object.freeze({
  __proto__: null,
  base16: $i,
  base16upper: Ki
});
const Bi = p({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  }),
  ji = p({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  }),
  Vi = p({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  }),
  qi = p({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  }),
  Gi = p({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  }),
  Yi = p({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  }),
  Ji = p({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  }),
  Hi = p({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  }),
  Xi = p({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });
var Wi = Object.freeze({
  __proto__: null,
  base32: Bi,
  base32upper: ji,
  base32pad: Vi,
  base32padupper: qi,
  base32hex: Gi,
  base32hexupper: Yi,
  base32hexpad: Ji,
  base32hexpadupper: Hi,
  base32z: Xi
});
const Zi = F({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  }),
  Qi = F({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });
var es = Object.freeze({
  __proto__: null,
  base36: Zi,
  base36upper: Qi
});
const ts = F({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  }),
  is = F({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });
var ss = Object.freeze({
  __proto__: null,
  base58btc: ts,
  base58flickr: is
});
const rs = p({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  }),
  ns = p({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  }),
  as = p({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  }),
  os = p({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });
var hs = Object.freeze({
  __proto__: null,
  base64: rs,
  base64pad: ns,
  base64url: as,
  base64urlpad: os
});
const Ie = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),
  cs = Ie.reduce((r, e, t) => (r[t] = e, r), []),
  us = Ie.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function ls(r) {
  return r.reduce((e, t) => (e += cs[t], e), "");
}
function ds(r) {
  const e = [];
  for (const t of r) {
    const i = us[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const gs = B({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: ls,
  decode: ds
});
var ps = Object.freeze({
    __proto__: null,
    base256emoji: gs
  }),
  Ds = Re,
  Ce = 128,
  ys = 127,
  bs = ~ys,
  Es = Math.pow(2, 31);
function Re(r, e, t) {
  e = e || [], t = t || 0;
  for (var i = t; r >= Es;) e[t++] = r & 255 | Ce, r /= 128;
  for (; r & bs;) e[t++] = r & 255 | Ce, r >>>= 7;
  return e[t] = r | 0, Re.bytes = t - i + 1, e;
}
var ms = ie,
  fs = 128,
  _e = 127;
function ie(r, i) {
  var t = 0,
    i = i || 0,
    s = 0,
    n = i,
    a,
    o = r.length;
  do {
    if (n >= o) throw ie.bytes = 0, new RangeError("Could not decode varint");
    a = r[n++], t += s < 28 ? (a & _e) << s : (a & _e) * Math.pow(2, s), s += 7;
  } while (a >= fs);
  return ie.bytes = n - i, t;
}
var ws = Math.pow(2, 7),
  vs = Math.pow(2, 14),
  Is = Math.pow(2, 21),
  Cs = Math.pow(2, 28),
  Rs = Math.pow(2, 35),
  _s = Math.pow(2, 42),
  Ss = Math.pow(2, 49),
  Ts = Math.pow(2, 56),
  xs = Math.pow(2, 63),
  Ps = function (r) {
    return r < ws ? 1 : r < vs ? 2 : r < Is ? 3 : r < Cs ? 4 : r < Rs ? 5 : r < _s ? 6 : r < Ss ? 7 : r < Ts ? 8 : r < xs ? 9 : 10;
  },
  Os = {
    encode: Ds,
    decode: ms,
    encodingLength: Ps
  },
  Se = Os;
const Te = (r, e, t = 0) => (Se.encode(r, e, t), e),
  xe = r => Se.encodingLength(r),
  se = (r, e) => {
    const t = e.byteLength,
      i = xe(r),
      s = i + xe(t),
      n = new Uint8Array(s + t);
    return Te(r, n, 0), Te(t, n, i), n.set(e, s), new As(r, t, e, n);
  };
class As {
  constructor(e, t, i, s) {
    this.code = e, this.size = t, this.digest = i, this.bytes = s;
  }
}
const Pe = ({
  name: r,
  code: e,
  encode: t
}) => new zs(r, e, t);
class zs {
  constructor(e, t, i) {
    this.name = e, this.code = t, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? se(this.code, t) : t.then(i => se(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
}
const Oe = r => async e => new Uint8Array(await crypto.subtle.digest(r, e)),
  Ns = Pe({
    name: "sha2-256",
    code: 18,
    encode: Oe("SHA-256")
  }),
  Us = Pe({
    name: "sha2-512",
    code: 19,
    encode: Oe("SHA-512")
  });
var Ls = Object.freeze({
  __proto__: null,
  sha256: Ns,
  sha512: Us
});
const Ae = 0,
  Fs = "identity",
  ze = we,
  Ms = r => se(Ae, ze(r)),
  $s = {
    code: Ae,
    name: Fs,
    encode: ze,
    digest: Ms
  };
var Ks = Object.freeze({
  __proto__: null,
  identity: $s
});
new TextEncoder(), new TextDecoder();
const Ne = {
  ...Ai,
  ...Ni,
  ...Li,
  ...Mi,
  ...ki,
  ...Wi,
  ...es,
  ...ss,
  ...hs,
  ...ps
};
({
  ...Ls,
  ...Ks
});
function ks(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r) : new Uint8Array(r);
}
function Ue(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: {
      name: r,
      prefix: e,
      encode: t
    },
    decoder: {
      decode: i
    }
  };
}
const Le = Ue("utf8", "u", r => "u" + new TextDecoder("utf8").decode(r), r => new TextEncoder().encode(r.substring(1))),
  re = Ue("ascii", "a", r => {
    let e = "a";
    for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
    return e;
  }, r => {
    r = r.substring(1);
    const e = ks(r.length);
    for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
    return e;
  }),
  Bs = {
    utf8: Le,
    "utf-8": Le,
    hex: Ne.base16,
    latin1: re,
    ascii: re,
    binary: re,
    ...Ne
  };
function js(r, e = "utf8") {
  const t = Bs[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r, "utf8") : t.decoder.decode(`${t.prefix}${r}`);
}
const ne = "wc",
  Fe = 2,
  j = "core",
  T = `${ne}@${2}:${j}:`,
  Me = {
    name: j,
    logger: "error"
  },
  $e = {
    database: ":memory:"
  },
  Ke = "crypto",
  ae = "client_ed25519_seed",
  ke = _time.ONE_DAY,
  Be = "keychain",
  je = "0.3",
  Ve = "messages",
  qe = "0.3",
  Ge = _time.SIX_HOURS,
  Ye = "publisher",
  Je = "irn",
  He = "error",
  Xe = "wss://relay.walletconnect.com",
  We = "relayer",
  N = {
    message: "relayer_message",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error"
  },
  Ze = "_subscription",
  O = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
  },
  Qe = _time.ONE_SECOND,
  Vs = {
    database: ":memory:"
  },
  et = "2.1.3",
  tt = "0.3",
  _ = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
  },
  qs = _time.THIRTY_DAYS,
  it = "subscription",
  st = "0.3",
  rt = _time.FIVE_SECONDS * 1e3,
  nt = "pairing",
  at = "0.3",
  Gs = _time.THIRTY_DAYS,
  U = {
    wc_pairingDelete: {
      req: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 1e3
      },
      res: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 1001
      }
    },
    wc_pairingPing: {
      req: {
        ttl: _time.THIRTY_SECONDS,
        prompt: !1,
        tag: 1002
      },
      res: {
        ttl: _time.THIRTY_SECONDS,
        prompt: !1,
        tag: 1003
      }
    },
    unregistered_method: {
      req: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 0
      },
      res: {
        ttl: _time.ONE_DAY,
        prompt: !1,
        tag: 0
      }
    }
  },
  v = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
  },
  ot = "history",
  ht = "0.3",
  ct = "expirer",
  b = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
  },
  ut = "0.3",
  Ys = _time.ONE_DAY;
exports.EXPIRER_DEFAULT_TTL = Ys;
exports.EXPIRER_STORAGE_VERSION = ut;
exports.EXPIRER_EVENTS = b;
exports.EXPIRER_CONTEXT = ct;
exports.HISTORY_STORAGE_VERSION = ht;
exports.HISTORY_CONTEXT = ot;
exports.HISTORY_EVENTS = v;
exports.PAIRING_RPC_OPTS = U;
exports.PAIRING_DEFAULT_TTL = Gs;
exports.PAIRING_STORAGE_VERSION = at;
exports.PAIRING_CONTEXT = nt;
exports.PENDING_SUB_RESOLUTION_TIMEOUT = rt;
exports.SUBSCRIBER_STORAGE_VERSION = st;
exports.SUBSCRIBER_CONTEXT = it;
exports.SUBSCRIBER_DEFAULT_TTL = qs;
exports.SUBSCRIBER_EVENTS = _;
exports.STORE_STORAGE_VERSION = tt;
exports.RELAYER_SDK_VERSION = et;
exports.RELAYER_STORAGE_OPTIONS = Vs;
exports.RELAYER_RECONNECT_TIMEOUT = Qe;
exports.RELAYER_PROVIDER_EVENTS = O;
exports.RELAYER_SUBSCRIBER_SUFFIX = Ze;
exports.RELAYER_EVENTS = N;
exports.RELAYER_CONTEXT = We;
exports.RELAYER_DEFAULT_RELAY_URL = Xe;
exports.RELAYER_DEFAULT_LOGGER = He;
exports.RELAYER_DEFAULT_PROTOCOL = Je;
exports.PUBLISHER_CONTEXT = Ye;
exports.PUBLISHER_DEFAULT_TTL = Ge;
exports.MESSAGES_STORAGE_VERSION = qe;
exports.MESSAGES_CONTEXT = Ve;
exports.KEYCHAIN_STORAGE_VERSION = je;
exports.KEYCHAIN_CONTEXT = Be;
exports.CRYPTO_JWT_TTL = ke;
exports.CRYPTO_CLIENT_SEED = ae;
exports.CRYPTO_CONTEXT = Ke;
exports.CORE_STORAGE_OPTIONS = $e;
exports.CORE_DEFAULT = Me;
exports.CORE_STORAGE_PREFIX = T;
exports.CORE_CONTEXT = j;
exports.CORE_VERSION = Fe;
exports.CORE_PROTOCOL = ne;
class lt {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = new Map(), this.name = Be, this.version = je, this.initialized = !1, this.storagePrefix = T, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = i => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }, this.get = i => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const {
          message: n
        } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(n);
      }
      return s;
    }, this.del = async i => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = (0, _logger.generateChildLogger)(t, this.name);
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, (0, _utils.mapToObj)(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? (0, _utils.objToMap)(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
exports.KeyChain = lt;
class dt {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.name = Ke, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = s => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(),
        n = K.generateKeyPair(s);
      return K.encodeIss(n.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = (0, _utils.generateKeyPair)();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async s => {
      this.isInitialized();
      const n = await this.getClientSeed(),
        a = K.generateKeyPair(n),
        o = (0, _utils.generateRandomBytes32)(),
        h = ke;
      return await K.signJWT(o, s, h, a);
    }, this.generateSharedKey = (s, n, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s),
        h = (0, _utils.deriveSymKey)(o, n);
      return this.setSymKey(h, a);
    }, this.setSymKey = async (s, n) => {
      this.isInitialized();
      const a = n || (0, _utils.hashKey)(s);
      return await this.keychain.set(a, s), a;
    }, this.deleteKeyPair = async s => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async s => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, n, a) => {
      this.isInitialized();
      const o = (0, _utils.validateEncoding)(a),
        h = (0, _safeJson.safeJsonStringify)(n);
      if ((0, _utils.isTypeOneEnvelope)(o)) {
        const M = o.senderPublicKey,
          G = o.receiverPublicKey;
        s = await this.generateSharedKey(M, G);
      }
      const l = this.getSymKey(s),
        {
          type: d,
          senderPublicKey: g
        } = o;
      return (0, _utils.encrypt)({
        type: d,
        symKey: l,
        message: h,
        senderPublicKey: g
      });
    }, this.decode = async (s, n, a) => {
      this.isInitialized();
      const o = (0, _utils.validateDecoding)(n, a);
      if ((0, _utils.isTypeOneEnvelope)(o)) {
        const d = o.receiverPublicKey,
          g = o.senderPublicKey;
        s = await this.generateSharedKey(d, g);
      }
      const h = this.getSymKey(s),
        l = (0, _utils.decrypt)({
          symKey: h,
          encoded: n
        });
      return (0, _safeJson.safeJsonParse)(l);
    }, this.core = e, this.logger = (0, _logger.generateChildLogger)(t, this.name), this.keychain = i || new lt(this.core, this.logger);
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  getPayloadType(e) {
    const t = (0, _utils.deserialize)(e);
    return (0, _utils.decodeTypeByte)(t.type);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(ae);
    } catch {
      e = (0, _utils.generateRandomBytes32)(), await this.keychain.set(ae, e);
    }
    return js(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
exports.Crypto = dt;
class gt extends _types.IMessageTracker {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = new Map(), this.name = Ve, this.version = qe, this.initialized = !1, this.storagePrefix = T, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            size: this.messages.size
          });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, s) => {
      this.isInitialized();
      const n = (0, _utils.hashMessage)(s);
      let a = this.messages.get(i);
      return typeof a > "u" && (a = {}), typeof a[n] < "u" || (a[n] = s, this.messages.set(i, a), await this.persist()), n;
    }, this.get = i => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i, s) => {
      this.isInitialized();
      const n = this.get(i),
        a = (0, _utils.hashMessage)(s);
      return typeof n[a] < "u";
    }, this.del = async i => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = (0, _logger.generateChildLogger)(e, this.name), this.core = t;
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, (0, _utils.mapToObj)(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? (0, _utils.objToMap)(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
exports.MessageTracker = gt;
class Js extends _types.IPublisher {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new _events.EventEmitter(), this.name = Ye, this.queue = new Map(), this.publish = async (i, s, n) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({
        type: "method",
        method: "publish",
        params: {
          topic: i,
          message: s,
          opts: n
        }
      });
      try {
        const a = n?.ttl || Ge,
          o = (0, _utils.getRelayProtocolName)(n),
          h = n?.prompt || !1,
          l = n?.tag || 0,
          d = {
            topic: i,
            message: s,
            opts: {
              ttl: a,
              relay: o,
              prompt: h,
              tag: l
            }
          },
          g = (0, _utils.hashMessage)(s);
        this.queue.set(g, d), await this.rpcPublish(i, s, a, o, h, l), this.onPublish(g, d), this.logger.debug("Successfully Published Payload"), this.logger.trace({
          type: "method",
          method: "publish",
          params: {
            topic: i,
            message: s,
            opts: n
          }
        });
      } catch (a) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.relayer = e, this.logger = (0, _logger.generateChildLogger)(t, this.name), this.registerEventListeners();
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  rpcPublish(e, t, i, s, n, a) {
    var o, h, l, d;
    const g = {
      method: (0, _utils.getRelayProtocolApi)(s.protocol).publish,
      params: {
        topic: e,
        message: t,
        ttl: i,
        prompt: n,
        tag: a
      }
    };
    return (0, _utils.isUndefined)((o = g.params) == null ? void 0 : o.prompt) && ((h = g.params) == null || delete h.prompt), (0, _utils.isUndefined)((l = g.params) == null ? void 0 : l.tag) && ((d = g.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
      type: "message",
      direction: "outgoing",
      request: g
    }), this.relayer.provider.request(g);
  }
  onPublish(e, t) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async e => {
      const {
          topic: t,
          message: i,
          opts: {
            ttl: s,
            relay: n,
            prompt: a,
            tag: o
          }
        } = e,
        h = (0, _utils.hashMessage)(i);
      await this.rpcPublish(t, i, s, n, a, o), this.onPublish(h, e);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(_heartbeat.HEARTBEAT_EVENTS.pulse, () => {
      this.checkQueue();
    });
  }
}
class Hs {
  constructor() {
    this.map = new Map(), this.set = (e, t) => {
      const i = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i, t]);
    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const i = this.get(e);
      if (!this.exists(e, t)) return;
      const s = i.filter(n => n !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Xs = Object.defineProperty,
  Ws = Object.defineProperties,
  Zs = Object.getOwnPropertyDescriptors,
  pt = Object.getOwnPropertySymbols,
  Qs = Object.prototype.hasOwnProperty,
  er = Object.prototype.propertyIsEnumerable,
  Dt = (r, e, t) => e in r ? Xs(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : r[e] = t,
  V = (r, e) => {
    for (var t in e || (e = {})) Qs.call(e, t) && Dt(r, t, e[t]);
    if (pt) for (var t of pt(e)) er.call(e, t) && Dt(r, t, e[t]);
    return r;
  },
  oe = (r, e) => Ws(r, Zs(e));
class yt extends _types.ISubscriber {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map(), this.topicMap = new Hs(), this.events = new _events.EventEmitter(), this.name = it, this.version = st, this.pending = new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pendingSubInterval = 20, this.storagePrefix = T, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable());
    }, this.subscribe = async (i, s) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
        type: "method",
        method: "subscribe",
        params: {
          topic: i,
          opts: s
        }
      });
      try {
        const n = (0, _utils.getRelayProtocolName)(s),
          a = {
            topic: i,
            relay: n
          };
        this.pending.set(i, a);
        const o = await this.rpcSubscribe(i, n);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
          type: "method",
          method: "subscribe",
          params: {
            topic: i,
            opts: s
          }
        }), o;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }, this.unsubscribe = async (i, s) => {
      this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }, this.isSubscribed = async i => this.topics.includes(i) ? !0 : await new Promise((s, n) => {
      const a = new _time.Watch();
      a.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= rt && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), n(!1));
      }, this.pendingSubInterval);
    }), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.restart = async () => {
      await this.restore(), await this.reset();
    }, this.relayer = e, this.logger = (0, _logger.generateChildLogger)(t, this.name);
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {}
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear(), this.initialized = !1;
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async s => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
      type: "method",
      method: "unsubscribe",
      params: {
        topic: e,
        id: t,
        opts: i
      }
    });
    try {
      const s = (0, _utils.getRelayProtocolName)(i);
      await this.rpcUnsubscribe(e, t, s);
      const n = (0, _utils.getSdkError)("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: {
          topic: e,
          id: t,
          opts: i
        }
      });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t) {
    const i = {
      method: (0, _utils.getRelayProtocolApi)(t.protocol).subscribe,
      params: {
        topic: e
      }
    };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
      type: "payload",
      direction: "outgoing",
      request: i
    }), await this.relayer.provider.request(i);
  }
  rpcUnsubscribe(e, t, i) {
    const s = {
      method: (0, _utils.getRelayProtocolApi)(i.protocol).unsubscribe,
      params: {
        topic: e,
        id: t
      }
    };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
      type: "payload",
      direction: "outgoing",
      request: s
    }), this.relayer.provider.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, oe(V({}, t), {
      id: e
    })), this.pending.delete(t.topic);
  }
  onResubscribe(e, t) {
    this.addSubscription(e, oe(V({}, t), {
      id: e
    })), this.pending.delete(t.topic);
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
      type: "method",
      method: "setSubscription",
      id: e,
      subscription: t
    }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, V({}, t)), this.topicMap.set(t.topic, e), this.events.emit(_.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({
      type: "method",
      method: "getSubscription",
      id: e
    });
    const t = this.subscriptions.get(e);
    if (!t) {
      const {
        message: i
      } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({
      type: "method",
      method: "deleteSubscription",
      id: e,
      reason: t
    });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(_.deleted, oe(V({}, i), {
      reason: t
    }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(_.sync);
  }
  async reset() {
    this.cached.length && (await Promise.all(this.cached.map(async e => await this.resubscribe(e)))), this.events.emit(_.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const {
          message: t
        } = (0, _utils.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
        type: "method",
        method: "restore",
        subscriptions: this.values
      });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async resubscribe(e) {
    if (!this.ids.includes(e.id)) {
      const {
          topic: t,
          relay: i
        } = e,
        s = {
          topic: t,
          relay: i
        };
      this.pending.set(s.topic, s);
      const n = await this.rpcSubscribe(s.topic, s.relay);
      this.onResubscribe(n, s);
    }
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  checkPending() {
    this.relayer.transportExplicitlyClosed || this.pending.forEach(async e => {
      const t = await this.rpcSubscribe(e.topic, e.relay);
      this.onSubscribe(t, e);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(_heartbeat.HEARTBEAT_EVENTS.pulse, () => {
      this.checkPending();
    }), this.relayer.provider.on(O.connect, async () => {
      await this.onConnect();
    }), this.relayer.provider.on(O.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(_.created, async e => {
      const t = _.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({
        type: "event",
        event: t,
        data: e
      }), await this.persist();
    }), this.events.on(_.deleted, async e => {
      const t = _.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({
        type: "event",
        event: t,
        data: e
      }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
exports.Subscriber = yt;
var tr = Object.defineProperty,
  bt = Object.getOwnPropertySymbols,
  ir = Object.prototype.hasOwnProperty,
  sr = Object.prototype.propertyIsEnumerable,
  Et = (r, e, t) => e in r ? tr(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : r[e] = t,
  rr = (r, e) => {
    for (var t in e || (e = {})) ir.call(e, t) && Et(r, t, e[t]);
    if (bt) for (var t of bt(e)) sr.call(e, t) && Et(r, t, e[t]);
    return r;
  };
class mt extends _types.IRelayer {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new _events.EventEmitter(), this.name = We, this.transportExplicitlyClosed = !1, this.initialized = !1, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? (0, _logger.generateChildLogger)(e.logger, this.name) : (0, _pino.default)((0, _logger.getDefaultLoggerOptions)({
      level: e.logger || He
    })), this.messages = new gt(this.logger, e.core), this.subscriber = new yt(this, this.logger), this.publisher = new Js(this, this.logger), this.relayUrl = e?.relayUrl || Xe, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.provider = await this.createProvider(), await Promise.all([this.messages.init(), this.provider.connect(), this.subscriber.init()]), this.registerEventListeners(), this.initialized = !0;
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, i) {
    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({
      topic: e,
      message: t
    });
  }
  async subscribe(e, t) {
    return this.isInitialized(), await this.subscriber.subscribe(e, t);
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, await this.provider.disconnect();
  }
  async transportOpen(e) {
    this.relayUrl = e || this.relayUrl, this.transportExplicitlyClosed = !1, await this.provider.connect(), await new Promise(t => {
      this.subscriber.once(_.resubscribed, () => {
        t();
      });
    });
  }
  async createProvider() {
    const e = await this.core.crypto.signJWT(this.relayUrl);
    return new _jsonrpcProvider.JsonRpcProvider(new _jsonrpcWsConnection.default((0, _utils.formatRelayRpcUrl)({
      sdkVersion: et,
      protocol: this.protocol,
      version: this.version,
      relayUrl: this.relayUrl,
      projectId: this.projectId,
      auth: e
    })));
  }
  async recordMessageEvent(e) {
    const {
      topic: t,
      message: i
    } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const {
      topic: t,
      message: i
    } = e;
    return (await this.subscriber.isSubscribed(t)) ? this.messages.has(t, i) : !0;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
      type: "payload",
      direction: "incoming",
      payload: e
    }), (0, _jsonrpcUtils.isJsonRpcRequest)(e)) {
      if (!e.method.endsWith(Ze)) return;
      const t = e.params,
        {
          topic: i,
          message: s
        } = t.data,
        n = {
          topic: i,
          message: s
        };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(rr({
        type: "event",
        event: t.id
      }, n)), this.events.emit(t.id, n), await this.acknowledgePayload(e), await this.onMessageEvent(n);
    }
  }
  async onMessageEvent(e) {
    (await this.shouldIgnoreMessageEvent(e)) || (this.events.emit(N.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = (0, _jsonrpcUtils.formatJsonRpcResult)(e.id, !0);
    await this.provider.connection.send(t);
  }
  registerEventListeners() {
    this.provider.on(O.payload, e => this.onProviderPayload(e)), this.provider.on(O.connect, () => {
      this.events.emit(N.connect);
    }), this.provider.on(O.disconnect, () => {
      this.events.emit(N.disconnect), this.attemptToReconnect();
    }), this.provider.on(O.error, e => this.events.emit(N.error, e));
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(() => {
      this.provider.connect();
    }, (0, _time.toMiliseconds)(Qe));
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
exports.Relayer = mt;
var nr = Object.defineProperty,
  ft = Object.getOwnPropertySymbols,
  ar = Object.prototype.hasOwnProperty,
  or = Object.prototype.propertyIsEnumerable,
  wt = (r, e, t) => e in r ? nr(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : r[e] = t,
  vt = (r, e) => {
    for (var t in e || (e = {})) ar.call(e, t) && wt(r, t, e[t]);
    if (ft) for (var t of ft(e)) or.call(e, t) && wt(r, t, e[t]);
    return r;
  };
class It extends _types.IStore {
  constructor(e, t, i, s = T, n = void 0) {
    super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = new Map(), this.version = tt, this.cached = [], this.initialized = !1, this.storagePrefix = T, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(a => {
        (0, _utils.isProposalStruct)(a) ? this.map.set(a.id, a) : (0, _utils.isSessionStruct)(a) ? this.map.set(a.topic, a) : this.getKey && a !== null && !(0, _utils.isUndefined)(a) && this.map.set(this.getKey(a), a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({
        type: "method",
        method: "set",
        key: a,
        value: o
      }), this.map.set(a, o), await this.persist());
    }, this.get = a => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
      type: "method",
      method: "get",
      key: a
    }), this.getData(a)), this.getAll = a => (this.isInitialized(), a ? this.values.filter(o => Object.keys(a).every(h => (0, _lodash.default)(o[h], a[h]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
        type: "method",
        method: "update",
        key: a,
        update: o
      });
      const h = vt(vt({}, this.getData(a)), o);
      this.map.set(a, h), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({
        type: "method",
        method: "delete",
        key: a,
        reason: o
      }), this.map.delete(a), await this.persist());
    }, this.logger = (0, _logger.generateChildLogger)(t, this.name), this.storagePrefix = s, this.getKey = n;
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const {
        message: i
      } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const {
          message: t
        } = (0, _utils.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
        type: "method",
        method: "restore",
        value: this.values
      });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
exports.Store = It;
class Ct {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = nt, this.version = at, this.events = new _events.default(), this.initialized = !1, this.storagePrefix = T, this.ignoredPayloadTypes = [_utils.TYPE_1], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({
      methods: i
    }) => {
      this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = (0, _utils.generateRandomBytes32)(),
        s = await this.core.crypto.setSymKey(i),
        n = (0, _utils.calcExpiry)(_time.FIVE_MINUTES),
        a = {
          protocol: Je
        },
        o = {
          topic: s,
          expiry: n,
          relay: a,
          active: !1
        },
        h = (0, _utils.formatUri)({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: s,
          symKey: i,
          relay: a
        });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, n), {
        topic: s,
        uri: h
      };
    }, this.pair = async i => {
      this.isInitialized(), this.isValidPair(i);
      const {
          topic: s,
          symKey: n,
          relay: a
        } = (0, _utils.parseUri)(i.uri),
        o = (0, _utils.calcExpiry)(_time.FIVE_MINUTES),
        h = {
          topic: s,
          relay: a,
          expiry: o,
          active: !1
        };
      return await this.pairings.set(s, h), await this.core.crypto.setSymKey(n, s), await this.core.relayer.subscribe(s, {
        relay: a
      }), this.core.expirer.set(s, o), i.activatePairing && (await this.activate({
        topic: s
      })), h;
    }, this.activate = async ({
      topic: i
    }) => {
      this.isInitialized();
      const s = (0, _utils.calcExpiry)(_time.THIRTY_DAYS);
      await this.pairings.update(i, {
        active: !0,
        expiry: s
      }), this.core.expirer.set(i, s);
    }, this.ping = async i => {
      this.isInitialized(), await this.isValidPing(i);
      const {
        topic: s
      } = i;
      if (this.pairings.keys.includes(s)) {
        const n = await this.sendRequest(s, "wc_pairingPing", {}),
          {
            done: a,
            resolve: o,
            reject: h
          } = (0, _utils.createDelayedPromise)();
        this.events.once((0, _utils.engineEvent)("pairing_ping", n), ({
          error: l
        }) => {
          l ? h(l) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({
      topic: i,
      expiry: s
    }) => {
      this.isInitialized(), await this.pairings.update(i, {
        expiry: s
      });
    }, this.updateMetadata = async ({
      topic: i,
      metadata: s
    }) => {
      this.isInitialized(), await this.pairings.update(i, {
        peerMetadata: s
      });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async i => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const {
        topic: s
      } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", (0, _utils.getSdkError)("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i, s, n) => {
      const a = (0, _jsonrpcUtils.formatJsonRpcRequest)(s, n),
        o = await this.core.crypto.encode(i, a),
        h = U[s].req;
      return this.core.history.set(i, a), await this.core.relayer.publish(i, o, h), a.id;
    }, this.sendResult = async (i, s, n) => {
      const a = (0, _jsonrpcUtils.formatJsonRpcResult)(i, n),
        o = await this.core.crypto.encode(s, a),
        h = await this.core.history.get(s, i),
        l = U[h.request.method].res;
      await this.core.relayer.publish(s, o, l), await this.core.history.resolve(a);
    }, this.sendError = async (i, s, n) => {
      const a = (0, _jsonrpcUtils.formatJsonRpcError)(i, n),
        o = await this.core.crypto.encode(s, a),
        h = await this.core.history.get(s, i),
        l = U[h.request.method] ? U[h.request.method].res : U.unregistered_method.res;
      await this.core.relayer.publish(s, o, l), await this.core.history.resolve(a);
    }, this.deletePairing = async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, (0, _utils.getSdkError)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter(s => (0, _utils.isExpired)(s.expiry));
      await Promise.all(i.map(s => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = i => {
      const {
        topic: s,
        payload: n
      } = i;
      switch (n.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, n);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, n);
        default:
          return this.onUnknownRpcMethodRequest(s, n);
      }
    }, this.onRelayEventResponse = async i => {
      const {
          topic: s,
          payload: n
        } = i,
        a = (await this.core.history.get(s, n.id)).request.method;
      switch (a) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n);
        default:
          return this.onUnknownRpcMethodResponse(a);
      }
    }, this.onPairingPingRequest = async (i, s) => {
      const {
        id: n
      } = s;
      try {
        this.isValidPing({
          topic: i
        }), await this.sendResult(n, i, !0), this.events.emit("pairing_ping", {
          id: n,
          topic: i
        });
      } catch (a) {
        await this.sendError(n, i, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (i, s) => {
      const {
        id: n
      } = s;
      setTimeout(() => {
        (0, _jsonrpcUtils.isJsonRpcResult)(s) ? this.events.emit((0, _utils.engineEvent)("pairing_ping", n), {}) : (0, _jsonrpcUtils.isJsonRpcError)(s) && this.events.emit((0, _utils.engineEvent)("pairing_ping", n), {
          error: s.error
        });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, s) => {
      const {
        id: n
      } = s;
      try {
        this.isValidDisconnect({
          topic: i
        }), await this.sendResult(n, i, !0), await this.deletePairing(i), this.events.emit("pairing_delete", {
          id: n,
          topic: i
        });
      } catch (a) {
        await this.sendError(n, i, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (i, s) => {
      const {
        id: n,
        method: a
      } = s;
      try {
        if (this.registeredMethods.includes(a)) return;
        const o = (0, _utils.getSdkError)("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(n, i, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(n, i, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = i => {
      this.registeredMethods.includes(i) || this.logger.error((0, _utils.getSdkError)("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = i => {
      if (!(0, _utils.isValidParams)(i)) {
        const {
          message: s
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(s);
      }
      if (!(0, _utils.isValidUrl)(i.uri)) {
        const {
          message: s
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(s);
      }
    }, this.isValidPing = async i => {
      if (!(0, _utils.isValidParams)(i)) {
        const {
          message: n
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(n);
      }
      const {
        topic: s
      } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async i => {
      if (!(0, _utils.isValidParams)(i)) {
        const {
          message: n
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(n);
      }
      const {
        topic: s
      } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async i => {
      if (!(0, _utils.isValidString)(i, !1)) {
        const {
          message: s
        } = (0, _utils.getInternalError)("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const {
          message: s
        } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if ((0, _utils.isExpired)(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const {
          message: s
        } = (0, _utils.getInternalError)("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = (0, _logger.generateChildLogger)(t, this.name), this.pairings = new It(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(N.message, async e => {
      const {
        topic: t,
        message: i
      } = e;
      if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
      const s = await this.core.crypto.decode(t, i);
      (0, _jsonrpcUtils.isJsonRpcRequest)(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({
        topic: t,
        payload: s
      })) : (0, _jsonrpcUtils.isJsonRpcResponse)(s) && (await this.core.history.resolve(s), this.onRelayEventResponse({
        topic: t,
        payload: s
      }));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(b.expired, async e => {
      const {
        topic: t
      } = (0, _utils.parseExpirerTarget)(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
        topic: t
      }));
    });
  }
}
exports.Pairing = Ct;
class Rt extends _types.IJsonRpcHistory {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = new Map(), this.events = new _events.EventEmitter(), this.name = ot, this.version = ht, this.cached = [], this.initialized = !1, this.storagePrefix = T, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, s, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
        type: "method",
        method: "set",
        topic: i,
        request: s,
        chainId: n
      }), this.records.has(s.id)) return;
      const a = {
        id: s.id,
        topic: i,
        request: {
          method: s.method,
          params: s.params || null
        },
        chainId: n
      };
      this.records.set(a.id, a), this.events.emit(v.created, a);
    }, this.resolve = async i => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
        type: "method",
        method: "update",
        response: i
      }), !this.records.has(i.id)) return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = (0, _jsonrpcUtils.isJsonRpcError)(i) ? {
        error: i.error
      } : {
        result: i.result
      }, this.records.set(s.id, s), this.events.emit(v.updated, s));
    }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
      type: "method",
      method: "get",
      topic: i,
      id: s
    }), await this.getRecord(s)), this.delete = (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
        type: "method",
        method: "delete",
        id: s
      }), this.values.forEach(n => {
        if (n.topic === i) {
          if (typeof s < "u" && n.id !== s) return;
          this.records.delete(n.id), this.events.emit(v.deleted, n);
        }
      });
    }, this.exists = async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = (0, _logger.generateChildLogger)(t, this.name);
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach(t => {
      if (typeof t.response < "u") return;
      const i = {
        topic: t.topic,
        request: (0, _jsonrpcUtils.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
        chainId: t.chainId
      };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const {
        message: i
      } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(v.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const {
          message: t
        } = (0, _utils.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
        type: "method",
        method: "restore",
        records: this.values
      });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(v.created, e => {
      const t = v.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({
        type: "event",
        event: t,
        record: e
      }), this.persist();
    }), this.events.on(v.updated, e => {
      const t = v.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({
        type: "event",
        event: t,
        record: e
      }), this.persist();
    }), this.events.on(v.deleted, e => {
      const t = v.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({
        type: "event",
        event: t,
        record: e
      }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
exports.JsonRpcHistory = Rt;
class _t extends _types.IExpirer {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = new Map(), this.events = new _events.EventEmitter(), this.name = ct, this.version = ut, this.cached = [], this.initialized = !1, this.storagePrefix = T, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = i => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, s) => {
      this.isInitialized();
      const n = this.formatTarget(i),
        a = {
          target: n,
          expiry: s
        };
      this.expirations.set(n, a), this.checkExpiry(n, a), this.events.emit(b.created, {
        target: n,
        expiration: a
      });
    }, this.get = i => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }, this.del = i => {
      this.isInitialized();
      const s = this.formatTarget(i);
      if (this.has(s)) {
        const n = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(b.deleted, {
          target: s,
          expiration: n
        });
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = (0, _logger.generateChildLogger)(t, this.name);
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return (0, _utils.formatTopicTarget)(e);
    if (typeof e == "number") return (0, _utils.formatIdTarget)(e);
    const {
      message: t
    } = (0, _utils.getInternalError)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(b.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const {
          message: t
        } = (0, _utils.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
        type: "method",
        method: "restore",
        expirations: this.values
      });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const {
        message: i
      } = (0, _utils.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  checkExpiry(e, t) {
    const {
      expiry: i
    } = t;
    (0, _time.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(b.expired, {
      target: e,
      expiration: t
    });
  }
  checkExpirations() {
    this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(_heartbeat.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(b.created, e => {
      const t = b.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({
        type: "event",
        event: t,
        data: e
      }), this.persist();
    }), this.events.on(b.expired, e => {
      const t = b.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({
        type: "event",
        event: t,
        data: e
      }), this.persist();
    }), this.events.on(b.deleted, e => {
      const t = b.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({
        type: "event",
        event: t,
        data: e
      }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const {
        message: e
      } = (0, _utils.getInternalError)("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
exports.Expirer = _t;
var hr = Object.defineProperty,
  St = Object.getOwnPropertySymbols,
  cr = Object.prototype.hasOwnProperty,
  ur = Object.prototype.propertyIsEnumerable,
  Tt = (r, e, t) => e in r ? hr(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : r[e] = t,
  xt = (r, e) => {
    for (var t in e || (e = {})) cr.call(e, t) && Tt(r, t, e[t]);
    if (St) for (var t of St(e)) ur.call(e, t) && Tt(r, t, e[t]);
    return r;
  };
class q extends _types.ICore {
  constructor(e) {
    super(e), this.protocol = ne, this.version = Fe, this.name = j, this.events = new _events.EventEmitter(), this.initialized = !1, this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.projectId = e?.projectId;
    const t = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : (0, _pino.default)((0, _logger.getDefaultLoggerOptions)({
      level: e?.logger || Me.logger
    }));
    this.logger = (0, _logger.generateChildLogger)(t, this.name), this.heartbeat = new _heartbeat.HeartBeat(), this.crypto = new dt(this, this.logger, e?.keychain), this.history = new Rt(this, this.logger), this.expirer = new _t(this, this.logger), this.storage = e != null && e.storage ? e.storage : new _keyvaluestorage.default(xt(xt({}, $e), e?.storageOptions)), this.relayer = new mt({
      core: this,
      logger: this.logger,
      relayUrl: e?.relayUrl,
      projectId: this.projectId
    }), this.pairing = new Ct(this, this.logger);
  }
  static async init(e) {
    const t = new q(e);
    return await t.initialize(), t;
  }
  get context() {
    return (0, _logger.getLoggerContext)(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initilization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initilization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
exports.default = q;
const lr = q;
exports.Core = lr;

},{"@walletconnect/heartbeat":27,"@walletconnect/jsonrpc-provider":30,"@walletconnect/jsonrpc-utils":41,"@walletconnect/jsonrpc-ws-connection":46,"@walletconnect/keyvaluestorage":49,"@walletconnect/logger":55,"@walletconnect/relay-auth":65,"@walletconnect/safe-json":68,"@walletconnect/time":81,"@walletconnect/types":71,"@walletconnect/utils":72,"events":137,"lodash.isequal":94,"pino":119}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISubscriberTopicMap = exports.ISubscriber = exports.IStore = exports.ISignClientEvents = exports.ISignClient = exports.IRelayer = exports.IPublisher = exports.IPairing = exports.IMessageTracker = exports.IKeyChain = exports.IJsonRpcHistory = exports.IExpirer = exports.IEngineEvents = exports.IEngine = exports.ICrypto = exports.ICore = void 0;
var _events = require("@walletconnect/events");
var _events2 = _interopRequireWildcard(require("events"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class n extends _events.IEvents {
  constructor(s) {
    super(), this.opts = s, this.protocol = "wc", this.version = 2;
  }
}
exports.ICore = n;
class l {
  constructor(s, t, o) {
    this.core = s, this.logger = t;
  }
}
exports.ICrypto = l;
class h extends _events.IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t, this.records = new Map();
  }
}
exports.IJsonRpcHistory = h;
class a {
  constructor(s, t) {
    this.logger = s, this.core = t;
  }
}
exports.IMessageTracker = a;
class u extends _events.IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
}
exports.IPublisher = u;
class g extends _events.IEvents {
  constructor(s) {
    super();
  }
}
exports.IRelayer = g;
class p {
  constructor(s, t, o, S) {
    this.core = s, this.logger = t, this.name = o;
  }
}
exports.IStore = p;
class I {
  constructor() {
    this.map = new Map();
  }
}
exports.ISubscriberTopicMap = I;
class x extends _events.IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
}
exports.ISubscriber = x;
class d {
  constructor(s, t) {
    this.core = s, this.logger = t;
  }
}
exports.IKeyChain = d;
class E extends _events.IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t;
  }
}
exports.IExpirer = E;
class m {
  constructor(s, t) {
    this.logger = s, this.core = t;
  }
}
exports.IPairing = m;
class v extends _events2.default {
  constructor() {
    super();
  }
}
exports.ISignClientEvents = v;
class y {
  constructor(s) {
    this.opts = s, this.protocol = "wc", this.version = 2;
  }
}
exports.ISignClient = y;
class b extends _events2.EventEmitter {
  constructor() {
    super();
  }
}
exports.IEngineEvents = b;
class C {
  constructor(s) {
    this.client = s;
  }
}
exports.IEngine = C;

},{"@walletconnect/events":23,"events":137}],72:[function(require,module,exports){
(function (process){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UTF8 = exports.TYPE_1 = exports.TYPE_0 = exports.SLASH = exports.SDK_TYPE = exports.RELAYER_DEFAULT_PROTOCOL = exports.REACT_NATIVE_PRODUCT = exports.ONE_THOUSAND = exports.ENV_MAP = exports.EMPTY_SPACE = exports.DEFAULT_DEPTH = exports.COLON = exports.BASE64 = exports.BASE16 = exports.BASE10 = void 0;
exports.appendToQueryString = Ue;
exports.assertType = Un;
exports.calcExpiry = jn;
exports.capitalize = $n;
exports.capitalizeWord = $e;
exports.createDelayedPromise = Vn;
exports.decodeTypeByte = T;
exports.decrypt = En;
exports.deriveSymKey = fn;
exports.deserialize = q;
exports.encodeTypeByte = he;
exports.encrypt = yn;
exports.engineEvent = Ln;
exports.enumify = void 0;
exports.formatAccountId = fe;
exports.formatAccountWithChain = rn;
exports.formatChainId = le;
exports.formatExpirerTarget = Y;
exports.formatIdTarget = Kn;
exports.formatMessageContext = An;
exports.formatRelayParams = Ke;
exports.formatRelayRpcUrl = Tn;
exports.formatTopicTarget = Mn;
exports.formatUA = Ce;
exports.formatUri = Wn;
exports.generateKeyPair = dn;
exports.generateRandomBytes32 = ln;
exports.getAccountsChains = m;
exports.getAccountsFromNamespaces = sn;
exports.getAddressFromAccount = pe;
exports.getAddressesFromAccounts = on;
exports.getAppMetadata = In;
exports.getChainFromAccount = me;
exports.getChainsFromAccounts = ye;
exports.getChainsFromNamespaces = cn;
exports.getChainsFromRequiredNamespaces = an;
exports.getEnvironment = z;
exports.getHttpUrl = _n;
exports.getInternalError = y;
exports.getJavascriptID = Re;
exports.getJavascriptOS = Ae;
exports.getLastItems = De;
exports.getNamespacesChains = ke;
exports.getNamespacesEventsForChainId = Fe;
exports.getNamespacesMethodsForChainId = Le;
exports.getRelayClientMetadata = Pn;
exports.getRelayProtocolApi = Hn;
exports.getRelayProtocolName = Fn;
exports.getSdkError = N;
exports.getUniqueValues = K;
exports.hasOverlap = u;
exports.hashKey = pn;
exports.hashMessage = mn;
exports.isBrowser = _e;
exports.isConformingNamespaces = yt;
exports.isExpired = xn;
exports.isNode = B;
exports.isProposalStruct = et;
exports.isReactNative = Te;
exports.isSessionCompatible = Zn;
exports.isSessionStruct = nt;
exports.isTypeOneEnvelope = Nn;
exports.isUndefined = E;
exports.isValidAccountId = He;
exports.isValidAccounts = X;
exports.isValidActions = ee;
exports.isValidArray = I;
exports.isValidChainId = D;
exports.isValidChains = Z;
exports.isValidController = tt;
exports.isValidErrorReason = at;
exports.isValidEvent = lt;
exports.isValidExtension = $;
exports.isValidId = it;
exports.isValidNamespaceAccounts = Ge;
exports.isValidNamespaceActions = ne;
exports.isValidNamespaceChains = qe;
exports.isValidNamespaceMethodsOrEvents = Q;
exports.isValidNamespaces = ot;
exports.isValidNamespacesChainId = ft;
exports.isValidNamespacesEvent = mt;
exports.isValidNamespacesRequest = pt;
exports.isValidNumber = J;
exports.isValidObject = W;
exports.isValidParams = ct;
exports.isValidRelay = Be;
exports.isValidRelays = st;
exports.isValidRequest = ut;
exports.isValidRequiredNamespaces = rt;
exports.isValidResponse = dt;
exports.isValidString = d;
exports.isValidUrl = Xn;
exports.mapEntries = wn;
exports.mapToObj = Rn;
exports.objToMap = Cn;
exports.parseAccountId = M;
exports.parseChainId = de;
exports.parseContextNames = we;
exports.parseExpirerTarget = kn;
exports.parseRelayParams = Me;
exports.parseUri = Yn;
exports.serialize = Ne;
exports.validateDecoding = hn;
exports.validateEncoding = ge;
var _chacha20poly = require("@stablelib/chacha20poly1305");
var _hkdf = require("@stablelib/hkdf");
var _random = require("@stablelib/random");
var _sha = require("@stablelib/sha256");
var se = _interopRequireWildcard(require("@stablelib/x25519"));
var _uint8arrays = require("uint8arrays");
var _detectBrowser = require("detect-browser");
var _time = require("@walletconnect/time");
var _windowGetters = require("@walletconnect/window-getters");
var _windowMetadata = require("@walletconnect/window-metadata");
var U = _interopRequireWildcard(require("query-string"));
var _relayApi = require("@walletconnect/relay-api");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const A = ":";
function de(e) {
  const [n, t] = e.split(A);
  return {
    namespace: n,
    reference: t
  };
}
function le(e) {
  const {
    namespace: n,
    reference: t
  } = e;
  return [n, t].join(A);
}
function M(e) {
  const [n, t, r] = e.split(A);
  return {
    namespace: n,
    reference: t,
    address: r
  };
}
function fe(e) {
  const {
    namespace: n,
    reference: t,
    address: r
  } = e;
  return [n, t, r].join(A);
}
function K(e, n) {
  const t = [];
  return e.forEach(r => {
    const o = n(r);
    t.includes(o) || t.push(o);
  }), t;
}
function pe(e) {
  const {
    address: n
  } = M(e);
  return n;
}
function me(e) {
  const {
    namespace: n,
    reference: t
  } = M(e);
  return le({
    namespace: n,
    reference: t
  });
}
function rn(e, n) {
  const {
    namespace: t,
    reference: r
  } = de(n);
  return fe({
    namespace: t,
    reference: r,
    address: e
  });
}
function on(e) {
  return K(e, pe);
}
function ye(e) {
  return K(e, me);
}
function sn(e, n = []) {
  const t = [];
  return Object.keys(e).forEach(r => {
    if (n.length && !n.includes(r)) return;
    const o = e[r];
    t.push(...o.accounts);
  }), t;
}
function cn(e, n = []) {
  const t = [];
  return Object.keys(e).forEach(r => {
    if (n.length && !n.includes(r)) return;
    const o = e[r];
    t.push(...ye(o.accounts));
  }), t;
}
function an(e, n = []) {
  const t = [];
  return Object.keys(e).forEach(r => {
    if (n.length && !n.includes(r)) return;
    const o = e[r];
    t.push(...o.chains);
  }), t;
}
const k = "base10",
  a = "base16",
  R = "base64pad",
  C = "utf8",
  L = 0,
  b = 1,
  un = 0,
  Ee = 1,
  F = 12,
  H = 32;
exports.TYPE_1 = b;
exports.TYPE_0 = L;
exports.UTF8 = C;
exports.BASE64 = R;
exports.BASE16 = a;
exports.BASE10 = k;
function dn() {
  const e = se.generateKeyPair();
  return {
    privateKey: (0, _uint8arrays.toString)(e.secretKey, a),
    publicKey: (0, _uint8arrays.toString)(e.publicKey, a)
  };
}
function ln() {
  const e = (0, _random.randomBytes)(H);
  return (0, _uint8arrays.toString)(e, a);
}
function fn(e, n) {
  const t = se.sharedKey((0, _uint8arrays.fromString)(e, a), (0, _uint8arrays.fromString)(n, a)),
    r = new _hkdf.HKDF(_sha.SHA256, t).expand(H);
  return (0, _uint8arrays.toString)(r, a);
}
function pn(e) {
  const n = (0, _sha.hash)((0, _uint8arrays.fromString)(e, a));
  return (0, _uint8arrays.toString)(n, a);
}
function mn(e) {
  const n = (0, _sha.hash)((0, _uint8arrays.fromString)(e, C));
  return (0, _uint8arrays.toString)(n, a);
}
function he(e) {
  return (0, _uint8arrays.fromString)(`${e}`, k);
}
function T(e) {
  return Number((0, _uint8arrays.toString)(e, k));
}
function yn(e) {
  const n = he(typeof e.type < "u" ? e.type : L);
  if (T(n) === b && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof e.senderPublicKey < "u" ? (0, _uint8arrays.fromString)(e.senderPublicKey, a) : void 0,
    r = typeof e.iv < "u" ? (0, _uint8arrays.fromString)(e.iv, a) : (0, _random.randomBytes)(F),
    o = new _chacha20poly.ChaCha20Poly1305((0, _uint8arrays.fromString)(e.symKey, a)).seal(r, (0, _uint8arrays.fromString)(e.message, C));
  return Ne({
    type: n,
    sealed: o,
    iv: r,
    senderPublicKey: t
  });
}
function En(e) {
  const n = new _chacha20poly.ChaCha20Poly1305((0, _uint8arrays.fromString)(e.symKey, a)),
    {
      sealed: t,
      iv: r
    } = q(e.encoded),
    o = n.open(r, t);
  if (o === null) throw new Error("Failed to decrypt");
  return (0, _uint8arrays.toString)(o, C);
}
function Ne(e) {
  if (T(e.type) === b) {
    if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return (0, _uint8arrays.toString)((0, _uint8arrays.concat)([e.type, e.senderPublicKey, e.iv, e.sealed]), R);
  }
  return (0, _uint8arrays.toString)((0, _uint8arrays.concat)([e.type, e.iv, e.sealed]), R);
}
function q(e) {
  const n = (0, _uint8arrays.fromString)(e, R),
    t = n.slice(un, Ee),
    r = Ee;
  if (T(t) === b) {
    const c = r + H,
      l = c + F,
      h = n.slice(r, c),
      g = n.slice(c, l),
      P = n.slice(l);
    return {
      type: t,
      sealed: P,
      iv: g,
      senderPublicKey: h
    };
  }
  const o = r + F,
    i = n.slice(r, o),
    s = n.slice(o);
  return {
    type: t,
    sealed: s,
    iv: i
  };
}
function hn(e, n) {
  const t = q(e);
  return ge({
    type: T(t.type),
    senderPublicKey: typeof t.senderPublicKey < "u" ? (0, _uint8arrays.toString)(t.senderPublicKey, a) : void 0,
    receiverPublicKey: n?.receiverPublicKey
  });
}
function ge(e) {
  const n = e?.type || L;
  if (n === b) {
    if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
    if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
  }
  return {
    type: n,
    senderPublicKey: e?.senderPublicKey,
    receiverPublicKey: e?.receiverPublicKey
  };
}
function Nn(e) {
  return e.type === b && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var gn = Object.defineProperty,
  ve = Object.getOwnPropertySymbols,
  vn = Object.prototype.hasOwnProperty,
  On = Object.prototype.propertyIsEnumerable,
  Oe = (e, n, t) => n in e ? gn(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : e[n] = t,
  be = (e, n) => {
    for (var t in n || (n = {})) vn.call(n, t) && Oe(e, t, n[t]);
    if (ve) for (var t of ve(n)) On.call(n, t) && Oe(e, t, n[t]);
    return e;
  };
const Se = "ReactNative",
  S = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  },
  w = " ",
  bn = ":",
  Ie = "/",
  G = 2,
  Sn = 1e3,
  Pe = "js";
exports.SDK_TYPE = Pe;
exports.ONE_THOUSAND = Sn;
exports.DEFAULT_DEPTH = G;
exports.SLASH = Ie;
exports.COLON = bn;
exports.EMPTY_SPACE = w;
exports.ENV_MAP = S;
exports.REACT_NATIVE_PRODUCT = Se;
function B() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Te() {
  return !(0, _windowGetters.getDocument)() && !!(0, _windowGetters.getNavigator)() && navigator.product === Se;
}
function _e() {
  return !B() && !!(0, _windowGetters.getNavigator)();
}
function z() {
  return Te() ? S.reactNative : B() ? S.node : _e() ? S.browser : S.unknown;
}
function Ue(e, n) {
  let t = U.parse(e);
  return t = be(be({}, t), n), e = U.stringify(t), e;
}
function In() {
  return (0, _windowMetadata.getWindowMetadata)() || {
    name: "",
    description: "",
    url: "",
    icons: [""]
  };
}
function Pn(e, n) {
  var t;
  const r = z(),
    o = {
      protocol: e,
      version: n,
      env: r
    };
  return r === "browser" && (o.host = ((t = (0, _windowGetters.getLocation)()) == null ? void 0 : t.host) || "unknown"), o;
}
function Ae() {
  const e = (0, _detectBrowser.detect)();
  if (e === null) return "unknown";
  const n = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [n, e.name, e.version].join("-") : [n, e.version].join("-");
}
function Re() {
  var e;
  const n = z();
  return n === S.browser ? [n, ((e = (0, _windowGetters.getLocation)()) == null ? void 0 : e.host) || "unknown"].join(":") : n;
}
function Ce(e, n, t) {
  const r = Ae(),
    o = Re();
  return [[e, n].join("-"), [Pe, t].join("-"), r, o].join("/");
}
function Tn({
  protocol: e,
  version: n,
  relayUrl: t,
  sdkVersion: r,
  auth: o,
  projectId: i
}) {
  const s = t.split("?"),
    c = Ce(e, n, r),
    l = {
      auth: o,
      ua: c,
      projectId: i
    },
    h = Ue(s[1] || "", l);
  return s[0] + "?" + h;
}
function _n(e) {
  let n = (e.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
  const t = typeof n < "u" ? e.split("://")[1] : e;
  return n = n === "wss" ? "https" : "http", [n, t].join("://");
}
function Un(e, n, t) {
  if (!e[n] || typeof e[n] !== t) throw new Error(`Missing or invalid "${n}" param`);
}
function we(e, n = G) {
  return De(e.split(Ie), n);
}
function An(e) {
  return we(e).join(w);
}
function u(e, n) {
  return e.filter(t => n.includes(t)).length === e.length;
}
function De(e, n = G) {
  return e.slice(Math.max(e.length - n, 0));
}
function Rn(e) {
  return Object.fromEntries(e.entries());
}
function Cn(e) {
  return new Map(Object.entries(e));
}
function wn(e, n) {
  const t = {};
  return Object.keys(e).forEach(r => {
    t[r] = n(e[r]);
  }), t;
}
const Dn = e => e;
exports.enumify = Dn;
function $e(e) {
  return e.trim().replace(/^\w/, n => n.toUpperCase());
}
function $n(e) {
  return e.split(w).map(n => $e(n)).join(w);
}
function jn(e, n) {
  return (0, _time.fromMiliseconds)((n || Date.now()) + (0, _time.toMiliseconds)(e));
}
function xn(e) {
  return (0, _time.fromMiliseconds)(Date.now()) >= (0, _time.toMiliseconds)(e);
}
function Vn() {
  const e = (0, _time.toMiliseconds)(_time.FIVE_MINUTES);
  let n, t, r;
  return {
    resolve: o => {
      r && n && (clearTimeout(r), n(o));
    },
    reject: o => {
      r && t && (clearTimeout(r), t(o));
    },
    done: () => new Promise((o, i) => {
      r = setTimeout(i, e), n = o, t = i;
    })
  };
}
function Y(e, n) {
  if (typeof n == "string" && n.startsWith(`${e}:`)) return n;
  if (e.toLowerCase() === "topic") {
    if (typeof n != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${n}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof n != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${n}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function Mn(e) {
  return Y("topic", e);
}
function Kn(e) {
  return Y("id", e);
}
function kn(e) {
  const [n, t] = e.split(":"),
    r = {
      id: void 0,
      topic: void 0
    };
  if (n === "topic" && typeof t == "string") r.topic = t;else if (n === "id" && Number.isInteger(Number(t))) r.id = Number(t);else throw new Error(`Invalid target, expected id:number or topic:string, got ${n}:${t}`);
  return r;
}
function Ln(e, n) {
  return `${e}${n ? `:${n}` : ""}`;
}
const je = "irn";
exports.RELAYER_DEFAULT_PROTOCOL = je;
function Fn(e) {
  return e?.relay || {
    protocol: je
  };
}
function Hn(e) {
  const n = _relayApi.RELAY_JSONRPC[e];
  if (typeof n > "u") throw new Error(`Relay Protocol not supported: ${e}`);
  return n;
}
var qn = Object.defineProperty,
  xe = Object.getOwnPropertySymbols,
  Gn = Object.prototype.hasOwnProperty,
  Bn = Object.prototype.propertyIsEnumerable,
  Ve = (e, n, t) => n in e ? qn(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : e[n] = t,
  zn = (e, n) => {
    for (var t in n || (n = {})) Gn.call(n, t) && Ve(e, t, n[t]);
    if (xe) for (var t of xe(n)) Bn.call(n, t) && Ve(e, t, n[t]);
    return e;
  };
function Me(e, n = "-") {
  const t = {},
    r = "relay" + n;
  return Object.keys(e).forEach(o => {
    if (o.startsWith(r)) {
      const i = o.replace(r, ""),
        s = e[o];
      t[i] = s;
    }
  }), t;
}
function Yn(e) {
  const n = e.indexOf(":"),
    t = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0,
    r = e.substring(0, n),
    o = e.substring(n + 1, t).split("@"),
    i = typeof t < "u" ? e.substring(t) : "",
    s = U.parse(i);
  return {
    protocol: r,
    topic: o[0],
    version: parseInt(o[1], 10),
    symKey: s.symKey,
    relay: Me(s)
  };
}
function Ke(e, n = "-") {
  const t = "relay",
    r = {};
  return Object.keys(e).forEach(o => {
    const i = t + n + o;
    e[o] && (r[i] = e[o]);
  }), r;
}
function Wn(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + U.stringify(zn({
    symKey: e.symKey
  }, Ke(e.relay)));
}
function m(e) {
  const n = [];
  return e.forEach(t => {
    const [r, o] = t.split(":");
    n.push(`${r}:${o}`);
  }), n;
}
function ke(e) {
  const n = [];
  return Object.values(e).forEach(t => {
    n.push(...m(t.accounts)), t.extension && t.extension.forEach(r => {
      n.push(...m(r.accounts));
    });
  }), n;
}
function Le(e, n) {
  const t = [];
  return Object.values(e).forEach(r => {
    m(r.accounts).includes(n) && t.push(...r.methods), r.extension && r.extension.forEach(o => {
      m(o.accounts).includes(n) && t.push(...o.methods);
    });
  }), t;
}
function Fe(e, n) {
  const t = [];
  return Object.values(e).forEach(r => {
    m(r.accounts).includes(n) && t.push(...r.events), r.extension && r.extension.forEach(o => {
      m(o.accounts).includes(n) && t.push(...o.events);
    });
  }), t;
}
const Jn = {
    INVALID_METHOD: {
      message: "Invalid method.",
      code: 1001
    },
    INVALID_EVENT: {
      message: "Invalid event.",
      code: 1002
    },
    INVALID_UPDATE_REQUEST: {
      message: "Invalid update request.",
      code: 1003
    },
    INVALID_EXTEND_REQUEST: {
      message: "Invalid extend request.",
      code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005
    },
    UNAUTHORIZED_METHOD: {
      message: "Unauthorized method.",
      code: 3001
    },
    UNAUTHORIZED_EVENT: {
      message: "Unauthorized event.",
      code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004
    },
    USER_REJECTED: {
      message: "User rejected.",
      code: 5e3
    },
    USER_REJECTED_CHAINS: {
      message: "User rejected chains.",
      code: 5001
    },
    USER_REJECTED_METHODS: {
      message: "User rejected methods.",
      code: 5002
    },
    USER_REJECTED_EVENTS: {
      message: "User rejected events.",
      code: 5003
    },
    UNSUPPORTED_CHAINS: {
      message: "Unsupported chains.",
      code: 5100
    },
    UNSUPPORTED_METHODS: {
      message: "Unsupported methods.",
      code: 5101
    },
    UNSUPPORTED_EVENTS: {
      message: "Unsupported events.",
      code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
      message: "Unsupported accounts.",
      code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104
    },
    USER_DISCONNECTED: {
      message: "User disconnected.",
      code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
      message: "Unsupported wc_ method.",
      code: 10001
    }
  },
  Qn = {
    NOT_INITIALIZED: {
      message: "Not initialized.",
      code: 1
    },
    NO_MATCHING_KEY: {
      message: "No matching key.",
      code: 2
    },
    RESTORE_WILL_OVERRIDE: {
      message: "Restore will override.",
      code: 3
    },
    RESUBSCRIBED: {
      message: "Resubscribed.",
      code: 4
    },
    MISSING_OR_INVALID: {
      message: "Missing or invalid.",
      code: 5
    },
    EXPIRED: {
      message: "Expired.",
      code: 6
    },
    UNKNOWN_TYPE: {
      message: "Unknown type.",
      code: 7
    },
    MISMATCHED_TOPIC: {
      message: "Mismatched topic.",
      code: 8
    },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9
    }
  };
function y(e, n) {
  const {
    message: t,
    code: r
  } = Qn[e];
  return {
    message: n ? `${t} ${n}` : t,
    code: r
  };
}
function N(e, n) {
  const {
    message: t,
    code: r
  } = Jn[e];
  return {
    message: n ? `${t} ${n}` : t,
    code: r
  };
}
function I(e, n) {
  return Array.isArray(e) ? typeof n < "u" && e.length ? e.every(n) : !0 : !1;
}
function W(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function E(e) {
  return typeof e > "u";
}
function d(e, n) {
  return n && E(e) ? !0 : typeof e == "string" && Boolean(e.trim().length);
}
function J(e, n) {
  return n && E(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function Zn(e, n) {
  const {
      requiredNamespaces: t
    } = n,
    r = Object.keys(e.namespaces),
    o = Object.keys(t);
  let i = !0;
  return u(o, r) ? (r.forEach(s => {
    const {
        accounts: c,
        methods: l,
        events: h,
        extension: g
      } = e.namespaces[s],
      P = m(c),
      v = t[s];
    (!u(v.chains, P) || !u(v.methods, l) || !u(v.events, h)) && (i = !1), i && g && g.forEach(_ => {
      var O;
      const {
          accounts: j,
          methods: ze,
          events: Ye
        } = _,
        We = m(j);
      (O = v.extension) != null && O.find(x => u(x.chains, We) && u(x.methods, ze) && u(x.events, Ye)) || (i = !1);
    });
  }), i) : !1;
}
function D(e) {
  return d(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function He(e) {
  if (d(e, !1) && e.includes(":")) {
    const n = e.split(":");
    if (n.length === 3) {
      const t = n[0] + ":" + n[1];
      return !!n[2] && D(t);
    }
  }
  return !1;
}
function Xn(e) {
  if (d(e, !1)) try {
    return typeof new URL(e) < "u";
  } catch {
    return !1;
  }
  return !1;
}
function et(e) {
  var n;
  return (n = e?.proposer) == null ? void 0 : n.publicKey;
}
function nt(e) {
  return e?.topic;
}
function tt(e, n) {
  let t = null;
  return d(e?.publicKey, !1) || (t = y("MISSING_OR_INVALID", `${n} controller public key should be a string`)), t;
}
function $(e, n) {
  let t = null;
  return E(e?.extension) || (!I(e.extension) || !e.extension.length) && (t = y("MISSING_OR_INVALID", `${n} extension should be an array of namespaces, or omitted`)), t;
}
function Q(e) {
  let n = !0;
  return I(e) ? e.length && (n = e.every(t => d(t, !1))) : n = !1, n;
}
function Z(e, n, t) {
  let r = null;
  return I(n) ? n.forEach(o => {
    r || (!D(o) || !o.includes(e)) && (r = N("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`));
  }) : r = N("UNSUPPORTED_CHAINS", `${t}, chains ${n} should be an array of strings conforming to "namespace:chainId" format`), r;
}
function qe(e, n) {
  let t = null;
  return Object.entries(e).forEach(([r, o]) => {
    if (t) return;
    const i = Z(r, o?.chains, `${n} requiredNamespace`),
      s = $(o, n);
    i ? t = i : s ? t = s : o.extension && o.extension.forEach(c => {
      if (t) return;
      const l = Z(r, c.chains, `${n} extension`);
      l && (t = l);
    });
  }), t;
}
function X(e, n) {
  let t = null;
  return I(e) ? e.forEach(r => {
    t || He(r) || (t = N("UNSUPPORTED_ACCOUNTS", `${n}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = N("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function Ge(e, n) {
  let t = null;
  return Object.values(e).forEach(r => {
    if (t) return;
    const o = X(r?.accounts, `${n} namespace`),
      i = $(r, n);
    o ? t = o : i ? t = i : r.extension && r.extension.forEach(s => {
      if (t) return;
      const c = X(s.accounts, `${n} extension`);
      c && (t = c);
    });
  }), t;
}
function ee(e, n) {
  let t = null;
  return Q(e?.methods) ? Q(e?.events) || (t = N("UNSUPPORTED_EVENTS", `${n}, events should be an array of strings or empty array for no events`)) : t = N("UNSUPPORTED_METHODS", `${n}, methods should be an array of strings or empty array for no methods`), t;
}
function ne(e, n) {
  let t = null;
  return Object.values(e).forEach(r => {
    if (t) return;
    const o = ee(r, `${n}, namespace`),
      i = $(r, n);
    o ? t = o : i ? t = i : r.extension && r.extension.forEach(s => {
      if (t) return;
      const c = ee(s, `${n}, extension`);
      c && (t = c);
    });
  }), t;
}
function rt(e, n) {
  let t = null;
  if (e && W(e)) {
    const r = ne(e, n);
    r && (t = r);
    const o = qe(e, n);
    o && (t = o);
  } else t = y("MISSING_OR_INVALID", `${n}, requiredNamespaces should be an object with data`);
  return t;
}
function ot(e, n) {
  let t = null;
  if (e && W(e)) {
    const r = ne(e, n);
    r && (t = r);
    const o = Ge(e, n);
    o && (t = o);
  } else t = y("MISSING_OR_INVALID", `${n}, namespaces should be an object with data`);
  return t;
}
function Be(e) {
  return d(e.protocol, !0);
}
function st(e, n) {
  let t = !1;
  return n && !e ? t = !0 : e && I(e) && e.length && e.forEach(r => {
    t = Be(r);
  }), t;
}
function it(e) {
  return typeof e == "number";
}
function ct(e) {
  return typeof e < "u" && typeof e !== null;
}
function at(e) {
  return !(!e || typeof e != "object" || !e.code || !J(e.code, !1) || !e.message || !d(e.message, !1));
}
function ut(e) {
  return !(E(e) || !d(e.method, !1));
}
function dt(e) {
  return !(E(e) || E(e.result) && E(e.error) || !J(e.id, !1) || !d(e.jsonrpc, !1));
}
function lt(e) {
  return !(E(e) || !d(e.name, !1));
}
function ft(e, n) {
  return !(!D(n) || !ke(e).includes(n));
}
function pt(e, n, t) {
  return d(t, !1) ? Le(e, n).includes(t) : !1;
}
function mt(e, n, t) {
  return d(t, !1) ? Fe(e, n).includes(t) : !1;
}
function yt(e, n, t) {
  let r = null;
  const o = Object.keys(e),
    i = Object.keys(n);
  return u(o, i) ? o.forEach(s => {
    var c;
    if (r) return;
    const l = e[s].chains,
      h = m(n[s].accounts);
    u(l, h) ? u(e[s].methods, n[s].methods) ? u(e[s].events, n[s].events) ? e[s].extension && !n[s].extension ? r = y("NON_CONFORMING_NAMESPACES", `${t} namespaces extension doesn't satisfy requiredNamespaces extension for ${s}`) : e[s].extension && n[s].extension && ((c = e[s].extension) == null || c.forEach(({
      methods: g,
      events: P,
      chains: v
    }) => {
      var _;
      r || (_ = n[s].extension) != null && _.find(O => {
        const j = m(O.accounts);
        return u(v, j) && u(P, O.events) && u(g, O.methods);
      }) || (r = y("NON_CONFORMING_NAMESPACES", `${t} namespaces extension doesn't satisfy requiredNamespaces extension for ${s}`));
    })) : r = y("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy requiredNamespaces events for ${s}`) : r = y("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy requiredNamespaces methods for ${s}`) : r = y("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy requiredNamespaces chains for ${s}`);
  }) : r = y("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces`), r;
}

}).call(this)}).call(this,require('_process'))
},{"@stablelib/chacha20poly1305":3,"@stablelib/hkdf":7,"@stablelib/random":11,"@stablelib/sha256":15,"@stablelib/x25519":18,"@walletconnect/relay-api":57,"@walletconnect/time":81,"@walletconnect/window-getters":73,"@walletconnect/window-metadata":74,"_process":139,"detect-browser":75,"query-string":76,"uint8arrays":130}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
function getFromWindow(name) {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
        res = window[name];
    }
    return res;
}
exports.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) {
        throw new Error(`${name} is not defined in Window`);
    }
    return res;
}
exports.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow("document");
}
exports.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow("document");
}
exports.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}
exports.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow("navigator");
}
exports.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow("location");
}
exports.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow("location");
}
exports.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow("crypto");
}
exports.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow("crypto");
}
exports.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow("localStorage");
}
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow("localStorage");
}
exports.getLocalStorage = getLocalStorage;

},{}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWindowMetadata = void 0;
const window_getters_1 = require("@walletconnect/window-getters");
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    }
    catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 &&
                            href.toLowerCase().indexOf("http:") === -1 &&
                            href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) {
                                absoluteHref += href;
                            }
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        }
                        else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        }
                        else {
                            icons.push(href);
                        }
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i = 0; i < metaTags.length; i++) {
            const tag = metaTags[i];
            const attributes = ["itemprop", "property", "name"]
                .map((target) => tag.getAttribute(target))
                .filter((attr) => {
                if (attr) {
                    return args.includes(attr);
                }
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) {
                    return content;
                }
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) {
            name = doc.title;
        }
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description,
        url,
        icons,
        name,
    };
    return meta;
}
exports.getWindowMetadata = getWindowMetadata;

},{"@walletconnect/window-getters":73}],75:[function(require,module,exports){
(function (process){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBotDeviceInfo = exports.ReactNativeInfo = exports.NodeInfo = exports.BrowserInfo = exports.BotInfo = void 0;
exports.browserName = browserName;
exports.detect = detect;
exports.detectOS = detectOS;
exports.getNodeVersion = getNodeVersion;
exports.parseUserAgent = parseUserAgent;
var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = /** @class */function () {
  function BrowserInfo(name, version, os) {
    this.name = name;
    this.version = version;
    this.os = os;
    this.type = 'browser';
  }
  return BrowserInfo;
}();
exports.BrowserInfo = BrowserInfo;
var NodeInfo = /** @class */function () {
  function NodeInfo(version) {
    this.version = version;
    this.type = 'node';
    this.name = 'node';
    this.os = process.platform;
  }
  return NodeInfo;
}();
exports.NodeInfo = NodeInfo;
var SearchBotDeviceInfo = /** @class */function () {
  function SearchBotDeviceInfo(name, version, os, bot) {
    this.name = name;
    this.version = version;
    this.os = os;
    this.bot = bot;
    this.type = 'bot-device';
  }
  return SearchBotDeviceInfo;
}();
exports.SearchBotDeviceInfo = SearchBotDeviceInfo;
var BotInfo = /** @class */function () {
  function BotInfo() {
    this.type = 'bot';
    this.bot = true; // NOTE: deprecated test name instead
    this.name = 'bot';
    this.version = null;
    this.os = null;
  }
  return BotInfo;
}();
exports.BotInfo = BotInfo;
var ReactNativeInfo = /** @class */function () {
  function ReactNativeInfo() {
    this.type = 'react-native';
    this.name = 'react-native';
    this.version = null;
    this.os = null;
  }
  return ReactNativeInfo;
}();
exports.ReactNativeInfo = ReactNativeInfo;
// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [['aol', /AOLShield\/([0-9\._]+)/], ['edge', /Edge\/([0-9\._]+)/], ['edge-ios', /EdgiOS\/([0-9\._]+)/], ['yandexbrowser', /YaBrowser\/([0-9\._]+)/], ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/], ['samsung', /SamsungBrowser\/([0-9\.]+)/], ['silk', /\bSilk\/([0-9._-]+)\b/], ['miui', /MiuiBrowser\/([0-9\.]+)$/], ['beaker', /BeakerBrowser\/([0-9\.]+)/], ['edge-chromium', /EdgA?\/([0-9\.]+)/], ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/], ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['fxios', /FxiOS\/([0-9\.]+)/], ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)/], ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/], ['android', /Android\s([0-9\.]+)/], ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/], ['safari', /Version\/([0-9\._]+).*Safari/], ['facebook', /FB[AS]V\/([0-9\.]+)/], ['instagram', /Instagram\s([0-9\.]+)/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ['curl', /^curl\/([0-9\.]+)$/], ['searchbot', SEARCHBOX_UA_REGEX]];
var operatingSystemRules = [['iOS', /iP(hone|od|ad)/], ['Android OS', /Android/], ['BlackBerry OS', /BlackBerry|BB10/], ['Windows Mobile', /IEMobile/], ['Amazon OS', /Kindle/], ['Windows 3.11', /Win16/], ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/], ['Windows 98', /(Windows 98)|(Win98)/], ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/], ['Windows XP', /(Windows NT 5.1)|(Windows XP)/], ['Windows Server 2003', /(Windows NT 5.2)/], ['Windows Vista', /(Windows NT 6.0)/], ['Windows 7', /(Windows NT 6.1)/], ['Windows 8', /(Windows NT 6.2)/], ['Windows 8.1', /(Windows NT 6.3)/], ['Windows 10', /(Windows NT 10.0)/], ['Windows ME', /Windows ME/], ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ['Open BSD', /OpenBSD/], ['Sun OS', /SunOS/], ['Chrome OS', /CrOS/], ['Linux', /(Linux)|(X11)/], ['Mac OS', /(Mac_PowerPC)|(Macintosh)/], ['QNX', /QNX/], ['BeOS', /BeOS/], ['OS/2', /OS\/2/]];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === 'undefined' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== 'undefined') {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua) {
  // opted for using reduce here rather than Array#first with a regex.test call
  // this is primarily because using the reduce we only perform the regex
  // execution once rather than once for the test and for the exec again below
  // probably something that needs to be benchmarked though
  return ua !== '' && userAgentRules.reduce(function (matched, _a) {
    var browser = _a[0],
      regex = _a[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function browserName(ua) {
  var data = matchUserAgent(ua);
  return data ? data[0] : null;
}
function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return null;
  }
  var name = matchedRule[0],
    match = matchedRule[1];
  if (name === 'searchbot') {
    return new BotInfo();
  }
  // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
  var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version = versionParts.join('.');
  var os = detectOS(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
  }
  return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii],
      os = _a[0],
      regex = _a[1];
    var match = regex.exec(ua);
    if (match) {
      return os;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode = typeof process !== 'undefined' && process.version;
  return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push('0');
  }
  return output;
}

}).call(this)}).call(this,require('_process'))
},{"_process":139}],76:[function(require,module,exports){
'use strict';
const strictUriEncode = require('strict-uri-encode');
const decodeComponent = require('decode-uri-component');
const splitOnFirst = require('split-on-first');
const filterObject = require('filter-obj');

const isNullOrUndefined = value => value === null || value === undefined;

const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'colon-list-separator':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), ':list='].join('')];
				}

				return [...result, [encode(key, options), ':list=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
		case 'bracket-separator': {
			const keyValueSep = options.arrayFormat === 'bracket-separator' ?
				'[]=' :
				'=';

			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				// Translate null to an empty string so that it doesn't serialize as 'null'
				value = value === null ? '' : value;

				if (result.length === 0) {
					return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};
		}

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'colon-list-separator':
			return (key, value, accumulator) => {
				result = /(:list)$/.exec(key);
				key = key.replace(/:list$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		case 'bracket-separator':
			return (key, value, accumulator) => {
				const isArray = /(\[\])$/.test(key);
				key = key.replace(/\[\]$/, '');

				if (!isArray) {
					accumulator[key] = value ? decode(value, options) : value;
					return;
				}

				const arrayValue = value === null ?
					[] :
					value.split(options.arrayFormatSeparator).map(item => decode(item, options));

				if (accumulator[key] === undefined) {
					accumulator[key] = arrayValue;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], arrayValue);
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
				return encode(key, options) + '[]';
			}

			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true,
		[encodeFragmentIdentifier]: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true,
		[encodeFragmentIdentifier]: false
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};

},{"decode-uri-component":92,"filter-obj":93,"split-on-first":123,"strict-uri-encode":77}],77:[function(require,module,exports){
'use strict';
module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

},{}],78:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./misc"), exports);
tslib_1.__exportStar(require("./time"), exports);

},{"./misc":79,"./time":80,"tslib":124}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
exports.ONE_HUNDRED = 100;
exports.ONE_THOUSAND = 1000;

},{}],80:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
exports.ONE_SECOND = 1;
exports.FIVE_SECONDS = 5;
exports.TEN_SECONDS = 10;
exports.THIRTY_SECONDS = 30;
exports.SIXTY_SECONDS = 60;
exports.ONE_MINUTE = exports.SIXTY_SECONDS;
exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
exports.ONE_HOUR = exports.SIXTY_MINUTES;
exports.THREE_HOURS = exports.ONE_HOUR * 3;
exports.SIX_HOURS = exports.ONE_HOUR * 6;
exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
exports.THREE_DAYS = exports.ONE_DAY * 3;
exports.FIVE_DAYS = exports.ONE_DAY * 5;
exports.SEVEN_DAYS = exports.ONE_DAY * 7;
exports.THIRTY_DAYS = exports.ONE_DAY * 30;
exports.ONE_WEEK = exports.SEVEN_DAYS;
exports.TWO_WEEKS = exports.ONE_WEEK * 2;
exports.THREE_WEEKS = exports.ONE_WEEK * 3;
exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
exports.ONE_YEAR = exports.ONE_DAY * 365;

},{}],81:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./utils"), exports);
tslib_1.__exportStar(require("./watch"), exports);
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./constants"), exports);

},{"./constants":78,"./types":82,"./utils":86,"./watch":87,"tslib":124}],82:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./watch"), exports);

},{"./watch":83,"tslib":124}],83:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWatch = void 0;
class IWatch {
}
exports.IWatch = IWatch;

},{}],84:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromMiliseconds = exports.toMiliseconds = void 0;
const constants_1 = require("../constants");
function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
}
exports.toMiliseconds = toMiliseconds;
function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
}
exports.fromMiliseconds = fromMiliseconds;

},{"../constants":78}],85:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, timeout);
    });
}
exports.delay = delay;

},{}],86:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./delay"), exports);
tslib_1.__exportStar(require("./convert"), exports);

},{"./convert":84,"./delay":85,"tslib":124}],87:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watch = void 0;
class Watch {
    constructor() {
        this.timestamps = new Map();
    }
    start(label) {
        if (this.timestamps.has(label)) {
            throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
    }
    stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
            throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
    }
    get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
            throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
    }
    elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
    }
}
exports.Watch = Watch;
exports.default = Watch;

},{}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Web3Modal = void 0;
var _core = require("@web3modal/core");
var l = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = (t, e, o) => e in t ? l(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
  }) : t[e] = o,
  b = (t, e) => {
    for (var o in e || (e = {})) s.call(e, o) && i(t, o, e[o]);
    if (a) for (var o of a(e)) c.call(e, o) && i(t, o, e[o]);
    return t;
  };
class p {
  constructor(e) {
    this.openModal = _core.ModalCtrl.open, this.closeModal = _core.ModalCtrl.close, this.subscribeModal = _core.ModalCtrl.subscribe, this.setTheme = _core.ConfigCtrl.setThemeConfig, _core.ConfigCtrl.setConfig(b({
      enableStandaloneMode: !0
    }, e)), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("@web3modal/ui");
      const e = document.createElement("w3m-modal");
      document.body.insertAdjacentElement("beforeend", e);
    }
  }
}
exports.Web3Modal = p;

},{"@web3modal/core":89}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastCtrl = exports.RouterCtrl = exports.OptionsCtrl = exports.ModalCtrl = exports.ExplorerCtrl = exports.CoreUtil = exports.ConfigCtrl = exports.ClientCtrl = void 0;
var _vanilla = require("valtio/vanilla");
var _buffer = require("buffer");
const o = (0, _vanilla.proxy)({
    selectedChain: void 0,
    chains: void 0,
    standaloneChains: void 0,
    standaloneUri: void 0,
    address: void 0,
    isConnected: !1,
    isStandalone: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isExplorer: !1
  }),
  l = {
    state: o,
    subscribe(e) {
      return (0, _vanilla.subscribe)(o, () => e(o));
    },
    setChains(e) {
      o.chains = e;
    },
    setStandaloneChains(e) {
      o.standaloneChains = e;
    },
    setStandaloneUri(e) {
      o.standaloneUri = e;
    },
    getSelectedChain() {
      if (!o.selectedChain) {
        const e = v.client().getNetwork().chain;
        o.selectedChain = e;
      }
      return o.selectedChain;
    },
    setSelectedChain(e) {
      o.selectedChain = e;
    },
    setIsStandalone(e) {
      o.isStandalone = e;
    },
    setIsCustomDesktop(e) {
      o.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      o.isCustomMobile = e;
    },
    setIsExplorer(e) {
      o.isExplorer = e;
    },
    getAccount() {
      const e = v.client().getAccount();
      o.address = e.address, o.isConnected = e.isConnected;
    },
    setAddress(e) {
      o.address = e;
    },
    setIsConnected(e) {
      o.isConnected = e;
    }
  },
  h = (0, _vanilla.proxy)({
    initialized: !1,
    ethereumClient: void 0
  }),
  v = {
    setEthereumClient(e) {
      !h.initialized && e && (h.ethereumClient = e, l.setChains(e.chains), h.initialized = !0);
    },
    client() {
      if (h.ethereumClient) return h.ethereumClient;
      throw new Error("ClientCtrl has no client set");
    }
  },
  I = "WALLETCONNECT_DEEPLINK_CHOICE",
  b = {
    isCoinbaseExtension() {
      return window.coinbaseWalletExtension;
    },
    isMobile() {
      return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
    },
    isEmptyObject(e) {
      return Object.getPrototypeOf(e) === Object.prototype && Object.getOwnPropertyNames(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    formatNativeUrl(e, t, s) {
      if (b.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
      const n = e.replaceAll("/", "").replaceAll(":", "");
      this.setWalletConnectDeepLink(n, s);
      const a = encodeURIComponent(t);
      return `${n}://wc?uri=${a}`;
    },
    formatUniversalUrl(e, t, s) {
      if (!b.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
      let n = e;
      e.endsWith("/") && (n = e.slice(0, -1)), this.setWalletConnectDeepLink(n, s);
      const a = encodeURIComponent(t);
      return `${n}/wc?uri=${a}`;
    },
    async wait(e) {
      return new Promise(t => {
        setTimeout(t, e);
      });
    },
    openHref(e, t = "_self") {
      window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      localStorage.setItem(I, JSON.stringify({
        href: e,
        name: t
      }));
    },
    removeWalletConnectDeepLink() {
      localStorage.removeItem(I);
    },
    isNull(e) {
      return e === null;
    }
  };
exports.CoreUtil = b;
exports.ClientCtrl = v;
exports.OptionsCtrl = l;
function U() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const u = (0, _vanilla.proxy)({
    projectId: void 0,
    themeMode: U() ? "dark" : "light",
    themeColor: "default",
    themeBackground: b.isMobile() ? "themeColor" : "gradient",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chainImages: void 0,
    standaloneChains: void 0,
    enableStandaloneMode: !1,
    enableNetworkView: !0
  }),
  S = {
    state: u,
    subscribe(e) {
      return (0, _vanilla.subscribe)(u, () => e(u));
    },
    setConfig(e) {
      var t, s, n, a;
      l.setStandaloneChains(e.standaloneChains), l.setIsStandalone(Boolean((t = e.standaloneChains) == null ? void 0 : t.length) || Boolean(e.enableStandaloneMode)), l.setIsCustomMobile(Boolean((s = e.mobileWallets) == null ? void 0 : s.length)), l.setIsCustomDesktop(Boolean((n = e.desktopWallets) == null ? void 0 : n.length)), l.setIsExplorer(Boolean((a = e.projectId) == null ? void 0 : a.length)), Object.assign(u, e);
    },
    setThemeConfig(e) {
      Object.assign(u, e);
    }
  },
  y = "https://explorer-api.walletconnect.com";
exports.ConfigCtrl = S;
function k(e) {
  const t = Object.fromEntries(Object.entries(e).filter(([s, n]) => typeof n < "u" && n !== null && n !== "").map(([s, n]) => [s, n.toString()]));
  return new URLSearchParams(t).toString();
}
const m = {
    async fetchWallets(e, t) {
      const s = k(t),
        n = `${y}/v3/wallets?projectId=${e}&${s}`;
      return (await fetch(n)).json();
    },
    formatImageUrl(e, t) {
      return `${y}/v2/logo/lg/${t}?projectId=${e}`;
    }
  },
  r = (0, _vanilla.proxy)({
    wallets: {
      listings: [],
      total: 0,
      page: 1
    },
    search: {
      listings: [],
      total: 0,
      page: 1
    },
    previewWallets: [],
    recomendedWallets: []
  });
function w() {
  const {
    projectId: e
  } = S.state;
  if (!e) throw new Error("projectId is required to work with explorer api");
  return e;
}
const $ = {
    state: r,
    async getPreviewWallets(e) {
      const {
        listings: t
      } = await m.fetchWallets(w(), e);
      return r.previewWallets = Object.values(t), r.previewWallets;
    },
    async getRecomendedWallets() {
      const {
        listings: e
      } = await m.fetchWallets(w(), {
        page: 1,
        entries: 6
      });
      r.recomendedWallets = Object.values(e);
    },
    async getPaginatedWallets(e) {
      const {
          page: t,
          search: s
        } = e,
        {
          listings: n,
          total: a
        } = await m.fetchWallets(w(), e),
        g = Object.values(n),
        W = s ? "search" : "wallets";
      return r[W] = {
        listings: [...r[W].listings, ...g],
        total: a,
        page: t ?? 1
      }, {
        listings: g,
        total: a
      };
    },
    getImageUrl(e) {
      return m.formatImageUrl(w(), e);
    },
    resetSearch() {
      r.search = {
        listings: [],
        total: 0,
        page: 1
      };
    }
  },
  i = (0, _vanilla.proxy)({
    history: ["ConnectWallet"],
    view: "ConnectWallet",
    data: void 0
  }),
  f = {
    state: i,
    subscribe(e) {
      return (0, _vanilla.subscribe)(i, () => e(i));
    },
    push(e, t) {
      e !== i.view && (i.view = e, t && (i.data = t), i.history.push(e));
    },
    replace(e) {
      i.view = e, i.history = [e];
    },
    goBack() {
      if (i.history.length > 1) {
        i.history.pop();
        const [e] = i.history.slice(-1);
        i.view = e;
      }
    }
  },
  p = (0, _vanilla.proxy)({
    open: !1
  }),
  M = {
    state: p,
    subscribe(e) {
      return (0, _vanilla.subscribe)(p, () => e(p));
    },
    open(e) {
      var t;
      const {
          chains: s,
          isStandalone: n
        } = l.state,
        {
          enableNetworkView: a
        } = S.state,
        g = s?.length && s.length > 1;
      !n && v.client().getAccount().isConnected ? f.replace("Account") : g && a ? f.replace("SelectNetwork") : f.replace("ConnectWallet"), typeof e?.uri == "string" && l.setStandaloneUri(e.uri), (t = e?.standaloneChains) != null && t.length && l.setStandaloneChains(e.standaloneChains), p.open = !0;
    },
    close() {
      p.open = !1;
    }
  },
  c = (0, _vanilla.proxy)({
    open: !1,
    message: "",
    variant: "success"
  }),
  B = {
    state: c,
    subscribe(e) {
      return (0, _vanilla.subscribe)(c, () => e(c));
    },
    openToast(e, t) {
      c.open = !0, c.message = e, c.variant = t;
    },
    closeToast() {
      c.open = !1;
    }
  };
exports.ToastCtrl = B;
exports.ModalCtrl = M;
exports.RouterCtrl = f;
exports.ExplorerCtrl = $;
typeof window < "u" && (window.Buffer || (window.Buffer = _buffer.Buffer), window.global || (window.global = window), window.process || (window.process = {
  env: {}
}));

},{"buffer":136,"valtio/vanilla":90}],90:[function(require,module,exports){
(function (process){(function (){
'use strict';

var proxyCompare = require('proxy-compare');

var isObject = function isObject(x) {
  return typeof x === 'object' && x !== null;
};
var PROXY_STATE = Symbol();
var refSet = new WeakSet();
var buildProxyFunction = function buildProxyFunction(objectIs, newProxy, canProxy, defaultHandlePromise, snapCache, createSnapshot, proxyCache, versionHolder, proxyFunction) {
  if (objectIs === void 0) {
    objectIs = Object.is;
  }
  if (newProxy === void 0) {
    newProxy = function newProxy(target, handler) {
      return new Proxy(target, handler);
    };
  }
  if (canProxy === void 0) {
    canProxy = function canProxy(x) {
      return isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer);
    };
  }
  if (defaultHandlePromise === void 0) {
    defaultHandlePromise = function defaultHandlePromise(promise) {
      switch (promise.status) {
        case 'fulfilled':
          return promise.value;
        case 'rejected':
          throw promise.reason;
        default:
          throw promise;
      }
    };
  }
  if (snapCache === void 0) {
    snapCache = new WeakMap();
  }
  if (createSnapshot === void 0) {
    createSnapshot = function createSnapshot(target, receiver, version, handlePromise) {
      if (handlePromise === void 0) {
        handlePromise = defaultHandlePromise;
      }
      var cache = snapCache.get(receiver);
      if ((cache == null ? void 0 : cache[0]) === version) {
        return cache[1];
      }
      var snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
      proxyCompare.markToTrack(snap, true);
      snapCache.set(receiver, [version, snap]);
      Reflect.ownKeys(target).forEach(function (key) {
        var value = Reflect.get(target, key, receiver);
        if (refSet.has(value)) {
          proxyCompare.markToTrack(value, false);
          snap[key] = value;
        } else if (value instanceof Promise) {
          Object.defineProperty(snap, key, {
            get: function get() {
              return handlePromise(value);
            }
          });
        } else if (value != null && value[PROXY_STATE]) {
          snap[key] = snapshot(value, handlePromise);
        } else {
          snap[key] = value;
        }
      });
      return Object.freeze(snap);
    };
  }
  if (proxyCache === void 0) {
    proxyCache = new WeakMap();
  }
  if (versionHolder === void 0) {
    versionHolder = [1];
  }
  if (proxyFunction === void 0) {
    proxyFunction = function proxyFunction(initialObject) {
      if (!isObject(initialObject)) {
        throw new Error('object required');
      }
      var found = proxyCache.get(initialObject);
      if (found) {
        return found;
      }
      var version = versionHolder[0];
      var listeners = new Set();
      var notifyUpdate = function notifyUpdate(op, nextVersion) {
        if (nextVersion === void 0) {
          nextVersion = ++versionHolder[0];
        }
        if (version !== nextVersion) {
          version = nextVersion;
          listeners.forEach(function (listener) {
            return listener(op, nextVersion);
          });
        }
      };
      var propListeners = new Map();
      var getPropListener = function getPropListener(prop) {
        var propListener = propListeners.get(prop);
        if (!propListener) {
          propListener = function propListener(op, nextVersion) {
            var newOp = [].concat(op);
            newOp[1] = [prop].concat(newOp[1]);
            notifyUpdate(newOp, nextVersion);
          };
          propListeners.set(prop, propListener);
        }
        return propListener;
      };
      var popPropListener = function popPropListener(prop) {
        var propListener = propListeners.get(prop);
        propListeners.delete(prop);
        return propListener;
      };
      var baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
      var handler = {
        get: function get(target, prop, receiver) {
          if (prop === PROXY_STATE) {
            var state = [target, receiver, version, createSnapshot, listeners];
            return state;
          }
          return Reflect.get(target, prop, receiver);
        },
        deleteProperty: function deleteProperty(target, prop) {
          var _PROXY_STATE;
          var prevValue = Reflect.get(target, prop);
          var childListeners = prevValue == null ? void 0 : (_PROXY_STATE = prevValue[PROXY_STATE]) == null ? void 0 : _PROXY_STATE[4];
          if (childListeners) {
            childListeners.delete(popPropListener(prop));
          }
          var deleted = Reflect.deleteProperty(target, prop);
          if (deleted) {
            notifyUpdate(['delete', [prop], prevValue]);
          }
          return deleted;
        },
        set: function set(target, prop, value, receiver) {
          var _PROXY_STATE2, _Object$getOwnPropert;
          var hasPrevValue = Reflect.has(target, prop);
          var prevValue = Reflect.get(target, prop, receiver);
          if (hasPrevValue && objectIs(prevValue, value)) {
            return true;
          }
          var childListeners = prevValue == null ? void 0 : (_PROXY_STATE2 = prevValue[PROXY_STATE]) == null ? void 0 : _PROXY_STATE2[4];
          if (childListeners) {
            childListeners.delete(popPropListener(prop));
          }
          if (isObject(value)) {
            value = proxyCompare.getUntracked(value) || value;
          }
          var nextValue = value;
          if ((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(target, prop)) != null && _Object$getOwnPropert.set) ; else if (value instanceof Promise) {
            value.then(function (v) {
              value.status = 'fulfilled';
              value.value = v;
              notifyUpdate(['resolve', [prop], v]);
            }).catch(function (e) {
              value.status = 'rejected';
              value.reason = e;
              notifyUpdate(['reject', [prop], e]);
            });
          } else {
            var _value, _nextValue;
            if (!((_value = value) != null && _value[PROXY_STATE]) && canProxy(value)) {
              nextValue = proxy(value);
            }
            if ((_nextValue = nextValue) != null && _nextValue[PROXY_STATE]) {
              nextValue[PROXY_STATE][4].add(getPropListener(prop));
            }
          }
          Reflect.set(target, prop, nextValue, receiver);
          notifyUpdate(['set', [prop], value, prevValue]);
          return true;
        }
      };
      var proxyObject = newProxy(baseObject, handler);
      proxyCache.set(initialObject, proxyObject);
      Reflect.ownKeys(initialObject).forEach(function (key) {
        var desc = Object.getOwnPropertyDescriptor(initialObject, key);
        if (desc.get || desc.set) {
          Object.defineProperty(baseObject, key, desc);
        } else {
          proxyObject[key] = initialObject[key];
        }
      });
      return proxyObject;
    };
  }
  return [
  proxyFunction,
  PROXY_STATE, refSet,
  objectIs, newProxy, canProxy, defaultHandlePromise, snapCache, createSnapshot, proxyCache, versionHolder];
};
var _buildProxyFunction = buildProxyFunction(),
  proxyFunction = _buildProxyFunction[0];
function proxy(initialObject) {
  if (initialObject === void 0) {
    initialObject = {};
  }
  return proxyFunction(initialObject);
}
function getVersion(proxyObject) {
  var state = proxyObject == null ? void 0 : proxyObject[PROXY_STATE];
  return state == null ? void 0 : state[2];
}
function subscribe(proxyObject, callback, notifyInSync) {
  if (process.env.NODE_ENV !== "production" && !(proxyObject != null && proxyObject[PROXY_STATE])) {
    console.warn('Please use proxy object');
  }
  var promise;
  var ops = [];
  var listeners = proxyObject[PROXY_STATE][4];
  var listener = function listener(op) {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(function () {
        promise = undefined;
        if (listeners.has(listener)) {
          callback(ops.splice(0));
        }
      });
    }
  };
  listeners.add(listener);
  return function () {
    return listeners.delete(listener);
  };
}
function snapshot(proxyObject, handlePromise) {
  if (process.env.NODE_ENV !== "production" && !(proxyObject != null && proxyObject[PROXY_STATE])) {
    console.warn('Please use proxy object');
  }
  var _ref = proxyObject[PROXY_STATE],
    target = _ref[0],
    receiver = _ref[1],
    version = _ref[2],
    createSnapshot = _ref[3];
  return createSnapshot(target, receiver, version, handlePromise);
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}
var unstable_buildProxyFunction = buildProxyFunction;

exports.getVersion = getVersion;
exports.proxy = proxy;
exports.ref = ref;
exports.snapshot = snapshot;
exports.subscribe = subscribe;
exports.unstable_buildProxyFunction = unstable_buildProxyFunction;

}).call(this)}).call(this,require('_process'))
},{"_process":139,"proxy-compare":120}],91:[function(require,module,exports){

},{}],92:[function(require,module,exports){
'use strict';
var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};

},{}],93:[function(require,module,exports){
'use strict';
module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};

},{}],94:[function(require,module,exports){
(function (global){(function (){
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var baseX$1 = require('../../vendor/base-x.js');
var bytes = require('../bytes.js');

class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${ this.prefix }${ this.baseEncode(bytes) }`;
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === undefined) {
      throw new Error('Invalid prefix character');
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === 'string') {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${ JSON.stringify(text) }, ${ this.name } decoder only supports inputs prefixed with ${ this.prefix }`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error('Can only multibase decode strings');
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${ JSON.stringify(input) }, only inputs prefixed with ${ Object.keys(this.decoders) } are supported`);
    }
  }
}
const or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({name, prefix, encode, decode}) => new Codec(name, prefix, encode, decode);
const baseX = ({prefix, name, alphabet}) => {
  const {encode, decode} = baseX$1(alphabet, name);
  return from({
    prefix,
    name,
    encode,
    decode: text => bytes.coerce(decode(text))
  });
};
const decode = (string, alphabet, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string.length;
  while (string[end - 1] === '=') {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];
    if (value === undefined) {
      throw new SyntaxError(`Non-${ name } character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError('Unexpected end of data');
  }
  return out;
};
const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '=';
  const mask = (1 << bitsPerChar) - 1;
  let out = '';
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += '=';
    }
  }
  return out;
};
const rfc4648 = ({name, prefix, bitsPerChar, alphabet}) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }
  });
};

exports.Codec = Codec;
exports.baseX = baseX;
exports.from = from;
exports.or = or;
exports.rfc4648 = rfc4648;

},{"../../vendor/base-x.js":117,"../bytes.js":107}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const base10 = base.baseX({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});

exports.base10 = base10;

},{"./base.js":95}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const base16 = base.rfc4648({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = base.rfc4648({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});

exports.base16 = base16;
exports.base16upper = base16upper;

},{"./base.js":95}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const base2 = base.rfc4648({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});

exports.base2 = base2;

},{"./base.js":95}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const alphabet = Array.from('\uD83D\uDE80\uD83E\uDE90\u2604\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09\u2600\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02\u2764\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09\u263A\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E\u270C\u2728\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D\u2763\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33\u270B\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13\u2B50\u2705\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6\u2714\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90\u2639\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20\u261D\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B\u26BD\uD83E\uDD19\u2615\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81\u26A1\uD83C\uDF1E\uD83C\uDF88\u274C\u270A\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C\u2708\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74\u25B6\u27A1\u2753\uD83D\uDC8E\uD83D\uDCB8\u2B07\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A\u26A0\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37\u260E\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51\u2744\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42');
const alphabetBytesToChars = alphabet.reduce((p, c, i) => {
  p[i] = c;
  return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
  p[c.codePointAt(0)] = i;
  return p;
}, []);
function encode(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, '');
}
function decode(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === undefined) {
      throw new Error(`Non-base256emoji character: ${ char }`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = base.from({
  prefix: '\uD83D\uDE80',
  name: 'base256emoji',
  encode,
  decode
});

exports.base256emoji = base256emoji;

},{"./base.js":95}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const base32 = base.rfc4648({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
});
const base32upper = base.rfc4648({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
});
const base32pad = base.rfc4648({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
});
const base32padupper = base.rfc4648({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
});
const base32hex = base.rfc4648({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
});
const base32hexupper = base.rfc4648({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
});
const base32hexpad = base.rfc4648({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
});
const base32hexpadupper = base.rfc4648({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
});
const base32z = base.rfc4648({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
});

exports.base32 = base32;
exports.base32hex = base32hex;
exports.base32hexpad = base32hexpad;
exports.base32hexpadupper = base32hexpadupper;
exports.base32hexupper = base32hexupper;
exports.base32pad = base32pad;
exports.base32padupper = base32padupper;
exports.base32upper = base32upper;
exports.base32z = base32z;

},{"./base.js":95}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const base36 = base.baseX({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = base.baseX({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});

exports.base36 = base36;
exports.base36upper = base36upper;

},{"./base.js":95}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const base58btc = base.baseX({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = base.baseX({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});

exports.base58btc = base58btc;
exports.base58flickr = base58flickr;

},{"./base.js":95}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const base64 = base.rfc4648({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = base.rfc4648({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = base.rfc4648({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = base.rfc4648({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});

exports.base64 = base64;
exports.base64pad = base64pad;
exports.base64url = base64url;
exports.base64urlpad = base64urlpad;

},{"./base.js":95}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');

const base8 = base.rfc4648({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});

exports.base8 = base8;

},{"./base.js":95}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base = require('./base.js');
var bytes = require('../bytes.js');

const identity = base.from({
  prefix: '\0',
  name: 'identity',
  encode: buf => bytes.toString(buf),
  decode: str => bytes.fromString(str)
});

exports.identity = identity;

},{"../bytes.js":107,"./base.js":95}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var identity = require('./bases/identity.js');
var base2 = require('./bases/base2.js');
var base8 = require('./bases/base8.js');
var base10 = require('./bases/base10.js');
var base16 = require('./bases/base16.js');
var base32 = require('./bases/base32.js');
var base36 = require('./bases/base36.js');
var base58 = require('./bases/base58.js');
var base64 = require('./bases/base64.js');
var base256emoji = require('./bases/base256emoji.js');
var sha2 = require('./hashes/sha2.js');
var identity$1 = require('./hashes/identity.js');
var raw = require('./codecs/raw.js');
var json = require('./codecs/json.js');
require('./index.js');
var cid = require('./cid.js');
var hasher = require('./hashes/hasher.js');
var digest = require('./hashes/digest.js');
var varint = require('./varint.js');
var bytes = require('./bytes.js');

const bases = {
  ...identity,
  ...base2,
  ...base8,
  ...base10,
  ...base16,
  ...base32,
  ...base36,
  ...base58,
  ...base64,
  ...base256emoji
};
const hashes = {
  ...sha2,
  ...identity$1
};
const codecs = {
  raw,
  json
};

exports.CID = cid.CID;
exports.hasher = hasher;
exports.digest = digest;
exports.varint = varint;
exports.bytes = bytes;
exports.bases = bases;
exports.codecs = codecs;
exports.hashes = hashes;

},{"./bases/base10.js":96,"./bases/base16.js":97,"./bases/base2.js":98,"./bases/base256emoji.js":99,"./bases/base32.js":100,"./bases/base36.js":101,"./bases/base58.js":102,"./bases/base64.js":103,"./bases/base8.js":104,"./bases/identity.js":105,"./bytes.js":107,"./cid.js":108,"./codecs/json.js":109,"./codecs/raw.js":110,"./hashes/digest.js":111,"./hashes/hasher.js":112,"./hashes/identity.js":113,"./hashes/sha2.js":114,"./index.js":115,"./varint.js":116}],107:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const empty = new Uint8Array(0);
const toHex = d => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');
const fromHex = hex => {
  const hexes = hex.match(/../g);
  return hexes ? new Uint8Array(hexes.map(b => parseInt(b, 16))) : empty;
};
const equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array')
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
};
const isBinary = o => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const fromString = str => new TextEncoder().encode(str);
const toString = b => new TextDecoder().decode(b);

exports.coerce = coerce;
exports.empty = empty;
exports.equals = equals;
exports.fromHex = fromHex;
exports.fromString = fromString;
exports.isBinary = isBinary;
exports.toHex = toHex;
exports.toString = toString;

},{}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var varint = require('./varint.js');
var digest = require('./hashes/digest.js');
var base58 = require('./bases/base58.js');
var base32 = require('./bases/base32.js');
var bytes = require('./bytes.js');

class CID {
  constructor(version, code, multihash, bytes) {
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
    case 0: {
        return this;
      }
    default: {
        const {code, multihash} = this;
        if (code !== DAG_PB_CODE) {
          throw new Error('Cannot convert a non dag-pb CID to CIDv0');
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
        }
        return CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
    case 0: {
        const {code, digest: digest$1} = this.multihash;
        const multihash = digest.create(code, digest$1);
        return CID.createV1(this.code, multihash);
      }
    case 1: {
        return this;
      }
    default: {
        throw Error(`Can not convert CID version ${ this.version } to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && digest.equals(this.multihash, other.multihash);
  }
  toString(base) {
    const {bytes, version, _baseCache} = this;
    switch (version) {
    case 0:
      return toStringV0(bytes, _baseCache, base || base58.base58btc.encoder);
    default:
      return toStringV1(bytes, _baseCache, base || base32.base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return 'CID';
  }
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return 'CID(' + this.toString() + ')';
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error('Deprecated, use .toString()');
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const {version, code, multihash, bytes} = value;
      return new CID(version, code, multihash, bytes || encodeCID(version, code, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const {version, multihash, code} = value;
      const digest$1 = digest.decode(multihash);
      return CID.create(version, code, digest$1);
    } else {
      return null;
    }
  }
  static create(version, code, digest) {
    if (typeof code !== 'number') {
      throw new Error('String codecs are no longer supported');
    }
    switch (version) {
    case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${ DAG_PB_CODE }) block encoding`);
        } else {
          return new CID(version, code, digest, digest.bytes);
        }
      }
    case 1: {
        const bytes = encodeCID(version, code, digest.bytes);
        return new CID(version, code, digest, bytes);
      }
    default: {
        throw new Error('Invalid version');
      }
    }
  }
  static createV0(digest) {
    return CID.create(0, DAG_PB_CODE, digest);
  }
  static createV1(code, digest) {
    return CID.create(1, code, digest);
  }
  static decode(bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error('Incorrect length');
    }
    return cid;
  }
  static decodeFirst(bytes$1) {
    const specs = CID.inspectBytes(bytes$1);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = bytes.coerce(bytes$1.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error('Incorrect length');
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest$1 = new digest.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest$1) : CID.createV1(specs.codec, digest$1);
    return [
      cid,
      bytes$1.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length] = varint.decode(initialBytes.subarray(offset));
      offset += length;
      return i;
    };
    let version = next();
    let codec = DAG_PB_CODE;
    if (version === 18) {
      version = 0;
      offset = 0;
    } else if (version === 1) {
      codec = next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${ version }`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base) {
    const [prefix, bytes] = parseCIDtoBytes(source, base);
    const cid = CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
}
const parseCIDtoBytes = (source, base) => {
  switch (source[0]) {
  case 'Q': {
      const decoder = base || base58.base58btc;
      return [
        base58.base58btc.prefix,
        decoder.decode(`${ base58.base58btc.prefix }${ source }`)
      ];
    }
  case base58.base58btc.prefix: {
      const decoder = base || base58.base58btc;
      return [
        base58.base58btc.prefix,
        decoder.decode(source)
      ];
    }
  case base32.base32.prefix: {
      const decoder = base || base32.base32;
      return [
        base32.base32.prefix,
        decoder.decode(source)
      ];
    }
  default: {
      if (base == null) {
        throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
      }
      return [
        source[0],
        base.decode(source)
      ];
    }
  }
};
const toStringV0 = (bytes, cache, base) => {
  const {prefix} = base;
  if (prefix !== base58.base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${ base.name } encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes).slice(1);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const toStringV1 = (bytes, cache, base) => {
  const {prefix} = base;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version, code, multihash) => {
  const codeOffset = varint.encodingLength(version);
  const hashOffset = codeOffset + varint.encodingLength(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  varint.encodeTo(version, bytes, 0);
  varint.encodeTo(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
const cidSymbol = Symbol.for('@ipld/js-cid/CID');
const readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
const hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = '0.0.0-dev';
const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

exports.CID = CID;

},{"./bases/base32.js":100,"./bases/base58.js":102,"./bytes.js":107,"./hashes/digest.js":111,"./varint.js":116}],109:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const name = 'json';
const code = 512;
const encode = node => textEncoder.encode(JSON.stringify(node));
const decode = data => JSON.parse(textDecoder.decode(data));

exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bytes = require('../bytes.js');

const name = 'raw';
const code = 85;
const encode = node => bytes.coerce(node);
const decode = data => bytes.coerce(data);

exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{"../bytes.js":107}],111:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bytes = require('../bytes.js');
var varint = require('../varint.js');

const create = (code, digest) => {
  const size = digest.byteLength;
  const sizeOffset = varint.encodingLength(code);
  const digestOffset = sizeOffset + varint.encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  varint.encodeTo(code, bytes, 0);
  varint.encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
};
const decode = multihash => {
  const bytes$1 = bytes.coerce(multihash);
  const [code, sizeOffset] = varint.decode(bytes$1);
  const [size, digestOffset] = varint.decode(bytes$1.subarray(sizeOffset));
  const digest = bytes$1.subarray(sizeOffset + digestOffset);
  if (digest.byteLength !== size) {
    throw new Error('Incorrect length');
  }
  return new Digest(code, size, digest, bytes$1);
};
const equals = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && bytes.equals(a.bytes, b.bytes);
  }
};
class Digest {
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
}

exports.Digest = Digest;
exports.create = create;
exports.decode = decode;
exports.equals = equals;

},{"../bytes.js":107,"../varint.js":116}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var digest = require('./digest.js');

const from = ({name, code, encode}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? digest.create(this.code, result) : result.then(digest$1 => digest.create(this.code, digest$1));
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}

exports.Hasher = Hasher;
exports.from = from;

},{"./digest.js":111}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bytes = require('../bytes.js');
var digest$1 = require('./digest.js');

const code = 0;
const name = 'identity';
const encode = bytes.coerce;
const digest = input => digest$1.create(code, encode(input));
const identity = {
  code,
  name,
  encode,
  digest
};

exports.identity = identity;

},{"../bytes.js":107,"./digest.js":111}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hasher = require('./hasher.js');

const sha = name => async data => new Uint8Array(await crypto.subtle.digest(name, data));
const sha256 = hasher.from({
  name: 'sha2-256',
  code: 18,
  encode: sha('SHA-256')
});
const sha512 = hasher.from({
  name: 'sha2-512',
  code: 19,
  encode: sha('SHA-512')
});

exports.sha256 = sha256;
exports.sha512 = sha512;

},{"./hasher.js":112}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cid = require('./cid.js');
var varint = require('./varint.js');
var bytes = require('./bytes.js');
var hasher = require('./hashes/hasher.js');
var digest = require('./hashes/digest.js');



exports.CID = cid.CID;
exports.varint = varint;
exports.bytes = bytes;
exports.hasher = hasher;
exports.digest = digest;

},{"./bytes.js":107,"./cid.js":108,"./hashes/digest.js":111,"./hashes/hasher.js":112,"./varint.js":116}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var varint$1 = require('../vendor/varint.js');

const decode = (data, offset = 0) => {
  const code = varint$1.decode(data, offset);
  return [
    code,
    varint$1.decode.bytes
  ];
};
const encodeTo = (int, target, offset = 0) => {
  varint$1.encode(int, target, offset);
  return target;
};
const encodingLength = int => {
  return varint$1.encodingLength(int);
};

exports.decode = decode;
exports.encodeTo = encodeTo;
exports.encodingLength = encodingLength;

},{"../vendor/varint.js":118}],117:[function(require,module,exports){
'use strict';

function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError('Alphabet too long');
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + ' is ambiguous');
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode(source) {
    if (source instanceof Uint8Array);
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError('Expected Uint8Array');
    }
    if (source.length === 0) {
      return '';
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== 'string') {
      throw new TypeError('Expected String');
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === ' ') {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      psz++;
    }
    if (source[psz] === ' ') {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch;
  }
  function decode(string) {
    var buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${ name } character`);
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;

module.exports = _brrp__multiformats_scope_baseX;

},{}],118:[function(require,module,exports){
'use strict';

var encode_1 = encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode.bytes = offset - oldOffset + 1;
  return out;
}
var decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint');
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function (value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode,
  encodingLength: length
};
var _brrp_varint = varint;
var varint$1 = _brrp_varint;

module.exports = varint$1;

},{}],119:[function(require,module,exports){
'use strict'

const format = require('quick-format-unescaped')

module.exports = pino

const _console = pfGlobalThisOrFallback().console || {}
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue
}

function shouldSerialize (serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function (k) {
      return k !== '!stdSerializers.err'
    })
    return hasToFilter
  } else if (serialize === true) {
    return Object.keys(serializers)
  }

  return false
}

function pino (opts) {
  opts = opts || {}
  opts.browser = opts.browser || {}

  const transmit = opts.browser.transmit
  if (transmit && typeof transmit.send !== 'function') { throw Error('pino: transmit option must have a send function') }

  const proto = opts.browser.write || _console
  if (opts.browser.write) opts.browser.asObject = true
  const serializers = opts.serializers || {}
  const serialize = shouldSerialize(opts.browser.serialize, serializers)
  let stdErrSerialize = opts.browser.serialize

  if (
    Array.isArray(opts.browser.serialize) &&
    opts.browser.serialize.indexOf('!stdSerializers.err') > -1
  ) stdErrSerialize = false

  const levels = ['error', 'fatal', 'warn', 'info', 'debug', 'trace']

  if (typeof proto === 'function') {
    proto.error = proto.fatal = proto.warn =
    proto.info = proto.debug = proto.trace = proto
  }
  if (opts.enabled === false) opts.level = 'silent'
  const level = opts.level || 'info'
  const logger = Object.create(proto)
  if (!logger.log) logger.log = noop

  Object.defineProperty(logger, 'levelVal', {
    get: getLevelVal
  })
  Object.defineProperty(logger, 'level', {
    get: getLevel,
    set: setLevel
  })

  const setOpts = {
    transmit,
    serialize,
    asObject: opts.browser.asObject,
    levels,
    timestamp: getTimeFunction(opts)
  }
  logger.levels = pino.levels
  logger.level = level

  logger.setMaxListeners = logger.getMaxListeners =
  logger.emit = logger.addListener = logger.on =
  logger.prependListener = logger.once =
  logger.prependOnceListener = logger.removeListener =
  logger.removeAllListeners = logger.listeners =
  logger.listenerCount = logger.eventNames =
  logger.write = logger.flush = noop
  logger.serializers = serializers
  logger._serialize = serialize
  logger._stdErrSerialize = stdErrSerialize
  logger.child = child

  if (transmit) logger._logEvent = createLogEventShape()

  function getLevelVal () {
    return this.level === 'silent'
      ? Infinity
      : this.levels.values[this.level]
  }

  function getLevel () {
    return this._level
  }
  function setLevel (level) {
    if (level !== 'silent' && !this.levels.values[level]) {
      throw Error('unknown level ' + level)
    }
    this._level = level

    set(setOpts, logger, 'error', 'log') // <-- must stay first
    set(setOpts, logger, 'fatal', 'error')
    set(setOpts, logger, 'warn', 'error')
    set(setOpts, logger, 'info', 'log')
    set(setOpts, logger, 'debug', 'log')
    set(setOpts, logger, 'trace', 'log')
  }

  function child (bindings, childOptions) {
    if (!bindings) {
      throw new Error('missing bindings for child Pino')
    }
    childOptions = childOptions || {}
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers
    }
    const childOptionsSerializers = childOptions.serializers
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers)
      var childSerialize = opts.browser.serialize === true
        ? Object.keys(childSerializers)
        : serialize
      delete bindings.serializers
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize)
    }
    function Child (parent) {
      this._childLevel = (parent._childLevel | 0) + 1
      this.error = bind(parent, bindings, 'error')
      this.fatal = bind(parent, bindings, 'fatal')
      this.warn = bind(parent, bindings, 'warn')
      this.info = bind(parent, bindings, 'info')
      this.debug = bind(parent, bindings, 'debug')
      this.trace = bind(parent, bindings, 'trace')
      if (childSerializers) {
        this.serializers = childSerializers
        this._serialize = childSerialize
      }
      if (transmit) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        )
      }
    }
    Child.prototype = this
    return new Child(this)
  }
  return logger
}

pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: 'trace',
    20: 'debug',
    30: 'info',
    40: 'warn',
    50: 'error',
    60: 'fatal'
  }
}

pino.stdSerializers = stdSerializers
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime })

function set (opts, logger, level, fallback) {
  const proto = Object.getPrototypeOf(logger)
  logger[level] = logger.levelVal > logger.levels.values[level]
    ? noop
    : (proto[level] ? proto[level] : (_console[level] || _console[fallback] || noop))

  wrap(opts, logger, level)
}

function wrap (opts, logger, level) {
  if (!opts.transmit && logger[level] === noop) return

  logger[level] = (function (write) {
    return function LOG () {
      const ts = opts.timestamp()
      const args = new Array(arguments.length)
      const proto = (Object.getPrototypeOf && Object.getPrototypeOf(this) === _console) ? _console : this
      for (var i = 0; i < args.length; i++) args[i] = arguments[i]

      if (opts.serialize && !opts.asObject) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize)
      }
      if (opts.asObject) write.call(proto, asObject(this, level, args, ts))
      else write.apply(proto, args)

      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || logger.level
        const transmitValue = pino.levels.values[transmitLevel]
        const methodValue = pino.levels.values[level]
        if (methodValue < transmitValue) return
        transmit(this, {
          ts,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
          send: opts.transmit.send,
          val: logger.levelVal
        }, args)
      }
    }
  })(logger[level])
}

function asObject (logger, level, args, ts) {
  if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize)
  const argsCloned = args.slice()
  let msg = argsCloned[0]
  const o = {}
  if (ts) {
    o.time = ts
  }
  o.level = pino.levels.values[level]
  let lvl = (logger._childLevel | 0) + 1
  if (lvl < 1) lvl = 1
  // deliberate, catching objects, arrays
  if (msg !== null && typeof msg === 'object') {
    while (lvl-- && typeof argsCloned[0] === 'object') {
      Object.assign(o, argsCloned.shift())
    }
    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined
  } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned)
  if (msg !== undefined) o.msg = msg
  return o
}

function applySerializers (args, serialize, serializers, stdErrSerialize) {
  for (const i in args) {
    if (stdErrSerialize && args[i] instanceof Error) {
      args[i] = pino.stdSerializers.err(args[i])
    } else if (typeof args[i] === 'object' && !Array.isArray(args[i])) {
      for (const k in args[i]) {
        if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
          args[i][k] = serializers[k](args[i][k])
        }
      }
    }
  }
}

function bind (parent, bindings, level) {
  return function () {
    const args = new Array(1 + arguments.length)
    args[0] = bindings
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i - 1]
    }
    return parent[level].apply(this, args)
  }
}

function transmit (logger, opts, args) {
  const send = opts.send
  const ts = opts.ts
  const methodLevel = opts.methodLevel
  const methodValue = opts.methodValue
  const val = opts.val
  const bindings = logger._logEvent.bindings

  applySerializers(
    args,
    logger._serialize || Object.keys(logger.serializers),
    logger.serializers,
    logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize
  )
  logger._logEvent.ts = ts
  logger._logEvent.messages = args.filter(function (arg) {
    // bindings can only be objects, so reference equality check via indexOf is fine
    return bindings.indexOf(arg) === -1
  })

  logger._logEvent.level.label = methodLevel
  logger._logEvent.level.value = methodValue

  send(methodLevel, logger._logEvent, val)

  logger._logEvent = createLogEventShape(bindings)
}

function createLogEventShape (bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: '', value: 0 }
  }
}

function asErrValue (err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  }
  for (const key in err) {
    if (obj[key] === undefined) {
      obj[key] = err[key]
    }
  }
  return obj
}

function getTimeFunction (opts) {
  if (typeof opts.timestamp === 'function') {
    return opts.timestamp
  }
  if (opts.timestamp === false) {
    return nullTime
  }
  return epochTime
}

function mock () { return {} }
function passthrough (a) { return a }
function noop () {}

function nullTime () { return false }
function epochTime () { return Date.now() }
function unixTime () { return Math.round(Date.now() / 1000.0) }
function isoTime () { return new Date(Date.now()).toISOString() } // using Date.now() for testability

/* eslint-disable */
/* istanbul ignore next */
function pfGlobalThisOrFallback () {
  function defd (o) { return typeof o !== 'undefined' && o }
  try {
    if (typeof globalThis !== 'undefined') return globalThis
    Object.defineProperty(Object.prototype, 'globalThis', {
      get: function () {
        delete Object.prototype.globalThis
        return (this.globalThis = this)
      },
      configurable: true
    })
    return globalThis
  } catch (e) {
    return defd(self) || defd(window) || defd(this) || {}
  }
}
/* eslint-enable */

},{"quick-format-unescaped":121}],120:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackMemo = exports.replaceNewProxy = exports.markToTrack = exports.isChanged = exports.getUntracked = exports.createProxy = exports.affectedToPathList = void 0;
const e = Symbol(),
  t = Symbol(),
  r = Symbol();
let n = (e, t) => new Proxy(e, t);
const o = Object.getPrototypeOf,
  s = new WeakMap(),
  c = e => e && (s.has(e) ? s.get(e) : o(e) === Object.prototype || o(e) === Array.prototype),
  l = e => "object" == typeof e && null !== e,
  a = new WeakMap(),
  f = e => e[r] || e,
  i = (s, l, p) => {
    if (!c(s)) return s;
    const y = f(s),
      u = (e => Object.isFrozen(e) || Object.values(Object.getOwnPropertyDescriptors(e)).some(e => !e.writable))(y);
    let g = p && p.get(y);
    return g && g[1].f === u || (g = ((n, o) => {
      const s = {
        f: o
      };
      let c = !1;
      const l = (t, r) => {
          if (!c) {
            let o = s.a.get(n);
            o || (o = new Set(), s.a.set(n, o)), r && o.has(e) || o.add(t);
          }
        },
        a = {
          get: (e, t) => t === r ? n : (l(t), i(e[t], s.a, s.c)),
          has: (e, r) => r === t ? (c = !0, s.a.delete(n), !0) : (l(r), r in e),
          getOwnPropertyDescriptor: (e, t) => (l(t, !0), Object.getOwnPropertyDescriptor(e, t)),
          ownKeys: t => (l(e), Reflect.ownKeys(t))
        };
      return o && (a.set = a.deleteProperty = () => !1), [a, s];
    })(y, u), g[1].p = n(u ? (e => {
      let t = a.get(e);
      if (!t) {
        if (Array.isArray(e)) t = Array.from(e);else {
          const r = Object.getOwnPropertyDescriptors(e);
          Object.values(r).forEach(e => {
            e.configurable = !0;
          }), t = Object.create(o(e), r);
        }
        a.set(e, t);
      }
      return t;
    })(y) : y, g[0]), p && p.set(y, g)), g[1].a = l, g[1].c = p, g[1].p;
  },
  p = (e, t) => {
    const r = Reflect.ownKeys(e),
      n = Reflect.ownKeys(t);
    return r.length !== n.length || r.some((e, t) => e !== n[t]);
  },
  y = (t, r, n, o) => {
    if (Object.is(t, r)) return !1;
    if (!l(t) || !l(r)) return !0;
    const s = n.get(f(t));
    if (!s) return !0;
    if (o) {
      const e = o.get(t);
      if (e && e.n === r) return e.g;
      o.set(t, {
        n: r,
        g: !1
      });
    }
    let c = null;
    for (const l of s) {
      const s = l === e ? p(t, r) : y(t[l], r[l], n, o);
      if (!0 !== s && !1 !== s || (c = s), c) break;
    }
    return null === c && (c = !0), o && o.set(t, {
      n: r,
      g: c
    }), c;
  },
  u = e => !!c(e) && t in e,
  g = e => c(e) && e[r] || null,
  b = (e, t = !0) => {
    s.set(e, t);
  },
  O = (e, t) => {
    const r = [],
      n = new WeakSet(),
      o = (e, s) => {
        if (n.has(e)) return;
        l(e) && n.add(e);
        const c = l(e) && t.get(f(e));
        c ? c.forEach(t => {
          o(e[t], s ? [...s, t] : [t]);
        }) : s && r.push(s);
      };
    return o(e), r;
  },
  w = e => {
    n = e;
  };
exports.replaceNewProxy = w;
exports.affectedToPathList = O;
exports.markToTrack = b;
exports.getUntracked = g;
exports.trackMemo = u;
exports.isChanged = y;
exports.createProxy = i;

},{}],121:[function(require,module,exports){
'use strict'
function tryStringify (o) {
  try { return JSON.stringify(o) } catch(e) { return '"[Circular]"' }
}

module.exports = format

function format(f, args, opts) {
  var ss = (opts && opts.stringify) || tryStringify
  var offset = 1
  if (typeof f === 'object' && f !== null) {
    var len = args.length + offset
    if (len === 1) return f
    var objects = new Array(len)
    objects[0] = ss(f)
    for (var index = 1; index < len; index++) {
      objects[index] = ss(args[index])
    }
    return objects.join(' ')
  }
  if (typeof f !== 'string') {
    return f
  }
  var argLen = args.length
  if (argLen === 0) return f
  var str = ''
  var a = 1 - offset
  var lastPos = -1
  var flen = (f && f.length) || 0
  for (var i = 0; i < flen;) {
    if (f.charCodeAt(i) === 37 && i + 1 < flen) {
      lastPos = lastPos > -1 ? lastPos : 0
      switch (f.charCodeAt(i + 1)) {
        case 100: // 'd'
        case 102: // 'f'
          if (a >= argLen)
            break
          if (args[a] == null)  break
          if (lastPos < i)
            str += f.slice(lastPos, i)
          str += Number(args[a])
          lastPos = i + 2
          i++
          break
        case 105: // 'i'
          if (a >= argLen)
            break
          if (args[a] == null)  break
          if (lastPos < i)
            str += f.slice(lastPos, i)
          str += Math.floor(Number(args[a]))
          lastPos = i + 2
          i++
          break
        case 79: // 'O'
        case 111: // 'o'
        case 106: // 'j'
          if (a >= argLen)
            break
          if (args[a] === undefined) break
          if (lastPos < i)
            str += f.slice(lastPos, i)
          var type = typeof args[a]
          if (type === 'string') {
            str += '\'' + args[a] + '\''
            lastPos = i + 2
            i++
            break
          }
          if (type === 'function') {
            str += args[a].name || '<anonymous>'
            lastPos = i + 2
            i++
            break
          }
          str += ss(args[a])
          lastPos = i + 2
          i++
          break
        case 115: // 's'
          if (a >= argLen)
            break
          if (lastPos < i)
            str += f.slice(lastPos, i)
          str += String(args[a])
          lastPos = i + 2
          i++
          break
        case 37: // '%'
          if (lastPos < i)
            str += f.slice(lastPos, i)
          str += '%'
          lastPos = i + 2
          i++
          a--
          break
      }
      ++a
    }
    ++i
  }
  if (lastPos === -1)
    return f
  else if (lastPos < flen) {
    str += f.slice(lastPos)
  }

  return str
}

},{}],122:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function safeJsonParse(value) {
    if (typeof value !== 'string') {
        throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    }
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return value;
    }
}
exports.safeJsonParse = safeJsonParse;
function safeJsonStringify(value) {
    return typeof value === 'string'
        ? value
        : JSON.stringify(value, (key, value) => typeof value === 'undefined' ? null : value);
}
exports.safeJsonStringify = safeJsonStringify;

},{}],123:[function(require,module,exports){
'use strict';

module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};

},{}],124:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__assign = void 0;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = __createBinding;
exports.__decorate = __decorate;
exports.__exportStar = __exportStar;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__importDefault = __importDefault;
exports.__importStar = __importStar;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__metadata = __metadata;
exports.__param = __param;
exports.__read = __read;
exports.__rest = __rest;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__values = __values;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__assign = __assign;
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}
function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}

},{}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function alloc(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
    return globalThis.Buffer.alloc(size);
  }
  return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}

exports.alloc = alloc;
exports.allocUnsafe = allocUnsafe;

},{}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function compare(a, b) {
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] < b[i]) {
      return -1;
    }
    if (a[i] > b[i]) {
      return 1;
    }
  }
  if (a.byteLength > b.byteLength) {
    return 1;
  }
  if (a.byteLength < b.byteLength) {
    return -1;
  }
  return 0;
}

exports.compare = compare;

},{}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var alloc = require('./alloc.js');

function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = alloc.allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

exports.concat = concat;

},{"./alloc.js":125}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function equals(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

exports.equals = equals;

},{}],129:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bases = require('./util/bases.js');

function fromString(string, encoding = 'utf8') {
  const base = bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string, 'utf8');
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}

exports.fromString = fromString;

},{"./util/bases.js":132}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var compare = require('./compare.js');
var concat = require('./concat.js');
var equals = require('./equals.js');
var fromString = require('./from-string.js');
var toString = require('./to-string.js');
var xor = require('./xor.js');



exports.compare = compare.compare;
exports.concat = concat.concat;
exports.equals = equals.equals;
exports.fromString = fromString.fromString;
exports.toString = toString.toString;
exports.xor = xor.xor;

},{"./compare.js":126,"./concat.js":127,"./equals.js":128,"./from-string.js":129,"./to-string.js":131,"./xor.js":133}],131:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bases = require('./util/bases.js');

function toString(array, encoding = 'utf8') {
  const base = bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
  }
  return base.encoder.encode(array).substring(1);
}

exports.toString = toString;

},{"./util/bases.js":132}],132:[function(require,module,exports){
'use strict';

var basics = require('multiformats/basics');
var alloc = require('../alloc.js');

function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: { decode }
  };
}
const string = createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', buf => {
  let string = 'a';
  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }
  return string;
}, str => {
  str = str.substring(1);
  const buf = alloc.allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  'utf-8': string,
  hex: basics.bases.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...basics.bases
};

module.exports = BASES;

},{"../alloc.js":125,"multiformats/basics":106}],133:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var alloc = require('./alloc.js');

function xor(a, b) {
  if (a.length !== b.length) {
    throw new Error('Inputs should have the same length');
  }
  const result = alloc.allocUnsafe(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] ^ b[i];
  }
  return result;
}

exports.xor = xor;

},{"./alloc.js":125}],134:[function(require,module,exports){
const SignClient = require("@walletconnect/sign-client");
const {Web3Modal} = require("@web3modal/standalone");

alert(SignClient)

window.SignClient = SignClient;
window.Web3Modal = Web3Modal;
},{"@walletconnect/sign-client":69,"@web3modal/standalone":88}],135:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],136:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":135,"buffer":136,"ieee754":138}],137:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}],138:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],139:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[134]);
