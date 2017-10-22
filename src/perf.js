export const perfMetrics = {
  staticHtmlRenderLatency: Math.round(staticRenderTimestamp),
  shellRenderLatency: '',
  fullRenderLatency: ''
};


export const perfLog = {
  shellRendered() {
    perfMetrics.shellRenderLatency = Math.round(performance.now());
    console.timeEnd('js.render-shell');
    console.time('js.render-data');
  },
  dataRendered() {
    perfMetrics.dataRenderLatency = Math.round(performance.now());
    console.timeEnd('js.render-data');
  }
};
