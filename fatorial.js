const fatorial = (num) => {
    if (num === 0) {
        return 1;
    }

    return num * fatorial (num - 1);
}

// exports.fatorial = fatorial;

module.exports = fatorial;

/*
module.exports = {
    fatorial,
    funcao: funcao2
}*/
