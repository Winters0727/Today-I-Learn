const initLoading = (e) => {
  const sitpercent = document.querySelector(
    "div#setinterval > div#sit-percent"
  );
  const sitprogress = document.querySelector(
    "div#setinterval > div#sit-loading > div#sit-progress"
  );

  const rafpercent = document.querySelector(
    "div#requestanimationframe > div#raf-percent"
  );
  const rafprogress = document.querySelector(
    "div#requestanimationframe > div#raf-loading > div#raf-progress"
  );

  sitprogress.style.width = "";
  rafprogress.style.width = "";

  let sitAnimation = null;

  const sitCallback = () => {
    let width = sitprogress.style.width;

    if (!width) {
      sitprogress.style.width = "0%";
      width = sitprogress.style.width;
    }

    const loadingPercent = parseInt(width.replace("%", ""), 10);

    if (loadingPercent <= 100) {
      const nextWidth = loadingPercent + Math.floor(100 / 60);
      const updatedWidth = `${nextWidth >= 100 ? 100 : nextWidth}%`;
      sitprogress.style.width = updatedWidth;
      sitpercent.textContent = updatedWidth;
    } else {
      clearInterval(sitAnimation);
    }
  };

  sitAnimation = setInterval(sitCallback, 1000 / 60);

  let rafAnimation = null;

  const rafCallback = () => {
    let width = rafprogress.style.width;

    if (!width) {
      rafprogress.style.width = "0%";
      width = rafprogress.style.width;
    }

    const loadingPercent = parseInt(width.replace("%", ""), 10);

    if (loadingPercent <= 100) {
      const nextWidth = loadingPercent + Math.floor(100 / 60);
      const updatedWidth = `${nextWidth >= 100 ? 100 : nextWidth}%`;
      rafprogress.style.width = updatedWidth;
      rafpercent.textContent = updatedWidth;
      rafAnimation = requestAnimationFrame(rafCallback);
    } else {
      cancelAnimationFrame(rafAnimation);
    }
  };

  rafCallback();
};

window.addEventListener("load", initLoading);

const executeBtn = document.querySelector("button#execute-btn");

executeBtn.addEventListener("click", initLoading);
