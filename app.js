"use strict";

const submit = document.querySelector("button");
const input = document.querySelector("input");
const message = document.querySelector(".message");
const form = document.querySelector(".form");
const invalid = document.querySelector(".invalid");
const retry = document.querySelector(".retry");

submit.addEventListener("click", function () {
  const name = input.value.toLowerCase();
  if (name === "") {
    alert("Please enter the name of my wife!");
  } else {
    form.classList.add("hidden");
    if (name === "liezel silmaro autida") {
      message.classList.remove("hidden");
    } else {
      invalid.classList.remove("hidden");
    }
  }
});

retry.addEventListener("click", function () {
  form.classList.remove("hidden");
  message.classList.add("hidden");
  invalid.classList.add("hidden");
  input.value = "";
});
