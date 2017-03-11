$( document ).ready(function() {

var topics = [ "Baseball", "Basketball", "Football", "High Fives" ];

function createButton( text ) {
  var button = $( "<input>" );
  button.attr( 'type', 'button' );
  button.attr( 'value', text );
  button.click( function () {
    var search = $.get( "https://api.giphy.com/v1/gifs/search?q=" + text + " fails" + "&api_key=dc6zaTOxFJmzC&limit=10&r=pg-13" );
    search.done( function ( responseData ) {
      console.log( responseData );
      $( '#gallery' ).html( '' );
      for ( var i = 0; i < responseData.data.length; i++ ) {
        var newImage = $( '<img>' ).attr( 'src', responseData.data[ i ].images.fixed_height_still.url );
        newImage.css( 'animation-play-state', 'paused' );
        newImage.attr( 'data-still', responseData.data[ i ].images.fixed_height_still.url );
        newImage.attr( 'data-animate', responseData.data[ i ].images.fixed_height.url );
        newImage.attr( 'data-state', "still" );
        newImage.attr( 'alt', 'rating: ' + responseData.data[ i ].rating );
        newImage.click( function () {
          var state = $( this ).attr( "data-state" );
          if ( state === "still" ) {
            $( this ).attr( "src", $( this ).attr( "data-animate" ) );
            $( this ).attr( "data-state", "animate" );
          } else {
            $( this ).attr( "src", $( this ).attr( "data-still" ) );
            $( this ).attr( "data-state", "still" );
          }
        } );
        $( '#gallery' ).append( newImage );
        var ratingDiv = $( "<div>" );
        ratingDiv.text( newImage.attr( 'alt' ) );
        $( "#gallery" ).append( ratingDiv );
      }
    } );
  } );
  $( "#buttons" ).append( button );
}

// $( document ).ready( function () {
  // "use strict";
  $( '#addbutton' ).click( function () { createButton( $( "#newInput" ).val() ) } );
  for ( var i = 0; i < topics.length; i++ ) {

    var newButton = $( "<input>" );
    
    newButton.attr( 'id', 'topic-' + i );
    newButton.attr( 'type', 'button' );
    newButton.attr( 'value', topics[ i ] );

    newButton.click( function () {
      var search = $.get( "https://api.giphy.com/v1/gifs/search?q=" +
        $( this ).val() + " fails" + "&api_key=dc6zaTOxFJmzC&limit=10&r=pg-13" );
      search.done( function ( data ) {
        $( '#gallery' ).html( '' );
        for ( var i = 0; i < data.data.length; i++ ) {
          var newImage = $( '<img>' ).attr( 'src', data.data[ i ].images.fixed_height_still.url );
          newImage.css( 'animation-play-state', 'paused' );
          newImage.attr( 'data-still', data.data[ i ].images.fixed_height_still.url );
          newImage.attr( 'data-animate', data.data[ i ].images.fixed_height.url );
          newImage.attr( 'data-state', "still" );
          newImage.attr( 'alt', 'rating: ' + data.data[ i ].rating );
          newImage.click( function () {
            var state = $( this ).attr( "data-state" );
            if ( state === "still" ) {
              $( this ).attr( "src", $( this ).attr( "data-animate" ) );
              $( this ).attr( "data-state", "animate" );
            } else {
              $( this ).attr( "src", $( this ).attr( "data-still" ) );
              $( this ).attr( "data-state", "still" );
            }
          } );
          $( '#gallery' ).append( newImage );
          var ratingDiv = $( "<div>" );
          ratingDiv.text( newImage.attr( 'alt' ) );
          $( "#gallery" ).append( ratingDiv );
        }
      } );
    } );
    $( "#buttons" ).append( newButton );
  }
// });
});