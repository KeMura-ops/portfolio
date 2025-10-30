export function GenerateCanvas(selector = "#main_visual") {
  const parent = document.querySelector(selector);
  return createCanvas(parent);
}

// 内部関数：canvas生成処理
function createCanvas(parent) {
  const canvas = document.createElement("canvas");
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  canvas.style.display = "block";
  parent.appendChild(canvas);
  return canvas;
}
