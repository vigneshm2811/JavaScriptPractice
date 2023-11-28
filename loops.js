let l =0;
  while(l<=10){
    console.log(l);
    l++
  }
let ss= 10
  do{
    console.log(l);
  }
  while(ss==0)
console.time("for loop")
  for(let i=0; i<=500;i++){
    console.log("this is for loop",i)
  }
  console.timeEnd("for loop")
console.log("---------");
//break statement
  for(let i=0; i<=5;i++){
    if(i==3){
      break;
    }
    console.log("this is break",i)
  }

  console.log("---------");
// Continue statement
  for(let i=0; i<=15;i++){
    if(i<=13 && i>=9){
      continue;
    }
    console.log("this is continue",i)
  }