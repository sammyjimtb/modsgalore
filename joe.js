
exports.jump = function( player ) {
  player.motionY = 1;
};

exports.scraper = function(floors, width) {
  var d = new Drone(self);
  d.chkpt('start');
  for (var i=0; i< floors; i++) {
    d.box(blocks.iron, width, 1, width);
    d.up();
    d.box0(blocks.glass_pane, width, 3, width);
    d.up(3);
  }
  d.move('start');
};
