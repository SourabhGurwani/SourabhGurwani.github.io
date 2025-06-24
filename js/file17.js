//closure..

function main(){
    let b=1;
    function sub(){
        return b++;
    }
    return sub;  // sub function is a closure and always have access of parent function

}

const f1=main()
console.log(f1())
console.log(f1())

