import http from "k6/http";
import { Counter, Rate } from "k6/metrics";
import { Gauge } from "k6/metrics";
import { Trend } from "k6/metrics";

export const options = {
    vus: 1,
    duration: '3s'
}

const chamadas = new Counter('quantidade de chamadas')
const myGauge = new Gauge('Tempo bloqueado')
const myRate = new Rate('Taxa req 200')
const myTrend = new Trend('Taxa de espera')

export default function () {
    const req = http.get('https://k6.io/');
    //Metricas
    chamadas.add(1) //tipo contador
    myGauge.add(req.timings.blocked)//tipo medidor
    myRate.add(req.status === 200)//tipo taxa
    myTrend.add(req.timings.waiting)//tipo tendencia
}

