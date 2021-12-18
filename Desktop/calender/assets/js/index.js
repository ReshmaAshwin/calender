function rightjan(){
    document.getElementById("feb").style.display="block";
   document.getElementById("jan").style.display="none";
   }
function rightfeb(){
    document.getElementById("mar").style.display="block";
    document.getElementById("feb").style.display="none";
      }

      function rightmar(){
    document.getElementById("apr").style.display="block";
    document.getElementById("mar").style.display="none";
      }
      function rightapr(){
    document.getElementById("mai").style.display="block";
    document.getElementById("apr").style.display="none";
      }
      function rightmai(){
    document.getElementById("jun").style.display="block";
    document.getElementById("mai").style.display="none";
      }

      function rightjun(){
        document.getElementById("jul").style.display="block";
        document.getElementById("jun").style.display="none";
          }

          function rightjul(){
            document.getElementById("aug").style.display="block";
            document.getElementById("jul").style.display="none";
              }

              function rightaug(){
                document.getElementById("sep").style.display="block";
                document.getElementById("aug").style.display="none";
                  }

                  function rightsep(){
                    document.getElementById("oct").style.display="block";
                    document.getElementById("sep").style.display="none";
                      }

                      function rightoct(){
                        document.getElementById("nov").style.display="block";
                        document.getElementById("oct").style.display="none";
                          }

                          function rightnov(){
                            document.getElementById("dec").style.display="block";
                            document.getElementById("nov").style.display="none";
                              }
                              function rightdec(){
                                document.getElementById("jan").style.display="block";
                                document.getElementById("dec").style.display="none";
                                  }



                                  function leftjan(){
                                    document.getElementById("dec").style.display="block";
                                   document.getElementById("jan").style.display="none";
                                   }
                                function leftfeb(){
                                    document.getElementById("jan").style.display="block";
                                    document.getElementById("feb").style.display="none";
                                      }
                                
                                      function leftmar(){
                                    document.getElementById("feb").style.display="block";
                                    document.getElementById("mar").style.display="none";
                                      }
                                      function leftapr(){
                                    document.getElementById("mar").style.display="block";
                                    document.getElementById("apr").style.display="none";
                                      }
                                      function leftmai(){
                                    document.getElementById("apr").style.display="block";
                                    document.getElementById("mai").style.display="none";
                                      }
                                
                                      function leftjun(){
                                        document.getElementById("mai").style.display="block";
                                        document.getElementById("jun").style.display="none";
                                          }
                                
                                       function leftjul(){
                                        document.getElementById("jun").style.display="block";
                                        document.getElementById("jul").style.display="none";
                                              }
                                
                                        function leftaug(){
                                         document.getElementById("jul").style.display="block";
                                         document.getElementById("aug").style.display="none";
                                                  }
                                
                                        function leftsep(){
                                            document.getElementById("aug").style.display="block";
                                            document.getElementById("sep").style.display="none";
                                                      }
                                
                                         function leftoct(){
                                            document.getElementById("sep").style.display="block";
                                            document.getElementById("oct").style.display="none";
                                                          }
                                
                                        function leftnov(){
                                            document.getElementById("oct").style.display="block";
                                            document.getElementById("nov").style.display="none";
                                                              }
                                        function leftdec(){
                                            document.getElementById("nov").style.display="block";
                                            document.getElementById("dec").style.display="none";
                                                                  }
                    
        $(document).ready(function(){
            $('.grid-item').on('click',function()
            {
                $('#pop_up').show();
            });
        });

        function add(){
            document.getElementById('det').innerHTML= document.getElementById('text').value;
        }

        $(document).ready(function(){
            $('#cancel').on('click',function()
            {
                $('#pop_up').hide();
            });
        });