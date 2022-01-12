const viewer = document.querySelector("div#result-viewer");

const catcher = document.querySelector("div#event-catcher");

catcher.addEventListener("click", (event) => {
  viewer.innerHTML = `
    <div>이벤트 타겟 : ${event.target}</div>
    <div>이벤트 캐쳐 : ${event.currentTarget}</div>
    <div>이벤트 발생 및 타겟 동일 여부 : ${catcher === event.target}</div>
    <div>이벤트 발생 및 캐처 동일 여부 : ${
      catcher === event.currentTarget
    }</div>
    `;
});

const parent1 = document.querySelector("div#event-parent-one");
const parent2 = document.querySelector("div#event-parent-two");
const parent3 = document.querySelector("div#event-parent-three");

const parents = [parent1, parent2, parent3];

parents.forEach((parent) =>
  parent.addEventListener("click", (event) => {
    event.currentTarget.children[0].innerText = "이벤트 받음!";
  })
);

const initBtn = document.querySelector("button#init-btn");

initBtn.addEventListener("click", (event) => {
  parents.forEach(
    (parent) => (parent.children[0].innerText = "이벤트 안받음!")
  );
});
