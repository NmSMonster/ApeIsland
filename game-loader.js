const files=['game.part1.txt','game.part2.txt','game.part3.txt','game.part4.txt','game.part5.txt'];
const sources=await Promise.all(files.map(async f=>{const r=await fetch(f,{cache:'no-cache'});if(!r.ok)throw new Error('Nie udało się pobrać '+f);return r.text()}));
const url=URL.createObjectURL(new Blob([sources.join('')],{type:'text/javascript'}));
try{await import(url)}finally{URL.revokeObjectURL(url)}
