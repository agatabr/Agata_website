$(function() {
    // instantiate the scrollama
    const scroller = scrollama();

    // setup the instance, pass callback functions
    scroller
      .setup({
        step: '.footercredits' // required - class name of trigger steps
      })
      .onStepEnter(console.log('enter'))
      .onStepExit(console.log('exit'));
});
