const add = (a, b) => a+b;
const sub = (a, b) => a-b;
const mul = (a, b) => a*b;
const div = (a, b) => {
    if(b===0 || b=== "0") return 'ERROR'
    return a/b;
}

const operate = (a, b, c) => {
    a = parseFloat(a)
    b = parseFloat(b)
    if(c==='+') return add(a, b)
    if(c==='-') return sub(a, b)
    if(c==='*') return mul(a, b)
    if(c==='/') return div(a, b)
}