"use strict";

window.addEventListener("load", getQueueSize);

const dataArray = [];
let newDataArray = [];

function getQueueSize() {
  const queueSize = getNumberOfCustomers();

  dataArray.unshift(queueSize);

  console.log(dataArray.slice(0, 40));

  newDataArray = dataArray.slice(0, 40);

  addHeight();

  setTimeout(getQueueSize, 200);
}

function addHeight() {
  for (let i = 0; i <= 39; i++) {
    document.querySelector(`.bar${i + 1}`).style.height = `${newDataArray[i]}vh`;
    document.querySelector(`.bar${i + 1}`).style.backgroundColor = `rgb(${newDataArray[i] + 120}, ${210 - newDataArray[i] * 5}, 39)`;
  }
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}
