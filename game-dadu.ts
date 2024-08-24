mainDadu(3, 4);

/**
 * jp: jumlah pemain
 * jdsp: jumlah dadu setiap pemain
 */
function mainDadu(jp: number, jdsp: number) {
  // sp: skor pemain's
  const sp = new Array(jp).fill(0);

  // jdp: jumlah dadu pemain's
  const jdp = new Array(jp).fill(jdsp);

  const lemparDadu = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const evaluasiHasilDadu = (dadu: number, pemainIndex: number) => {
    if (dadu === 1) {
      jdp[pemainIndex]--;

      let nextIndex = (pemainIndex + 1) % jp;
      while (jdp[nextIndex] === 0) {
        nextIndex = (nextIndex + 1) % jp;
      }

      jdp[nextIndex]++;

      console.log();
      console.log(
        `(Mendapat dadu angka 1. Jumlah dadu pemain dikurangi 1 dan diberi ke pemain ${
          nextIndex + 1
        }.)`
      );
    }

    if (dadu === 6) {
      jdp[pemainIndex]--;
      sp[pemainIndex] += 1;

      console.log();
      console.log(
        `(Mendapat dadu angka 6. Jumlah dadu pemain dikurangi 1 dan skor bertambah 1.)`
      );
    }
  };

  const mulaiGiliran = () => {
    for (let i = 0; i < jp; i++) {
      console.log(`PEMAIN ${i + 1}:`);
      for (let j = 0; j < jdp[i]; j++) {
        const hasilDadu = lemparDadu();
        process.stdout.write(`${hasilDadu}, `);

        evaluasiHasilDadu(hasilDadu, i);
      }
      console.log();
      console.log();
    }

    console.log(`Skor saat ini:`);
    sp.map((s, i) => console.log(`Pemain ${i + 1} mendapat ${s} skor.`));
  };

  for (let giliran = 0; jdp.filter((d) => d === 0).length < jp - 1; giliran++) {
    console.log();
    console.log(`=== GILIRAN ${giliran + 1} ===`);
    console.log();
    mulaiGiliran();
  }
}
