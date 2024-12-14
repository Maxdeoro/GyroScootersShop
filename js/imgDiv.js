function imgdiv(url) {
	const el = document.getElementById('img_div');
	const img = new Image();
	img.onload = function() {
		el.style.width = img.width + 'px';
		el.style.height = (img.height + 20) + 'px';
		el.innerHTML = '<img src=' + url + ' style="margin:0" width="' + img.width +'" height="'+img.height+'" /><br> ('+img.width+' x '+img.height+')';
	};
	el.innerHTML = 'Downloading...';
	img.src = url;
};
