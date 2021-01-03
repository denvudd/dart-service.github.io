+function () {

  var accordeonHeaderClickHandler = function(e) {
      document.querySelectorAll('.accordion__section').forEach(function(section) {
          section.querySelector('.accordion-body').style.maxHeight = '0px'
      })
  
      var accordeonSection = e.target.closest('.accordion__section')
  
      var insideElHeight = accordeonSection.querySelector('.accordion-body .accordion__content').clientHeight
  
      accordeonSection.querySelector('.accordion-body').style.maxHeight = insideElHeight + 'px'
  }
  
  document.querySelectorAll('.accordion__section')
      .forEach(function(section) {
          section.addEventListener('click', accordeonHeaderClickHandler)
      })
  
  }()