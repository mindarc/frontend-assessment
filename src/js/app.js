'use strict';

/**Optionally add Bootstrap to your project**/
//import 'bootstrap';

import '../css/style.scss';
import $ from '../../node_modules/jquery';
import { gsap, TimelineMax, SteppedEase, TweenMax, Expo } from "../../node_modules/gsap/all";

/********** Paste your code here! ************/

const win = $(window),
      doc = $(document);
const main = {
  defaults: {
    // CONSTANT VARIABLES
  },
  onInit: ()=> { 
    var vm = main;

    vm.renderTabContents()
    vm.toggleActiveItem()
    vm.toggleActiveAccordionItem()
    vm.onResize()
  },
  onResize: (e)=> {
    var vm = main;
    vm.showHeroTitleAnim()
  },
  renderTabContents: ()=> {
    const tabHeader = $('.tab-header'),
          tabBody = $('.tab-body');

    /** Fetch data and render tab contents */
    $.getJSON( "https://api.myjson.com/bins/g53uu", (data)=> {
      $.each(data, (i)=> {
        tabHeader.append(`
          <li>
            <a href="#tab${i}" class="${( i == 0) ? 'active-item' : '' }">${data[i].title}</a>
          </li>
        `)
        tabBody.append(`
          <div id="tab${i}" class="tab-item">
            <div class="tab-item-heading ${( i == 0) ? 'active-item' : '' }">${data[i].title}</div>
            <div class="tab-content">
              ${data[i].content}
            </div>
          </div>
        `)
      })
    })
  },
  toggleActiveItem: () => {
    /** Change the displayed tab content upon clicking tab header item */
    const tabHeader = $('.tab-header')
    tabHeader.on('click', 'a', function() {
      const _this = $(this);
      let tabHeaderItem = $('.tab-header a'),
          target = _this.attr('href'),
          tabItem = $('.tab-item-heading')

      /** Toggle tab header active class */
      tabHeaderItem.removeClass('active-item')
      tabItem.removeClass('active-item')
      
      _this.addClass('active-item')
      $(target).find('.tab-item-heading').addClass('active-item')

      /** Display the tab content based on the selected tab header */
      $('.tab-item .tab-content').hide()
      $(target).find('.tab-content').show()
    })
  },
  toggleActiveAccordionItem: () => {
    const tabBody = $('.tab-body')
    
    tabBody.on('click', '.tab-item-heading', function() {
      const _this = $(this),
            accordionContent = $('.tab-content'),
            accordionHeading = $('.tab-item-heading'),
            tabHeaderItem = $('.tab-header a')

      accordionHeading.removeClass('active-item')
      tabHeaderItem.removeClass('active-item')

        _this.addClass('active-item')

      accordionHeading.not(this).next().slideUp()
      _this.next().slideToggle()
    })
  },

  /** Animation */
  showHeroTitleAnim: ()=> {
    if(win.innerWidth() >= 768) {
      var tl = new TimelineMax({
        paused:true
      });
      // letter animation
      tl.fromTo(".anim-typewriter", 2, {
        width: "0",
      }, {
        width: "550px", 
        ease:  SteppedEase.config(13)
      }, 0);
      // text cursor animation
      tl.fromTo(".anim-typewriter", 0.8, {
        "border-right-color": "rgba(255,255,255,0.75)"
      }, {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease:  SteppedEase.config(37)
      }, 0);
      tl.play();
    }
  }
};

doc.ready(()=> {
  main.onInit();
});

win.resize(()=> {
  main.onResize();
});