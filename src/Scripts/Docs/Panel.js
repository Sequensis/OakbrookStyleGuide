$("#PanelAddressToggle").click(function (e) {
  $('#PanelAddressHeader').collapse('toggle')
  $('#PanelAddressEdit').collapse('toggle') 
  $('#PanelAddress .panel-btn').toggleClass('d-none')    
  $('#PanelAddress').toggleClass('ob-panel-active')    
  $('#PanelContact').toggleClass('ob-panel-disabled')  
  $('#PanelEmail').toggleClass('ob-panel-disabled')      
});

$("#PanelAddressToggleMob").click(function (e) {
  $('#PanelAddressHeader').collapse('toggle')
  $('#PanelAddressEdit').collapse('toggle') 
  $('#PanelAddress .panel-btn').toggleClass('d-none')   
  $('#PanelAddress').toggleClass('ob-panel-active')    
  $('#PanelContact').toggleClass('ob-panel-disabled')  
  $('#PanelEmail').toggleClass('ob-panel-disabled')  
});

$("#PanelContactToggle").click(function (e) {
  $('#PanelContactHeader').collapse('toggle')
  $('#PanelContactEdit').collapse('toggle') 
  $('#PanelContact .panel-btn').toggleClass('d-none')     
  $('#PanelAddress').toggleClass('ob-panel-disabled')    
  $('#PanelEmail').toggleClass('ob-panel-disabled')      
});

$("#PanelContactToggleMob").click(function (e) {
  $('#PanelContactHeader').collapse('toggle')
  $('#PanelContactEdit').collapse('toggle')  
  $('#PanelContact .panel-btn').toggleClass('d-none')     
  $('#PanelAddress').toggleClass('ob-panel-disabled')    
  $('#PanelEmail').toggleClass('ob-panel-disabled')   
});

$("#PanelEmailToggle").click(function (e) {
  $('#PanelEmailHeader').collapse('toggle')
  $('#PanelEmailEdit').collapse('toggle')  
  $('#PanelEmail .panel-btn').toggleClass('d-none')       
  $('#PanelAddress').toggleClass('ob-panel-disabled')    
  $('#PanelContact').toggleClass('ob-panel-disabled')  
  $('#PanelEmail').toggleClass('ob-panel-active')   
});

$("#PanelEmailToggleMob").click(function (e) {
  $('#PanelEmailHeader').collapse('toggle')
  $('#PanelEmailEdit').collapse('toggle')
  $('#PanelEmail .panel-btn').toggleClass('d-none')           
  $('#PanelAddress').toggleClass('ob-panel-disabled')    
  $('#PanelContact').toggleClass('ob-panel-disabled')  
  $('#PanelEmail').toggleClass('ob-panel-active')  
});

// 

$(".form-btn .btn-black-hollow").click(function (e) {
  $('#PanelAddressEdit').collapse('hide')
  $('#PanelContactEdit').collapse('hide')
  $('#PanelEmailEdit').collapse('hide')
  $('#PanelAddressHeader').collapse('show')
  $('#PanelContactHeader').collapse('show')
  $('#PanelEmailHeader').collapse('show')  
  $('.ob-panel-default').removeClass('ob-panel-active')   
  $('.ob-panel-default').removeClass('ob-panel-disabled')  
  $('.panel-btn').removeClass('d-none') 
});