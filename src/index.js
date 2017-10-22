import {debounce} from 'rxjs/operators';
import {renderView} from './view';
import {perfMetrics, perfLog} from './perf';
import {dataFeedFor} from './data';


const appElement = document.querySelector('body');
const tickers = ['AMZZ', 'APPP', 'GOOO', 'NFLL', 'MSFF'];


// initial rendering
renderView({tickers, perfMetrics}, appElement);
perfLog.shellRendered();


dataFeedFor(tickers).subscribe(stockData => {
  // re-render view with data
  renderView({tickers, stockData, perfMetrics}, appElement);
});
perfLog.dataRendered();
