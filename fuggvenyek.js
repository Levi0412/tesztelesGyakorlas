export function fuggvenyem3(n) {
  let z = 0;
  while (n > 0) {
    let c = n % 10;
    z = z + c;
    n = Math.floor(n / 10);
  }
  return z;
}

export function fuggvenyem1(szam) {
  let i = 2;
  while (i <= Math.sqrt(szam) && szam % i !== 0) {
    i++;
  }
  // console.log(szam);
  // console.log(Math.sqrt(szam));
  // console.log(szam % i);
  // console.log(i > Math.sqrt(szam));
  return i > Math.sqrt(szam);
}

export function primTeszt() {
 let tesztEsetekLista = [
    {
      szam: 131,
      vart: true,
    },
    {
      szam: 2,
      vart: true,
    },
    {
      szam: 3,
      vart: true,
    },
    {
      szam: 6,
      vart: false,
    },
    {
      szam: 9,
      vart: true,
    },
  ]
  for (let index = 0; index < tesztEsetekLista.length; index++) {
    let szam = tesztEsetekLista[index].szam;
    let vart = tesztEsetekLista[index].vart;
    let kapott = fuggvenyem1(szam);
    console.log(vart === kapott, `${szam} ${vart} ${kapott}`);
  }
}


export function tesztEset2(){
    let tesztEsetLista2=[
        {
            szam:20,
            vart:2
        },
        {
            szam:300,
            vart:3
        },
        {
            szam:400,
            vart:4
        },
        {
            szam:21,
            vart:3
        },
        {
            szam:301,
            vart:4
        },
        {
            szam:321,
            vart:6
        },
        {
            szam:11111111,
            vart:8
        }
    ]
    for (let index = 0; index < tesztEsetLista2.length; index++) {
        let szam = tesztEsetLista2[index].szam;
        let vart = tesztEsetLista2[index].vart;
        let kapott = fuggvenyem3(szam);
        console.log(vart === kapott, `${szam} -> Várt: ${vart}, Kapott: ${kapott}`);
      }
}