hour=0
          min = 0
          second = 0
          StartStop= "START"//fo check works of Stopwatch (Для проверки работы секундомера)
          Click= false //for double click function (Для двойного нажатия)
        
      
      
      ComandWatch=(Comand)=>{// controler for more comfortable using timer (Для удбства работы с методом Time())
        if(Comand==="START"){ // if Comand=="START" we jast starting timer (если Comand=="START" просто запускаем таймер)
         this.Timer(Comand)
        }
        else if(Comand==="STOP"){// if "STOP" we are stoping timer and make time=0 (если "STOP" стоп мы обнуляем и останавливаем тамер)
          this.Timer(Comand)
          
            this.hour =0,
            this.min = 0,
            this.second = 0,
            this.StartStop = "START" 
        
        }
        else if (Comand==="RESTART"){ 
        // if "RRESTART" time=0 but timer is not stoping(если "RRESTART" мы обнуляем время но не останавливаем таймер)
          
        this.hour = 0,
        this.min = 0,
        this.second = 0,
          
          this.Timer("START")
        }
      }


      Timer=(Comand)=>{//Timer
        if(Comand==="WAIT"){//if Command="WAIT" tamer is stoping, it becam when doubleClcki is using(если Command="WAIT" таймер останвливается просходит при двойном нажатии)
          
        this.StartStop = "START", //if StartStop=="START" timer is stoped(если StartStop=="START" таймер стоит)
          
          this.Timer(null)   // and we restart timer with Comand=null(ну и наоборот, так сделано чтобы сразу можно было подписать кнопку)
        }
        else if(Comand==="START"){//if START(это для START)
          
            this.StartStop = "STOP" //if StartStop=="STOP" timer is runing(если StartStop=="STOP" таймер идет)
          
          setTimeout(()=>this.Timer(null), 1000);// and we restart timer with Comand=null ( и перезапускается с параметром Comand=null)
        }
        else if (Comand === null){//if Comand null it's meen thet one comand was activete( Если Comand=null, это значит что таймер либо работает либо одна с команд была активирована)
          if(this.StartStop==="STOP"){//if StartStop="STOP" timer is working(если StartStop="STOP" то таймер в стационарном робочем режиме)
            // here we have manipulations with time(тут мы делаем счет времени)
            if(this.min>=59){
              
                this.min = 0,
                this.hour = this.hour+1
              
            }
            else{
              if(this.second>=59){
                
                this.second = 0,
                this.min = this.min+1
                 
              }
              else {
                
                this.second = this.second+1
                  
              }
            }
            
            
            setTimeout(() => {
                  this.Timer(null)
              }, 1000);
          
          }
        }
      }

      timer=0;
      onClick=(e) => { //double click function(двойное нажатие)
        clearTimeout(this.timer); 
          if(this.Click===false){// if Click falls(если Click falls)
          
            this.Click = true// Click becam true(он становится true)
          
          this.timer = setTimeout(() => { 
            
            this.Click=false
          
          }, 200);//and Click staeing true 200 second then becam false(если мы не кликнем в тичении 200 милесикунд он вернется в исхдное положение)
        }
        else{
          clearTimeout(this.timer); 
          setTimeout(()=>this.Timer("WAIT"));// but if user click in 200, he activate Timer() and send parammeter "WAIT"(но если мы нажмем то двойное нажатие засчитается)
          
          this.Click=false,
         
        }
    
    }