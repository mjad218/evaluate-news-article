import {checkForURL} from './checkForURL';

test('is this a valid URL', () => {
    expect(checkForURL("https://developers.google.com/search/docs/beginner/seo-starter-guide")).toBe(true);
    expect(checkForURL("https://")).toBe(false);
    expect(checkForURL("https://wwww")).toBe(false);
});
