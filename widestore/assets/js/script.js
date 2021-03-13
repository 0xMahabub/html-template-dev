(function(){
    "use strict";
    // scripting

    /**=========================*
     * Has-drop
     *==========================*/
    var hasDrop = document.querySelectorAll('.has-drop');
    for(var _hdp=0; _hdp<hasDrop.length; _hdp++) {
        var newChev = document.createElement('i');
        newChev.classList.add('lni', 'lni-chevron-down');
        hasDrop[_hdp].appendChild(newChev);
    }


})();