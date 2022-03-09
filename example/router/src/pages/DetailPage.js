import router from "../router.js";

export default function DetailPage({ $parent }) {
  const $page = document.createElement("div");

  $parent.appendChild($page);

  this.render = () => {
    $page.innerHTML = `
    <h1>상세 페이지입니다.</h1>
    <button id="to-main-btn">메인 페이지로</button>
    `;

    document
      .querySelector("button#to-main-btn")
      .addEventListener("click", (e) => {
        router.go("/");
      });
  };

  this.render();
}
