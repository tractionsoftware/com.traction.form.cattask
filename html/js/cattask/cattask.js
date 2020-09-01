Proteus.addHandler("load", function(){

  // Hide the task-details if it is collapsed by default.
  if ($('.summary-header.cattask .exp > a').hasClass('collapsed')) {

    $('.entry-cattask #title-info .entry-details > .task-details').addClass('collapsed').hide();

  }




  // Since the Proteus.addHandler('load') doesn't work for the calendar details dialog,
  // I had to insert the JavaScript code into the onclick= parameter of the <a> tag
  // in order to collapse and expand the task-details on the calendar dialog.

});

Proteus.addHandler("form-load", function(){

  $('.fm-form-cattask .task-formlayout .fm-row').each(function(){
    if (!$(this).hasClass('show-collapsed')) {
      $(this).hide();
    }
  });

  if ($('.fm-form-cattask .Caption .dialogControls .menu-exp').length === 0) {
    $('.fm-form-cattask .Caption .dialogControls .x').after('<div class="menu-opener menu-exp"><a class=\"collapsed\"  href=\"javascript:void(0);\">' + Traction.CatTask.buttnTextExpand + '<i></i></a></div>');
  }

  $('.fm-form-cattask .Caption .dialogControls .menu-exp a').on('click', function(){
    if ($(this).hasClass('collapsed')) {
      $('.fm-form-cattask tr.fm-row').each(function(){
        if ($(this).hasClass('show-expanded')) {
          $(this).show();
        }
      });
      $(this).removeClass('collapsed').addClass('expanded');
      $(this).html(Traction.CatTask.buttnTextCollapse + '<i></i>');
    } else {
      $('.fm-form-cattask tr.fm-row').each(function(){
        if (!$(this).hasClass('show-collapsed')) {
          $(this).hide();
        }
      });
      $(this).removeClass('expanded').addClass('collapsed');
      $(this).html(Traction.CatTask.buttnTextExpand + '<i></i>');
    }
  });
});
