const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = 'NTU0NDE0NDg0NjMwNzk4MzU3.D2cS9w.I3trm1Fj6ZgGFZcwUrTaYzJV7Fk';
var setdate = new Date();
setdate.setHours(20);
setdate.setMinutes(30);
var prefix = "!q";
var prefixmop = "!q";
var timerhandle;

bot.once('ready', ()=>{
  
    timerhandle=setInterval(function(){
    var dcurentdate = new Date();

      //let myRole = message.guild.roles.get("495223447207542825");
      if(dcurentdate.getHours() === setdate.getHours() && dcurentdate.getMinutes() === setdate.getMinutes()){
        bot.channels.get("553317566932582410").send({embed: {
          color: 3447003,
          description: `Przypomnienie!!!!! `
            //${myRole}
        }});
    }
    
    bot.channels.get("553317566932582410").send({embed: {
      color: 3447003,
      description: ` U ${setdate.getHours()}:${setdate.getMinutes()} O${dcurentdate.getHours()}:${dcurentdate.getMinutes()}  HT ${dcurentdate.getHours() === setdate.getHours()} MT ${dcurentdate.getMinutes() === setdate.getMinutes()} S ${dcurentdate.getSeconds()}`
      
    }});

      
  }, 10000)

  if(setdate.getHours() === 23){
    bot.channels.get("553317566932582410").send({embed: {
      color: 3447003,
      description: `Ustawiono przypomnienie na godzinę 00:${setdate.getMinutes()}`}});
  }else{
    bot.channels.get("553317566932582410").send({embed: {
      color: 3447003,
      description: `Ustawiono przypomnienie na godzinę ${setdate.getHours()+1}:${setdate.getMinutes()}`}}); 
  }

  
});

//bot chat
bot.on('message', message => {

  if (message.content.startsWith('chat')) {

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    
    readline.question(`What's your name?`, (name) => {
      message.channel.send(name);
      //console.log(`Hi ${name}!`)
      readline.close()
    })

  }

  //var child_process = require('child_process');
  //child_process.exec("start cmd.exe /K cd /D C:/test");
  
});

//bot timerstrt
bot.on('message', message => {
  if (message.content.startsWith('tbtimer') && !message.content.startsWith('tbtimerstop')) {

        let command = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
        //message.channel.send('Command1 + ' + command );

        var array = command.split(':');

        //message.channel.send('Arg ' + array );

        if(array.length === 2){
          //message.channel.send('ok ');

          var h = parseInt(array[0], 10) 
          var m = parseInt(array[1], 10) 

          if(!isNaN(h) && !isNaN(m)){
            //message.channel.send('ogodzina '+h+' minuta '+m);
            if(h>-1 && h<24 && m>-1 && m<60){

              setdate.setHours(h-1);
              setdate.setMinutes(m);

            }else{
              message.reply('Nieprawidłowe wartości godziny lub minut');
              return;
            }
            
           }else{
            message.reply('Podane wartości godziny lub minut nie są liczbami');
            return;
           }

        }else{
          message.reply('Nieprawidłowa ilość parametrów wpisz tbhelp po więcej informacji');
          return;
        }
        clearInterval(timerhandle);
           
        timerhandle=setInterval(function(){
          var dcurentdate = new Date();
      
            //let myRole = message.guild.roles.get("495223447207542825");
            if(dcurentdate.getHours() === setdate.getHours() && dcurentdate.getMinutes() === setdate.getMinutes()){
              bot.channels.get("553317566932582410").send({embed: {
                color: 3447003,
                description: `Przypomnienie!!!!! `
                  //${myRole}
              }});
          }

          bot.channels.get("553317566932582410").send({embed: {
                      color: 3447003,
                      description: ` U ${setdate.getHours()}:${setdate.getMinutes()} O${dcurentdate.getHours()}:${dcurentdate.getMinutes()}  HT ${dcurentdate.getHours() === setdate.getHours()} MT ${dcurentdate.getMinutes() === setdate.getMinutes()} S ${dcurentdate.getSeconds()}`
                      
          }});
  
        }, 10000)
      
        if(setdate.getHours() === 23){
          bot.channels.get("553317566932582410").send({embed: {
            color: 3447003,
            description: `Ustawiono przypomnienie na godzinę 00:${setdate.getMinutes()}`}});
        }else{
          bot.channels.get("553317566932582410").send({embed: {
            color: 3447003,
            description: `Ustawiono przypomnienie na godzinę ${setdate.getHours()+1}:${setdate.getMinutes()}`}}); 
        }
            

            return;
         
      
    }     
});

//bot timerstop
bot.on('message', message => {
  if (message.content.startsWith('tbtimerstop')) {

    clearInterval(timerhandle);
    bot.channels.get("553317566932582410").send({
      embed: {
        color: 3447003,
        description: `Zatrzymano przypomnienia`
      }
    });

    return;
  }
});

bot.login(Token);
