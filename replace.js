const baseURL = "https://cdn.jsdelivr.net/gh/genizy/drive@6e27d4776d11c449d5348df4ab52a69f73426a8b/";
function resolveAssetPath(tagName, attribute) {
    document.querySelectorAll(tagName).forEach(element => {
        const assetPath = element.getAttribute(attribute);
        if (assetPath && !assetPath.startsWith('http') && !assetPath.startsWith('//')) {
            element.setAttribute(attribute, baseURL + assetPath);
        }
    });
}
resolveAssetPath('img', 'src');
resolveAssetPath('script', 'src');
resolveAssetPath('link', 'href');
resolveAssetPath('video', 'src');
resolveAssetPath('audio', 'src');
resolveAssetPath('iframe', 'src');
resolveAssetPath('source', 'src');
resolveAssetPath('embed', 'src');
resolveAssetPath('track', 'src');
resolveAssetPath('a', 'href');
resolveAssetPath('area', 'href');
resolveAssetPath('object', 'data');
resolveAssetPath('video', 'poster');
resolveAssetPath('custom-element', 'data-src');