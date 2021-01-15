const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const feedback = document.getElementById("feedback")

button1.onclick = function () {
  feedback.textContent = "正解！僕も絵が書きたくなりました。"
}
button2.onclick = function () {
  feedback.textContent = "不正解。ジャズかっこいいよね。"
}
button3.onclick = function () {
  feedback.textContent = "不正解。読んだことないけど高校サッカーの漫画みたい。"
}



//オブジェクト自己紹介

const Kaine = {
  name: "かいね",
  age: 21,
  birthDay: "1999/04/02",
  birthPlace: "東京",
  hobbies: ["野球", "スケボー" ,"スノーボード" ,"漫画" ,"映画"],
}

console.log(Kaine.name)
console.log(Kaine.age)
console.log(Kaine.birthDay)
console.log(Kaine.birthPlace)
console.log(Kaine.hobbies)
console.log(Kaine.hobbies[0])