export default function NotFoundPage({ $parent }) {
  const $page = document.createElement("div");

  $parent.appendChild($page);

  this.render = () => {
    $page.innerHTML = "<h1>404 Not Found</h1>";
  };

  this.render();
}
