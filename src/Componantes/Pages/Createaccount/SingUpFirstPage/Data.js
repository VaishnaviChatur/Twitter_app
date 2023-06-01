export const Days = [];
export const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for(let i=1; i<=31; i++){
    Days.push(i);
}

const Year=[];

for(let i=2023; i>=1903; i--){
    Year.push(i);
}

export {Year}