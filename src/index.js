import {renderView} from './view';
import {perfMetrics, perfLog} from './perf';


const appElement = document.querySelector('body');
const tickers = ['AMZZ', 'APPP', 'GOOO', 'NFLL', 'MSFF'];


// initial rendering
renderView({tickers, perfMetrics}, appElement);
perfLog.shellRendered();


System.import('./data').then(({dataFeedFor}) => {
  dataFeedFor(tickers).subscribe(stockData => {
    // re-render view with data
    renderView({tickers, stockData, perfMetrics}, appElement);
  });
  perfLog.dataRendered();
});
