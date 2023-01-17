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

dradAndDrop.addEventListener("drop", function (e) {
  e.preventDefault();
  dradAndDrop.classList.remove("active");
  // console.log("drop");
  // console.log(e);
  const files = e.dataTransfer.files;
  // console.log(e.dataTransfer);
  console.log(files);
  for (let key in files) {
    console.log(files[key]);
    if (files[key].name && files[key].lastModified) {
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
});

const uploadFiles = () => {
  console.log("Files are downloaded");
};
