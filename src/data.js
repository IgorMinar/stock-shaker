import {stockExchange} from './stock-exchange';
import {retry} from "rxjs/operators";

export function dataFeedFor(tickers) {
  return stockExchange.getFeed(tickers).pipe(
      retry(5)
  );
}
