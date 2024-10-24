// function array(a){
//     let b=[];
//     for( const item of a){
//         b.push(item*item);
//     }
//      console.log(b.join(' ')); 
// }
function arraySquared(a) {
    return a.map(item => item * item).join(' ');
}

const input = [1, 3, 5, 3];
console.log(arraySquared(input)); // Kết quả: "1 9 25 9"
