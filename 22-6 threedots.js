const ages = [12, 15, 16, 14];
const ages2 = [55, 20, 56, 87];
const ages3 = [25, 34, 16, 20];
const allAge = ages.concat(ages2).concat(ages3).concat(85);
const allAge2 = [...ages, ...ages2, ...ages3, 5];
console.log(allAge2); 
const business = 650; 
const minister = 450;
const sochib = 350;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);
const taka = [650, 258, 700];
const maximum2 = Math.max(...taka);
console.log(maximum2);