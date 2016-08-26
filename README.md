# Nomad Bank

This is a basic chrome extension that I made to help me understand how much money I have in my bank account based on the local currency.

Right now it can handle the following banks and currencies:

##### Banks
* ScotiaBank (Canada)
* Charles Schwab Bank (USA)

##### Currencies
* Canadian Dollars <> Euros
* Canadian Dollars <> Bulgarian Lev
* US Dollars <> Euros
* US Dollars <> Bulgarian Lev

### A few caveats

I built this over about an hour or so. Therefore you need to know a little coding to use this. However, if you know JSON and can navigate the Chrome Inspector, you know enough to use this extension.

Conversion rates are as of 26/08/2016. Therefore, this is not live pinging a currency site like XE.com.

So if you're using a volatile currency like the British Pound (ZING!) you may either want to use something else of fork this to ping another service. I may add this later, but for now I really didn't have enough time. 

### How to use this

If you're using one of the above listed banks, and your current local currency is listed above, you're basically good to go and you can skip to the intall steps.

(You'll likely want to fork this, at the very least, you need to download the source code)

Otherwise, open the `config.js` and find the portion for banks and add the bank details:

    "www1.scotiaonline.scotiabank.com": {
      original_currency: "cad",
      balance_element: ".balance .number"
    }
    
`Hash Key` everything after `https://` until the next `/`

`original_currency`: Original currency should be the lowercase form of **[ISO 427](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)**

`balance_element`: This needs to be the element where dollar ammounts are listed. This is looked up with jQuery, so any valid jQuery string will do. The Charles Schwab example is a little more advanced, so you can use that as a guide as well.

###Installation

Download/Fork & Download

* Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).

* Ensure that the Developer mode checkbox in the top right-hand corner is checked.

* Click Load unpacked extension… to pop up a file-selection dialog.

* Navigate to the directory in which your extension files live, and select it.


**[From the Chrome Extension Getting Started Guide](https://developer.chrome.com/extensions/getstarted)**

* Within the `config.js` be sure to change the `convertTo` code to the currency you want to convert to. I.E. If you're in Germany, set it to `EUR`


### Fork!

Please feel free to fork the repo and add the details for your bank. The more banks we have in here, the better it gets!

This was lightly thrown together to get something I needed, done. 

Though I will do my best to scan this for any icky things, this extension is strictly as-is, use at your own risk.