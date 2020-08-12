
//P1: cấp phát bộ nhớ
//A - alloc
const buf = Buffer.alloc(5);
console.log(buf);

const buf = Buffer.alloc(5, 'a');
console.log(buf);

//B - alloc Unsafe
const buf = Buffer.allocUnsafe(10);
console.log(buf);

//P2:  Các lưu trữ trong buffer
//A - sử dụng values
const buf = Buffer.from('Hello');
for (const value of buf.values()) {
  console.log(value);
}
//B - sử dụng entries
for (const pair of buf.entries()) {
  console.log(pair);
}

//P2: cơ chế endcode - decodes buffer
//A- encode
const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.log(buf);

//B- decode
const buf1 = Buffer.allocUnsafe(26);
for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}
for (const value of buf1.values()) {
  console.log(value);
}
console.log(buf1.toString('utf8'));


//P4: writer kiểu số từ -128 tới +128
const buf = Buffer.allocUnsafe(2);
buf.writeInt8(2, 0);
buf.writeInt8(-10, 1);
console.log(buf);

//P5: Số lớn
const buf = Buffer.allocUnsafe(8);
buf.writeBigInt64BE(0x72n, 0);
console.log(buf)
for (const pair of buf.entries()) {
  console.log(pair);
}

//P6: Đọc kiểu số
const buf = Buffer.allocUnsafe(8);
buf.writeBigInt64BE(0x72n, 0);
console.log(buf)
for (const pair of buf.entries()) {
  console.log(pair);
}
console.log(buf.readBigInt64BE().toString());


//P6: sử dụng copy, writer
var frosty = Buffer.alloc(24)
var snowman = Buffer.from("☃", "utf-8")
frosty.write("Happy birthday! ", "utf-8")
snowman.copy(frosty, 16)
frosty.toString("utf-8", 0, 19)
console.log(frosty.toString())

var puddle = frosty.slice(16, 19)
puddle.toString()
puddle.write("___")
frosty.toString("utf-8", 0, 19)
console.log(frosty.toString())
