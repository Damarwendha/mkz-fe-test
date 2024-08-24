createTriangle(-2);

function createTriangle(x: number) {
  if (x <= 0 || x > 100) {
    return console.log("X must be between 1 and 100");
  }

  for (let i = 1; i <= x; i++) {
    let spasi = "";
    let hash = "";

    for (let j = 0; j < x - i; j++) {
      spasi += " ";
    }

    for (let k = 0; k < i; k++) {
      hash += "#";
    }

    console.log(spasi + hash);
  }
}
