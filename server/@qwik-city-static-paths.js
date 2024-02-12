const staticPaths = new Set(["/BigBlueTerm437NerdFont-Regular.ttf","/IMG_0324.jpg","/arst.jpg","/basic.jpg","/berries.jpg","/chicago.jpg","/favicon.svg","/flowers.jpg","/growing.jpg","/heavy-psych.jpg","/ibm.jpg","/icamera.jpg","/manifest.json","/nightlights.jpg","/q-manifest.json","/robots.txt","/service-worker.js","/smIMG_0324.jpg","/smarst.jpg","/smbasic.jpg","/smberries.jpg","/smchicago.jpg","/smflowers.jpg","/smgrowing.jpg","/smheavy-psych.jpg","/smibm.jpg","/smicamera.jpg","/smnightlights.jpg","/smsun.jpg","/smtrees.jpg","/smwinter.jpg","/smwood.jpg","/sun.jpg","/trees.jpg","/whatcd.png","/winter.jpg","/winter.png","/wood.jpg"]);
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