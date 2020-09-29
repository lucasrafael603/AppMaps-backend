      interface DTOAeroDrome {

          name: string
          city: string
          description: string
          createdDate: Date 

        }


      export default class Aerodrome{
              name: string
              city: string
              description: string
              created_at: Date    //Para bd poderiamos utilizar timestamp

      constructor({name,city,description,createdDate}: DTOAeroDrome ){

        this.name = name
        this.city = city
        this.description = description
        this.created_at = createdDate


      }
}