const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = 'NTU0NDE0NDg0NjMwNzk4MzU3.D2cS9w.I3trm1Fj6ZgGFZcwUrTaYzJV7Fk';
var setdate = new Date();
setdate.setHours(20);
setdate.setMinutes(30);
var prefix = "!q";
var prefixmop = "!q";
var timerhandle;

//bot.once
bot.on('message', message => {

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, (name) => {
    message.channel.send(name);
    //console.log(`Hi ${name}!`)
    readline.close()
  })

  //var child_process = require('child_process');
  //child_process.exec("start cmd.exe /K cd /D C:/test");
  
});



bot.on('message', message => {
  if (message.content.startsWith('tbtimer')) {

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
           
            setInterval(function(){
              var dcurentdate = new Date();

                let myRole = message.guild.roles.get("495223447207542825");
                if(dcurentdate.getHours() === setdate.getHours() && dcurentdate.getMinutes() === setdate.getMinutes()){
                  bot.channels.get("495220836312285184").send({embed: {
                    color: 3447003,
                    description: `${myRole} Proszę o uzupełnienie Drt i Donat`
                      //${myRole}
                  }});
              }
                
            }, 60000)
            //message.reply(`H ${setdate.getHours()}`);
            if(setdate.getHours() === 23){
              message.reply(`Ustawiono przypomnienie na godzinę 00:${setdate.getMinutes()}`);
            }else{
              message.reply(`Ustawiono przypomnienie na godzinę ${setdate.getHours()+1}:${setdate.getMinutes()}`);  
            }
            

            return;
         
      
    }     
});


bot.login(Token);
