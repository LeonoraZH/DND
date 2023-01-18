let dradAndDrop = document.querySelector(".drag-and-drop");
console.log(dradAndDrop);

const filesList = [];
const arrayOfObjects = [];

const uploadBtn = document.getElementById("upload-btn");
const list = document.querySelector("ul");
let li;

dradAndDrop.addEventListener("dragenter", function (e) {
  e.preventDefault();
  dradAndDrop.classList.add("active");
  console.log("dragenter");
});

dradAndDrop.addEventListener("dragleave", function (e) {
  e.preventDefault();
  dradAndDrop.classList.remove("active");
  console.log("dragleave");
});

dradAndDrop.addEventListener("dragover", function (e) {
  e.preventDefault();
});

let filesSize = 0;
dradAndDrop.addEventListener("drop", function (e) {
  e.preventDefault();
  dradAndDrop.classList.remove("active");
  const remove = document.createElement("a");
  const files = e.dataTransfer.files;
  console.log(files);
  for (let key in files) {
    console.log(files[key]);
    console.log(files[key].size);
    if (files[key].name && files[key].lastModified) {
      filesSize += files[key].size;
      console.log(filesSize);
      filesList.push(files[key].name);
      li = document.createElement("li");
      li.className = "files-list";
      li.innerHTML = `${files[key].name}`;
      list.append(li);
    }
  }
  console.log(filesList);

  if (filesList.length > 0) {
    uploadBtn.removeAttribute("disabled");
  }

  let listElement = document.querySelectorAll(".files-list");
  console.log(listElement);

  function removeElement() {
    console.log("it works");
    console.log(this);
    this.remove();
  }
  listElement.forEach(function (el) {
    el.onclick = removeElement;
  });
});

const uploadFiles = () => {
  console.log("Files are downloaded");
};
