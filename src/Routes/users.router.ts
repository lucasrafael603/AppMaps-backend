import {Router} from 'express'
//import CreateUserService from '../services/CreateUserService'
import multer from 'multer'
import uploadConfig from '../config/upload'
import fs from 'fs'
import path from 'path'
import LogRequests from '../Middlewares/PegarValues'


const usersRouter = Router()

const upload = multer(uploadConfig)



usersRouter.post('/', async (request,response) => {



return response.json('ok')

})

usersRouter.patch('/arquivos',upload.single('arquivos/upload'), LogRequests ,async (request, response) => { 

 // const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp','0e8aeae97a8f3cbb0d0b-textoTeste')
  var AllCals = new Array()

  const namearchive = request.file.filename

  //const Teste = request.
  

  //console.log('name',namearchive)

  const tmpFolder = path.resolve(__dirname, '..','..', 'tmp', namearchive)
  //console.log(tmpFolder)

  //[0-9]{6}[s][/][0-9]{7}[w]  

  //const data = fs.readFileSync(tmpFolder)
  var leitura
  var leituraPadrao
  var padrao1
  var padrao2
  var padrao3
  var padroesValues = Array()


   fs.readFile(tmpFolder, (err, data) =>{
        if (err){

          console.log(err.message)

        }else{
          
          leitura = data.toString()
          leituraPadrao = data.toString()
          //console.log(leitura, 'antes do tostring')
          //leitura =  JSON.stringify(leitura)
          //const value = new RegExp ('[0-9]{6}[s][/][0-9]{7}[w]')
         // const value = /[0-9]{6}[s][/][0-9]{7}[w]/ig
         const value1 = /[0-9]{6}[s][/][0-9]{7}[w]/gi
         const value2 = /[0-9]{6}[.][0-9]{2}[S][/][0-9]{7}[.][0-9]{2}[w]/gi
         const value3 = /[0-9]{6}[,][0-9]{2}[S][/][0-9]{7}[,][0-9]{2}[w]/gi

          //const valueteste = /([0-9]{2})([0-9]{2})([0-9]{2})[s][/][0-9]{7}[w]/gi
          //console.log('valorzinho',valueteste)
          //const testando = leitura.replace(valueteste, '$1')
         // console.log('maior teste de todos', testando)
          padrao1 = leitura.match(value1)
          leitura = leitura.replace(value1, 'Padrão 1' )
          //console.log('Leitura Padrao1', leitura)

          if(padrao1){
            
            var guardarSegDec = new Array() 
            
            var calculoHoraS = 0
            var calculoMinS = 0
            var calculoSegS = 0
            var calculoSegDecS = 0
            var calculoFinalS = 0
            var ParteDecimalS = 0
            var CalcLatitudeS = 0

            var calculoHoraW = 0
            var calculoMinW = 0
            var calculoSegW = 0
            var calculoSegDecW = 0
            var calculoFinalW = 0
            var ParteDecimalW = 0
            var CalcLatitudeW = 0


            var HoraS1 = ''
            var HoraS2 = ''
            var MinS1 = ''
            var MinS2 = ''
            var SegS1 = ''
            var SegS2 = ''
            var SegDecS1 = ''
            var SegDecS2 = ''
            var HoraW1 = ''
            var HoraW2 = ''
            var HoraW3 = ''
            var MinW1 = ''
            var MinW2 = ''
            var SegW1 = ''
            var SegW2 = ''
            var SegDecW1 = ''
            var SegDecW2 = ''


              for(let i = 0; padrao1?.length > i; i++){
                
                var contador = 0
                contador = i
            

                const horasS =  padrao1[i].match(/^[0-9]{2}/gi) 
              //  const tesntad = padrao2[i].match(/([^0-9-aS-SO]{2})([0-9]{2})/gi) 
                const MinS =  padrao1[i].match(/^[0-9]{2}/gi) 
              // const QuebraDMCPad2 = padrao2[i].match(/[0-9]+/gi)
               const AgrupamentoDMC2 =  padrao1[i].match(/[0-9]{2}/gi) 

               //console.log('Padrão2 QUantri' ,padrao1.length)

                
               var somente_numeros = padrao1[i].toString().replace(/\D+/g, "");
               guardarSegDec.push([somente_numeros]) 
              //console.log('dados',guardarSegDec)
               

                //console.log(guardarSegDec[0].length)
                //console.log(guardarSegDec.toString().length)
                guardarSegDec.toString()

              }
                for(let i = 0; guardarSegDec.length > i; i++){

                  var atu = guardarSegDec[i].toString()
                  //console.log('entrada',atu)

    
                  HoraS1 = atu[0]
                  HoraS2 = atu[1]
                  
                  var juntarHoraS = HoraS1.concat(HoraS2)
                  
                  calculoHoraS = parseFloat(juntarHoraS)

                  //console.log('transforHoraS', calculoHoraS)


                  MinS1 = atu[2]
                  MinS2 = atu[3]


                  var juntarMin = MinS1.concat(MinS2)
                  
                  calculoMinS = parseFloat(juntarMin) 

                //  console.log('transforMinS', calculoMinS)

                  SegS1 = atu[4]
                  SegS2 = atu[5]

                  var juntarSeg = SegS1.concat(SegS2)
                  
                  calculoSegS = parseFloat(juntarSeg)

                 // console.log('transforSegS', calculoSegS)

                 // SegDecS1 = atu[6]
                 // SegDecS2 = atu[7]

                  //var juntarSegDecS = SegDecS1.concat(SegDecS2)
                  
                 // calculoSegDecS = parseFloat(juntarSegDecS)

                  //console.log('transforSegDecS', calculoSegDecS)

                  HoraW1 = atu[6]
                  HoraW2 = atu[7]
                  HoraW3 = atu[8]

                  var juntarHoraW = HoraW1.concat(HoraW2).concat(HoraW3)
                  
                  calculoHoraW = parseFloat(juntarHoraW) 

                 // console.log('transforHoraW', calculoHoraW)

                  MinW1 = atu[9]
                  MinW2 = atu[10]


                  var juntarMinW = MinW1.concat(MinW2)
                  
                  calculoMinW = parseFloat(juntarMinW) 

                //  console.log('transforMinW', calculoMinW)


                  SegW1 = atu[11]
                  SegW2 = atu[12]

                  var juntarSegW = SegW1.concat(SegW2)
                  
                  calculoSegW = parseFloat(juntarSegW)

                 // console.log('transforSegW', calculoSegW)


                  // SegDecW1 = atu[15]
                  // SegDecW2 = atu[16]


                  // var juntarSegDecW = SegDecW1.concat(SegDecW2)
                  
                  // calculoSegDecW = parseFloat(juntarSegDecW)

                //  console.log('transforSegDecW', calculoSegDecW)

                  //var SegESegDec = calculoSegS + calculoSegDecS
                  //console.log('testandoCalcuad',calculoMinS, calculoSegS, calculoSegDecS, 'tead')
                   ParteDecimalS = ((calculoMinS * 60) + calculoSegS) / 3600
                   //ParteDecimalS = ParteDecimalS / 3600
                    //console.log(ParteDecimalS)
                   CalcLatitudeS = (calculoHoraS + ParteDecimalS) * -1
                   //console.log(CalcLatitudeS)

                   calculoFinalS = CalcLatitudeS


                   ParteDecimalW = ((calculoMinW * 60) + calculoSegW) / 3600
                   //ParteDecimalS = ParteDecimalS / 3600
                    //console.log(ParteDecimalW)
                   CalcLatitudeW = calculoHoraW + ParteDecimalW
                   //console.log(CalcLatitudeW)

                   calculoFinalW = CalcLatitudeW

                 // contador = contador + 1

                  

                  //AllCals.push(calculoFinalS)
                  //AllCals.push(calculoFinalW)
                  

                  AllCals.push([calculoFinalS, calculoFinalW])
                  //AllCals.push({'PadraoS': calculoFinalS, 'PadraoW': calculoFinalW})

                 // AllCals.splice(0,1)
                  
                  ///console.log(AllCals,'fim')
  
              }      
          }
          
       
          
           
           padrao2 = leitura.match(value2)
           leitura =  leitura.replace(value2, 'Padrao 2')
          // console.log('verPad2',padrao2)
           //var somente_numeros = padrao2?.toString().replace(/\D+/g, "-");
            //console.log('numbers', somente_numeros)

           if(padrao2){
            
            var guardarSegDec = new Array() 
            
            var calculoHoraS = 0
            var calculoMinS = 0
            var calculoSegS = 0
            var calculoSegDecS = 0
            var calculoFinalS = 0
            var ParteDecimalS = 0
            var CalcLatitudeS = 0

            var calculoHoraW = 0
            var calculoMinW = 0
            var calculoSegW = 0
            var calculoSegDecW = 0
            var calculoFinalW = 0
            var ParteDecimalW = 0
            var CalcLatitudeW = 0


            var HoraS1 = ''
            var HoraS2 = ''
            var MinS1 = ''
            var MinS2 = ''
            var SegS1 = ''
            var SegS2 = ''
            var SegDecS1 = ''
            var SegDecS2 = ''
            var HoraW1 = ''
            var HoraW2 = ''
            var HoraW3 = ''
            var MinW1 = ''
            var MinW2 = ''
            var SegW1 = ''
            var SegW2 = ''
            var SegDecW1 = ''
            var SegDecW2 = ''


              for(let i = 0; padrao2?.length > i; i++){
                
                var contador = 0
                contador = i
            

                const horasS =  padrao2[i].match(/^[0-9]{2}/gi) 
              //  const tesntad = padrao2[i].match(/([^0-9-aS-SO]{2})([0-9]{2})/gi) 
                const MinS =  padrao2[i].match(/^[0-9]{2}/gi) 
              // const QuebraDMCPad2 = padrao2[i].match(/[0-9]+/gi)
               const AgrupamentoDMC2 =  padrao2[i].match(/[0-9]{2}/gi) 

              // console.log('Padrão2 QUantri' ,padrao2.length)

                
               var somente_numeros = padrao2[i].toString().replace(/\D+/g, "");
               guardarSegDec.push([somente_numeros]) 
              //console.log('dados',guardarSegDec)
               

                //console.log(guardarSegDec[0].length)
                //console.log(guardarSegDec.toString().length)
                guardarSegDec.toString()

              }
                for(let i = 0; guardarSegDec.length > i; i++){

                  var atu = guardarSegDec[i].toString()
                 // console.log('entrada',atu)

    
                  HoraS1 = atu[0]
                  HoraS2 = atu[1]
                  
                  var juntarHoraS = HoraS1.concat(HoraS2)
                  
                  calculoHoraS = parseFloat(juntarHoraS)

                  //console.log('transforHoraS', calculoHoraS)


                  MinS1 = atu[2]
                  MinS2 = atu[3]


                  var juntarMin = MinS1.concat(MinS2)
                  
                  calculoMinS = parseFloat(juntarMin) 

                  //console.log('transforMinS', calculoMinS)

                  SegS1 = atu[4]
                  SegS2 = atu[5]

                  var juntarSeg = SegS1.concat(SegS2)
                  
                  calculoSegS = parseFloat(juntarSeg)

                 // console.log('transforSegS', calculoSegS)

                  SegDecS1 = atu[6]
                  SegDecS2 = atu[7]

                  var juntarSegDecS = SegDecS1.concat(SegDecS2)
                  
                  calculoSegDecS = parseFloat(juntarSegDecS)

                  //console.log('transforSegDecS', calculoSegDecS)

                  HoraW1 = atu[8]
                  HoraW2 = atu[9]
                  HoraW3 = atu[10]

                  var juntarHoraW = HoraW1.concat(HoraW2).concat(HoraW3)
                  
                  calculoHoraW = parseFloat(juntarHoraW) 

                //  console.log('transforHoraW', calculoHoraW)

                  MinW1 = atu[11]
                  MinW2 = atu[12]


                  var juntarMinW = MinW1.concat(MinW2)
                  
                  calculoMinW = parseFloat(juntarMinW) 

                  //console.log('transforMinW', calculoMinW)


                  SegW1 = atu[13]
                  SegW2 = atu[14]

                  var juntarSegW = SegW1.concat(SegW2)
                  
                  calculoSegW = parseFloat(juntarSegW)

                 // console.log('transforSegW', calculoSegW)


                  SegDecW1 = atu[15]
                  SegDecW2 = atu[16]


                  var juntarSegDecW = SegDecW1.concat(SegDecW2)
                  
                  calculoSegDecW = parseFloat(juntarSegDecW)

                  //onsole.log('transforSegDecW', calculoSegDecW)

                  //var SegESegDec = calculoSegS + calculoSegDecS
                  //console.log('testandoCalcuad',calculoMinS, calculoSegS, calculoSegDecS, 'tead')
                   ParteDecimalS = ((calculoMinS * 60) + calculoSegS + calculoSegDecS ) / 3600
                   //ParteDecimalS = ParteDecimalS / 3600
                    //console.log(ParteDecimalS)
                   CalcLatitudeS = (calculoHoraS + ParteDecimalS) * -1
                   //console.log(CalcLatitudeS)

                   calculoFinalS = CalcLatitudeS


                   ParteDecimalW = ((calculoMinW * 60) + calculoSegW + calculoSegDecW ) / 3600
                   //ParteDecimalS = ParteDecimalS / 3600
                    //console.log(ParteDecimalW)
                   CalcLatitudeW = calculoHoraW + ParteDecimalW
                   //console.log(CalcLatitudeW)

                   calculoFinalW = CalcLatitudeW

                 // contador = contador + 1

                  

                  AllCals.push( [calculoFinalS,  calculoFinalW])
                  //AllCals.push({'PadraoS': calculoFinalS, 'PadraoW': calculoFinalW})
                 // AllCals.push()
                  
                 // AllCals.splice(0,1)
                  
                //  console.log(AllCals,'fim')
  
              }      
          }
          
          
         
        
         

          padrao3 = leitura.match(value3)
          leitura = leitura.replace(value3, 'Padrao 3')

          if(padrao3){
            
            var guardarSegDec = new Array() 
            
            var calculoHoraS = 0
            var calculoMinS = 0
            var calculoSegS = 0
            var calculoSegDecS = 0
            var calculoFinalS = 0
            var ParteDecimalS = 0
            var CalcLatitudeS = 0

            var calculoHoraW = 0
            var calculoMinW = 0
            var calculoSegW = 0
            var calculoSegDecW = 0
            var calculoFinalW = 0
            var ParteDecimalW = 0
            var CalcLatitudeW = 0


            var HoraS1 = ''
            var HoraS2 = ''
            var MinS1 = ''
            var MinS2 = ''
            var SegS1 = ''
            var SegS2 = ''
            var SegDecS1 = ''
            var SegDecS2 = ''
            var HoraW1 = ''
            var HoraW2 = ''
            var HoraW3 = ''
            var MinW1 = ''
            var MinW2 = ''
            var SegW1 = ''
            var SegW2 = ''
            var SegDecW1 = ''
            var SegDecW2 = ''


              for(let i = 0; padrao3?.length > i; i++){
                
                var contador = 0
                contador = i
            

                const horasS =  padrao3[i].match(/^[0-9]{2}/gi) 
              //  const tesntad = padrao2[i].match(/([^0-9-aS-SO]{2})([0-9]{2})/gi) 
                const MinS =  padrao3[i].match(/^[0-9]{2}/gi) 
              // const QuebraDMCPad2 = padrao2[i].match(/[0-9]+/gi)
               const AgrupamentoDMC2 =  padrao3[i].match(/[0-9]{2}/gi) 

              // console.log('Padrão2 QUantri' ,padrao2.length)

                
               var somente_numeros = padrao3[i].toString().replace(/\D+/g, "");
               guardarSegDec.push([somente_numeros]) 
              //console.log('dados',guardarSegDec)
               

                //console.log(guardarSegDec[0].length)
                //console.log(guardarSegDec.toString().length)
                guardarSegDec.toString()

              }
                for(let i = 0; guardarSegDec.length > i; i++){

                  var atu = guardarSegDec[i].toString()
                  //console.log('entrada',atu)

    
                  HoraS1 = atu[0]
                  HoraS2 = atu[1]
                  
                  var juntarHoraS = HoraS1.concat(HoraS2)
                  
                  calculoHoraS = parseFloat(juntarHoraS)

                  //console.log('transforHoraS', calculoHoraS)


                  MinS1 = atu[2]
                  MinS2 = atu[3]


                  var juntarMin = MinS1.concat(MinS2)
                  
                  calculoMinS = parseFloat(juntarMin) 

                //  console.log('transforMinS', calculoMinS)

                  SegS1 = atu[4]
                  SegS2 = atu[5]

                  var juntarSeg = SegS1.concat(SegS2)
                  
                  calculoSegS = parseFloat(juntarSeg)

                 // console.log('transforSegS', calculoSegS)

                  SegDecS1 = atu[6]
                  SegDecS2 = atu[7]

                  var juntarSegDecS = SegDecS1.concat(SegDecS2)
                  
                  calculoSegDecS = parseFloat(juntarSegDecS)

                  //console.log('transforSegDecS', calculoSegDecS)

                  HoraW1 = atu[8]
                  HoraW2 = atu[9]
                  HoraW3 = atu[10]

                  var juntarHoraW = HoraW1.concat(HoraW2).concat(HoraW3)
                  
                  calculoHoraW = parseFloat(juntarHoraW) 

                 // console.log('transforHoraW', calculoHoraW)

                  MinW1 = atu[11]
                  MinW2 = atu[12]


                  var juntarMinW = MinW1.concat(MinW2)
                  
                  calculoMinW = parseFloat(juntarMinW) 

                //  console.log('transforMinW', calculoMinW)


                  SegW1 = atu[13]
                  SegW2 = atu[14]

                  var juntarSegW = SegW1.concat(SegW2)
                  
                  calculoSegW = parseFloat(juntarSegW)

                 // console.log('transforSegW', calculoSegW)


                  SegDecW1 = atu[15]
                  SegDecW2 = atu[16]


                  var juntarSegDecW = SegDecW1.concat(SegDecW2)
                  
                  calculoSegDecW = parseFloat(juntarSegDecW)

                //  console.log('transforSegDecW', calculoSegDecW)

                  //var SegESegDec = calculoSegS + calculoSegDecS
                  //console.log('testandoCalcuad',calculoMinS, calculoSegS, calculoSegDecS, 'tead')
                   ParteDecimalS = ((calculoMinS * 60) + calculoSegS + calculoSegDecS ) / 3600
                   //ParteDecimalS = ParteDecimalS / 3600
                    //console.log(ParteDecimalS)
                   CalcLatitudeS = (calculoHoraS + ParteDecimalS) * -1
                   //console.log(CalcLatitudeS)

                   calculoFinalS = CalcLatitudeS


                   ParteDecimalW = ((calculoMinW * 60) + calculoSegW + calculoSegDecW ) / 3600
                   //ParteDecimalS = ParteDecimalS / 3600
                    //console.log(ParteDecimalW)
                   CalcLatitudeW = calculoHoraW + ParteDecimalW
                   //console.log(CalcLatitudeW)

                   calculoFinalW = CalcLatitudeW

                 // contador = contador + 1

                  

                  //AllCals.push(calculoFinalS)
                  //AllCals.push(calculoFinalW)
                  

                  AllCals.push( [calculoFinalS, calculoFinalW])
                  //AllCals.push({'PadraoS': calculoFinalS,'PadraoW': calculoFinalW})

                 // AllCals.splice(0,1)
                  
                // console.log(AllCals,'fim')
  
              }      
          }
          

          
            //leituraPadrao =  JSON.stringify(leituraPadrao)

              leitura = JSON.parse(leitura)
            //leituraPadrao =  JSON.parse(leituraPadrao)
            console.log('Verificar JSON', leituraPadrao)
            
           //leitura = leitura.replace(/(\r\n|\n|\r|)/gm, "")
         // console.log(leitura)
          padroesValues.push(leitura)

         // console.log(leitura.slice(3,4))
          
          
         // padroesValues.push({'Padraozinho': leituraPadrao})
          padroesValues.push(padrao1)
          //padroesValues.push(padrao2)
          //padroesValues.push(padrao3)
          padroesValues.push(AllCals)
        //  padroesValues.push(leituraPadrao)

     

        return response.json(padroesValues)
    
              
        }
        
  })
 
    
    

    

    



})


export default usersRouter
