replaceImages(document.body)
 function replaceImages(element) {
   if (element.hasChildNodes()) {
     element.childNodes.forEach(replaceImages)
   } else if (element.nodeType === Text.ELEMENT_NODE) {
     if (element.tagName === 'IMG' && element.width > 100 && element.height > 100 && element.width / element.height < 4 && element.height / element.width < 4) {
         const newElement = document.createElement('img')
        newElement.style.width = '100%'
        newElement.style.height = '100%'
         newElement.src = 'https://i.imgur.com/ZMzalxS.jpeg'
         element.replaceWith(newElement)
      }
      else if(element.width / element.height < 1.2 && element.height / element.width < 1.2){
        const newElement = document.createElement('img')
        newElement.style.width = '100%'
        newElement.style.height = '100%'
        newElement.src = 'https://i.imgur.com/ZMzalxS.jpeg'
        element.replaceWith(newElement)
      }
   }
 }

