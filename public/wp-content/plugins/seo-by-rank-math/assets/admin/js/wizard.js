!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=68)}({3:function(t,e){t.exports=jQuery},68:function(t,e,n){"use strict";n.r(e);var a,r=n(3);(a=n.n(r).a)((function(){window.rankMathSetupWizard={init:function(){rankMath.currentStep in this&&this[rankMath.currentStep](),a(document).on("cmb_init",(function(){a(".cmb-multicheck-toggle",".multicheck-checked").trigger("click")}))},compatibility:function(){a(".wizard-deactivate-plugin").on("click",(function(t){t.preventDefault();var e=a(this);if(!e.hasClass("disabled")){var n=e.closest("tr");a.ajax({url:rankMath.ajaxurl,type:"POST",data:{action:"rank_math_deactivate_plugins",security:rankMath.security,plugin:e.data("plugin")}}).always((function(t){"1"===t&&(n.find(".dashicons-warning").removeClass("dashicons-warning").addClass("dashicons-yes"),e.addClass("disabled").text(rankMath.deactivated))}))}}))},import:function(){var t=a("#import-progress"),e=a("#import-progress-bar"),n=0,r=0,i=function(t,e){var n=new Date,a=e.val()+"["+(10>n.getHours()?"0":"")+n.getHours()+":"+(10>n.getMinutes()?"0":"")+n.getMinutes()+":"+(10>n.getSeconds()?"0":"")+n.getSeconds()+"] "+t+"\n";e.text(a).scrollTop(e[0].scrollHeight-e.height()-20)},o=function(t){t>100&&(t=100),e.find(".number").html(t),e.find("#importBar").css("width",t+"%")},c=function t(e,c,u,s,l,p){if(0!==c.length){s=s||1;var d=c.shift(),h="deactivate"===d?"Deactivating "+p:"Importing "+d+" from "+p,g=Math.floor(100/r);i(h,u),a.ajax({url:rankMath.ajaxurl,type:"POST",data:{perform:d,pluginSlug:e,paged:s,action:"rank_math_import_plugin",security:rankMath.security}}).success((function(a){var r=1;a&&a.page&&a.page<a.total_pages&&(r=a.page+1,c.unshift(d)),a&&a.total_pages&&(g=Math.ceil(g/a.total_pages)),o(n+=g),i(a.success?a.message:a.error,u),t(e,c,u,r,l,p)})).error((function(n){i(n.statusText,u),t(e,c,u,null,l,p)}))}else l()};a(".button-import",".form-footer").on("click",(function(n){if(n.preventDefault(),rankMath.isConfigured&&!window.confirm(rankMath.confirm))return!1;var c=a(".import-data:checkbox:checked");if(!c.length)return window.alert("Please select plugin to import data."),!1;var s=a(this),l={},p=[];a.each(c,(function(){var t=a(this).val(),e=a(this).parents(".cmb-group-description").next().find(":checkbox:checked"),n=e.data("active"),i=a(this).data("plugin");p.push(i);var o=a.map(e,(function(t){return t.value}));0<o.length&&n&&o.push("deactivate"),r+=o.length,l[t]={plugin:i,actions:o}})),s.prop("disabled",!0),t.show(),e.show(),e.find(".plugin-from").html(p.join()),i("Import started...",t),u(l,t,(function(){o(100),s.prop("disabled",!1),a(".button",".form-footer").hide(),a(".button-continue").show()}))}));var u=function e(n,a,r){var o=Object.keys(n),u=o.length,s=n[o[0]],l=Object.keys(n)[0];if(delete n[l],0===u)return i("Import finished. Click on the button below to continue the Setup Wizard.",a),void r();c(l,s.actions,t,null,(function(){e(n,a,r)}),s.plugin)};a(".import-data").on("change",(function(){for(var t=a(this),e=this.checked,n=t.parents(".cmb-group-description").next().find(".cmb2-option"),r=0;r<n.length;r++)"checkbox"===n[r].type&&(n[r].checked=e);e&&("yoast"===t.val()?(a('.import-data[value="aioseo"]').prop("checked",!1).trigger("change"),a('.import-data[value="seopress"]').prop("checked",!1).trigger("change")):"aioseo"===t.val()?(a('.import-data[value="yoast"]').prop("checked",!1).trigger("change"),a('.import-data[value="seopress"]').prop("checked",!1).trigger("change")):"seopress"===t.val()&&(a('.import-data[value="yoast"]').prop("checked",!1).trigger("change"),a('.import-data[value="aioseo"]').prop("checked",!1).trigger("change")))})),a(".cmb-type-group .cmb2-checkbox-list .cmb2-option").on("click",(function(){var t=a(this),e=t.attr("name"),n=t.parents("ul").find('input[name="'+e+'"]:checkbox:checked'),r=t.parents("ul").find('input[name="'+e+'"]');n.length===r.length&&t.parents(".cmb-type-group").find(".import-data").prop("checked",!0).trigger("change")})),a(".button-deactivate-plugins").on("click",(function(t){var e=a(this);e.parents("form").find("input[data-active]").length&&(t.preventDefault(),e.text(e.data("deactivate-message")),a.ajax({url:rankMath.ajaxurl,type:"POST",data:{action:"rank_math_deactivate_plugins",security:rankMath.security,plugin:"all"}}).success((function(){e.parents("form").trigger("submit")})).error((function(){window.alert("Something went wrong! Please try again later.")})))}))},yoursite:function(){a("#rank-math-search-input").on("input keypress",(function(t){var e=a(this),n=e.next();if(13===t.keyCode||13===t.which){if("createEvent"in document){var r=this.ownerDocument,i=r.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,r.defaultView,1,0,0,0,0,!1,!1,!1,!1,0,null),n[0].dispatchEvent(i)}return!1}n.attr("href",n.data("href")+encodeURIComponent(e.val()))}));var t=a("#business_type");0!==parseInt(t.data("default"))&&a("#site_type").on("change",(function(){var e=a(this).val();"news"!==e&&"webshop"!==e&&"otherbusiness"!==e||t.val("Organization").trigger("change"),"business"===e&&t.val("LocalBusiness").trigger("change")}))},searchconsole:function(){a("#console_authorization_code").on("paste",(function(){var t=a(this).next(".button");setTimeout((function(){t.trigger("click")}),100)}))},ready:function(){a("#auto-update").on("change",(function(){a(".rank-math-auto-update-email-wrapper").toggle(a(this).is(":checked"))})),a(".rank-math-additional-options input.rank-math-modules").on("change",(function(){var t=a(this);a.ajax({url:rankMath.api.root+"rankmath/v1/autoUpdate",method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)},data:{key:t.data("key"),value:t.is(":checked")}})}))}},window.rankMathSetupWizard.init()}))}});