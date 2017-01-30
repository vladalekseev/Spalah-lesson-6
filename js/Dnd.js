/**
 * Created by vladalekseev on 29.01.17.
 */
document.addEventListener('DOMContentLoaded',function() {

    var section_1 = document.getElementById('containerDrop1');
    var section_2 = document.getElementById('containerDrop2');
    var draggedElem = document.getElementById('itemDragged');


    section_1.addEventListener('dragover',function(e) {
       e.preventDefault();
    });
    section_1.addEventListener('dragenter',function(e) {
        e.target.style.borderColor = "green" ;
    });
    section_1.addEventListener('dragleave',function(e) {
        e.target.style.borderColor = "black" ;
    });
    section_1.addEventListener('drop',function(e) {
        e.preventDefault();

        var elemId = e.dataTransfer.getData('text');
        var elem = document.getElementById(elemId);
        e.target.appendChild(elem);
    });



    section_2.addEventListener('dragover',function(e) {
        e.preventDefault();
    });
     section_2.addEventListener('dragenter',function(e) {
         e.target.style.borderColor = "green" ;
     });
    section_2.addEventListener('dragleave',function(e) {
        e.target.style.borderColor = "black" ;
    });
    section_2.addEventListener('drop',function(e) {
        e.preventDefault();
        var elemId = e.dataTransfer.getData('text');
        var elem = document.getElementById(elemId);
        e.target.appendChild(elem);
    });




    draggedElem.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text', e.target.id);
        e.target.style.color = "orange" ;
    });
    draggedElem.addEventListener('dragend', function(e) {
        e.target.style.color = "red" ;
    });

});