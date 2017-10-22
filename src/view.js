export function renderView(state, element) {
  element.innerHTML = renderHeader() + renderMain(state.stockData || state.tickers) + renderFooter(state);
}


function renderHeader() {
  return `<header>
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
            <h1>Stock Shaker</h1>
          </header>`;
}


function renderMain(stockData) {
  return `<main>
            ${ stockData.map(stock => renderTicker(stock)).join('') }
          </main>`;
}


function renderFooter({stockData, perfMetrics}) {
  if (stockData) {
    return `<footer>
             html: ${perfMetrics.staticHtmlRenderLatency || '???'} ms |
             shell: ${perfMetrics.shellRenderLatency || '???'} ms |
             data: ${perfMetrics.dataRenderLatency || '???'} ms<br>
             <a href="./wba-report.html">wba</a> |
             <a href="./sme-report.html">sme</a> |
             <a href="./patch.txt">patch</a> |
             <a href="https://github.com/IgorMinar/stock-shaker">github</a>
            </footer>`;
  } else {
    return `<footer>Loading data...</footer>`
  }
}


function renderTicker(ticker) {
  const dataMissing = typeof ticker === 'string';
  const {symbol, price} = dataMissing ? {symbol: ticker, price: '......'} : ticker;
  return `<div><span>${symbol}:</span> <span>${price}</span></div>`
}
