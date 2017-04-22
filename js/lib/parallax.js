/**
jquery-inertiaScroll

Copyright(c) 2016 Go Nishiduka

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php

Last Update: 2016-12-28
Version:1.0.0
*/

(function($){
  $.fn.inertiaScroll = function(options){

    var settings = $.extend({
      parent: "",
      childDelta1: 0.02,
      childDelta2: 0.1,
      parentDelta: 0.08
    }, options);

    var $window = $(window);
    var $body = $('body');
    var $parent = settings.parent;
    var $child = this;


    var ChildBox = function(elm, offset = 0, speed = 1, margin = 0){
      this.elm = elm;
      this.offset = offset;
      this.speed = speed;
      this.margin = margin;
    }
    ChildBox.prototype.update = function(windowOffset,offsetBottom = 0){
        this.offset += (windowOffset * settings.childDelta1 * Number(this.speed) - this.offset) * settings.childDelta2;
        this.elm.css({transform:'translate3d(' + 0 + ',' + ( Number(this.margin) - Number(this.offset) ) + 'px ,' + 0 +')'});        
    }

    var ParentBox = function(elm, offset = 0, speed = 1.0, margin = 0){
        ChildBox.apply(this,arguments);
    }
    ParentBox.prototype = Object.create(ChildBox.prototype,{
      constructor:{
        value: ParentBox
      }
    });
    ParentBox.prototype.update = function(windowOffset){
        this.offset += (windowOffset - this.offset) * settings.parentDelta;
        this.elm.css({transform:'translate3d(' + 0 + ',' + -this.offset  + 'px ,' + 0 +')'});
    }
    ParentBox.prototype.setcss = function(){
      this.elm.css({
        'width':'100%',
        'position':'fixed'
      });
    }


    var Boxes = function(){
      this.ChildBox = [];
      this.ChildBoxLength = 0;
      this.ParentBox = "";
      this.windowHeight = 0;
    }
    Boxes.prototype = {
      init:function(){        
        this.createElm($child,$parent);
        this.loop();
      },
      createElm:function(child,parent){
        this.ParentBox = new ParentBox(parent,0,1);
        this.ParentBox.setcss();
        this.boxArrayLength = child.length;
        for (var i = 0; i < this.boxArrayLength; i++) {
          var e = child.eq(i);
          var speed = e.data("speed");
          var margin = e.data("margin");
          this.ChildBox.push(new ChildBox(e,0,speed,margin));
        }
      },
      smoothScroll:function(){
        var windowOffset = $window.scrollTop();
        var offsetBottom = windowOffset + this.windowHeight;
        this.ParentBox.update(windowOffset);
        for (var i = 0; i < this.boxArrayLength; i++) {
          this.ChildBox[i].update(windowOffset,offsetBottom);
        }
      },
      loop:function(){
        this.smoothScroll();
        window.requestAnimationFrame(this.loop.bind(this));
      }
    }

    $(function(){
      $body.height($parent.height());
      var boxes = new Boxes();
      boxes.init();
    });

    return this;

  };
})(jQuery);
