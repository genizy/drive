const baseURL = "https://cdn.jsdelivr.net/gh/genizy/drive@208c5848e1e928a8bd5fc9b96698dc0c08f76710/";
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

window.fetch = function(url, options) {
    if (!/^https?:\/\//i.test(url)) {
      // For relative URLs, prepend the base URL
      url = `${baseURL}${url}`;
    } else {
      // Optionally modify absolute URLs
      url = `${baseURL}${url.replace(/^https?:\/\//, '')}`;
    }
  
    return originalFetch(url, options);
  };
  