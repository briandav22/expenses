// const address = ['22 adams road', 'kittery', 'maine'];
const address = ['22 adams road', 'kittery', ]; 
// const [street, city, state] = address; without defaults


const [street, city, state='New York'] = address;


console.log(`you are in ${city}, ${state}`)