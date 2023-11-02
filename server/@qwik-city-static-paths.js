const staticPaths = new Set(["/BigBlueTerm437NerdFont-Regular.ttf","/IMG_0324.jpg","/arst.jpg","/favicon.svg","/flowers-berries.jpg","/flowers-with-sun.jpg","/flowers.jpg","/growing.jpg","/heavy-psych.jpg","/ibm.jpg","/icamera.jpg","/manifest.json","/nightlights.jpg","/q-manifest.json","/robots.txt","/service-worker.js","/smIMG_0324.jpg","/smarst.jpg","/smflowers-berries.jpg","/smflowers-with-sun.jpg","/smflowers.jpg","/smgrowing.jpg","/smheavy-psych.jpg","/smibm.jpg","/smicamera.jpg","/smnightlights.jpg","/smtrees.jpg","/smwinter-chicago.jpg","/smwinter.jpg","/smwood.jpg","/trees.jpg","/whatcd.png","/winter-chicago.jpg","/winter.jpg","/winter.png","/wood.jpg"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };