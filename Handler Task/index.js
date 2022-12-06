(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
    function init(){
        var obj = document.getElementById('name');
        obj.addEventListener('focusin', (e) => handleFocus(e));
        obj.addEventListener('focusout', (e) => handleFocus(e));

        function handleFocus(e){
            var x = document.querySelectorAll('#john > .important');
            if(e.type==='focusin') {
                x.forEach(val => {
                    val.classList.add('shape');
                    val.textContent = 'This now has the shape class because of focus event and being a direct descendent of div with id "john" with important class';
                });
            }
            else {
                x.forEach(val => {
                    val.classList.remove('shape');
                    val.textContent = 'This has the important class and is a direct descendent of div with id "john" so will change on focus';
                });
            }
        }
    }
    
})(window, document, undefined);


