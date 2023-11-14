 
import crypto from 'crypto';

export function generateUUID() {
  const buf = crypto.randomBytes(16);
  buf[6] = (buf[6] & 0x0f) | 0x40; // Version 4
  buf[8] = (buf[8] & 0x3f) | 0x80; // Variant 1
  return [
    buf.toString('hex', 0, 4),
    buf.toString('hex', 4, 6),
    buf.toString('hex', 6, 8),
    buf.toString('hex', 8, 10),
    buf.toString('hex', 10, 16)
  ].join('-');
}
