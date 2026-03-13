// JSON Audit on a Single Report
function auditReport(reportJSON) {

  const report = JSON.parse(reportJSON);

  let okCount = 0;
  let failCount = 0;

  for (let module in report.modules) {

    if (report.modules[module] === "OK") {
      okCount++;
    }

    if (report.modules[module] === "FAIL") {
      failCount++;
      break;
    }
  }

  const summary = {
    okCount: okCount,
    failCount: failCount
  };

  const summaryJSON = JSON.stringify(summary);

  return {
    summary: summary,
    summaryJSON: summaryJSON
  };
}