// var polosa = document.getElementById('polosa');
// var polosaNews = document.getElementsByClassName('polosa__news');
// var polosaNewsLength = polosaNews.length;
// var counter = 0;
// var postTitle = document.querySelectorAll('.post__title');
// var navTextTitle = document.querySelectorAll('.nav__text_title');
// for(j=0;j<postTitle.length;j++){
// 	navTextTitle[j].innerHTML = postTitle[j].innerHTML.toUpperCase();
// };
// var numArticle = document.getElementsByClassName('number__article');
// for(i=0;i<numArticle.length;i++){
// 	numArticle[i].innerHTML=i+1;
// };

// var t = setInterval(sliderNext, 5000);
// function sliderNext() {
// 	for(i=0;i<numArticle.length;i++){
// 		numArticle[i].classList.remove('number__article_blue');
// 		navTextTitle[i].classList.remove('nav__text_title-blue');
// 	}
// 	counter++;
// 	if(counter>polosaNewsLength-1){
// 		counter=0;
// 	}
// 	else if(counter<0){
// 		counter=polosaNewsLength-1;
// 	}
// 	numArticle[counter].classList.add('number__article_blue');
// 	navTextTitle[counter].classList.add('nav__text_title-blue');
// 	polosa.style.transform = 'translateX('+ -counter*100 +'%)';
// };
// function toSlide(counter){
// 	for(i=0;i<numArticle.length;i++){
// 		numArticle[i].classList.remove('number__article_blue');
// 		navTextTitle[i].classList.remove('nav__text_title-blue');
// 	}
// 	clearInterval(t);
// 	numArticle[counter].classList.add('number__article_blue');
// 	navTextTitle[counter].classList.add('nav__text_title-blue');
// 	polosa.style.transform = 'translateX('+ -counter*100 +'%)';
// }

// var bannerNum = document.querySelectorAll('.banner__nav');
// for(k=0;k<bannerNum.length;k++){
// bannerNum[k].onclick = function (event){
// 	var num = this.childNodes[0].nextSibling.children;
// 	// console.log(num[0].innerHTML);
// 	counter = num[0].innerHTML-1;
// 	// console.log(counter);
// 	toSlide(counter);
// }
// }


