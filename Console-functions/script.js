window.onload = function() {
  $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'GET',
    success: function(response) {
      console.log('RES :>', response);
    }
  });
};
