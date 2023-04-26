// 1.inicialização
import http from 'k6/http';

// 2.configuração
export const options = {
    vus: 1,
    duration: '10s'
}
// 3.execução
export default function () {
    console.log('Testando o K6')
    sleep(1);
}
http.get()
// 4.desmontagem
export function teardown(data) {
    console.log(data)
}