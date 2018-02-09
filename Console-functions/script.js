window.onload = function() {
  console.log('%c derpderp punk', 'color:red; font-size: 60px');

  $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'GET',
    success: function(response) {
      console.log('RES :>', response);
    }
  });
};
