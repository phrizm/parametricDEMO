class test extends Paged.Handler {
    constructor(chunker, polisher, caller) {
      super(chunker, polisher, caller)
    }
    beforeParsed(content) {
      content.querySelector('p').style.color = red
    }
    afterRendered() {
      document.querySelector('.pagedjs_page').style.background = 'red'
    }
  }
  Paged.registerHandlers(test)
  