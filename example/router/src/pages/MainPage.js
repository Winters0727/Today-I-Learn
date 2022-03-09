import router from "../router.js";

export default function MainPage({ $parent }) {
  const $page = document.createElement("div");

  $parent.appendChild($page);

  this.render = () => {
    $page.innerHTML = `
    <h1>메인 페이지입니다.</h1>
    <button id="to-detail-btn">상세 페이지로</button>
    `;

    document
      .querySelector("button#to-detail-btn")
      .addEventListener("click", (e) => {
        router.go("/detail");
      });
  };

  this.render();
}
