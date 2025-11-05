export function deposit(amount){
    return {type: "deposit", payload:amount}
}

export function withdrawal(amount){
    return {type: "withdrawal", payload:amount}
}

export function nameUpdate(fullName){
    return {type: "nameUpdate", payload:fullName}
}

export function mobileUpdate(mobile){
    return {type: "mobileUpdate", payload:mobile}
}

export function reset(){
    return {type: "reset"}
}

//action creators