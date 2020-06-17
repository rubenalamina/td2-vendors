<script src='/division/jquery.loadTemplate.min.js'></script>

<script language='javascript'>
  function renderItem(item) {
    container = jQuery('#division-' + item.type + 's');
    template  = jQuery('#division-' + item.type);
    container.loadTemplate(template, item, {append:true});
  }

  function ajaxSuccess(data, textStatus, jqXHR) {
    data.forEach(renderItem);
  }

  function ajaxError(jqXHR, textStatus, errorThrown) {
    alert(errorThrown.message);
  }

  function loadData(url) {
    jQuery.ajax({url: url}).done(ajaxSuccess).fail(ajaxError)
  }

loadData('/division/gear.json?20200616');
loadData('/division/weapons.json?20200616');
loadData('/division/mods.json?20200616');

</script>
