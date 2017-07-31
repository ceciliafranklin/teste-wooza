'use strict';
app.filter('replacePipe', function() {
  return function (text) {
      if (!text) {
         return text;
      }
      return text.replace(/\|/g, '<br />'); // Replaces all occurences
   	};
});
