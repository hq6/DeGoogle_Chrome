function main() {
    var actualCode = ['setTimeout(function() {',
    '    rwt=function(){}; ',
    '}, 1000); '].join('\n');
    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}

if (window.location.href.match(/\.google\./)) {
    main();
}
