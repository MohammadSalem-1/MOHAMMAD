// ÅÖÇİÉ ÊİÇÚá ÚäÏ ÇáÖÛØ Úáì ÒÑ "ÇÈÏÃ ÇááÚÈ"
document.querySelectorAll('.game-link').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();  // ãäÚ ÅÚÇÏÉ ÊÍãíá ÇáÕİÍÉ
        alert('Êã ÇáÈÏÁ İí ÇááÚÈÉ!');  // ÑÓÇáÉ ÊİÇÚáíÉ
    });
});

// ÅÖÇİÉ ÊÃËíÑ ÚäÏ ÇáÊãÑíÑ Úáì ÇáÃÒÑÇÑ
document.querySelectorAll('.game-link').forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.backgroundColor = '#ffca28';  // ÊÛííÑ Çááæä ÚäÏ ÇáãÑæÑ
    });

    item.addEventListener('mouseleave', function() {
        item.style.backgroundColor = '#00bcd4';  // ÇÓÊÑÌÇÚ Çááæä ÇáÃÕáí
    });
});
