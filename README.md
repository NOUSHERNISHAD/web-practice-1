

 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1.  getElementById : একটি নির্দিষ্ট  id অনুযায়ী একটিমাত্র element রিটার্ন করে।
2.  getElementsByClassName : নির্দিষ্ট class-এর সব element রিটার্ন করে এবং এটি একটি  live HTMLCollection দেয়।
3.  querySelector : CSS selector ব্যবহার করে প্রথম ম্যাচ হওয়া element রিটার্ন করে।
4.  querySelectorAll : CSS selector ব্যবহার করে সব element রিটার্ন করে এবং এটি একটি static NodeList দেয়।



 2. How do you create and insert a new element into the DOM?

নতুন element তৈরির জন্য document.createElement() ব্যবহার করা হয়। Set Content/Attributes তৈরি করার জন্য element-এ textContent, innerHTML, className, অথবা setAttribute() ব্যবহার করে কনটেন্ট, class, বা attribute যোগ করা যায়। তারপর এর কনটেন্ট বা অ্যাট্রিবিউট সেট করে  .appendChild(),  .prepend() ,  .before(),  .after() ইত্যাদি মেথড ব্যবহার করে DOM-এ যোগ করা হয়।



 3. What is Event Bubbling and how does it work?

Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো ইভেন্ট প্রথমে টার্গেট element-এ কাজ করে এবং তারপর ধাপে ধাপে তার parent → grandparent → document পর্যন্ত উপরে উপরে ছড়িয়ে যায়।



 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো parent element-এ একটি ইভেন্ট লিসেনার বসিয়ে তার child element-গুলোর ইভেন্ট হ্যান্ডল করা। এটি useful কারণ—

3.  কম মেমোরি খরচ হয় (একটা লিসেনারেই কাজ হয়)।
2.  ডাইনামিকভাবে যোগ হওয়া element-এর জন্যও ইভেন্ট কাজ করে।
1.  কোড ছোট ও সহজ থাকে।



 5. What is the difference between preventDefault() and stopPropagation() methods?

1.  preventDefault() : ব্রাউজারের ডিফল্ট কাজ বন্ধ করে (যেমন ফর্ম সাবমিট বা লিঙ্ক ন্যাভিগেশন আটকানো)।
2.  stopPropagation() : ইভেন্টকে parent element-এ বুবল হওয়া থেকে আটকায়।
