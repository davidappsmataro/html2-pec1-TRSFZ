
console.log(`Hello ${name}`);
try {
    
   /*  if (process.env.NODE_ENV === 'development') {
        console.log('Happy developing!');
      } */
      //console.log(process.env.NODE_ENV);
      let {NODE_ENV, API_TOKEN} = process.env;
      console.log(NODE_ENV)
} catch (error) {
    console.log(error)
}