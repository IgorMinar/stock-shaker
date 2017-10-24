import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


export const stockExchange = {
  getFeed(tickers) {
    return Observable.interval(500)
        .startWith(0)
        .map(_ => [
            {symbol: 'AMZZ', price: values.AMZZ = getNewVal(values.AMZZ)},
            {symbol: 'APPP', price: values.APPP = getNewVal(values.APPP)},
            {symbol: 'GOOO', price: values.GOOO = getNewVal(values.GOOO)},
            {symbol: 'NFLL', price: values.NFLL = getNewVal(values.NFLL)},
            {symbol: 'MSFF', price: values.MSFF = getNewVal(values.MSFF)}
        ]);
  }
};

const values = {AMZZ: 400, APPP: 500, GOOO: 550, NFLL: 600, MSFF: 300};

function randomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getNewVal(oldVal) {
  return Math.round((oldVal * randomNum(-20, 20) / 10000 + oldVal)*100)/100;
}
