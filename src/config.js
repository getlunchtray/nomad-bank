var convertTo = "eur";

var config = {
  "client.schwab.com": {
    original_currency: "usd",
    balance_element: "table#tblCharlesSchwabBank tbody>tr>td:nth-child(3)>span"
  },
  "www1.scotiaonline.scotiabank.com": {
    original_currency: "cad",
    balance_element: ".balance .number"
  }
}

var conversions = {
  "eur>usd": 1.13,
  "usd>eur": 0.89,
  "cad>eur": 0.69,
  "eur>cad": 1.46,
  "bgn>usd": 0.58,
  "usd>bgn": 1.73,
  "cad>bgn": 1.35,
  "bgn>cad": 0.74
}
