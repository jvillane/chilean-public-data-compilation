import {launch} from "puppeteer";
import {readFileSync} from 'fs';
import PdfParse from 'pdf-parse';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function bornCertificate(rut: string, email: string) {
  const browser = await launch({
    headless: false,
    timeout: 30000,
    args: ['--start-fullscreen'],
    dumpio: true,
    slowMo: 100
  })
  const page = (await browser.pages())[0];
  await page.setViewport({ width: 1366, height: 768});

  await page.goto('https://www.registrocivil.cl/OficinaInternet/web/carro.srcei', {waitUntil: "networkidle0"});

  const bornCertificatesSelector = '#certContainer > div:nth-child(2)';
  await page.waitForSelector(bornCertificatesSelector);
  await page.hover(bornCertificatesSelector);
  await page.click(bornCertificatesSelector);

  const bornCertificateAllSelector = '#certContainer > div:nth-child(2) > div:nth-child(2) tr:nth-child(2) td:nth-child(1) input';
  await page.waitForSelector(bornCertificateAllSelector);
  await page.hover(bornCertificateAllSelector);
  await page.click(bornCertificateAllSelector);

  const rutInputSelector = '#certContainer > div:nth-child(2) > div:nth-child(2) tr:nth-child(3) input';
  await page.hover(rutInputSelector);
  await page.click(rutInputSelector);
  await page.type(rutInputSelector, rut, {delay: 10});

  const rutButtonSelector = '#certContainer > div:nth-child(2) > div:nth-child(2) tr:nth-child(3) button';
  await page.hover(rutButtonSelector);
  await page.click(rutButtonSelector);

  const emailInputSelector1 = '#carro_mailSolicitante tbody > tr:nth-child(1)';
  await page.hover(emailInputSelector1);
  await page.click(emailInputSelector1);
  await page.type(emailInputSelector1, email, {delay: 10});

  const emailInputSelector2 = '#carro_mailSolicitante input:nth-child(2)';
  await page.hover(emailInputSelector2);
  await page.click(emailInputSelector2);
  await page.type(emailInputSelector2, email, {delay: 10});
}

export async function readBornCertificate(path: string) {
  let dataBuffer = readFileSync(path);

  PdfParse(dataBuffer).then(function(data) {

    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata);
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log(data.text);

  });
}

//bornCertificate('157260685', 'jvillane+opendata@gmail.com')
readBornCertificate('/Users/jvillane/Downloads/nabe_nacimiento.pdf');
