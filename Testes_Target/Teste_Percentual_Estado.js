const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalDoFaturamento = Object.values(faturamentoPorEstado).reduce((acc, val)=> acc + val, 0);

for(const estado in faturamentoPorEstado){

    const percentual = ((faturamentoPorEstado[estado] / totalDoFaturamento) * 100).toFixed(2);
    console.log(`Percentual de ${estado}: ${percentual}%`);
}

