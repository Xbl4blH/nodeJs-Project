const webdriver = require('selenium-webdriver');
const cheerio = require('cheerio');
const { data } = require('cheerio/lib/api/attributes');
const ImageParser = require('image-parser')
var List = require('collections');

var quickgroupid = 2

async function searchTextOnAutoLink() {

    const driver = new webdriver.Builder().forBrowser('chrome').build();

    await driver.get('http://localhost:3000/home')

    driver.manage().window().maximize()

    const table = await driver.findElement(webdriver.By.css('button[class="append"]'))

    n = 4

    for(i=0; i < n; i++){
        await table.click()
    }

    const container = await driver.findElement(webdriver.By.css('div[class="box"] > div[class="container"]'))
    const column = await driver.findElement(webdriver.By.css('div[class="box"] > div[class="container"] > div[class="column"]'))

    var arr = []
    var array = []

    array.push({ name: container })

    for(i=0; i < container.length; i++){
        var str = await container[i].getAttribute('h3')
        arr.push({ name: str })
    }

    console.log(array)

    await sleep(1000)

    //driver.close()
    //driver.quit()
}

function sleep(ms) {
    return (
        new Promise(function (resolve, reject) {
            setTimeout(function () { resolve(); }, ms);
        })
    );
}

searchTextOnAutoLink()