$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$("#PanelAddressToggle").click(function (e) {
  $('#PanelAddressHeader').collapse('toggle')
  $('#PanelAddressEdit').collapse('toggle')  
});

$("#PanelAddressToggleMob").click(function (e) {
  $('#PanelAddressHeader').collapse('toggle')
  $('#PanelAddressEdit').collapse('toggle')  
});

$("#PanelContactToggle").click(function (e) {
  $('#PanelContactHeader').collapse('toggle')
  $('#PanelContactEdit').collapse('toggle')  
});

$("#PanelContactToggleMob").click(function (e) {
  $('#PanelContactHeader').collapse('toggle')
  $('#PanelContactEdit').collapse('toggle')  
});

$("#PanelEmailToggle").click(function (e) {
  $('#PanelEmailHeader').collapse('toggle')
  $('#PanelEmailEdit').collapse('toggle')  
});

$("#PanelEmailToggleMob").click(function (e) {
  $('#PanelEmailHeader').collapse('toggle')
  $('#PanelEmailEdit').collapse('toggle')  
});