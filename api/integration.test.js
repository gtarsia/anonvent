import test from 'ava'
import puppeteer from 'puppeteer'

const headless = false
const devtools = false

async function getPage() {
  const browser = await puppeteer.launch({ headless, devtools })
  const [page] = await browser.pages();
  await page.goto('http://localhost:3030');
  return page
}

function reload(page) {
  return page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] })
}

test(' should work correctly', async (t) => {
  const [venterPage, listenerPage] = await Promise.all([
    getPage(),
    getPage(),
  ])
  const pickVenterSelector = '#pick-venter-button'
  const pickListenerSelector = '#pick-listener-button'
  await Promise.all([
    venterPage.waitForSelector(pickVenterSelector),
    listenerPage.waitForSelector(pickListenerSelector),
  ])
  await Promise.all([
    venterPage.click(pickVenterSelector),
    listenerPage.click(pickListenerSelector),
  ])
  const joinQueueSelector = '#join-queue-button'
  await Promise.all([
    venterPage.click(joinQueueSelector),
    listenerPage.click(joinQueueSelector),
  ])
  await Promise.all([
    reload(venterPage),
    reload(listenerPage),
  ])
  await Promise.all([
    venterPage.waitForSelector('#message-box'),
    listenerPage.waitForSelector('#message-box'),
  ])
  const greet = 'hey yo, whatsup'
  const reply = 'nothing much man'
  await venterPage.type('#message-box', greet)
  await venterPage.type('#message-box', String.fromCharCode(13))
  await venterPage.waitForTimeout(200)
  await listenerPage.type('#message-box', reply)
  await listenerPage.type('#message-box', String.fromCharCode(13))
  await listenerPage.waitForTimeout(200)
  await Promise.all([
    reload(venterPage),
    reload(listenerPage),
  ])

  const venterPageMessages = await venterPage.evaluate(() =>
    Array.from(document.querySelectorAll('.message-text'), element => element.textContent));
  const listenerPageMessages = await listenerPage.evaluate(() =>
    Array.from(document.querySelectorAll('.message-text'), element => element.textContent));
  const messages = [greet, reply]
  t.deepEqual(venterPageMessages, messages)
  t.deepEqual(listenerPageMessages, messages)
})
