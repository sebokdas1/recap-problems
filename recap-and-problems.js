// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

var myString = "sebok";
var myBoolean = true;
var myNumber = 12;



// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।

let myVariable = 14;
myVariable = 15;
const myNotchangeable = 30;

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

let firstNumber = 9;
let secondNumber = 7;
const sum = firstNumber + secondNumber;
const multification = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;
const minice = firstNumber - secondNumber;
console.log(sum);
console.log(multification);
console.log(division);
console.log(remainder);
console.log(minice);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

let firstNumber = 9;
let secondNumber = 7;
if (firstNumber > secondNumber) {
    console.log(true);
}
else if (firstNumber < secondNumber) {
    console.log(true);
}
else if (firstNumber == secondNumber) {
    console.log("equal");
}
else if (firstNumber != secondNumber) {
    console.log("equal");
}
else if (firstNumber <= secondNumber) {
    console.log("choto")
}
else if (firstNumber >= secondNumber) {
    console.log("first boro")
}

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

//5.1
let firstNumber = 9;
let secondNumber = 7;
if (firstNumber > secondNumber && (firstNumber - 2) == secondNumber) {
    console.log(true)
}
else {
    console.log(false)
}


//5.2
let firstNumber = 9;
let secondNumber = 7;
if (firstNumber < secondNumber || (firstNumber - 2) == secondNumber) {
    console.log(true)
}
else {
    console.log(false)
}

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো

const firstNumber = 12;
const secondNumber = 15;
if (firstNumber > secondNumber) {
    console.log("firstNumber is large number")
}
else {
    console.log("secondNumber is large number")
}

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।

let i = 7;
while (i <= 19) {
    i++;
    if (i % 2 != 0) {
        console.log(i);
    }

}



// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

//8.1
let myArr = [1, 5, 4, 9, 8, 10, 35, 15, 45, 40]
console.log(myArr.length)


//8.2
let myArr = [1, 5, 4, 9, 8, 10, 35, 15, 45, 40]
myArr[4] = 12;
console.log(myArr)


//8.3
let myArr = [1, 5, 4, 9, 8, 10, 35, 15, 45, 40]
myArr.push(12, 47)
console.log(myArr)


//8.4
let myArr = [1, 5, 4, 9, 8, 10, 35, 15, 45, 40]
myArr.pop();
console.log(myArr)

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

let myArr = [1, 5, 4, 9, 8, 10, 35, 15, 45, 40]
for (let hello of myArr) {
    console.log(hello);
}

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

let myArr = [54, 34, 38, 82, 94, 75, 65, 15, 101, 45]
for (let i = 0; i < myArr.length; i++) {
    let number = myArr[i];
    if (number < 80) {
        continue
    }
    console.log(number)
}


// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।

function numbers(num1, num2, num3) {
    let multification = num1 * num2 * num3
    return multification

}
const output = numbers(5, 8, 6)
console.log(output)

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

let phone = {
    model: "a2",
    name: "Redmi",
    price: 19000,
    storage: "8gb"
}
phone.storage = "16gb"
console.log(phone)

//problems

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

function feetToInch(feet) {
    let inch = 0;
    for (let i = 0; i < feet; i++) {
        let inchs = feet * 12;
        inch = inchs
    }
    return inch;
}
let result = feetToInch(2);
console.log(result);

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function centimeterToMeter(cm) {
    let meter = 0;
    for (let i = 0; i < cm; i++) {
        let meters = cm / 100;
        meter = meters
    }
    return meter;
}
let result = centimeterToMeter(30);
console.log(result);



// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

function paperRequirements(book1, book2, book3) {
    const firstBookPaper = book1 * 100;
    const secondBookPaper = book2 * 200;
    const thirdBookPaper = book3 * 300;
    let totalPaper = firstBookPaper + secondBookPaper + thirdBookPaper;
    return totalPaper;
}
const firstBookCopy = 5;
const secondBookCopy = 6;
const thirdBookCopy = 4;
const totalPaper = paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy);
console.log(totalPaper);


// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।


function bestFriend(friend) {
    let largeName = '';
    for (let i = 0; i < friend.length; i++) {
        if (friend[i].length > largeName.length) {
            largeName = friend[i];
        }
    }
    return largeName;
}
const friends = ['sumit', 'adi', 'debashis', 'prodip', 'azad', 'nishan', 'pritam']
const hello = bestFriend(friends);
console.log(hello);

// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

let positive = [];
function hello(number) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] >= 0) {
            positive.push(number[i])
        }
        else {
            break;
        }
    }
    return positive;
}
let numbers = [2, 4, 7, -5, 2, -5, 7, -8, 8]
const result = hello(numbers);
console.log(result);

