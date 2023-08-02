let n=8;
let v='a';
let r=(n>0)? 'Es positivo ':'Es negativo ';

console.log(r)

let m= (v==='a'|| v==='A')? `${v} es una vocal`
:(v==='e'|| v==='E')?`${v} es una vocal`
:(v==='i'|| v==='I')?`${v} es una vocal`
:(v==='o'|| v==='O')?`${v} es una vocal`
:(v==='u'|| v==='U')?`${v} es una vocal`
:'No es vocal ';

console.log(m)