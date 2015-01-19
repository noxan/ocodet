var sys;
var root = "root";
var viewportSelector = "#viewport";

var ocodet = {
  init: function() {
    sys = arbor.ParticleSystem(1000, 600, 0.5);
    sys.renderer = Renderer(viewportSelector)
    sys.parameters({gravity:true})

    sys.addNode(root);
    sys.addNode('test');
    sys.addEdge(root, 'test');

    this.resize();
  },
  add: function(name) {
    sys.addNode(name);
    sys.addEdge(root, name);
  },
  resize: function() {
    var w = $(window).width();
    var h = $(window).height();

    sys.screenSize(w, h);

    $(viewportSelector).attr('width', w);
    $(viewportSelector).attr('height', h);
  }
};

$(document).ready(function() {
  ocodet.init();
});

$('#add').bind('keyup', function(evt) {
  if (evt.keyCode === 13) {
    name = $('#add').val();
    console.log("Add " + name);
    ocodet.add(name);
    $('#add').val('');
  }
});

$(window).resize(ocodet.resize);
