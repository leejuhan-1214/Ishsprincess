/** Keep the presented order stable for one saved scene without changing its answer IDs. */
export function shuffleChoices<T>(values:readonly T[],key:string):{value:T;index:number}[]{
 const ordered=values.map((value,index)=>({value,index}));
 let seed=2166136261;
 for(let i=0;i<key.length;i++)seed=Math.imul(seed^key.charCodeAt(i),16777619);
 seed=Math.imul(seed^(seed>>>16),0x85ebca6b);
 seed=Math.imul(seed^(seed>>>13),0xc2b2ae35);
 seed=(seed^(seed>>>16))>>>0;
 // Mulberry32 produces reproducible unsigned words; rejection avoids modulo bias.
 const word=()=>{let n=seed=(seed+0x6d2b79f5)>>>0;n=Math.imul(n^(n>>>15),n|1);n^=n+Math.imul(n^(n>>>7),n|61);return (n^(n>>>14))>>>0;};
 const pick=(count:number)=>{const limit=Math.floor(0x100000000/count)*count;let n=word();while(n>=limit)n=word();return n%count;};
 for(let i=ordered.length-1;i>0;i--){const j=pick(i+1);[ordered[i],ordered[j]]=[ordered[j],ordered[i]];}
 return ordered;
}
