        interface DTORunway {

          designation: Date
          width: number
          length: number


        }


      export default class Runway{

          designation: Date
          width: number
          length: number


      constructor({designation, width, length}: DTORunway ){

        this.designation = designation
        this.width = width
        this.length = length
        

      }



}