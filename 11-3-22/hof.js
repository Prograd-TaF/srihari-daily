const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  //filter
  const catg=companies.filter(function(categories){
      if(categories.category=="Finance"){
          return 1;
      }

  })
  const catgo=companies.filter(categories=>{if(categories.category=='Finance'){return 1}});
  const mapping =companies.map(function(mapss){
    return `[${mapss.name}:${mapss.start}]`
  
})
const maps=companies.map(mapss=>{return`[${mapss.name}:${mapss.start}]`});
const sorting =ages.sort(function(sorts){
  return sorts.ages;

})
const sorts=ages.sort(sorted=>{return sorted.ages});
const reducing =ages.reduce(function(a,b){
  return a-b;

})
const reduces=ages.reduce((a,b)=>{return a-b});

  console.log(catg)
  console.log(mapping)
  console.log(sorting)
  console.log(reducing)
  console.log(catgo)
  console.log(maps)
  console.log(sorts)
  console.log(reduces)