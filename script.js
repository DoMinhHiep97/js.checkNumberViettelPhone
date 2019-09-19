function checkNumber(arr) {
     let regExp=/^03[2-9][0-9]{7}$/;
    //let result=regExp.test(arr);
    for(let i=0;i<arr.length;i++) {
        let result=regExp.test(arr[i]);
        console.log(arr[i] +"-"+ result);
        // for(let i=0;i<arr.length-1;i++){
        //       return console.log(arr[i]+result);
        // }
    }
}
let arr1=["0323323233","0362313123","13434314141","8575465324488"];
console.log(arr1);
checkNumber(arr1);
