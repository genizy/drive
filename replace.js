const baseURL = "https://cdn.jsdelivr.net/gh/genizy/drive@a7195512453698be46d18618fb15df0986d1c6a5/";
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