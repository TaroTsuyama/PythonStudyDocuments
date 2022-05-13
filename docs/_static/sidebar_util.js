window.addEventListener("load", () => {
  const h2_tags = document.querySelectorAll("h2");
  const h3_tags = document.querySelectorAll("h3");

  const toc_h2 = document.querySelectorAll(".toctree-l3");
  const toc_h3 = document.querySelectorAll(".toctree-l4");

  const heading2Pos = () => [...h2_tags].map(element => Math.floor(element.getBoundingClientRect().top + window.scrollY))
  const heading3Pos = () => [...h3_tags].map(element => Math.floor(element.getBoundingClientRect().top + window.scrollY))

  const offset = 300;
  const h2_num = h2_tags.length;
  const h3_num = h3_tags.length;

  window.addEventListener('scroll', () => {
      const currentPos = window.scrollY
      for (let i = 0; i < h2_num; i++) {
        if (i < h2_num - 1 && currentPos + offset >= heading2Pos()[i] && currentPos + offset < heading2Pos()[i + 1]) {
          toc_h2[i].classList.add('current');
        } else if (i === h2_num - 1 && currentPos + offset >= heading2Pos()[i]) {
          toc_h2[i].classList.add('current');
        } else {
         toc_h2[i].classList.remove('current');
        }
      }
      for (let i = 0; i < h3_num; i++) {
        if (i < h3_num - 1 && currentPos + offset >= heading3Pos()[i] && currentPos + offset < heading3Pos()[i + 1]) {
          toc_h3[i].classList.add('current');
        } else if (i === h3_num - 1 && currentPos + offset >= heading3Pos()[i]) {
          toc_h3[i].classList.add('current');
        } else {
          toc_h3[i].classList.remove('current');
        }
      }
  });

});