const scrollers = document.querySelectorAll('.scroller');


function addAnimation(){
    scrollers.forEach((scroller)=>{
        scroller.setAttribute('data-animated', true)
        const innerScroller = scroller.querySelector('.inner-scroller')
        const scrollerContent = Array.from(innerScroller.children);

        scrollerContent.forEach(item=>{
            const duplicatedItem = item.cloneNode(true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
        

}

addAnimation();