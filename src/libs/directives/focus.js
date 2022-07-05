export default {
  mounted(el) {
    const oSelectorInput = el.querySelector('.selector-input')
    const oSelectorMenu = el.querySelector('.selector-menu')
    const oInput = oSelectorInput.querySelector('input')
    const oPlaceHolder = oSelectorInput.querySelector('label')
    const oIcon = oSelectorInput.querySelector('span')
    // 
    oInput.addEventListener('focus', function() {
      oPlaceHolder.style.display = 'none'
      oIcon.className = 'iconfont icon-search'
      
      setTimeout(() => {
        oSelectorMenu.style.display = 'block'
      },100)
    }, false)
    // 
    oInput.addEventListener('blur', function() {
      oIcon.className = 'iconfont icon-arrow-down'
      
      setTimeout(() => {
        oSelectorMenu.style.display = 'none'
        if(this.value.length === 0) {
          
          oPlaceHolder.style.display = 'block'
        }
      },100)
    }, false)
  }
}