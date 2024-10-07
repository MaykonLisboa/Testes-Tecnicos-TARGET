const faturamentoData = require('./faturamento.json');

const faturamentoFiltrado = faturamentoData.faturamentoDiario.filter(valor => valor > 0);

const menorFaturamento = Math.min(...faturamentoFiltrado);
const maiorFaturamento = Math.max(...faturamentoFiltrado);

const mediaMensal = faturamentoFiltrado.reduce((acc, val) => acc + val, 0) / faturamentoFiltrado.length;

const diaAcimaDaMedia = faturamentoFiltrado.filter(valor => valor > mediaMensal).length;


console.log("Menor dia de faturamento: "+menorFaturamento);
console.log("Maior dia de faturamento: "+maiorFaturamento);
console.log("Número de dias com faturamento acima da média: "+diaAcimaDaMedia);