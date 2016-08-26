var convertTo = "eur";

var config = {
  "client.schwab.com": {
    original_currency: "usd",
    balance_element: "table#tblCharlesSchwabBank tbody>tr>td:nth-child(3)>span"
  },
  "www1.scotiaonline.scotiabank.com": {
    original_currency: "cad",
    balance_element: ".balance .number"
  },
  "www.securebanking.barclaysus.com": {
    original_currency: "usd",
    balance_element: ".currentBalanceChildDiv h1, .additionalDetailsDiv li:nth-child(2) span:nth-last-child(1) , .additionalDetailsDiv li:nth-child(3) span:nth-last-child(1)"
  }
}

var conversions = {
  "eur>usd": 1.13,
  "usd>eur": 0.89,
  "usd>cad": 1.29,
  "cad>usd": 0.78,
  "cad>eur": 0.69,
  "eur>cad": 1.46,
  "bgn>usd": 0.58,
  "usd>bgn": 1.73,
  "cad>bgn": 1.35,
  "bgn>cad": 0.74,
  "bgn>eur": 0.51,
  "eur>bgn": 1.96
}
