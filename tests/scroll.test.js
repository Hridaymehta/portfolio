import { JSDOM } from 'jsdom';
import { handleScroll } from '../script.js';

describe('handleScroll', () => {
  test('adds visible class when element is in view', () => {
    const dom = new JSDOM(`<!DOCTYPE html><div class="animate__fade-in" style="height:100px"></div>`,{url:"http://localhost"});
    const { window } = dom;
    global.document = window.document;
    global.window = window;

    const elem = window.document.querySelector('.animate__fade-in');

    // Stub getBoundingClientRect to simulate being near top
    elem.getBoundingClientRect = () => ({ top: 50 });
    window.innerHeight = 200;

    handleScroll();

    expect(elem.classList.contains('visible')).toBe(true);
  });
});
